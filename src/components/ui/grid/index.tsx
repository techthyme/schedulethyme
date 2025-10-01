"use client";
import Link from "next/link";
import { useState } from "react";
import Card from "@/components/ui/card";
import EventDetailsCard from "@/components/eventdetails";
import AttendanceModal from "@/components/AttendanceModal";
import { AttendeeInfo, Collab } from "@/types";

interface GridProps {
  collabs: Collab[];
  title?: string;
  description?: string;
  showModal?: boolean;
  selectedDate?: Date | null;
  onClearFilter?: () => void;
}

export default function Grid({
  collabs,
  title = "",
  description = "Join us for workshops, training sessions, and consulting opportunities designed to help you grow your skills and connect with the community.",
  showModal = true,
  selectedDate,
  onClearFilter,
}: GridProps) {
  const [selectedCollab, setSelectedCollab] = useState<string | null>(null);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showAllCollabs, setShowAllCollabs] = useState(false);

  const selectedCollabData = selectedCollab
    ? collabs.find((collab) => collab.id === selectedCollab)
    : null;

  const handleAttendClick = () => {
    setShowAttendanceModal(true);
  };

  const handleAttendanceSubmit = (attendeeInfo: AttendeeInfo) => {
    console.log("Attendance submitted:", attendeeInfo);
    alert(
      `Thank you ${attendeeInfo.name}! Your registration has been submitted.`
    );
  };

  // Limit collabs display to 8 initially
  const displayedCollabs = showAllCollabs ? collabs : collabs.slice(0, 8);
  const hasMoreCollabs = collabs.length > 8;

  return (
    <>
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-light tracking-tight text-gray-900">
                {title || "Upcoming Collabs"}
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
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Clear Date Filter
                </button>
              </div>
            )}
          </div>

          {/* Grid layout - Airbnb style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedCollabs.map((collab, idx) => (
              <Link key={idx} href={`/collabs/${collab.id}`}>
                <Card key={collab.id} collab={collab} />
              </Link>
            ))}
          </div>

          {/* View More Button */}
          {hasMoreCollabs && (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setShowAllCollabs(!showAllCollabs)}
                className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-3 font-light shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                {showAllCollabs ? "Show Less" : "View More"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Event Details */}
      {showModal && selectedCollabData && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4 pt-24">
          <div className="w-full max-w-lg">
            <EventDetailsCard
              collab={selectedCollabData}
              onAttend={handleAttendClick}
              onClose={() => setSelectedCollab(null)}
            />
          </div>
        </div>
      )}

      {/* Attendance Modal */}
      {showModal && selectedCollabData && (
        <AttendanceModal
          isOpen={showAttendanceModal}
          onClose={() => setShowAttendanceModal(false)}
          onSubmit={handleAttendanceSubmit}
          eventTitle={selectedCollabData.name}
        />
      )}
    </>
  );
}
