"use client";
import { useState } from "react";

// Types
interface OverviewStats {
  upcomingEvents: number;
  completedTraining: number;
  currentStreak: number;
  creditsHours: number;
}

interface DashboardEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "training" | "consultation" | "facility_booking";
}

interface Notification {
  id: string;
  type: "reminder" | "schedule_change" | "opportunity";
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

interface DashboardData {
  overviewStats: OverviewStats;
  upcomingEvents: DashboardEvent[];
  notifications: Notification[];
}

// Data
const dashboardData: DashboardData = {
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
    },
    {
      id: "2",
      title: "1:1 Consultation",
      date: "2025-09-25",
      time: "2:00 PM",
      location: "Office 205",
      type: "consultation"
    },
    {
      id: "3",
      title: "Facility Booking",
      date: "2025-09-26",
      time: "9:00 AM",
      location: "Lab Space",
      type: "facility_booking"
    }
  ],
  notifications: [
    {
      id: "1",
      type: "reminder",
      title: "Training Tomorrow",
      message: "React Training Session starts at 10:00 AM",
      timestamp: "2 hours ago",
      isRead: false
    },
    {
      id: "2",
      type: "schedule_change",
      title: "Schedule Update",
      message: "Consultation moved to 3:00 PM",
      timestamp: "3 hours ago",
      isRead: false
    },
    {
      id: "3",
      type: "opportunity",
      title: "New Training Available",
      message: "Advanced TypeScript workshop now open",
      timestamp: "6 hours ago",
      isRead: true
    }
  ]
};

// Rendering
export default function Dashboard() {
  const { overviewStats, upcomingEvents, notifications } = dashboardData;

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "training": return "text-blue-400";
      case "consultation": return "text-green-400";
      case "facility_booking": return "text-purple-400";
      default: return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-2 text-gray-900">Home</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your schedule.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Ask Copilot"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center space-x-2 p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600">📅</span>
                  <span className="text-gray-900">Schedule a training session</span>
                </button>
                <button className="flex items-center space-x-2 p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600">💬</span>
                  <span className="text-gray-900">Book consultation</span>
                </button>
                <button className="flex items-center space-x-2 p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600">🏢</span>
                  <span className="text-gray-900">Reserve facility</span>
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">📈</span>
                    <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
                    <span className="text-sm text-gray-500">• See more</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">⋯</button>
                </div>
              </div>
              <div className="p-4 space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-3 h-3 rounded-full mt-1 ${
                      event.type === 'training' ? 'bg-blue-400' :
                      event.type === 'consultation' ? 'bg-green-400' : 'bg-purple-400'
                    }`}></div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{event.title}</h3>
                      <div className="text-sm text-gray-600 mt-1">
                        {event.date} at {event.time} • {event.location}
                      </div>
                      <div className="flex items-center mt-2 space-x-2">
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          {event.type.replace('_', ' ')}
                        </span>
                        <span className="text-xs text-gray-500">17.2k participants</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-gray-600">⭐</button>
                      <span className="text-sm text-gray-500">Star</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">{overviewStats.upcomingEvents}</div>
                <div className="text-sm text-gray-600">Upcoming Events</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">{overviewStats.completedTraining}</div>
                <div className="text-sm text-gray-600">Completed Training</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">{overviewStats.currentStreak}</div>
                <div className="text-sm text-gray-600">Current Streak</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600">{overviewStats.creditsHours}</div>
                <div className="text-sm text-gray-600">Credits/Hours</div>
              </div>
            </div>
          </div>

          {/* Right Column - Promotional Card & Notifications */}
          <div className="lg:col-span-1 space-y-6">
            {/* Promotional Card */}
            <div className="bg-gradient-to-br from-blue-400 to-green-400 rounded-lg p-6 text-white">
              <div className="mb-4">
                <span className="text-sm font-medium bg-white bg-opacity-20 px-2 py-1 rounded">UNIVERSE:25</span>
              </div>
              <h3 className="text-xl font-bold mb-2">The full agenda is here: Choose your favorite sessions.</h3>
              <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                START PLANNING →
              </button>
            </div>

            {/* Latest Changes */}
            <div className="bg-white border border-gray-200 rounded-lg">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Latest changes</h2>
              </div>
              <div className="p-4 space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-1">{notification.timestamp}</div>
                        <div className="text-sm font-medium text-gray-900">{notification.title}</div>
                        <div className="text-sm text-gray-600 mt-1">{notification.message}</div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pt-2 border-t border-gray-100">
                  <button className="text-sm text-blue-600 hover:text-blue-700">View changelog →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// At the very bottom of your index.tsx file, add:
