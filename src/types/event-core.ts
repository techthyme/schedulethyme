// src/types/event-core.ts

// For /events/[id] route params
export type EventPageParams = { id: string };

// Event status management
export type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'cancelled';

// Super-minimal instructor
export type Instructor = {
  name: string;
  title?: string;      // e.g., "CTO", "Lead Instructor"
  photoUrl?: string;   // optional headshot
};

// Attendee information for registration modal
export type AttendeeInfo = {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
};

// Core event shape (no unions/brands)
export type Event = {
  id: string;
  title: string;

  // Date & time kept simple for easy display
  date: string;        // e.g., "2025-10-05"
  time?: string;       // e.g., "6:00 PM"
  timezone?: string;   // e.g., "America/St_Thomas"

  place: string;       // e.g., "UVI Innovation Lab, St. Thomas"
  description?: string;

  instructors?: Instructor[]; // minimal list of presenters
  
  // Event status and attendance
  status?: EventStatus;
  maxAttendees?: number;
  currentAttendees?: number;
  registrationRequired?: boolean;
  registrationDeadline?: string; // e.g., "2025-10-03"
};

// Optional: props for a details component
export type EventDetailsProps = {
  event: Event;
};