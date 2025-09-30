import ProfileClient from "@/components/client/profiles";
import { serverApiClient } from "@/lib/server";
import { mockProfiles } from "@/data";
import { GetProfileResponse } from "@/types/api";

export default async function ProfilePage() {
  let url = "/profile";
  try {
    const { data, status } = await serverApiClient.get(url);

    if (status >= 400) {
      console.error("API returned error status:", status);
      return <ProfileClient profile={mockProfiles[0]} />;
    }

    const res: GetProfileResponse = data;

    return <ProfileClient profile={res.profile} />;
  } catch (error) {
    return <ProfileClient profile={mockProfiles[0]} />;
  }
  // Use mock data directly instead of API call to avoid server-side connection issues
}
