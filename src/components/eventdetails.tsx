// src/components/EventDetailsCard.tsx

import { Event } from '@/types/event-core';

interface EventDetailsCardProps {
  event: Event;
  onAttend?: () => void;
  onClose?: () => void;
}

export default function EventDetailsCard({ event, onAttend, onClose }: EventDetailsCardProps) {
  const isUpcoming = event.status === 'upcoming';
  const spotsLeft = event.maxAttendees ? event.maxAttendees - (event.currentAttendees || 0) : null;
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
      {/* Event Images Grid */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-2 h-48">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="flex justify-between items-start mb-4">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          {(event.status as string) === 'upcoming'
            ? 'Upcoming'
            : (event.status as string) === 'ongoing'
            ? 'Live Now'
            : (event.status as string) === 'completed'
            ? 'Completed'
            : (event.status as string) === 'cancelled'
            ? 'Cancelled'
            : 'Unknown'}
        </span>
      </div>

      {/* Title and Location */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {event.title}
        </h2>
        <div className="flex items-center text-gray-600">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{event.place}</span>
        </div>
      </div>

      {/* Description */}
      {event.description && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
          <p className="text-gray-600 leading-relaxed">{event.description}</p>
        </div>
      )}

      {/* Event Details Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Availability */}
        <div>
          <div className="flex items-center text-gray-600 mb-1">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
            </svg>
            <span className="text-sm">Availability</span>
          </div>
          <div className="text-xl font-bold text-gray-900">
            {spotsLeft !== null ? `${spotsLeft} spots` : 'Open'}
          </div>
          <div className="text-sm text-gray-500">
            {event.currentAttendees && event.maxAttendees ? 
              `${event.currentAttendees}/${event.maxAttendees} registered` : 
              'available'}
          </div>
        </div>

        {/* Event Date */}
        <div>
          <div className="flex items-center text-gray-600 mb-1">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">Event Date</span>
          </div>
          <div className="text-xl font-bold text-gray-900">
            {new Date(event.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="text-sm text-gray-500">
            {event.time || 'Time TBD'}
          </div>
        </div>
      </div>

      {/* Instructors */}
      {event.instructors && event.instructors.length > 0 && (
        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-2">Instructors</div>
          <div className="space-y-1">
            {event.instructors.map((instructor, index) => (
              <div key={index} className="text-sm text-gray-700">
                {instructor.name}
                {instructor.title && <span className="text-gray-500"> • {instructor.title}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        {isUpcoming && (
          <button
            onClick={onAttend}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center"
          >
            Attend Event
          </button>
        )}
        
        <button
          onClick={onClose}
          className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}