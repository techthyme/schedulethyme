// src/components/EventDetailsCard.tsx

import { Event } from "@/types";

interface EventDetailsCardProps {
  event: Event;
  onAttend?: () => void;
  onClose?: () => void;
}

export default function EventDetailsCard({
  event,
  onAttend,
  onClose,
}: EventDetailsCardProps) {
  const isUpcoming = event.status === "upcoming" || event.status === "scheduled";
  const spotsLeft = event.maxAttendees
    ? event.maxAttendees - (event.currentAttendees || 0)
    : null;

  return (
    <div className="bg-white rounded-3xl shadow-2xl ring-1 ring-gray-900/5 p-6 max-w-lg mx-auto">
      {/* Close Button */}
      {onClose && (
        <div className="flex justify-end mb-6">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Event Images Grid */}
      <div className="mb-6">
        <div className="grid grid-cols-3 gap-2 h-32">
          <div className="col-span-2 bg-gradient-to-br from-indigo-100/60 to-violet-100/60 rounded-2xl flex items-center justify-center shadow-sm">
            <svg
              className="w-12 h-12 text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl flex items-center justify-center shadow-sm">
              <svg
                className="w-8 h-8 text-indigo-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl flex items-center justify-center shadow-sm">
              <svg
                className="w-8 h-8 text-violet-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Status Badge and Title */}
      <div className="mb-5">
        <div className="flex items-center gap-3 mb-3">
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-light ${
            event.status === "upcoming" || event.status === "scheduled"
              ? "bg-green-50 text-green-700 ring-1 ring-green-600/20"
              : event.status === "ongoing"
              ? "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20"
              : event.status === "completed"
              ? "bg-gray-50 text-gray-700 ring-1 ring-gray-600/20"
              : "bg-red-50 text-red-700 ring-1 ring-red-600/20"
          }`}>
            {event.status === "upcoming" || event.status === "scheduled"
              ? "Scheduled"
              : event.status === "ongoing"
              ? "Live Now"
              : event.status === "completed"
              ? "Completed"
              : "Cancelled"}
          </span>
        </div>
        
        <h2 className="text-2xl font-light tracking-tight text-gray-900 mb-2">{event.title}</h2>
        <div className="flex items-center text-gray-600">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="font-light">{event.place}</span>
        </div>
      </div>

      {/* Description */}
      {event.description && (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">
            About this event
          </h3>
          <p className="text-gray-600 font-light leading-relaxed">{event.description}</p>
        </div>
      )}

      {/* Event Details Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Availability */}
        <div className="bg-gray-50/50 rounded-2xl p-4">
          <div className="flex items-center text-gray-600 mb-2">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm font-medium">Availability</span>
          </div>
          <div className="text-2xl font-light text-gray-900">
            {spotsLeft !== null ? `${spotsLeft} spots` : "Open"}
          </div>
          <div className="text-sm text-gray-500 font-light">
            {event.currentAttendees && event.maxAttendees
              ? `${event.currentAttendees}/${event.maxAttendees} registered`
              : "available"}
          </div>
        </div>

        {/* Event Date */}
        <div className="bg-gray-50/50 rounded-2xl p-4">
          <div className="flex items-center text-gray-600 mb-2">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium">Event Date</span>
          </div>
          <div className="text-2xl font-light text-gray-900">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div className="text-sm text-gray-500 font-light">
            {event.time || "Time TBD"}
          </div>
        </div>
      </div>

      {/* Instructors */}
      {event.instructors && event.instructors.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Instructors</h3>
          <div className="space-y-2">
            {event.instructors.map((instructor, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-4 bg-gray-50/50 rounded-2xl">
                <div className="text-sm text-gray-900 font-light">
                  {instructor.name}
                </div>
                {instructor.title && (
                  <div className="text-sm text-gray-500 font-light">{instructor.title}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4">
        {isUpcoming && (
          <button
            onClick={onAttend}
            className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-light py-3 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center"
          >
            Attend Event →
          </button>
        )}

        {onClose && (
          <button
            onClick={onClose}
            className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-light py-3 px-8 rounded-full transition-all duration-200"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
}
