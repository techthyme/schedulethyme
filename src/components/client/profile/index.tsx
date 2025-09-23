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
<div className="w-full bg-white min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 p-6 border-b border-gray-200">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            src={user.avatarUrl || "https://via.placeholder.com/200"}
            alt={user.name}
            className="w-48 h-48 rounded-lg object-cover"
          />
        </div>

        {/* User Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900 mb-1">
                {user.name}
              </h1>
              <p className="text-blue-600 text-lg mb-4">
                {user.organization}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
              Send message
            </button>
            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors">
              ✓ Contacts
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("timeline")}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "timeline"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Timeline
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "about"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              About
            </button>
          </div>
        </nav>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "about" && (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                CONTACT INFORMATION
              </h3>
              <div className="space-y-3">
                {user.phone && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="text-blue-600">{user.phone}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">E-mail:</span>
                  <span className="text-blue-600">{user.email}</span>
                </div>
              </div>
            </div>

            {/* Organization */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ORGANIZATION
              </h3>
              <div className="space-y-2">
                <p className="text-gray-900">{user.organization}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="text-center py-12 text-gray-500">
            Timeline content would go here
          </div>
        )}
      </div>
    </div>
  );
}
