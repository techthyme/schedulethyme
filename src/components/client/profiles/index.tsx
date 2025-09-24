"use client";
import { useState } from "react";
import { ProfileDashboardData } from "@/types";
import { profileDashboardData } from "@/data";

interface ProfileClientProps {
  data?: ProfileDashboardData;
}

export default function ProfileClient({ data }: ProfileClientProps) {
  const dashboardData = data || profileDashboardData;
  const { user, bio, todaysEvents } = dashboardData;
  
  const currentDate = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-10 flex items-center justify-center text-sm text-gray-300">
          {getDaysInMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)) - firstDay + i + 1}
        </div>
      );
    }
    
    // Days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === 5; // Highlight day 5 like in screenshot
      const isSpecialDay = day === 23; // Yellow highlight like in screenshot
      const isSecondary = [7, 24, 25, 26, 27].includes(day); // Gray highlights
      
      days.push(
        <div
          key={day}
          className={`h-10 flex items-center justify-center text-sm cursor-pointer rounded ${
            isToday
              ? 'bg-red-400 text-white font-medium'
              : isSpecialDay
              ? 'bg-yellow-400 text-gray-900 font-medium'
              : isSecondary
              ? 'bg-gray-400 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
              <span className="text-sm text-gray-600">Pending</span>
              <span className="text-sm text-gray-900 font-medium">March, 2024</span>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Profile */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              {/* Profile Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.avatarUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{user.name}</h2>
                    <p className="text-gray-600">Product Designer</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>

              {/* Contact Actions */}
              <div className="flex items-center space-x-3 mb-6">
                <button className="p-3 bg-black text-white rounded-full hover:bg-gray-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </button>
                <button className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </button>
                <button className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                </button>
              </div>

              {/* Time Slots */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-900 font-medium">Time Slots</h3>
                  <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-lg text-sm">
                    <span className="text-gray-600">Meetings</span>
                    <span className="bg-black text-white px-2 py-1 rounded-full text-xs">3</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">April, 2024</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Detailed Information */}
              <div>
                <h3 className="text-gray-900 font-medium mb-4">Detailed Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Full Name</p>
                        <p className="text-xs text-gray-600">{user.name}</p>
                      </div>
                    </div>
                    <span className="text-xs text-green-600 font-medium">Online</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email Address</p>
                      <p className="text-xs text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Contact Number</p>
                      <p className="text-xs text-gray-600">{user.phone || "(555) 555-5674"}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Designation</p>
                      <p className="text-xs text-gray-600">Product Designer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Availability</p>
                      <p className="text-xs text-gray-600">Schedule the time slot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Ongoing Projects */}
              <div className="lg:col-span-3 mb-6">
                <div className="bg-black text-white px-4 py-2 rounded-lg inline-flex items-center space-x-2">
                  <span className="text-sm font-medium">Ongoing Projects</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {/* Web Designing Project */}
                  <div className="bg-yellow-100 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-white px-2 py-1 rounded text-gray-600">March 05, 2024</span>
                      <button className="p-1">
                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Web Designing</h3>
                    <p className="text-sm text-gray-600 mb-3">Prototyping</p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-1">
                        <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-xs text-gray-600">+</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600">2 Days Left</p>
                        <div className="w-12 h-1 bg-gray-200 rounded-full mt-1">
                          <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile App Project */}
                  <div className="bg-blue-100 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-white px-2 py-1 rounded text-gray-600">March 08, 2024</span>
                      <button className="p-1">
                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mobile App</h3>
                    <p className="text-sm text-gray-600 mb-3">Design</p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-1">
                        <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-xs text-gray-600">+</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600">5 Days Left</p>
                        <div className="w-12 h-1 bg-gray-200 rounded-full mt-1">
                          <div className="w-6 h-1 bg-blue-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Project */}
                  <div className="bg-red-100 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-white px-2 py-1 rounded text-gray-600">March 12, 2024</span>
                      <button className="p-1">
                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 110 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dashboard</h3>
                    <p className="text-sm text-gray-600 mb-3">Wireframe</p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-1">
                        <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-xs text-gray-600">+</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-600">8 Days Left</p>
                        <div className="w-12 h-1 bg-gray-200 rounded-full mt-1">
                          <div className="w-4 h-1 bg-red-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <h3 className="text-lg font-semibold text-gray-900">Calendar</h3>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <h4 className="text-xl font-semibold text-gray-900">March</h4>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['S', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'].map(day => (
                      <div key={day} className="h-8 flex items-center justify-center text-sm font-medium text-gray-500">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-7 gap-1">
                    {renderCalendar()}
                  </div>
                </div>
              </div>

              {/* Inbox */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900">Inbox</h3>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">9</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=40&h=40&fit=crop&crop=face"
                        alt="User"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <p className="text-sm font-medium text-gray-900">Web Designing</p>
                          <button className="p-1">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Hey tell me about progress of project? Waiting for your response</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-black text-white rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                        alt="User"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <p className="text-sm font-medium">Stephanie</p>
                          <button className="p-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs text-gray-300 mt-1">I got your first assignment. I was quite good 👍</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                        alt="User"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <p className="text-sm font-medium text-gray-900">William</p>
                          <button className="p-1">
                            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">I want some changes in previous work you sent me. Waiting for your reply</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
