// src/data/mock-events.ts
import User from '@types/entities';
import {  Instructor } from '@/types/event-core';
import { DashboardData } from '@/types';



const user: User = {
  id: "user-123",
  name: "John Smith",
  email: "john.smith@email.com",
  phone: "555-0123",
  organization: "Tech Solutions Inc",
  avatarUrl: "https://via.placeholder.com/150"
};
// Mock instructors
const mockInstructors: Instructor[] = [
  {
    name: "Dr. Sarah Johnson",
    title: "CTO",
    photoUrl: "/images/instructors/sarah.jpg"
  },
  {
    name: "Marcus Williams",
    title: "Lead Developer"
  },
  {
    name: "Ana Rodriguez",
    title: "UX Director",
    photoUrl: "/images/instructors/ana.jpg"
  }
];

// Mock events
export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Introduction to React Development",
    date: "2025-10-15",
    time: "6:00 PM",
    timezone: "America/St_Thomas",
    place: "UVI Innovation Lab, St. Thomas",
    description: "Learn the fundamentals of React development in this hands-on workshop.",
    instructors: [mockInstructors[0], mockInstructors[1]],
    status: "upcoming",
    maxAttendees: 25,
    currentAttendees: 12,
    registrationRequired: true,
    registrationDeadline: "2025-10-13"
  },
  {
    id: "2",
    title: "Advanced TypeScript Patterns",
    date: "2025-10-22",
    time: "7:00 PM",
    timezone: "America/St_Thomas",
    place: "Online via Zoom",
    description: "Deep dive into advanced TypeScript patterns and best practices.",
    instructors: [mockInstructors[1]],
    status: "upcoming",
    maxAttendees: 50,
    currentAttendees: 8,
    registrationRequired: true,
    registrationDeadline: "2025-10-20"
  },
  {
    id: "3",
    title: "UI/UX Design Workshop",
    date: "2025-11-05",
    time: "2:00 PM",
    place: "Creative Space, St. John",
    description: "Hands-on workshop covering modern UI/UX design principles.",
    instructors: [mockInstructors[2]],
    status: "upcoming",
    maxAttendees: 15,
    currentAttendees: 6,
    registrationRequired: true,
    registrationDeadline: "2025-11-03"
  },
  {
    id: "4",
    title: "Mobile App Development Bootcamp",
    date: "2025-09-20",
    time: "10:00 AM",
    timezone: "America/St_Thomas",
    place: "Tech Hub, St. Croix",
    description: "Completed bootcamp on React Native development.",
    instructors: [mockInstructors[0], mockInstructors[2]],
    status: "completed",
    maxAttendees: 20,
    currentAttendees: 18,
    registrationRequired: true
  }
];

// Helper function to get event by ID
export function getEventById(id: string): Event | undefined {
  return mockEvents.find(event => event.id === id);
}

// Helper function to get upcoming events
export function getUpcomingEvents(): Event[] {
  return mockEvents.filter(event => event.status === 'upcoming');
}

// Dashboard Data
export const dashboardData: DashboardData = {
  overviewStats: {
    upcomingEvents: 5,
    completedTraining: 12,
    currentStreak: 7,
    creditsHours: 24
  },
  
  upcomingEvents: [
    {
      id: "1",
      title: "React Training Session", 
      date: "2025-09-24",
      time: "10:00 AM",
      location: "Conference Room A",
      type: "training"
    }
  ],
  calendarPreview: [],
  notifications: [
    {
      id: "1",
      type: "reminder", 
      title: "Training Tomorrow",
      message: "React Training Session starts at 10:00 AM",
      timestamp: "2025-09-23T15:00:00Z",
      isRead: false
    }
  ]
};
