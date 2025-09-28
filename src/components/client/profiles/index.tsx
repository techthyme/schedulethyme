"use client";
import { useState } from "react";
import { ProfileDashboardData } from "@/types";
import { profileDashboardData } from "@/data";
import MeetingsCalendar from "@/components/ui/MeetingsCalendar";

interface ProfileClientProps {
  data?: ProfileDashboardData;
}

// Mock team data
const teamMembers = [
  {
    id: 1,
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    email: "leslie.alexander@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3m ago"
  },
  {
    id: 2,
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    email: "michael.foster@example.com",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3m ago"
  },
  {
    id: 3,
    name: "Dries Vincent",
    role: "Business Relations",
    email: "dries.vincent@example.com",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "1h ago"
  },
  {
    id: 4,
    name: "Lindsay Walton",
    role: "Front-end Developer",
    email: "lindsay.walton@example.com",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "1h ago"
  },
  {
    id: 5,
    name: "Courtney Henry",
    role: "Designer",
    email: "courtney.henry@example.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago"
  },
  {
    id: 6,
    name: "Tom Cook",
    role: "Director of Product",
    email: "tom.cook@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "5h ago"
  }
]

export default function ProfileClient({ data }: ProfileClientProps) {
  const dashboardData = data || profileDashboardData;
  const { user, bio, todaysEvents } = dashboardData;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={user.avatarUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-1">@{user.name.toLowerCase().replace(" ", "")}</p>
                <h1 className="text-xl font-semibold text-gray-900 mb-2">{user.name}</h1>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>{user.organization}</span>
                  <span className="text-gray-400">•</span>
                  <span>Joined March 2023</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg border border-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Follow
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg border border-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Message
                </button>
                <button className="p-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg border border-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <p className="text-sm text-gray-700 leading-relaxed">
                  CEO System D&apos; Because your satisfaction is everything & Standing out from the rest&apos; and that&apos;s what we want you to be as well.
                </p>
              </div>

              {/* Information */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                      Website
                    </div>
                    <span className="text-gray-900">www.TechThyme.com</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </div>
                    <span className="text-gray-900">Hello@techthyme.com</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone
                    </div>
                    <span className="text-gray-900">+1 340 244 7893</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 6v6m-4-6v6m8-6v6" />
                      </svg>
                      Joined
                    </div>
                    <span className="text-gray-900">26 March, 2023</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">AI Designer</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">UX Designer</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">Design System</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">Product</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">Successful</span>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Team</h3>
              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center gap-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{member.name}</p>
                      <p className="text-xs text-gray-500 truncate">{member.role}</p>
                    </div>
                    <div className="text-xs text-gray-400">{member.lastSeen}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Today's Events */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-green-600 font-medium">Schedule</p>
                  <h2 className="text-xl font-semibold text-gray-900">Today&apos;s Events</h2>
                </div>
              </div>
              
              <div className="space-y-4">
                {todaysEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-gray-900">{event.title}</h3>
                          <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">Workshop</span>
                        </div>
                        <p className="text-sm text-gray-600">{event.time}</p>
                        <p className="text-sm text-gray-400">{event.location || 'UVI Innovation Lab'}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 text-sm text-green-600 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors">
                        Join
                      </button>
                      <button className="px-4 py-2 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* This Week Mini Calendar */}
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-3">This Week</p>
                <div className="flex gap-2">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="text-xs text-gray-400 mb-1">{day}</div>
                      <div className={`w-6 h-6 rounded ${
                        index === 2 ? 'bg-green-500' : 
                        index === 1 || index === 4 ? 'bg-green-300' : 
                        index === 0 ? 'bg-green-200' : 'bg-gray-200'
                      }`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <MeetingsCalendar title="Upcoming Meetings & Events" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}