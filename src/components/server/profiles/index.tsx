import ProfileClient from "@/components/client/profiles";
import { ProfileDashboardData } from "@/types";

interface SVR_ProfileProps {
  userId?: string;
}

export default async function SVR_Profile({ userId }: SVR_ProfileProps) {
  // Use mock data directly instead of API call to avoid server-side connection issues
  const mockProfile: ProfileDashboardData = {
    user: {
      id: "user-123",
      name: "Antonio Rosario",
      email: "antonio@gmail.com",
      phone: "+1 (555) 987-6543",
      organization: "TechThyme",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    bio: "Educator and developer building AI-powered solutions in the Virgin Islands 🌴🤖",
    todaysEvents: [
      {
        id: "1",
        title: "AI Workshop",
        time: "10:00 AM",
        location: "UVI Innovation Lab",
        canAttend: true,
      },
      {
        id: "2",
        title: "Consultation",
        time: "2:00 PM",
        location: "Office 205",
        canAttend: false,
      },
    ],
  };

  return <ProfileClient data={mockProfile} />;
}
