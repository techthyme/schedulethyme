import { GetEventsResponse } from "@/types/api";
import { serverApiClient } from "@/lib/server";
import ExperiencesClient from "@/components/client/experiences";
import { mockExperiences } from "@/data";
import { Experience } from "@/types";
import { convertEventsToExperiences } from "@/lib";

export default async function ExperiencesPage() {
  let url = "/events/";

  try {
    const { data, status } = await serverApiClient.get(url);

    if (status >= 400) {
      console.error("API returned error status:", status);
      return <ExperiencesClient experiences={mockExperiences} />;
    }

    const res: GetEventsResponse = data;

    return (
      <ExperiencesClient experiences={convertEventsToExperiences(res.events)} />
    );
  } catch (error: any) {
    console.error(
      "Failed to fetch experiences from API, using static experiences:",
      error
    ); // Fallback to static experiences if API fails

    return <ExperiencesClient experiences={mockExperiences} />;
  }
}
