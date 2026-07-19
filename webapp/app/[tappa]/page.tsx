import { Metadata } from 'next'
import { tours } from '@/data'
import ChatBot from '@/components/ChatBot'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    tappa: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tour = tours[params.tappa as keyof typeof tours]
  
  if (!tour) {
    return {
      title: 'Tappa non trovata',
    }
  }

  return {
    title: `${tour.title} | Grand Tour Nord-Est`,
    description: tour.description,
  }
}

export function generateStaticParams() {
  return Object.keys(tours).map((tappa) => ({
    tappa,
  }))
}

export default function TappaPage({ params }: Props) {
  const tour = tours[params.tappa as keyof typeof tours]

  if (!tour) {
    notFound()
  }

  return <ChatBot tour={tour} tappaN={params.tappa} />
}
