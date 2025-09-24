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
  
  const [selectedCivilStatus, setSelectedCivilStatus] = useState("Select");
  const [selectedSubject, setSelectedSubject] = useState("20+");
  const currentDate = new Date();

  const CircularProgress = ({ percentage }: { percentage: number }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    
    return (
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#3b82f6"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{percentage}%</span>
        </div>
      </div>
    );
  };

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
    
    // Previous month days
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`prev-${i}`} className="h-8 flex items-center justify-center text-xs text-gray-300">
          {getDaysInMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)) - firstDay + i + 1}
        </div>
      );
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === currentDate.getDate();
      days.push(
        <div
          key={day}
          className={`h-8 flex items-center justify-center text-xs cursor-pointer rounded ${
            isToday
              ? 'bg-orange-500 text-white font-medium'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {day}
        </div>
      );
    }
    
    // Next month days to fill the grid
    const totalCells = Math.ceil((daysInMonth + firstDay) / 7) * 7;
    for (let day = 1; days.length < totalCells; day++) {
      days.push(
        <div key={`next-${day}`} className="h-8 flex items-center justify-center text-xs text-gray-300">
          {day}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12 13-12-13" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Home → Student About</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 px-3 py-1 rounded-lg">
                <span className="text-blue-800 text-sm font-medium">Notification • (20)</span>
              </div>
              <div className="bg-purple-100 px-3 py-1 rounded-lg">
                <span className="text-purple-800 text-sm font-medium">Events • (20)</span>
              </div>
              <div className="bg-red-100 px-3 py-1 rounded-lg">
                <span className="text-red-800 text-sm font-medium">Attendance • (893K)</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-2 h-2 bg-red-500 rounded-full absolute -top-1 -right-1"></div>
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                </svg>
              </div>
              <div className="relative">
                <div className="w-2 h-2 bg-red-500 rounded-full absolute -top-1 -right-1"></div>
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                </svg>
              </div>
              
              <div className="flex items-center space-x-2">
                <img
                  src={user.avatarUrl || "https://via.placeholder.com/40"}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-600">Admin (M)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              {/* Profile Header with Progress Circle */}
              <div className="flex items-start space-x-8 mb-8">
                <div className="flex items-center space-x-6">
                  <CircularProgress percentage={75} />
                  <div className="relative">
                    <img
                      src={user.avatarUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"}
                      alt={user.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h2>
                  <p className="text-gray-600 mb-4">{bio}</p>
                  
                  {/* Contact Info Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      {user.phone || "+1800 45678900"}
                    </div>
                    <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      {user.email}
                    </div>
                    <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {user.organization || "Jamshaid Pora 3456"}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-gray-600">All Exam Results</p>
                    <p className="text-sm font-medium text-gray-900">Attendance</p>
                    <p className="text-sm text-gray-600">Close</p>
                  </div>
                </div>
              </div>

              {/* Profile Details Grid */}
              <div className="grid grid-cols-3 gap-6 text-sm">
                {/* First Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">First Name</label>
                    <div className="text-gray-900">{user.name.split(' ')[0] || "Jordan"}</div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Father Name</label>
                    <div className="text-gray-900">Hamidul</div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Gender</label>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <input type="radio" id="male" name="gender" defaultChecked className="w-4 h-4 text-blue-600" />
                        <label htmlFor="male" className="ml-2 text-gray-900">Male</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="female" name="gender" className="w-4 h-4 text-blue-600" />
                        <label htmlFor="female" className="ml-2 text-gray-700">Female</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Admission Date</label>
                    <div className="flex items-center text-gray-900">
                      <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      01/29/2022
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Roll</label>
                    <div className="text-gray-900">57</div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">ID</label>
                    <div className="text-gray-900">134567</div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Subject</label>
                    <select 
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 text-gray-900 bg-white min-w-20"
                    >
                      <option>20+</option>
                      <option>10+</option>
                      <option>30+</option>
                    </select>
                  </div>
                </div>

                {/* Second Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Last Name</label>
                    <div className="text-gray-900">{user.name.split(' ').slice(1).join(' ') || "Hamidul"}</div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Mother Name</label>
                    <div className="text-gray-900">Hamidul</div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Religion</label>
                    <div className="text-gray-900">Islam</div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Class</label>
                    <div className="text-gray-900">Inter</div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Address</label>
                    <div className="text-gray-900">Houseno# 06 Jamshaid pon</div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Civil Status</label>
                    <select 
                      value={selectedCivilStatus}
                      onChange={(e) => setSelectedCivilStatus(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-1 text-gray-900 bg-white min-w-24"
                    >
                      <option>Select</option>
                      <option>Single</option>
                      <option>Married</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Location</label>
                    <div className="text-gray-900">Jamshaid Pora 3456</div>
                  </div>
                </div>

                {/* Third Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Occupation</label>
                    <div className="text-gray-900">UI/Ux Designer</div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Date Of Birth</label>
                    <div className="flex items-center text-gray-900">
                      <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      01/29/2022
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Phone</label>
                    <div className="text-gray-900">+12345678945467</div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <div className="text-gray-900">jordanhamidul@email.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Widget */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Event Calendar</h3>
                <button className="text-orange-600 hover:text-orange-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center mb-4">
                <p className="text-gray-600 text-sm mb-1">Contact</p>
                <p className="text-gray-600 text-sm">October 2022</p>
              </div>
              
              <div className="grid grid-cols-7 gap-1 mb-2 text-xs">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {renderCalendar()}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600">📞 +12345678945467</p>
                <p className="text-sm text-gray-600">📧 jordanhamidul@email.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
