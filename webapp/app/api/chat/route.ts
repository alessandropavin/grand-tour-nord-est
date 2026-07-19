import Anthropic from '@anthropic-ai/sdk'
import { tours } from '@/data'

const client = new Anthropic({
  apiKey: process.env.NEXT_PUBLIC_CLAUDE_API_KEY,
})

function buildSystemPrompt(tappaN: string): string {
  const tour = tours[tappaN as keyof typeof tours]

  if (!tour) {
    return 'Sei un assistente per il Grand Tour Nord-Est.'
  }

  return `Sei un assistente esperto per la guida del Grand Tour Nord-Est in Europa. 
Attualmente stai aiutando i viaggiatori con la tappa: ${tour.title}.

Ecco i dettagli della tappa:
${JSON.stringify(tour, null, 2)}

Rispondi sempre in italiano, sii pratico e conciso. 
- Aiuta con consigli su cosa vedere, dove mangiare, come muoversi
- Suggerisci alternative in base al meteo o preferenze
- Fornisci informazioni su orari, prezzi, indirizzi quando rilevante
- Sii amichevole e incoraggiante come una guida turistica esperta
- Se la domanda non riguarda questa tappa o il viaggio, reindirizza gentilmente
- Puoi anche consigliare le altre tappe disponibili: ${Object.keys(tours).join(', ')}`
}

export async function POST(request: Request) {
  try {
    const { message, tappaN } = await request.json()

    if (!message) {
      return Response.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    if (!tappaN) {
      return Response.json(
        { error: 'Tappa is required' },
        { status: 400 }
      )
    }

    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: buildSystemPrompt(tappaN),
      messages: [{ role: 'user', content: message }],
    })

    const textContent = response.content.find(
      (block) => block.type === 'text'
    )
    const reply = textContent && 'text' in textContent ? textContent.text : ''

    return Response.json({ reply })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
