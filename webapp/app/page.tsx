import { Metadata } from 'next'
import TourMenu from '@/components/TourMenu'

export const metadata: Metadata = {
  title: 'Grand Tour Nord-Est - Home',
}

export default function Home() {
  return <TourMenu />
}
