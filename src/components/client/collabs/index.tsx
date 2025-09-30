"use client";
import { useState } from "react";
import Grid from "@/components/ui/grid";
import { Collab } from "@/types";
// import Calendar from "@/components/ui/calendar";

interface CollabsClientProps {
  collabs: Collab[];
}

export default function CollabsClient({ collabs }: CollabsClientProps) {
  const [filteredCollabs, setFilteredCollabs] = useState<Collab[]>(collabs);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateClick = (date: Date, dayEvents: Collab[]) => {
    setSelectedDate(date);
    setFilteredCollabs(dayEvents.length > 0 ? dayEvents : collabs);
  };

  const clearFilter = () => {
    setSelectedDate(null);
    setFilteredCollabs(collabs);
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
    <main className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50/20 isolate">
      {/* Background streak */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
      />

      {/* Events Page - Diagonal Blue-Purple Blur Background */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        {/* Diagonal blue streak across top */}
        <div
          className="absolute w-[800px] h-[400px] -top-20 -right-40 opacity-75"
          style={{
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.6) 0%, rgba(99, 102, 241, 0.4) 50%, rgba(139, 92, 246, 0.2) 100%)",
            borderRadius: "50%",
            filter: "blur(120px)",
            transform: "rotate(15deg)",
            animation: "float2 28s ease-in-out infinite",
          }}
        />

        {/* Vertical purple accent on left */}
        <div
          className="absolute w-[300px] h-[700px] -left-24 top-1/3 opacity-60"
          style={{
            background:
              "linear-gradient(180deg, rgba(147, 51, 234, 0.5) 0%, rgba(168, 85, 247, 0.3) 70%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(90px)",
            animation: "float1 35s ease-in-out infinite",
          }}
        />

        {/* Small floating accents */}
        <div
          className="absolute w-[250px] h-[250px] right-1/3 bottom-1/4 opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(139, 92, 246, 0.2) 60%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(70px)",
            animation: "float3 22s ease-in-out infinite reverse",
          }}
        />

        {/* Center glow effect */}
        <div
          className="absolute w-[400px] h-[200px] left-1/2 top-2/3 -translate-x-1/2 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse, rgba(99, 102, 241, 0.3) 0%, rgba(165, 180, 252, 0.2) 70%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(100px)",
            animation: "float4 30s ease-in-out infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <Grid
          collabs={filteredCollabs}
          title={
            selectedDate
              ? `Events for ${formatSelectedDate(selectedDate)}`
              : "Upcoming Collabs"
          }
          description={
            selectedDate
              ? `Showing ${filteredCollabs.length} event${
                  filteredCollabs.length !== 1 ? "s" : ""
                } scheduled for this date.`
              : "Join us for workshops, training sessions, and consulting opportunities designed to help you grow your skills and connect with the community."
          }
          showModal={true}
          selectedDate={selectedDate}
          onClearFilter={clearFilter}
        />

        {/* <Calendar
          events={events}
          onDateClick={handleDateClick}
          selectedDate={selectedDate}
        /> */}
      </div>
    </main>
  );
}
