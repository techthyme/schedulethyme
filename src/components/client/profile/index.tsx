"use client";
import { useState } from "react";
import { Profile } from "@/types";
import ProfileCard from "@/components/ProfileCard";
import ProfileEditModal from "@/components/ProfileEditModal";

interface ProfileClientProps {
  profile: Profile;
}

export default function ProfileClient({ profile }: ProfileClientProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(profile);

  const handleProfileUpdate = (updatedProfile: Profile) => {
    setCurrentProfile(updatedProfile);
    setIsEditing(false);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Profile
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            View and manage your profile information and privacy settings.
          </p>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div 
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => setIsEditing(true)}
          >
            <ProfileCard profile={currentProfile} showPrivateInfo={true} />
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Click your profile to edit information and privacy settings
          </p>
        </div>
      </div>

      {/* Profile Edit Modal */}
      <ProfileEditModal
        isOpen={isEditing}
        profile={currentProfile}
        onClose={() => setIsEditing(false)}
        onSave={handleProfileUpdate}
      />
    </div>
  );
}
