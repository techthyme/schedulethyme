import { mockProfiles } from "@/data";
import ProfileDashboard from "@/components/ProfileDashboard";

export default function DashboardPage() {
  // Use the first profile as the current user's profile
  const currentUserProfile = mockProfiles[0];

  return <ProfileDashboard profile={currentUserProfile} />;
}