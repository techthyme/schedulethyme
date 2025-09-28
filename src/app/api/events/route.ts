import { NextRequest, NextResponse } from "next/server";
import {
  CreateEventRequest,
  GetEventsResponse,
} from "@/types/api";
import { fetchGoogleCalendarEvents} from "@/lib/google"
import { mockEvents } from "@/data";
import { Event } from "@/types";

// Convert Google Calendar event to our Event type


export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const eventId = searchParams.get('id');
    
    let events: Event[] = [];
    
    // Try to fetch from Google Calendar first
    try {
      // TODO: Replace with getting the events from the db after we implement
      // suncing the calendar with the db
        console.log('Fetching events from Google Calendar...');
        const googleEvents = await fetchGoogleCalendarEvents();
        events = [...mockEvents, ...googleEvents]; // Merge with static events
        console.log(`Successfully fetched ${googleEvents.length} Google Calendar events`);
    } catch (googleError) {
      console.error('Failed to fetch Google Calendar events, falling back to static events:', googleError);
      events = mockEvents; // Fallback to static events
    }
    
    // If a specific event ID is requested, return just that event
    if (eventId) {
      const selectedEvent = events.find((event) => event.id === eventId);
      if (selectedEvent) {
        return NextResponse.json({ event: selectedEvent });
      } else {
        return NextResponse.json(
          { error: "Event not found" },
          { status: 404 }
        );
      }
    }

    // Return all events (Google + static)
    const res: GetEventsResponse = {
      events: events,
      page: 1,
      total: events.length,
    };
    console.log("returning events:", events.length)
    return NextResponse.json(res);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateEventRequest = await request.json();
    console.log("create event request body: ", body);

    const res = {
      id: "mock_event_id",
    };

    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    console.error("Error creating conversation:", error);
    return NextResponse.json(
      { error: "Failed to create conversation" },
      { status: 500 },
    );
  }
}
