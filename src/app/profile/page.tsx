import { mockProfiles } from "@/data";
import ProfileClient from "@/components/client/profile";

export default function ProfilePage() {
  // Use the first profile as the current user's profile
  const currentUserProfile = mockProfiles[0];

  return <ProfileClient profile={currentUserProfile} />;
}