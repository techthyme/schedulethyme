import { NextRequest, NextResponse } from "next/server";
import {
  CreateEventRequest,
  GetCollabsResponse,
} from "@/types/api";
import { fetchGoogleCalendarEvents } from "@/lib/google";
import { convertEventsToCollabs } from "@/lib";
import { mockEvents, mockCollabs } from "@/data";
import { Collab } from "@/types";


export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const collabId = searchParams.get("id");

    let collabs: Collab[] = [];

    // Try to fetch from Google Calendar first
    try {
      console.log("Fetching collabs from Google Calendar...");
      const googleEvents = await fetchGoogleCalendarEvents();
      const events = [...mockEvents, ...googleEvents]; // Merge with static collabs
      console.log(
        `Successfully fetched ${googleEvents.length} Google Calendar collabs`
      );

    } catch (googleError) {
      console.error(
        "Failed to fetch Google Calendar collabs, falling back to static collabs:",
        googleError
      );
      collabs = mockCollabs; // Fallback to static collabs
      // collabs = convertEventsToCollabs(mockEvents); // Fallback to static collabs
    }

    // If a specific event ID is requested, return just that event
    const res: GetCollabsResponse = {
      collabs: [],
      page: 1,
      total: 1,
    };
    if (collabId) {
      const collab = collabs.find((event) => event.id === collabId);
      if (collab) res.collabs.push(collab)
      return NextResponse.json(res);
    }

    const filter = searchParams.get("filter");
    if (filter) {
      collabs = collabs.filter((event) => event.type === filter)
    }

    res.collabs.push(...collabs)
    return NextResponse.json(res);
  } catch (error) {
    console.error("Error fetching collabs:", error);
    return NextResponse.json(
      { error: "Failed to fetch collabs" },
      { status: 500 }
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
