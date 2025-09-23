"use client";
import { useState } from "react";

// Types
interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  avatarUrl?: string;
}

// Data
const user: User = {
  id: "user-123",
  name: "John Smith",
  email: "john.smith@email.com",
  phone: "+1 123 456 7890",
  organization: "Tech Solutions Inc",
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
};

// Rendering
export default function ProfileComponent() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src={user.avatarUrl || "https://via.placeholder.com/280"}
                alt={user.name}
                className="w-70 h-80 rounded-lg object-cover shadow-lg"
              />
            </div>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {user.name}
                  </h1>
                  <p className="text-blue-500 text-xl mb-1">
                    Product Designer
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    📍 New York, NY
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <span className="text-sm">Advanced</span>
                </button>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                  EARNINGS
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">8,6</span>
                  <div className="flex text-blue-500">
                    ★ ★ ★ ★ ☆
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-8">
                <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                  📧 Send message
                </button>
                <button className="px-6 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors">
                  ✓ Contacts
                </button>
                <button className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                  Report user
                </button>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex gap-8">
                  <button
                    onClick={() => setActiveTab("timeline")}
                    className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === "timeline"
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    📊 Timeline
                  </button>
                  <button
                    onClick={() => setActiveTab("about")}
                    className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === "about"
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    👤 About
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {activeTab === "about" && (
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Work Experience */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  WORK
                </h3>
                
                {/* Primary Job */}
                <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{user.organization}</h4>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      Primary
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">170 William Street</p>
                  <p className="text-gray-500 text-sm">New York, NY 10038-78 212.312.31</p>
                </div>

                {/* Secondary Job */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">Metropolitan Museum</h4>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      Secondary
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">525 E 68th Street</p>
                  <p className="text-gray-500 text-sm">New York, NY 10651-78 156.187.60</p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  SKILLS
                </h3>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Branding</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">UI/UX</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Web Design</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Packaging</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Print & Editorial</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  CONTACT INFORMATION
                </h3>
                <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
                  {user.phone && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Phone:</span>
                      <span className="text-blue-600 font-medium">{user.phone}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Address:</span>
                    <div className="text-right">
                      <div className="text-gray-900">525 E 68th Street</div>
                      <div className="text-gray-500 text-sm">New York, NY 10651-78 156.187.60</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">E-mail:</span>
                    <span className="text-blue-600 font-medium">{user.email}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Site:</span>
                    <span className="text-blue-600 font-medium">www.{user.name.toLowerCase().replace(' ', '')}.com</span>
                  </div>
                </div>
              </div>

              {/* Basic Information */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  BASIC INFORMATION
                </h3>
                <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Birthday:</span>
                    <span className="text-gray-900">June 5, 1992</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Gender:</span>
                    <span className="text-gray-900">Male</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="bg-white rounded-lg p-12 shadow-sm text-center text-gray-500">
            Timeline content would go here
          </div>
        )}
      </div>
    </div>
  );
}
