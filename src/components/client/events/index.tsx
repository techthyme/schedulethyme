"use client"
import { useState } from "react";
import EventGrid from "@/components/ui/eventgrid";
import Calendar from "@/components/ui/calendar";
import { Event } from "@/types";

interface EventsClientProps {
  events: Event[];
}

export default function EventsClient({ events }: EventsClientProps) {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateClick = (date: Date, dayEvents: Event[]) => {
    setSelectedDate(date);
    setFilteredEvents(dayEvents.length > 0 ? dayEvents : events);
  };

  const clearFilter = () => {
    setSelectedDate(null);
    setFilteredEvents(events);
  };

  const formatSelectedDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
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
        <EventGrid 
          events={filteredEvents}
          title={selectedDate 
            ? `Events for ${formatSelectedDate(selectedDate)}` 
            : "Upcoming Events"
          }
          description={selectedDate 
            ? `Showing ${filteredEvents.length} event${filteredEvents.length !== 1 ? 's' : ''} scheduled for this date.`
            : "Join us for workshops, training sessions, and consulting opportunities designed to help you grow your skills and connect with the community."
          }
          showModal={true}
          selectedDate={selectedDate}
          onClearFilter={clearFilter}
        />
        <Calendar 
          events={events} 
          onDateClick={handleDateClick}
          selectedDate={selectedDate}
        />
      </div>
    </main>
  );
}