import EventGrid from "@/components/ui/eventgrid";
import { Event } from "@/types";

interface EventsClientProps {
  events: Event[];
}

export default function EventsClient({ events }: EventsClientProps) {
  return (
    <EventGrid 
      events={events}
      title="Upcoming Events"
      description="Join us for workshops, training sessions, and consulting opportunities designed to help you grow your skills and connect with the community."
      showModal={true}
    />
  );
}