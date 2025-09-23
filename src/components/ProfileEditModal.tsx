// src/components/ProfileEditModal.tsx

import { useState } from 'react';
import { Profile } from '@/types/index';

interface ProfileEditModalProps {
  isOpen: boolean;
  profile: Profile;
  onClose: () => void;
  onSave: (profile: Profile) => void;
}

export default function ProfileEditModal({ isOpen, profile, onClose, onSave }: ProfileEditModalProps) {
  const [formData, setFormData] = useState<Profile>(profile);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleCancel = () => {
    setFormData(profile); // Reset to original data
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Edit Profile
          </h2>
          <p className="text-gray-600">
            Update your information and privacy settings
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            />
            <div className="mt-1 flex items-center">
              <input
                type="checkbox"
                id="showName"
                name="showName"
                checked={formData.showName !== false}
                onChange={handleInputChange}
                className="mr-2 text-blue-600"
              />
              <label htmlFor="showName" className="text-sm text-gray-600">
                Show name publicly
              </label>
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            />
            <div className="mt-1 flex items-center">
              <input
                type="checkbox"
                id="showEmail"
                name="showEmail"
                checked={formData.showEmail !== false}
                onChange={handleInputChange}
                className="mr-2 text-blue-600"
              />
              <label htmlFor="showEmail" className="text-sm text-gray-600">
                Show email publicly
              </label>
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Enter phone number"
            />
            <div className="mt-1 flex items-center">
              <input
                type="checkbox"
                id="showPhone"
                name="showPhone"
                checked={formData.showPhone !== false}
                onChange={handleInputChange}
                className="mr-2 text-blue-600"
              />
              <label htmlFor="showPhone" className="text-sm text-gray-600">
                Show phone publicly
              </label>
            </div>
          </div>

          {/* Organization Field */}
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Enter organization"
            />
            <div className="mt-1 flex items-center">
              <input
                type="checkbox"
                id="showOrganization"
                name="showOrganization"
                checked={formData.showOrganization !== false}
                onChange={handleInputChange}
                className="mr-2 text-blue-600"
              />
              <label htmlFor="showOrganization" className="text-sm text-gray-600">
                Show organization publicly
              </label>
            </div>
          </div>

          {/* Avatar URL Field */}
          <div>
            <label htmlFor="avatarUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Avatar URL
            </label>
            <input
              type="url"
              id="avatarUrl"
              name="avatarUrl"
              value={formData.avatarUrl || ''}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Enter avatar image URL"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}