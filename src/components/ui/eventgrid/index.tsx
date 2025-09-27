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
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };
  // Generate a colorful gradient for each event based on its ID
  const gradients = [
    'from-pink-400 to-orange-400',
    'from-blue-400 to-indigo-500', 
    'from-green-400 to-blue-500',
    'from-purple-400 to-pink-500',
    'from-yellow-400 to-orange-500',
    'from-indigo-400 to-purple-500',
    'from-red-400 to-pink-500',
    'from-teal-400 to-blue-500',
    'from-emerald-400 to-cyan-500',
    'from-orange-400 to-red-500'
  ];
  
  const gradientClass = gradients[parseInt(event.id) % gradients.length];

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-neutral-100 dark:hover:shadow-neutral-900/20 hover:-translate-y-1"
      onClick={onClick}
    >
      {/* Event Image */}
      <div className="relative aspect-[3/2] overflow-hidden">
        {event.imageUrl ? (
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradientClass}`}>
            <svg
              className="w-20 h-20 text-white/60"
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
        
        {/* Light overlay gradient only at bottom for text readability */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
            event.status === "upcoming" || event.status === "scheduled" 
              ? "bg-green-100 text-green-800" 
              : event.status === "ongoing" 
              ? "bg-blue-100 text-blue-800" 
              : event.status === "completed" 
              ? "bg-gray-100 text-gray-800" 
              : "bg-red-100 text-red-800"
          }`}>
            {event.status === "upcoming" || event.status === "scheduled" ? "Scheduled" : event.status === "ongoing" ? "Live" : event.status === "completed" ? "Done" : "Cancelled"}
          </span>
        </div>

        {/* Date badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1.5 bg-primary-500 text-white rounded-full text-sm font-semibold shadow-lg">
            {formatEventDate(event.dateStart)}
          </span>
        </div>

        {/* Price badge */}
        {event.price && (
          <div className="absolute top-14 right-4">
            <span className="inline-flex items-center px-3 py-1.5 bg-secondary-500 text-white rounded-full text-sm font-semibold shadow-lg">
              ${event.price}
            </span>
          </div>
        )}

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-gray-100 transition-colors line-clamp-2">
            {event.title}
          </h3>
          <p className="text-white/80 text-base line-clamp-1">
            {event.location || event.place}
          </p>
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl mb-6">
              {title}
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {description}
            </p>
            {selectedDate && onClearFilter && (
              <div className="mt-6">
                <button
                  onClick={onClearFilter}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear Date Filter
                </button>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, 6).map((event) => (
              <EventGridItem
                key={event.id}
                event={event}
                onClick={() => handleEventClick(event.id)}
              />
            ))}
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