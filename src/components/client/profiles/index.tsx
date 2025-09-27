"use client";
import { useState } from "react";
import { ProfileDashboardData } from "@/types";
import { profileDashboardData } from "@/data";
import MeetingsCalendar from "@/components/ui/MeetingsCalendar";

interface ProfileClientProps {
  data?: ProfileDashboardData;
}

export default function ProfileClient({ data }: ProfileClientProps) {
  const dashboardData = data || profileDashboardData;
  const { user, bio, todaysEvents } = dashboardData;

  return (
    <div className="bg-gradient-to-br from-indigo-100/20 pt-24 pb-12 sm:pt-32 sm:pb-16 relative isolate overflow-hidden">
      {/* Background streak */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
      />
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
          {/* Profile Card - Mobile Style */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <div className="p-6 text-center">
                {/* Centered profile image - larger */}
                <div className="mb-4">
                  <div className="w-32 h-32 rounded-full bg-white p-1 shadow-lg mx-auto">
                    <img
                      src={
                        user.avatarUrl ||
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
                      }
                      alt={user.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Profile Header */}
                <div className="mb-4">
                  <p className="text-sm text-gray-500 font-light">
                    @{user.name.toLowerCase().replace(" ", "")}
                  </p>
                  <h3 className="text-xl font-light text-gray-900 mt-1">
                    {user.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      {user.organization}
                    </span>
                    <span>Joined March 2023</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mb-6">
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg border border-gray-200 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="font-light">Follow</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg border border-gray-200 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span className="font-light">Message</span>
                  </button>
                  <button className="py-2.5 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg border border-gray-200 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Bio */}
                <div className="text-center mb-6">
                  <p className="text-sm font-light text-gray-700 leading-relaxed">
                    CEO System D, Because your satisfaction is everything &
                    Standing out from the rest, and that&apos;s what we want you
                    to be as well.
                  </p>
                </div>

                {/* Information Section */}
                <div className="text-left">
                  <h4 className="text-lg font-light text-gray-900 mb-3">
                    Information
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                          />
                        </svg>
                        <span className="font-light">Website</span>
                      </div>
                      <span className="text-sm font-light text-gray-900">
                        www.TechThyme.com
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="font-light">Email</span>
                      </div>
                      <span className="text-sm font-light text-gray-900">
                        Hello@techthyme.com
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="font-light">Phone</span>
                      </div>
                      <span className="text-sm font-light text-gray-900">
                        +1 340 244 7893
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3a4 4 0 118 0v4m-4 6v6m-4-6v6m8-6v6"
                          />
                        </svg>
                        <span className="font-light">Joined</span>
                      </div>
                      <span className="text-sm font-light text-gray-900">
                        26 March, 2023
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1.5 text-sm font-light bg-gray-100 text-gray-700 rounded-full">
                      AI Designer
                    </span>
                    <span className="px-3 py-1.5 text-sm font-light bg-gray-100 text-gray-700 rounded-full">
                      UX Designer
                    </span>
                    <span className="px-3 py-1.5 text-sm font-light bg-gray-100 text-gray-700 rounded-full">
                      Design System
                    </span>
                    <span className="px-3 py-1.5 text-sm font-light bg-gray-100 text-gray-700 rounded-full">
                      Product
                    </span>
                    <span className="px-3 py-1.5 text-sm font-light bg-gray-100 text-gray-700 rounded-full">
                      Successful
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
          </div>

          {/* Today's Events */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-tr-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <div className="h-40 bg-gradient-to-r from-emerald-500 to-teal-600 relative">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-light text-white mb-2">
                      {todaysEvents.length}
                    </div>
                    <div className="text-emerald-100">Events Today</div>
                  </div>
                </div>
              </div>
              <div className="p-10 pt-6">
                <h3 className="text-sm/4 font-light text-emerald-600">
                  Schedule
                </h3>
                <p className="mt-2 text-lg font-light tracking-tight text-gray-950">
                  Today&apos;s Events
                </p>

                <div className="mt-4 space-y-4">
                  {todaysEvents.slice(0, 3).map((event, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-1.5"></div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <p className="text-sm font-light text-gray-950">
                                {event.title}
                              </p>
                              <span className="px-2 py-0.5 text-xs font-light bg-emerald-100 text-emerald-700 rounded-full">
                                {"Workshop"}
                                {/* {event.type || "Workshop"} */}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500">
                              {event.time}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {event.location || "Conference Room A"}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-2 py-1 text-xs font-light text-emerald-600 hover:bg-emerald-50 rounded border border-emerald-200 transition-colors">
                            Join
                          </button>
                          <button className="px-2 py-1 text-xs font-light text-gray-600 hover:bg-gray-100 rounded border border-gray-200 transition-colors">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini Calendar Heatmap */}
                <div className="mt-6">
                  <p className="text-xs font-light text-gray-600 mb-2">
                    This Week
                  </p>
                  <div className="flex space-x-1">
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-gray-400">M</div>
                      <div className="w-3 h-3 bg-emerald-200 rounded-sm mt-1"></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-gray-400">T</div>
                      <div className="w-3 h-3 bg-emerald-400 rounded-sm mt-1"></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-gray-400">W</div>
                      <div className="w-3 h-3 bg-emerald-600 rounded-sm mt-1"></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-gray-400">T</div>
                      <div className="w-3 h-3 bg-gray-200 rounded-sm mt-1"></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-gray-400">F</div>
                      <div className="w-3 h-3 bg-emerald-300 rounded-sm mt-1"></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-gray-400">S</div>
                      <div className="w-3 h-3 bg-gray-200 rounded-sm mt-1"></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-gray-400">S</div>
                      <div className="w-3 h-3 bg-gray-200 rounded-sm mt-1"></div>
                    </div>
                  </div>
                </div>

                {/* Reminder/Notification */}
                <div className="mt-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <div className="w-4 h-4 text-yellow-600 mt-0.5">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-light text-yellow-800">
                        Reminder: Bring presentation slides for AI Workshop
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl" />
          </div>

          {/* Calendar Component */}
          <div className="relative lg:col-span-6">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-b-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-b-[calc(2rem+1px)]">
              <div className="p-10">
                <MeetingsCalendar
                  title="Upcoming Meetings & Events"
                  className=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-b-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
