// app/events/page.tsx
import * as React from "react";
import type { Metadata } from "next";
import EventsStrip from "@/app/components/client/eventstrip";

export const metadata: Metadata = {
  title: "Events",
  description: "Browse upcoming events and workshops.",
};

export default async function EventsPage() {
  return (
    <main>
      <EventsStrip
        title="Featured events"
        description="Join our community at these upcoming sessions."
        events={[]} // Replace with your array of event objects, e.g. events={myEvents}
        // If you use slugs, swap to: hrefBuilder={(e) => `/events/${e.slug ?? e.id}`}
      />
    </main>
  );
}
