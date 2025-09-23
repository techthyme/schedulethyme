import { GetProfileResponse } from "@/types/api";
import { serverApiClient } from "@/lib/server";
import ProfileClient from "@/components/client/profile";
// import { serializeServerSideSearchParams } from "@/utils";
// Initially gets and hydrates the Profile data.
interface SVR_ProfileProps {
  userId?: string;
}

/**
 * Server-side rendered Profile page.
 * Gets and hydrates the user data from the API.
 * @param {SVR_ProfileProps} props - Optional props for the Profile page.
 * @param {string} [props.eventId] - The ID of the user to fetch.
 * @returns {Promise<JSX.Element>} A promise that resolves to a hydrated Profile page.
 */

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

    const resp: GetProfileResponse = data;

    return <ProfileClient profile={resp.profile} />;
  } catch (error: any) {
    // errorLogger(`failed to get Profile with '${url}'`, error.toJSON());
    console.error("error not json: ", error);
    return <div>error on the server</div>;
  }
}
