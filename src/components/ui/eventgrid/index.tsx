"use client";
import { useState } from "react";
import EventDetailsCard from "@/components/eventdetails";
import AttendanceModal from "@/components/AttendanceModal";
import { AttendeeInfo } from "@/types";
import { Event } from "@/types";

interface EventGridItemProps {
  event: Event;
  onClick: () => void;
}

export  function EventGridItem({ event, onClick }: EventGridItemProps) {
  const formatEventDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const day = date.getDate();
    return { month, day };
  };

  const { month, day } = formatEventDate(event.dateStart);

  return (
    <div
      className="group cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="flex gap-6 p-6">
        {/* Date Column */}
        <div className="flex-shrink-0 text-center">
          <div className="text-sm font-light text-gray-500 mb-1">{month}</div>
          <div className="text-4xl font-extralight text-gray-900">{day}</div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <div className="relative w-80 h-48 overflow-hidden rounded-2xl bg-gray-100">
            {event.imageUrl ? (
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
            
            {/* Status badge */}
            <div className="absolute top-3 left-3">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-light ${
                event.status === "upcoming" || event.status === "scheduled" 
                  ? "bg-green-50 text-green-700 ring-1 ring-green-600/20" 
                  : event.status === "ongoing" 
                  ? "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20" 
                  : event.status === "completed" 
                  ? "bg-gray-50 text-gray-700 ring-1 ring-gray-600/20" 
                  : "bg-red-50 text-red-700 ring-1 ring-red-600/20"
              }`}>
                {event.status === "upcoming" || event.status === "scheduled" ? "Scheduled" : event.status === "ongoing" ? "Live" : event.status === "completed" ? "Done" : "Cancelled"}
              </span>
            </div>

            {/* Price badge */}
            {event.price && (
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center px-2 py-1 bg-gray-900 text-white rounded-full text-xs font-light">
                  ${event.price}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl font-light tracking-tight text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
            {event.title}
          </h3>
          
          <div className="text-sm font-light text-gray-500 mb-2">
            {event.location || event.place}
          </div>
          
          <div className="text-sm font-light text-gray-500 mb-4">
            {event.time || "Time TBD"}
          </div>

          {event.description && (
            <p className="text-gray-600 font-light leading-relaxed mb-6 line-clamp-3">
              {event.description}
            </p>
          )}

          <button className="inline-flex items-center text-sm font-light text-gray-600 hover:text-gray-900 transition-colors group">
            View Event Details
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

interface EventGridProps {
  events: Event[];
  title?: string;
  description?: string;
  showModal?: boolean;
  selectedDate?: Date | null;
  onClearFilter?: () => void;
}

export default function EventGrid({ 
  events, 
  title = "",
  description = "Join us for workshops, training sessions, and consulting opportunities designed to help you grow your skills and connect with the community.",
  showModal = true,
  selectedDate,
  onClearFilter
}: EventGridProps) {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);

  const selectedEventData = selectedEvent
    ? events.find((event) => event.id === selectedEvent)
    : null;

  const handleAttendClick = () => {
    setShowAttendanceModal(true);
  };

  const handleAttendanceSubmit = (attendeeInfo: AttendeeInfo) => {
    console.log("Attendance submitted:", attendeeInfo);
    alert(
      `Thank you ${attendeeInfo.name}! Your registration has been submitted.`,
    );
  };

  const handleEventClick = (eventId: string) => {
    if (showModal) {
      setSelectedEvent(eventId);
    }
  };

  return (
    <>
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-16">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-light tracking-tight text-gray-900">
                {title || "Upcoming Events"}
              </h2>
            </div>

            {selectedDate && onClearFilter && (
              <div className="mb-8">
                <button
                  onClick={onClearFilter}
                  className="inline-flex items-center px-4 py-2 text-sm font-light text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear Date Filter
                </button>
              </div>
            )}
          </div>
          
          {/* Vertical event list */}
          <div className="space-y-4">
            {events.slice(0, 6).map((event, index) => (
              <div key={event.id}>
                <EventGridItem
                  event={event}
                  onClick={() => handleEventClick(event.id)}
                />
                {index < events.slice(0, 6).length - 1 && (
                  <hr className="border-gray-200 my-6" />
                )}
              </div>
            ))}
          </div>

          {description && (
            <div className="mt-12 text-center">
              <p className="mx-auto max-w-3xl text-lg font-light text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Event Details */}
      {showModal && selectedEventData && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4 pt-24">
          <div className="w-full max-w-lg">
            <EventDetailsCard
              event={selectedEventData}
              onAttend={handleAttendClick}
              onClose={() => setSelectedEvent(null)}
            />
          </div>
        </div>
      )}

      {/* Attendance Modal */}
      {showModal && selectedEventData && (
        <AttendanceModal
          isOpen={showAttendanceModal}
          onClose={() => setShowAttendanceModal(false)}
          onSubmit={handleAttendanceSubmit}
          eventTitle={selectedEventData.title}
        />
      )}
    </>
  );
}