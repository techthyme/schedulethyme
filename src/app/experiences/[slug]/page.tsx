import { StarIcon } from '@heroicons/react/20/solid'
import { EVENTS } from '@/data'
import { Event } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import EventPageClient from './EventPageClient'

const reviews = {
  href: '#',
  average: 4,
  totalCount: 117,
  featured: [
    {
      id: 1,
      title: 'Excellent training program',
      rating: 5,
      content: `
        <p>This workshop exceeded my expectations. The instructors were knowledgeable and the hands-on approach really helped me understand the concepts. Highly recommend to anyone looking to advance their business skills in the Virgin Islands.</p>
      `,
      author: 'Maria Rodriguez',
      avatarSrc:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      title: 'Great networking opportunities',
      rating: 4,
      content: `
        <p>Not only did I learn valuable skills, but I also made great connections with other Caribbean entrepreneurs. The location was perfect and the materials provided were top-notch.</p>
      `,
      author: 'James Thompson',
      avatarSrc:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      title: 'Practical and actionable content',
      rating: 5,
      content: `
        <p>Every session was packed with practical information I could immediately apply to my business. The instructors really understand the challenges of working in the Virgin Islands market.</p>
      `,
      author: 'Sarah Johnson',
      avatarSrc:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
}

const relatedEvents = [
  {
    id: 1,
    title: 'Advanced Marketing',
    href: '#',
    imageSrc: 'https://picsum.photos/seed/marketing2/400/400',
    imageAlt: 'Advanced Marketing Workshop',
    price: '$75',
    venue: 'St. Thomas',
  },
  {
    id: 2,
    title: 'Leadership Skills',
    href: '#',
    imageSrc: 'https://picsum.photos/seed/leadership2/400/400',
    imageAlt: 'Leadership Development Session',
    price: '$60',
    venue: 'St. John',
  },
  {
    id: 3,
    title: 'Financial Planning',
    href: '#',
    imageSrc: 'https://picsum.photos/seed/finance2/400/400',
    imageAlt: 'Financial Planning Workshop',
    price: '$55',
    venue: 'St. Croix',
  },
  {
    id: 4,
    title: 'Tech Innovation',
    href: '#',
    imageSrc: 'https://picsum.photos/seed/tech2/400/400',
    imageAlt: 'Technology Innovation Seminar',
    price: '$85',
    venue: 'St. Thomas',
  },
]

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

interface EventPageProps {
  params: Promise<{ slug: string }>
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  
  // Find the event by slug
  const event = EVENTS.find(e => e.slug === slug)
  
  if (!event) {
    notFound()
  }

  return <EventPageClient event={event} reviews={reviews} relatedEvents={relatedEvents} />
}