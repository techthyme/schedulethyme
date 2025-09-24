"use client";
import { useState } from "react";
import { ProfileDashboardData } from "@/types"; // your user type
import { profileDashboardData } from "@/data";
interface ProfileClientProps {
  data?: ProfileDashboardData;
}

// export default function ProfileClient({ profile }: ProfileClientProps) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileData, setProfileData] = useState<Profile>(profile);
//   const [activeTab, setActiveTab] = useState<"timeline" | "about">("about");

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleProfileSubmit = (updatedProfile: Profile) => {
//     console.log("Profile submitted:", updatedProfile);
//     setProfileData(updatedProfile);
//     setIsEditing(false);
//     alert(`Thank you ${updatedProfile.name}, your profile has been updated.`);
//   };

//   const nameParts = profileData.name.split(" ");
//   const firstName = nameParts[0] || "";
//   const lastName = nameParts.slice(1).join(" ") || "";

export default function ProfileClient({ data }: ProfileClientProps) {
  // Use your ProfileDashboardData structure
  const dashboardData = data || profileDashboardData;
  const { user, bio, todaysEvents } = dashboardData;
  
  // Add the missing state and functions that were causing errors
  const [attendanceStatus, setAttendanceStatus] = useState<Record<string, boolean>>({});

  const handleAttendance = (eventId: string, attending: boolean) => {
    setAttendanceStatus(prev => ({
      ...prev,
      [eventId]: attending
    }));
  };

  const currentDate = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Student Profile</h1>
          <p className="text-gray-600">Home → Student About</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Profile Header */}
              <div className="flex items-start space-x-6 mb-8">
                <div className="relative">
                  <img
                    src={user.avatarUrl || "https://via.placeholder.com/150"}
                    alt={user?.name || "Annonymous"}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h2>
                  <p className="text-gray-600 mb-4">{bio}</p>
                  
                  {/* Contact Info Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {user.phone}
                    </div>
                    <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {user.email}
                    </div>
                    {user.organization && (
                      <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                        {user.organization}
                      </div>
                    )}
                  </div>
                  
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Edit Profile
                  </button>
                </div>
              </div>

              {/* Profile Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <div className="text-gray-900">{user.name.split(' ')[0]}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="text-gray-900">{user.email}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <div className="text-gray-900">{user.phone}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                    <div className="text-gray-900">{user.organization}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <div className="text-gray-900">{user.name.split(' ').slice(1).join(' ')}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
                    <div className="text-gray-900">{user.id}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Overview Panel */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
              <div className="space-y-3">
                {todaysEvents.map((event) => (
                  <div key={event.id} className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{event.title}</h4>
                      <span className="text-sm text-gray-500">{event.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{event.location}</p>
                    
                    {event.canAttend && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleAttendance(event.id, true)}
                          className={`px-3 py-1 text-xs rounded-full transition-colors ${
                            attendanceStatus[event.id] === true
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-600 hover:bg-green-50'
                          }`}
                        >
                          Attending
                        </button>
                        <button
                          onClick={() => handleAttendance(event.id, false)}
                          className={`px-3 py-1 text-xs rounded-full transition-colors ${
                            attendanceStatus[event.id] === false
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-600 hover:bg-red-50'
                          }`}
                        >
                          Not Attending
                        </button>
                      </div>
                    )}
                    
                    {!event.canAttend && (
                      <div className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-500 inline-block">
                        Registration Closed
                      </div>
                    )}
                  </div>
                ))}
                
                {todaysEvents.length === 0 && (
                  <p className="text-gray-500 text-center py-4">No events scheduled for today</p>
                )}
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Event Calendar</h3>
                <div className="text-sm text-gray-600">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 6; // Adjust for calendar starting position
                  const isCurrentDay = day === currentDate.getDate();
                  const isValidDay = day > 0 && day <= 31;
                  
                  return (
                    <div
                      key={i}
                      className={`h-8 flex items-center justify-center text-sm cursor-pointer rounded transition-colors ${
                        isCurrentDay
                          ? 'bg-blue-600 text-white'
                          : isValidDay
                          ? 'text-gray-700 hover:bg-gray-100'
                          : 'text-gray-300'
                      }`}
                    >
                      {isValidDay ? day : ''}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
