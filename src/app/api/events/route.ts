import { NextRequest, NextResponse } from "next/server";
import {
  CreateEventRequest,
  GetEventsRequest,
  GetEventsResponse,
} from "@/types/api";
import { calendarEvents } from "@/data";
import { Event } from "@/types";

// Convert Google Calendar event to our Event type
function convertGoogleEventToEvent(googleEvent: any): Event {
  const startTime = googleEvent.start?.dateTime || googleEvent.start?.date;
  const endTime = googleEvent.end?.dateTime || googleEvent.end?.date;
  
  return {
    id: `google-${googleEvent.id}`,
    title: googleEvent.summary || 'Untitled Event',
    description: googleEvent.description || '',
    dateStart: Math.floor(new Date(startTime).getTime() / 1000),
    dateEnd: Math.floor(new Date(endTime).getTime() / 1000),
    location: googleEvent.location || '',
    place: googleEvent.location || '',
    status: 'scheduled',
    type: 'training',
    date: new Date(startTime).toISOString().split('T')[0],
    time: new Date(startTime).toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    }),
    timezone: 'America/St_Thomas',
    imageUrl: `https://picsum.photos/seed/${googleEvent.id}/400/250`,
    price: undefined,
  };
}

// Fetch events from Google Calendar API using service account
async function fetchGoogleCalendarEvents(): Promise<Event[]> {
  try {
    const { google } = await import('googleapis');
    
    // Use service account authentication
    const credentials = {
      type: "service_account",
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      universe_domain: "googleapis.com"
    };

    const auth = new google.auth.GoogleAuth({
      credentials: credentials as any,
      scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
    });

    const calendar = google.calendar({ version: 'v3', auth });
    
    const response = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 20,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const googleEvents = response.data.items || [];
    return googleEvents.map(convertGoogleEventToEvent);
    
  } catch (error) {
    console.error('Google Calendar API error:', error);
    throw error;
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const selectedEventId = searchParams.get('id');
    
    let events: Event[] = [];
    
    // Try to fetch from Google Calendar first
    try {
      if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
        console.log('Fetching events from Google Calendar...');
        const googleEvents = await fetchGoogleCalendarEvents();
        events = [...calendarEvents, ...googleEvents]; // Merge with static events
        console.log(`Successfully fetched ${googleEvents.length} Google Calendar events`);
      } else {
        console.log('Google Calendar credentials not configured, using static events');
        events = calendarEvents;
      }
    } catch (googleError) {
      console.error('Failed to fetch Google Calendar events, falling back to static events:', googleError);
      events = calendarEvents; // Fallback to static events
    }
    
    // If a specific event ID is requested, return just that event
    if (selectedEventId) {
      const selectedEvent = events.find((event) => event.id === selectedEventId);
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
