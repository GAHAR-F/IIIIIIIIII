export interface SchoolEvent {
  id: number
  title: string
  date: string
  description: string
  image: string
}

export const events: SchoolEvent[] = [
  {
    id: 1,
    title: 'Sample Event Title',
    date: '2026-05-10',
    description: 'Short description of what happened at this event.',
    image: '/src/assets/event1.jpg',
  },
]