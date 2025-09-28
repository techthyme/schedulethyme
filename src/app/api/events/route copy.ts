import { NextRequest, NextResponse } from "next/server";
import {
  CreateEventRequest,
  GetEventsRequest,
  GetEventsResponse,
} from "@/types/api";
import { mockEvents } from "@/data";
import listEvents from "./google.js";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    let events= await listEvents()
    /**
     * events.find((event) => event.id === selectedEvent)
     */
    const params: GetEventsRequest = {} as GetEventsRequest;

    // TODO: Replace with actual backend API call
    // const response = await fetch(`${process.env.BACKEND_API_URL}/conversations`, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${token}`,
    //     'Content-Type': 'application/json',
    //   },
    // });

    const res: GetEventsResponse = {
      events: mockEvents,
      page: 1,
      total: 1000,
    };

    return NextResponse.json(res);
  } catch (error) {
    console.error("Error fetching conversations:", error);
    return NextResponse.json(
      { error: "Failed to fetch conversations" },
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
