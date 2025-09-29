"use client";

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import AttendanceModal from '@/components/AttendanceModal'
import { AttendeeInfo, Event } from '@/types'

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

interface Review {
  id: number
  title: string
  rating: number
  content: string
  author: string
  avatarSrc: string
}

interface RelatedEvent {
  id: number
  title: string
  href: string
  imageSrc: string
  imageAlt: string
  price: string
  venue: string
}

interface Reviews {
  href: string
  average: number
  totalCount: number
  featured: Review[]
}

interface EventPageClientProps {
  event: Event
  reviews: Reviews
  relatedEvents: RelatedEvent[]
}

export default function EventPageClient({ event, reviews, relatedEvents }: EventPageClientProps) {
  const [showAttendanceModal, setShowAttendanceModal] = useState(false)

  const handleRegisterClick = () => {
    setShowAttendanceModal(true)
  }

  const handleAttendanceSubmit = (attendeeInfo: AttendeeInfo) => {
    console.log("Registration submitted:", attendeeInfo)
    alert(`Thank you ${attendeeInfo.name}! Your registration for "${event.title}" has been submitted.`)
    setShowAttendanceModal(false)
  }

  const eventDate = new Date(event.when)
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })

  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                alt="Event main image"
                src={event.imageUrl || 'https://picsum.photos/seed/default/400/250'}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  alt="Event secondary image"
                  src={`https://picsum.photos/seed/${event.slug}-2/400/250`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  alt="Event tertiary image"
                  src={`https://picsum.photos/seed/${event.slug}-3/400/250`}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                alt="Event featured image"
                src={`https://picsum.photos/seed/${event.slug}-4/400/250`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Event info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{event.title}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Event information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${event.price}
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0',
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Event Details</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Date:</span>
                    <span className="text-gray-900">{formattedDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Time:</span>
                    <span className="text-gray-900">{formattedTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Location:</span>
                    <span className="text-gray-900">{event.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={handleRegisterClick}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Register for Event
                </button>
              </div>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{event.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">What to Expect</h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    This workshop is designed for professionals and entrepreneurs in the Virgin Islands looking to enhance their skills and grow their business network. 
                    All materials and refreshments are provided. Please bring a notebook and business cards for networking opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <section aria-labelledby="reviews-heading" className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
            <div className="lg:col-span-4">
              <h2 id="reviews-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Customer Reviews
              </h2>

              <div className="mt-3 flex items-center">
                <div>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0',
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                </div>
                <p className="ml-2 text-sm text-gray-900">
                  Based on {reviews.totalCount} reviews
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Review data</h3>

                <dl className="space-y-3">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center text-sm">
                      <dt className="flex flex-1 items-center">
                        <p className="w-3 font-medium text-gray-900">
                          {rating}
                          <span className="sr-only"> star reviews</span>
                        </p>
                        <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                          <StarIcon
                            aria-hidden="true"
                            className={classNames(
                              rating > 4 ? 'text-yellow-400' : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0',
                            )}
                          />

                          <div className="relative ml-3 flex-1">
                            <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                            {rating > 4 && (
                              <div
                                style={{ width: `${(rating / 5) * 100}%` }}
                                className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                              />
                            )}
                          </div>
                        </div>
                      </dt>
                      <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                        {rating > 4 ? '63%' : '0%'}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
                <p className="mt-1 text-sm text-gray-600">
                  If you&apos;ve attended one of our events, we&apos;d love to hear from you.
                </p>

                <a
                  href="#"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                >
                  Write a review
                </a>
              </div>
            </div>

            <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
              <h3 className="sr-only">Recent reviews</h3>

              <div className="flow-root">
                <div className="-my-12 divide-y divide-gray-200">
                  {reviews.featured.map((review) => (
                    <div key={review.id} className="py-12">
                      <div className="flex items-center">
                        <img alt={`${review.author}.`} src={review.avatarSrc} className="h-12 w-12 rounded-full" />
                        <div className="ml-4">
                          <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                          <div className="mt-1 flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                aria-hidden="true"
                                className={classNames(
                                  review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                  'h-5 w-5 flex-shrink-0',
                                )}
                              />
                            ))}
                          </div>
                          <p className="sr-only">{review.rating} out of 5 stars</p>
                        </div>
                      </div>

                      <div
                        dangerouslySetInnerHTML={{ __html: review.content }}
                        className="mt-4 space-y-6 text-base italic text-gray-600"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related events */}
        <section aria-labelledby="related-heading" className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 id="related-heading" className="text-xl font-bold tracking-tight text-gray-900">
              Related Events You May Like
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {relatedEvents.map((event) => (
                <div key={event.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={event.imageAlt}
                      src={event.imageSrc}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={event.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {event.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{event.venue}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{event.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Attendance Modal */}
      <AttendanceModal
        isOpen={showAttendanceModal}
        onClose={() => setShowAttendanceModal(false)}
        onSubmit={handleAttendanceSubmit}
        eventTitle={event.title}
      />
    </>
  )
}