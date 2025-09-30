export const dynamic = "force-dynamic";

import { GetCollabsResponse } from "@/types/api";
import { serverApiClient } from "@/lib/server";
import CollabsClient from "@/components/client/collabs";
import { mockEvents } from "@/data";
import { convertEventsToCollabs } from "@/lib";

export default async function CollabsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  let url = "/collabs";

  const filter = (await searchParams).filter;

  if (filter) {
    url = url + `?filter=${filter}`;
  }

  try {
    const { data, status } = await serverApiClient.get(url);

    if (status >= 400) {
      console.error("API returned error status:", status);
      return <CollabsClient collabs={convertEventsToCollabs(mockEvents)} />;
    }

  const res: GetCollabsResponse = data;

    return <CollabsClient collabs={res.collabs} />;
  } catch (error: any) {
    console.error(
      "Failed to fetch collabs from API, using static collabs:",
      error
    ); // Fallback to static collabs if API fails

    return <CollabsClient collabs={convertEventsToCollabs(mockEvents)} />;
  }
}
