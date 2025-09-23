import { GetEventsResponse } from "@/types/api";
import { serverApiClient } from "@/lib/server";
import EventsClient from "@/components/client/events";
// import { serializeServerSideSearchParams } from "@/utils";
// Initially gets and hydrates the Events data.
interface SVR_EventsProps {
  eventId?: string;
  page?: number;

  //   searchParams?: ServerSideSearchParams;
}

export default async function SVR_Events({ eventId }: SVR_EventsProps) {
  const url = "/events/";
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

    const resp: GetEventsResponse = data;

    return <EventsClient events={resp.events} />;
  } catch (error: unknown) {
    // errorLogger(`failed to get Events with '${url}'`, error.toJSON());
    console.error("error not json: ", error);
    return <div>error on the server</div>;
  }
}
