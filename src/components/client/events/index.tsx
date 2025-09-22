"use client";
import { useState } from "react";
import EventDetailsCard from "@/components/eventdetails";
import AttendanceModal from "@/components/AttendanceModal";
import { AttendeeInfo } from "@/types/event-core";
import { Event } from "@/types";

interface EventsClientProps {
  events: Event[];
}

export default function EventsClient({ events }: EventsClientProps) {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);

  const selectedEventData = selectedEvent
    ? events.find((event) => event.id === selectedEvent)
    : null;

  const handleAttendClick = () => {
    setShowAttendanceModal(true);
  };

  const handleAttendanceSubmit = (attendeeInfo: AttendeeInfo) => {
    // TODO: Submit attendance data to backend
    console.log("Attendance submitted:", attendeeInfo);
    alert(
      `Thank you ${attendeeInfo.name}! Your registration has been submitted.`,
    );
  };

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Upcoming Events
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Join us for workshops, training sessions, and consulting
              opportunities designed to help you grow your skills and connect
              with the community.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {events.map((event) => (
              <li
                key={event.id}
                className="p-4 rounded-xl shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedEvent(event.id)}
              >
                {/* Event Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-blue-400"
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

                <div className="flex justify-between items-start mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.status === "upcoming"
                        ? "bg-blue-100 text-blue-700"
                        : event.status === "ongoing"
                        ? "bg-blue-200 text-blue-800"
                        : event.status === "completed"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {event.status === "upcoming"
                      ? "Upcoming"
                      : event.status === "ongoing"
                      ? "Live Now"
                      : event.status === "completed"
                      ? "Completed"
                      : "Cancelled"}
                  </span>
                </div>

                <h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">
                  {event.title}
                </h3>

                <div className="flex items-center text-gray-600 mb-2">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">{event.place}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">
                    {event.date} {event.time && `• ${event.time}`}
                  </span>
                </div>

                {event.description && (
                  <p className="text-sm text-gray-700 line-clamp-2 mb-3">
                    {event.description}
                  </p>
                )}

                {event.maxAttendees && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">
                      {event.currentAttendees || 0}/{event.maxAttendees}{" "}
                      registered
                    </span>
                    <span className="font-medium text-blue-600">
                      {event.maxAttendees - (event.currentAttendees || 0)} spots
                      left
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal for Event Details */}
      {selectedEventData && (
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
      {selectedEventData && (
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
