import EventGrid from "@/components/ui/eventgrid";
import Calendar from "@/components/ui/calendar";
import { Event } from "@/types";

interface EventsClientProps {
  events: Event[];
}

export default function EventsClient({ events }: EventsClientProps) {
  return (
    <main className="relative overflow-hidden bg-neutral-50 dark:bg-neutral-900">
      {/* Glassmorphism background effect */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl dark:bg-primary-800/10"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl dark:bg-secondary-800/10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <EventGrid 
          events={events}
          title="Upcoming Events"
          description="Join us for workshops, training sessions, and consulting opportunities designed to help you grow your skills and connect with the community."
          showModal={true}
        />
        <Calendar events={events} />
      </div>
    </main>
  );
}