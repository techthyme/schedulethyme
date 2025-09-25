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
      className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
      onClick={onClick}
    >
      {/* Event Image */}
      <div className={`w-full h-64 bg-gradient-to-br ${gradientClass} rounded-2xl overflow-hidden shadow-lg relative`}>
        {event.imageUrl ? (
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-20 h-20 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
        
        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">
            {event.status === "upcoming" ? "Upcoming" : event.status === "ongoing" ? "Live" : event.status === "completed" ? "Done" : "Cancelled"}
          </span>
        </div>

        {/* Price badge */}
        {event.price && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 bg-green-500 text-white rounded-lg text-sm font-bold">
              ${event.price}
            </span>
          </div>
        )}
      </div>

      {/* Title overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
        <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-gray-200">
          {event.title}
        </h3>
        <p className="text-white/80 text-sm">
          {event.location || event.place}
        </p>
      </div>
    </div>
  );
}

interface EventGridProps {
  events: Event[];
  title?: string;
  description?: string;
  showModal?: boolean;
}

export default function EventGrid({ 
  events, 
  title = "Upcoming Events",
  description = "Join us for workshops, training sessions, and consulting opportunities designed to help you grow your skills and connect with the community.",
  showModal = true
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
      <div className="bg-gray-50 pt-0 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              {title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              {description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {events.slice(0, 8).map((event) => (
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-md">
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