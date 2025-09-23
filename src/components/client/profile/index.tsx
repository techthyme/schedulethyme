"use client";
import { useState } from "react";
import { Profile } from "@/types"; // your user type

interface ProfileClientProps {
  profile: Profile;
}

export default function ProfileClient({ profile }: ProfileClientProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<Profile>(profile);
  const [activeTab, setActiveTab] = useState<"timeline" | "about">("about");


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleProfileSubmit = (updatedProfile: Profile) => {
    console.log("Profile submitted:", updatedProfile);
    setProfileData(updatedProfile);
    setIsEditing(false);
    alert(`Thank you ${updatedProfile.name}, your profile has been updated.`);
  };

  const nameParts = profileData.name.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">My Profile</h1>
        
        {/* Profile Header */}
        <div className="flex items-start gap-6 mb-12">
          <div className="relative">
            <img
              src={profileData.avatarUrl || "https://via.placeholder.com/120"}
              alt={profileData.name}
              className="w-28 h-28 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{profileData.name}</h2>
            <p className="text-gray-600">Admin</p>
            <p className="text-gray-600">Leeds, United Kingdom</p>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
            <button 
              onClick={handleEditClick}
              className="px-4 py-2 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
            >
              Edit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-600 mb-1">First Name</label>
                <p className="text-gray-900 font-medium">{firstName}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Last Name</label>
                <p className="text-gray-900 font-medium">{lastName}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Date of Birth</label>
                <p className="text-gray-900 font-medium">12-10-1990</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email Address</label>
                <p className="text-gray-900 font-medium">{profileData.email}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
                <p className="text-gray-900 font-medium">{profileData.phone || '(+62) 821 2554-5846'}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">User Role</label>
                <p className="text-gray-900 font-medium">Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Address</h3>
            <button 
              onClick={handleEditClick}
              className="px-4 py-2 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
            >
              Edit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Country</label>
                <p className="text-gray-900 font-medium">United Kingdom</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">City</label>
                <p className="text-gray-900 font-medium">Leeds, East London</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Postal Code</label>
                <p className="text-gray-900 font-medium">ERT 1254</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}