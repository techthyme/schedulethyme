import { GetCollabsResponse } from "@/types/api";
import { serverApiClient } from "@/lib/server";
import CollabsClient from "@/components/client/collabs";

export default async function CollabPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data, status } = await serverApiClient.get(`/collabs?id=${id}`);

  if (status >= 400) {
    console.error("API returned error status:", status);
    return <div> There was en error on the server</div>;
  }

  const res: GetCollabsResponse = data;
  console.log("response from collabs: ", res);
  const collab = {
    ...res.collabs[0],
    highlights: [
      "Expert instructors with Caribbean business experience",
      "USVI-specific strategies and regulatory guidance", 
      "Networking opportunities with local entrepreneurs",
      "Practical tools for island business success",
    ],
  };

  return <CollabsClient collabs={[collab]} />;
}
