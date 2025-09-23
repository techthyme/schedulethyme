import EventsClient from "@/components/client/events";
import { mockEvents } from "@/data/mock-events";

interface SVR_EventsProps {
  eventId?: string;
  page?: number;
}

export default async function SVR_Events({ eventId }: SVR_EventsProps) {
  // For now, directly use mock data instead of making HTTP requests
  // TODO: Replace with actual backend API call when ready
  
  try {
    return <EventsClient events={mockEvents} />;
  } catch (error: unknown) {
    console.error("Error rendering events: ", error);
    return <div>error on the server</div>;
  }
}
