import { GetEventsResponse } from "@/types/api";
import { serverApiClient } from "@/lib/server";
import ExperiencesClient from "@/components/client/experiences";
import { mockEvents } from "@/data";
import { Event } from "@/types";

export default async function ExperiencesPage() {
  let url = "/events/";

  try {
    const { data, status } = await serverApiClient.get(url);

    if (status >= 400) {
      console.error("API returned error status:", status);
      return <ExperiencesClient events={mockEvents} />;
    }

    const res: GetEventsResponse = data;
    
    return (
      <ExperiencesClient events={res.events} />
    );
  } catch (error: any) {
    console.error(
      "Failed to fetch events from API, using static events:",
      error
    ); // Fallback to static events if API fails

    return <ExperiencesClient events={mockEvents} />;
  }
}
