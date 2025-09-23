// src/data/mock-events.ts

import { Instructor, Event, User } from "@/types";
import { DashboardData } from "@/types";

const user: User = {
  id: "user-123",
  name: "John Smith",
  email: "john.smith@email.com",
  phone: "555-0123",
  organization: "Tech Solutions Inc",
  avatarUrl: "https://via.placeholder.com/150",
};
// Mock instructors
const mockInstructors: Instructor[] = [
  {
    name: "Dr. Sarah Johnson",
    title: "CTO",
    photoUrl: "/images/instructors/sarah.jpg",
  },
  {
    name: "Marcus Williams",
    title: "Lead Developer",
  },
  {
    name: "Ana Rodriguez",
    title: "UX Director",
    photoUrl: "/images/instructors/ana.jpg",
  },
];

// Mock events
export const mockEvents: Event[] = [];

// Helper function to get event by ID
export function getEventById(id: string): Event | undefined {
  return mockEvents.find((event) => event.id === id);
}

// Helper function to get upcoming events
export function getUpcomingEvents(): Event[] {
  return mockEvents.filter((event) => event.status === "upcoming");
}

// Dashboard Data
export const dashboardData: DashboardData = {
  overviewStats: {
    upcomingEvents: 5,
    completedTraining: 12,
    currentStreak: 7,
    creditsHours: 24,
  },

  upcomingEvents: [
    {
      id: "1",
      title: "React Training Session",
      date: "2025-09-24",
      time: "10:00 AM",
      location: "Conference Room A",
      type: "training",
    },
  ],
  calendarPreview: [],
  notifications: [
    {
      id: "1",
      type: "reminder",
      title: "Training Tomorrow",
      message: "React Training Session starts at 10:00 AM",
      timestamp: "2025-09-23T15:00:00Z",
      isRead: false,
    },
  ],
};
