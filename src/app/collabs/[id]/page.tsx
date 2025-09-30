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
      "200+ SVG icons in 3 unique styles",
      "Compatible with Figma, Sketch, and Adobe XD",
      "Drawn on 24 x 24 pixel grid",
    ],
  };

  return <CollabsClient collabs={[collab]} />;
}
