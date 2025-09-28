"use client";
import { useState } from "react";
import ExperienceDetailsCard from "@/components/eventdetails";
import Modal from "@/components/modal";
import { AttendeeInfo } from "@/types";
import { Experience } from "@/types";
import ExperienceUI from "@/components/ui/card";

interface GridProps {
  experiences: Experience[];
  title?: string;
  description?: string;
  selectedDate?: Date | null;
  onClearFilter?: () => void;
}

export default function Grid({
  experiences,
  title = "Experiences",
  description = "Join us for workshops, training sessions, and consulting opportunities designed to help you grow your skills and connect with the community.",
  selectedDate,
  onClearFilter,
}: GridProps) {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);

  const selectedExperienceData = selectedExperience
    ? experiences.find((experience) => experience.id === selectedExperience)
    : null;

  const handleAttendClick = () => {
    setShowModal(true);
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
  if (true) {
  }
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Clear Date Filter
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.slice(0, 6).map((experience) => (
              <ExperienceUI
                key={experience.id}
                experience={experience}
                onClick={() => handleExperienceClick(experience.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Experience Details */}
      {showModal && selectedExperienceData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-md">
            <ExperienceDetailsCard
              experience={selectedExperienceData}
              onAttend={handleAttendClick}
              onClose={() => setSelectedExperience(null)}
            />
          </div>
        </div>
      )}

      {/* Attendance Modal */}
      {showModal && selectedExperienceData && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleAttendanceSubmit}
          experienceName={selectedExperienceData.name}
        />
      )}
    </>
  );
}
