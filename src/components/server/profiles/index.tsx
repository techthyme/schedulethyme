import { GetEventsResponse } from "@/types/api";
import { serverApiClient } from "@/lib/server";
import ProfileClient from "@/components/client/profiles";
import { ProfileDashboardData } from "@/types";
// import { serializeServerSideSearchParams } from "@/utils";
// Initially gets and hydrates the Events data.
interface SVR_ProfileProps {
  userId?: string;

  //   searchParams?: ServerSideSearchParams;
}

export default async function SVR_Profile({ userId }: SVR_ProfileProps) {
  let url = "/profile/";
  //   let searchParamsSerialized = "";
  //   if (searchParams) {
  //     searchParamsSerialized = serializeServerSideSearchParams(searchParams);
  //   }

  //   if (!eventId || eventId == "") {
  //     throw new Error("eventId is required");
  //   }

  //   if (searchParamsSerialized) {
  //     url = `${url}?${searchParamsSerialized}`;
  //   }

  try {
    const { data, status } = await serverApiClient.get(url);

    if (status >= 400) {
      return <div>Error getting events from api</div>;
    }

    const profileData: ProfileDashboardData = data;

    return <ProfileClient data={profileData} />;
  } catch (error: any) {
    // errorLogger(`failed to get Events with '${url}'`, error.toJSON());
    console.error("error not json: ", error);
    return <div>error on the server</div>;
  }
}
