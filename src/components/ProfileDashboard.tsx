// src/components/ProfileDashboard.tsx

'use client';

import { useState } from 'react';
import { ProfileDashboardProps, DashboardTab, Profile } from '@/types/index';
import ProfileEditModal from '@/components/ProfileEditModal';

export default function ProfileDashboard({ profile }: ProfileDashboardProps) {
  const [activeTab, setActiveTab] = useState<DashboardTab>('about');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [currentProfile, setCurrentProfile] = useState<Profile>(profile);

  const handleProfileUpdate = (updatedProfile: Profile) => {
    setCurrentProfile(updatedProfile);
    setIsEditingProfile(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Profile Image */}
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200">
                {currentProfile.avatarUrl ? (
                  <img 
                    src={currentProfile.avatarUrl} 
                    alt={currentProfile.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-24 h-24 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Work Section */}
            <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Work</h3>
              
              <div className="space-y-4">
                {currentProfile.organization && (
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{currentProfile.organization}</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Primary</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Current Organization</p>
                  </div>
                )}
                
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">ScheduleThyme</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Secondary</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Platform Member</p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Skills</h3>
              
              <div className="space-y-2">
                <div className="text-sm text-gray-700">Professional Development</div>
                <div className="text-sm text-gray-700">Event Management</div>
                <div className="text-sm text-gray-700">Business Consulting</div>
                <div className="text-sm text-gray-700">Training & Education</div>
                <div className="text-sm text-gray-700">Facility Management</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2">
            {/* Profile Header */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{currentProfile.name}</h1>
                  <p className="text-blue-600 font-medium">Professional Member</p>
                  <p className="text-gray-600 text-sm mt-1">Virgin Islands</p>
                </div>
                <button 
                  onClick={() => setIsEditingProfile(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Edit Profile
                </button>
              </div>

              {/* Rating */}
              <div className="mt-4">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-500 mr-2">Rating:</span>
                  <span className="text-xl font-bold text-gray-900 mr-2">4.8</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.98L3 21l1.98-5.874A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                  </svg>
                  Send message
                </button>
                <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Contacts
                </button>
                <button className="text-gray-600 hover:text-gray-800 px-4 py-2">
                  Report user
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  <button
                    onClick={() => setActiveTab('timeline')}
                    className={`px-6 py-3 text-sm font-medium border-b-2 ${
                      activeTab === 'timeline'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Timeline
                  </button>
                  <button
                    onClick={() => setActiveTab('about')}
                    className={`px-6 py-3 text-sm font-medium border-b-2 ${
                      activeTab === 'about'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    About
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'about' && (
                  <div className="space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-gray-600">Phone:</label>
                          <p className="text-blue-600 hover:underline cursor-pointer">
                            {currentProfile.phone || 'Not provided'}
                          </p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Address:</label>
                          <p className="text-gray-900">
                            Virgin Islands, US<br />
                            Caribbean Region
                          </p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">E-mail:</label>
                          <p className="text-blue-600 hover:underline cursor-pointer">
                            {currentProfile.email}
                          </p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Site:</label>
                          <p className="text-blue-600 hover:underline cursor-pointer">
                            www.schedulethyme.com
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Basic Information */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
                        Basic Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-gray-600">Birthday:</label>
                          <p className="text-gray-900">June 5, 1992</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Gender:</label>
                          <p className="text-gray-900">Not specified</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'timeline' && (
                  <div className="text-center py-12">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-500">Timeline feature coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Edit Modal */}
      <ProfileEditModal
        isOpen={isEditingProfile}
        profile={currentProfile}
        onClose={() => setIsEditingProfile(false)}
        onSave={handleProfileUpdate}
      />
    </div>
  );
}