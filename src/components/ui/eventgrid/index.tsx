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

export function EventGridItem({ event, onClick }: EventGridItemProps) {
  const formatEventDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  return (
    <div
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          
          {/* Status badge */}
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
              event.status === "upcoming" || event.status === "scheduled" 
                ? "bg-green-500 text-white" 
                : event.status === "ongoing" 
                ? "bg-blue-500 text-white" 
                : event.status === "completed" 
                ? "bg-gray-500 text-white" 
                : "bg-red-500 text-white"
            }`}>
              {event.status === "upcoming" || event.status === "scheduled" ? "Scheduled" : 
               event.status === "ongoing" ? "Live" : 
               event.status === "completed" ? "Done" : "Cancelled"}
            </span>
          </div>

          {/* Heart icon (like Airbnb) */}
          <div className="absolute top-3 right-3">
            <button className="p-2 hover:bg-black/10 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Location */}
          <div className="text-sm text-gray-600 mb-1 truncate">
            {event.location || event.place}
          </div>
          
          {/* Title */}
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 leading-tight">
            {event.title}
          </h3>
          
          {/* Date */}
          <div className="text-sm text-gray-600 mb-2">
            {formatEventDate(event.dateStart)}
            {event.time && ` • ${event.time}`}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              {event.price ? (
                <div className="text-base font-semibold text-gray-900">
                  ${event.price}
                  <span className="text-sm font-normal text-gray-600"> per person</span>
                </div>
              ) : (
                <div className="text-base font-semibold text-green-600">
                  Free
                </div>
              )}
            </div>
            
            {/* Rating (placeholder) */}
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm text-gray-900 font-medium">4.9</span>
            </div>
          </div>
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-light tracking-tight text-gray-900">
                {title || "Upcoming Events"}
              </h2>
              {description && (
                <p className="mt-4 text-lg text-gray-600 max-w-3xl">
                  {description}
                </p>
              )}
            </div>

            {selectedDate && onClearFilter && (
              <div className="mb-8">
                <button
                  onClick={onClearFilter}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear Date Filter
                </button>
              </div>
            )}
          </div>
          
          {/* Grid layout - Airbnb style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventGridItem
                key={event.id}
                event={event}
                onClick={() => handleEventClick(event.id)}
              />
            ))}
          </div>

          {/* View More Button */}
          <div className="mt-12 text-center">
            <button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-3 font-light shadow-lg transition-all duration-200 hover:shadow-xl">
              View More
            </button>
          </div>
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