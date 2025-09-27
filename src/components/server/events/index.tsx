import { GetEventsResponse } from "@/types/api";
import { serverApiClient } from "@/lib/server";
import EventsClient from "@/components/client/events";
import { calendarEvents } from "@/data";

interface SVR_EventsProps {
  eventId?: string;
  page?: number;
}

export default async function SVR_Events({ eventId }: SVR_EventsProps) {
  let url = "/events/";

  try {
    const { data, status } = await serverApiClient.get(url);

    if (status >= 400) {
      console.error("API returned error status:", status);
      return <EventsClient events={calendarEvents} />;
    }

    const resp: GetEventsResponse = data;
    return <EventsClient events={resp.events} />;
  } catch (error: any) {
    console.error("Failed to fetch events from API, using static events:", error);
    // Fallback to static events if API fails
    return <EventsClient events={calendarEvents} />;
  }
}
