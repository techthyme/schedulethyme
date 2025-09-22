import { Instructor } from "./event-core";
export interface Event {
  id: string;
  title: string;
  dateStart: number; // Epoch time
  dateEnd?: number; // Epoch time
  location: string;
  description?: string;
  price?: number; // USD price, undefined = free
  imageUrl?: string;
  status: EventStatus;

  // Deprecate
  date: string; // e.g., "2025-10-05"
  time?: string; // e.g., "6:00 PM"
  timezone?: string; // e.g., "America/St_Thomas"

  place: string; // e.g., "UVI Innovation Lab, St. Thomas"

  instructors?: Instructor[]; // minimal list of presenters

  // Event status and attendance
  maxAttendees?: number;
  currentAttendees?: number;
  registrationRequired?: boolean;
  registrationDeadline?: string; // e.g., "2025-10-03"
}

// Event status for future scheduling features
export type EventStatus =
  | "scheduled"
  | "cancelled"
  | "completed"
  | "upcoming"
  | "ongoing";
