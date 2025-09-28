"use client";
import { useState } from "react";
import Grid from "@/components/ui/grid";
import Calendar from "@/components/ui/calendar";
import { Experience } from "@/types";

interface ExperiencesClientProps {
  experiences: Experience[];
}

export default function ExperiencesClient({
  experiences,
}: ExperiencesClientProps) {
  const [filteredExperiences, setFilteredExperiences] =
    useState<Experience[]>(experiences);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateClick = (date: Date, dayExperiences: Experience[]) => {
    setSelectedDate(date);
    setFilteredExperiences(
      dayExperiences.length > 0 ? dayExperiences : experiences
    );
  };

  const clearFilter = () => {
    setSelectedDate(null);
    setFilteredExperiences(experiences);
  };

  const formatSelectedDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <main className="relative overflow-hidden bg-neutral-50 dark:bg-neutral-900">
      {/* Glassmorphism background effect */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl dark:bg-primary-800/10"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl dark:bg-secondary-800/10"></div>
      </div>

      <div className="container mx-auto px-4">
        <Grid
          experiences={filteredExperiences}
          title={
            selectedDate
              ? `Experiences for ${formatSelectedDate(selectedDate)}`
              : "Upcoming Experiences"
          }
          description={
            selectedDate
              ? `Showing ${filteredExperiences.length} event${
                  filteredExperiences.length !== 1 ? "s" : ""
                } scheduled for this date.`
              : "Join us for workshops, training sessions, and consulting opportunities designed to help you grow your skills and connect with the community."
          }
          selectedDate={selectedDate}
          onClearFilter={clearFilter}
        />
        {/* FIXME: not sure why we need to show the calendar on the experiences page */}
        {/* <Calendar
          experiences={experiences}
          onDateClick={handleDateClick}
          selectedDate={selectedDate}
        /> */}
      </div>
    </main>
  );
}
