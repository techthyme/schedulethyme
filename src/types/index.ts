import { Instructor } from "./event-core";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  avatarUrl?: string;
}


export interface Profile {
  id: string;
  userId?: string;
  name: string; // This is the name that the user chooses, not their real name
  organization?: string;
  avatarUrl?: string;
  user?: User;
}
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


  //user profile
  




// Dashboard Types
export interface DashboardEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "training" | "consultation" | "facility_booking";
}

export interface DashboardData {
  overviewStats: OverviewStats;
  upcomingEvents: DashboardEvent[]; // Use DashboardEvent instead of Event
  calendarPreview: CalendarDay[];
  notifications: Notification[];
}
export interface OverviewStats {
  upcomingEvents: number;
  completedTraining: number;
  currentStreak: number;
  creditsHours: number;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "training" | "consultation" | "facility_booking";
}

export interface CalendarDay {
  date: string;
  events: Event[];
  hasEvents: boolean;
}

export interface Notification {
  id: string;
  type: "reminder" | "schedule_change" | "opportunity";
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}