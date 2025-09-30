"use client";
import { useState } from "react";
import Card from "@/components/ui/card";
import EventDetailsCard from "@/components/eventdetails";
import AttendanceModal from "@/components/AttendanceModal";
import { AttendeeInfo, Experience } from "@/types";

interface GridProps {
  experiences: Experience[];
  title?: string;
  description?: string;
  showModal?: boolean;
  selectedDate?: Date | null;
  onClearFilter?: () => void;
}

export default function Grid({
  experiences,
  title = "",
  description = "Join us for workshops, training sessions, and consulting opportunities designed to help you grow your skills and connect with the community.",
  showModal = true,
  selectedDate,
  onClearFilter,
}: GridProps) {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(
    null
  );
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);

  const selectedExperienceData = selectedExperience
    ? experiences.find((experience) => experience.id === selectedExperience)
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

  const handleExperienceClick = (experienceId: string) => {
    if (showModal) {
      setSelectedExperience(experienceId);
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience) => (
              <Card
                key={experience.id}
                experience={experience}
                onClick={() => handleExperienceClick(experience.id)}
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
      {showModal && selectedExperienceData && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4 pt-24">
          <div className="w-full max-w-lg">
            <EventDetailsCard
              experience={selectedExperienceData}
              onAttend={handleAttendClick}
              onClose={() => setSelectedExperience(null)}
            />
          </div>
        </div>
      )}

      {/* Attendance Modal */}
      {showModal && selectedExperienceData && (
        <AttendanceModal
          isOpen={showAttendanceModal}
          onClose={() => setShowAttendanceModal(false)}
          onSubmit={handleAttendanceSubmit}
          eventTitle={selectedExperienceData.name}
        />
      )}
    </>
  );
}
