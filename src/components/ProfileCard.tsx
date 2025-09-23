// src/components/ProfileCard.tsx

import { Profile } from '@/types/index';

interface ProfileCardProps {
  profile: Profile;
  showPrivateInfo?: boolean; // When true, show all info regardless of privacy settings
}

export default function ProfileCard({ profile, showPrivateInfo = false }: ProfileCardProps) {
  // Helper function to determine if field should be visible
  const shouldShow = (field: boolean | undefined, fallback: boolean = true) => {
    return showPrivateInfo || (field !== false ? fallback : false);
  };

  const displayName = shouldShow(profile.showName) ? profile.name : "Hidden";
  const displayEmail = shouldShow(profile.showEmail) ? profile.email : "Hidden";
  const displayPhone = shouldShow(profile.showPhone) ? profile.phone : "Hidden";
  const displayOrganization = shouldShow(profile.showOrganization) ? profile.organization : "Hidden";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
          {profile.avatarUrl ? (
            <img 
              src={profile.avatarUrl} 
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Name */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">
          {displayName}
        </h2>
      </div>

      {/* Contact Info */}
      <div className="space-y-3">
        {/* Email */}
        <div className="flex items-center">
          <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <span className={`text-sm ${displayEmail === 'Hidden' ? 'text-gray-400 italic' : 'text-gray-700'}`}>
            {displayEmail}
          </span>
        </div>

        {/* Phone */}
        {(profile.phone || showPrivateInfo) && (
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className={`text-sm ${displayPhone === 'Hidden' ? 'text-gray-400 italic' : 'text-gray-700'}`}>
              {displayPhone || 'Not provided'}
            </span>
          </div>
        )}

        {/* Organization */}
        {(profile.organization || showPrivateInfo) && (
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className={`text-sm ${displayOrganization === 'Hidden' ? 'text-gray-400 italic' : 'text-gray-700'}`}>
              {displayOrganization || 'Not provided'}
            </span>
          </div>
        )}
      </div>

      {/* Privacy Notice */}
      {!showPrivateInfo && (
        <div className="mt-4 text-xs text-gray-400 text-center">
          Some information may be hidden for privacy
        </div>
      )}
    </div>
  );
}