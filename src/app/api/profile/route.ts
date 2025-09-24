import { NextRequest, NextResponse } from "next/server";
import { ProfileDashboardData } from "@/types";


 export async function GET(request: NextRequest) {
  console.log("[GET] /api/profile route hit");

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

  return NextResponse.json(mockProfile);
}