// src/data/mock-dashboard.ts

import { DashboardProfile, WorkExperience, Skill, ContactInfo, BasicInfo } from '@/types/dashboard';

// Mock work experience data
const mockWorkExperience: WorkExperience[] = [
  {
    id: "1",
    organization: "TechCorp",
    role: "Senior Product Manager",
    description: "Leading product development for mobile applications",
    isPrimary: true,
    startDate: "2022-01",
    // endDate: undefined = current position
  },
  {
    id: "2", 
    organization: "ScheduleThyme",
    role: "Platform Member",
    description: "Active community member and event organizer",
    isPrimary: false,
    startDate: "2024-01",
  }
];

// Mock skills data
const mockSkills: Skill[] = [
  { id: "1", name: "Professional Development", category: "Business", level: "expert" },
  { id: "2", name: "Event Management", category: "Operations", level: "advanced" },
  { id: "3", name: "Business Consulting", category: "Business", level: "advanced" },
  { id: "4", name: "Training & Education", category: "Education", level: "intermediate" },
  { id: "5", name: "Facility Management", category: "Operations", level: "intermediate" }
];

// Mock contact information
const mockContactInfo: ContactInfo = {
  phone: "+1-202-555-0143",
  email: "alice.johnson@example.com",
  website: "www.schedulethyme.com",
  address: {
    city: "Charlotte Amalie",
    state: "St. Thomas", 
    country: "US Virgin Islands",
    zipCode: "00802"
  }
};

// Mock basic information
const mockBasicInfo: BasicInfo = {
  birthday: "June 5, 1992",
  gender: "Female",
  timezone: "America/St_Thomas",
  language: "English"
};

// Enhanced dashboard profile
export const mockDashboardProfile: DashboardProfile = {
  // Basic profile info (from existing mock data)
  id: "1",
  name: "Alice Johnson",
  email: "alice.johnson@example.com", 
  phone: "+1-202-555-0143",
  organization: "TechCorp",
  avatarUrl: "https://i.pravatar.cc/150?img=1",
  
  // Privacy settings (defaults to visible)
  showName: true,
  showEmail: true,
  showPhone: true,
  showOrganization: true,
  
  // Enhanced dashboard data
  workExperience: mockWorkExperience,
  skills: mockSkills,
  contactInfo: mockContactInfo,
  basicInfo: mockBasicInfo,
  
  // Activity and ratings
  rating: 4.8,
  totalEvents: 12,
  joinedDate: "2024-01-15",
  lastActive: "2024-12-20",
  
  // Profile completion
  profileCompleteness: 92
};

// Additional mock profiles for variety
export const mockDashboardProfiles: DashboardProfile[] = [
  mockDashboardProfile,
  {
    id: "2",
    name: "Bob Smith", 
    email: "bob.smith@example.com",
    phone: "+1-202-555-0178",
    organization: "Innovate Inc",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    
    workExperience: [
      {
        id: "3",
        organization: "Innovate Inc",
        role: "Chief Technology Officer", 
        isPrimary: true,
        startDate: "2020-06"
      }
    ],
    skills: [
      { id: "6", name: "Software Development", category: "Technology", level: "expert" },
      { id: "7", name: "Team Leadership", category: "Management", level: "advanced" }
    ],
    contactInfo: {
      phone: "+1-202-555-0178",
      email: "bob.smith@example.com",
      address: {
        city: "Frederiksted",
        state: "St. Croix",
        country: "US Virgin Islands"
      }
    },
    basicInfo: {
      birthday: "March 12, 1985",
      gender: "Male",
      timezone: "America/St_Thomas"
    },
    
    rating: 4.6,
    totalEvents: 8,
    joinedDate: "2024-02-01", 
    profileCompleteness: 78
  }
];

// Helper function to get dashboard profile by ID
export function getDashboardProfileById(id: string): DashboardProfile | undefined {
  return mockDashboardProfiles.find(profile => profile.id === id);
}