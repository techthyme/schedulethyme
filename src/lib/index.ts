import { Event, Collab } from "@/types";

export const errorLogger = (msg: string, error: any) => {
  const err = error; // your error object

  const fullToken = err?.config?.headers?.Authorization?.replace("Bearer ", "");
  const shortenedToken = fullToken
    ? `${fullToken.slice(0, 5)}...${fullToken.slice(-5)}`
    : "N/A";

  const method = err?.config?.method?.toUpperCase() || "UNKNOWN_METHOD";
  const code = err?.config?.code || "";
  const url = `${err?.config?.url || ""}`;
  const requestId = err?.config?.headers?.["Request-Id"] || "";
  const contentType = err?.config?.headers?.["Content-Type"] || "";
  const origin = err?.config?.headers?.["Origin"] || "";

  console.error(
    `${msg} ${err.message} (Status: ${err.status})\n` +
      `→ Code: ${code}\n` +
      `→ Request: ${method} ${url}\n` +
      `→ Token: ${shortenedToken}\n` +
      `→ Content-Type: ${contentType}\n` +
      `→ Request-Id: ${requestId}\n` +
      `→ Origin: ${origin}\n`,
  );
};




export function convertEventsToCollabs(events: Event[]): Collab[]{
  if (!events || events.length == 0 ) return []
  return events.map((event) => {
    return {
      id: event.id,
      name: event.title,
      description: event.description,
      imageSrc: event.imageUrl,
      imageAlt: "event image",
      highlights: [],
      type: "event",
      dateStart: event.dateStart,
      location: event.location,
      place: event.place,
      status: "upcoming",
      event,
    };
  })
} 