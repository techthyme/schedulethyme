import { NextRequest, NextResponse } from "next/server";
import {
  CreateEventRequest,
  GetEventsRequest,
  GetEventsResponse,
} from "@/types/api";
import { calendarEvents } from "@/data";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const selectedEventId = searchParams.get('id');
    
    // If a specific event ID is requested, return just that event
    if (selectedEventId) {
      const selectedEvent = calendarEvents.find((event) => event.id === selectedEventId);
      if (selectedEvent) {
        return NextResponse.json({ event: selectedEvent });
      } else {
        return NextResponse.json(
          { error: "Event not found" },
          { status: 404 }
        );
      }
    }

    // Return calendar events
    const res: GetEventsResponse = {
      events: calendarEvents,
      page: 1,
      total: calendarEvents.length,
    };

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
