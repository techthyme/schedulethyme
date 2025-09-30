// src/components/EventDetailsCard.tsx

import { Experience } from "@/types";

interface EventDetailsCardProps {
  experience: Experience;
  onAttend?: () => void;
  onClose?: () => void;
}

export default function EventDetailsCard({
  experience,
  onAttend,
  onClose,
}: EventDetailsCardProps) {
  if (experience.event) {
    const event = experience.event;
    const isUpcoming =
      event.status === "upcoming" || event.status === "scheduled";
    const spotsLeft = event.maxAttendees
      ? event.maxAttendees - (event.currentAttendees || 0)
      : null;

    return (
      <div className="bg-white rounded-3xl shadow-2xl ring-1 ring-gray-900/5 overflow-hidden max-w-4xl mx-auto">
        {/* Close Button */}
        {onClose && (
          <div className="absolute top-6 right-6 z-10">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-sm border border-gray-200 hover:border-gray-300 transition-all"
            >
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Horizontal Layout */}
        <div className="flex">
          {/* Left Side - Image */}
          <div className="w-1/2 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6">
            {/* Main Hero Image */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-indigo-100 to-violet-100 rounded-2xl overflow-hidden shadow-lg mb-4">
              {event.imageUrl ? (
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 text-indigo-400 mx-auto mb-3"
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
                    <p className="text-indigo-600 font-medium">Event Image</p>
                  </div>
                </div>
              )}

              {/* Overlay Badges */}
              <div className="absolute top-3 left-3">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium shadow-lg backdrop-blur-sm ${
                    event.status === "upcoming" || event.status === "scheduled"
                      ? "bg-green-500/90 text-white"
                      : event.status === "ongoing"
                      ? "bg-blue-500/90 text-white"
                      : event.status === "completed"
                      ? "bg-gray-500/90 text-white"
                      : "bg-red-500/90 text-white"
                  }`}
                >
                  {event.status === "upcoming" || event.status === "scheduled"
                    ? "Scheduled"
                    : event.status === "ongoing"
                    ? "Live Now"
                    : event.status === "completed"
                    ? "Completed"
                    : "Cancelled"}
                </span>
              </div>

              {event.price && (
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-xs font-semibold shadow-lg">
                    ${event.price}
                  </span>
                </div>
              )}
            </div>

            {/* Gallery Images */}
            <div className="space-y-6">
              {/* Gallery Image 1 */}
              <div className="relative aspect-[16/9] bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 text-gray-400 mx-auto mb-2"
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
                    <p className="text-gray-300 font-medium text-sm">
                      Event Image
                    </p>
                  </div>
                </div>
              </div>

              {/* Gallery Image 2 */}
              <div className="relative aspect-[16/9] bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 text-gray-400 mx-auto mb-2"
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
                    <p className="text-gray-300 font-medium text-sm">
                      Event Image
                    </p>
                  </div>
                </div>
              </div>

              {/* Gallery Image 3 */}
              <div className="relative aspect-[16/9] bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 text-gray-400 mx-auto mb-2"
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
                    <p className="text-gray-300 font-medium text-sm">
                      Event Image
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* View More Button */}
            <button className="w-full mt-6 py-3 px-4 bg-white/60 hover:bg-white/80 border border-gray-200 hover:border-gray-300 rounded-lg text-sm font-medium text-gray-700 transition-all duration-200 flex items-center justify-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              View All Photos
            </button>
          </div>

          {/* Right Side - Content */}
          <div className="w-1/2 p-6">
            {/* Title and Location */}
            <div className="mb-4">
              <h2 className="text-2xl font-light tracking-tight text-gray-900 mb-2">
                {event.title}
              </h2>
              <div className="flex items-center text-gray-600 mb-2">
                <svg
                  className="w-4 h-4 mr-2 text-gray-400"
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
                <span className="font-light text-sm">{event.place}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 mr-2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-light text-sm">
                  {event.time || "Time TBD"}
                </span>
              </div>
            </div>

            {/* Description */}
            {event.description && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  About this event
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  {event.description}
                </p>
              </div>
            )}

            {/* Event Details Cards */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {/* Date Card */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-3 border border-indigo-200">
                <div className="flex items-center text-indigo-700 mb-1">
                  <svg
                    className="w-4 h-4 mr-1"
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
                  <span className="text-xs font-medium">Date</span>
                </div>
                <div className="text-sm font-semibold text-indigo-900 mb-1">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <div className="text-xs text-indigo-600">
                  {event.time || "TBD"}
                </div>
              </div>

              {/* Availability Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 border border-green-200">
                <div className="flex items-center text-green-700 mb-1">
                  <svg
                    className="w-4 h-4 mr-1"
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
                  <span className="text-xs font-medium">Spots</span>
                </div>
                <div className="text-sm font-semibold text-green-900 mb-1">
                  {spotsLeft !== null ? `${spotsLeft} left` : "Open"}
                </div>
                <div className="text-xs text-green-600">
                  {event.currentAttendees && event.maxAttendees
                    ? `${event.currentAttendees}/${event.maxAttendees}`
                    : "Available"}
                </div>
              </div>

              {/* Price Card */}
              <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-lg p-3 border border-violet-200">
                <div className="flex items-center text-violet-700 mb-1">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                  <span className="text-xs font-medium">Price</span>
                </div>
                <div className="text-sm font-semibold text-violet-900 mb-1">
                  {event.price ? `$${event.price}` : "Free"}
                </div>
                <div className="text-xs text-violet-600">
                  {event.price ? "per person" : "No charge"}
                </div>
              </div>
            </div>

            {/* Instructors */}
            {event.instructors && event.instructors.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Event Instructors
                </h3>
                <div className="space-y-2">
                  {event.instructors.map((instructor, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 font-semibold text-xs">
                          {instructor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 text-sm truncate">
                          {instructor.name}
                        </div>
                        {instructor.title && (
                          <div className="text-xs text-gray-600 truncate">
                            {instructor.title}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              {isUpcoming && (
                <button
                  onClick={onAttend}
                  className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center"
                >
                  <span>Register for Event</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              )}

              <div className="flex gap-2">
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                  Share
                </button>

                {onClose && (
                  <button
                    onClick={onClose}
                    className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div> Servicce</div>;
}
