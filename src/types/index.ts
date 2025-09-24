// Instructor type
export type Instructor = {
  name: string;
  title?: string; // e.g., "CTO", "Lead Instructor"
  photoUrl?: string; // optional headshot
};

// Attendee information for registration modal
export type AttendeeInfo = {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
};

// For /events/[id] route params
export type EventPageParams = { id: string };

// Optional: props for a details component
export type EventDetailsProps = {
  event: Event;
};

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  avatarUrl?: string;
  profilePicture?: string;
  // interests: Interest[];
  // role: UserRole;
}

// types.ts
export interface Profile {
  id: string;
  name: string;
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
  type: "training" | "consultation" | "facility_booking";

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

export interface Notification {
  id: string;
  type: "reminder" | "schedule_change" | "opportunity";
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

export interface ProfileSection {
  user: User;
  bio: string;
}


export interface TodayEvent {
  id: string;
  title: string;
  time: string;
  location: string;
  canAttend: boolean;
}


export interface ProfileDashboardData {
  user: User;
  bio: string;
  todaysEvents: TodayEvent[];
}