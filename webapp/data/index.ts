import { monacoData } from './monaco'
import { berlinoData } from './berlino'

export interface TimelineItem {
  time: string
  title: string
  description: string
  location: string
  note?: string
  highlight?: string
  restaurants?: Array<{
    name: string
    address: string
    type: string
  }>
}

export interface Day2Option {
  name: string
  weather: string
  description: string
  highlight?: string
  duration: string
}

export interface Restaurant {
  name: string
  zone: string
  when: string
}

export interface InfoItem {
  label: string
  value: string
}

export interface Note {
  title: string
  content: string
}

export interface Tour {
  id: string
  title: string
  icon: string
  description: string
  distance: string
  duration: string
  days: number
  status?: string
  infoTable: InfoItem[]
  day1: TimelineItem[]
  day2: TimelineItem[]
  day2Options: Day2Option[]
  restaurants: Restaurant[]
  checklist: string[]
  notes: Note[]
}

export const tours: Record<string, Tour> = {
  monaco: monacoData,
  berlino: berlinoData,
}
