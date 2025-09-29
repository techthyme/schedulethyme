

import {Event, EventStatus } from "@/types"
import path from 'node:path';
import process from 'node:process';
import {authenticate} from '@google-cloud/local-auth';
import {google} from 'googleapis';
import {calendar_v3} from 'googleapis/build/src/apis/calendar';

// The scope for reading calendar events.
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
// The path to the credentials file.
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

/**
 * Lists the next 10 events on the user's primary calendar.
 */

export default async function getEvents() {
  // Authenticate with Google and get an authorized client.
  const auth = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });

  // Create a new Calendar API client.
  const calendar = google.calendar({version: 'v3', auth});
  // Get the list of events.
  const result = await calendar.events.list({
    calendarId: 'primary',
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  });
  const events = result.data.items;
  if (!events || events.length === 0) {
    console.log('No upcoming events found.');
    return;
  }

  // Print the start time and summary of each event.
  // for (const event of events) {
  //   const start = event.start?.dateTime ?? event.start?.date;
  //   console.log(`${start} - ${event.summary}`);
  // }
}


export function syncEventsWithGoogleCalendar() {
  // Get events from google and then compair them to the db
}
export function convertGoogleEventToEvent(googleEvent: calendar_v3.Schema$Event): Event {
  const startTime = googleEvent.start?.dateTime || googleEvent.start?.date || 0;
  const endTime = googleEvent.end?.dateTime || googleEvent.end?.date|| 0;
  
  return {
    id: `google-${googleEvent.id}`,
    title: googleEvent.summary || 'Untitled Event',
    description: googleEvent.description || '',
    dateStart: Math.floor(new Date(startTime).getTime() / 1000),
    dateEnd: Math.floor(new Date(endTime).getTime() / 1000),
    location: googleEvent.location || '',
    place: googleEvent.location || '',
    when: new Date(startTime).toISOString(),
    status: 'scheduled' as EventStatus,
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
export async function fetchGoogleCalendarEvents(): Promise<Event[]> {

  if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
    console.error("the google credentials are not set")       
  }
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