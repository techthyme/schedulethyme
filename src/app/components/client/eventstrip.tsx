// src/components/events/EventsStrip.tsx
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Event } from "@/types/event";

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function EventsStrip({
  title = "Upcoming events",
  description = "Join our community at these events.",
  events,
  hrefBuilder = (e) => `/events/${e.id}`, // customize if you use slugs
}: {
  title?: string;
  description?: string;
  events: Event[];
  hrefBuilder?: (e: Event) => string;
}) {
  return (
    <section className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-6 text-lg/8 text-gray-400">{description}</p>
          )}
        </div>

        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {events.map((event) => {
            const hasUrlCover = typeof event.coverImage === "string";
            const url = hasUrlCover
              ? (event.coverImage as string)
              : (event.coverImage as any)?.url;

            return (
              <li key={event.id}>
                <Link href={hrefBuilder(event)} className="group">
                  <div className="flex items-center gap-x-6">
                    {/* Avatar-style cover (matches size-16 circle from your people list) */}
                    <div className="relative size-16 overflow-hidden rounded-full outline-1 -outline-offset-1 outline-white/10 bg-white/5">
                      {url ? (
                        <Image
                          src={url}
                          alt={event.title}
                          fill
                          sizes="64px"
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex size-full items-center justify-center text-xs font-semibold text-white/80">
                          {new URL(hrefBuilder(event), "http://x").pathname
                            .split("/")
                            .pop()}
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-base/7 font-semibold tracking-tight text-white group-hover:underline underline-offset-4">
                        {event.title}
                      </h3>
                      {event.locationText && (
                        <p className="text-sm/6 text-indigo-400">
                          {event.locationText}
                        </p>
                      )}
                      <p className="text-sm/6 text-gray-400">
                        {formatDate(event.dateStart)}
                        {event.dateEnd ? ` – ${formatDate(event.dateEnd)}` : ""}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
