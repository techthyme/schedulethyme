import { GetCalendarResponse } from "@/types/api";
import { serverApiClient } from "@/lib/server";
import CalendarClient from "@/components/client/events";
// import { serializeServerSideSearchParams } from "@/utils";
// Initially gets and hydrates the Events data.
interface SVR_CalendarProps {
  eventId?: string;
  page?: number;

  //   searchParams?: ServerSideSearchParams;
}

export default async function SVR_Events({ eventId }: SVR_CalendarProps) {
  let url = "/calendar/";
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

    const resp: GetCalendarResponse = data;

    return <CalendarClient events={resp.events} />;
  } catch (error: any) {
    // errorLogger(`failed to get Events with '${url}'`, error.toJSON());
    console.error("error not json: ", error);
    return <div>error on the server</div>;
  }
}
