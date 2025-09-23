// src/types/dashboard.ts

import { Profile, User } from './index';

// Dashboard-specific types for the profile dashboard page

export interface ProfileDashboardProps {
  profile: Profile;
}

// Tab types for the dashboard
export type DashboardTab = 'timeline' | 'about';

// Work experience entry
export interface WorkExperience {
  id: string;
  organization: string;
  role?: string;
  description?: string;
  isPrimary?: boolean;
  startDate?: string;
  endDate?: string; // undefined = current
}

// Skills/expertise
export interface Skill {
  id: string;
  name: string;
  category?: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

// Contact information
export interface ContactInfo {
  phone?: string;
  email: string;
  website?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
  };
}

// Basic personal information
export interface BasicInfo {
  birthday?: string;
  gender?: string;
  timezone?: string;
  language?: string;
}

// Enhanced profile for dashboard with additional data
export interface DashboardProfile extends Profile {
  // Professional information
  workExperience?: WorkExperience[];
  skills?: Skill[];
  
  // Contact and personal info
  contactInfo?: ContactInfo;
  basicInfo?: BasicInfo;
  
  // Activity and ratings
  rating?: number;
  totalEvents?: number;
  joinedDate?: string;
  lastActive?: string;
  
  // Profile completion
  profileCompleteness?: number; // 0-100 percentage
}

// Props for dashboard components
export interface DashboardStatsProps {
  profile: DashboardProfile;
}

export interface WorkSectionProps {
  workExperience: WorkExperience[];
}

export interface SkillsSectionProps {
  skills: Skill[];
}

export interface ContactSectionProps {
  contactInfo: ContactInfo;
}

export interface BasicInfoSectionProps {
  basicInfo: BasicInfo;
}