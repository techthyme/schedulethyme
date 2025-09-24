import { Event, Profile, ProfileDashboardData, Calendar} from "@/types";

export interface CreateProfileRequest {
  profile: Profile;
}

export interface CreateProfileResponse {
  id: string;
}

export interface GetProfileRequest {
  query: Query;
}

export interface GetProfileResponse {
  profile: Profile;
}

export interface CreateEventRequest {
  event: Event;
}

export interface CreateEventResponse {
  id: string;
}

export interface GetEventsRequest {
  query: Query;
}

export interface GetEventsResponse {
  events: Event[];
  page: number;
  total: number;
}

export interface Query {
  page: number;
  terms: Term[];
  perPage: number;
}

interface Term {
  key: string;
  value: string;
}

//ProfileDashBoard
export interface GetProfileDashboardResponse {
  user: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    organization?: string;
    avatarUrl?: string;
  };
  bio: string;
  todaysEvents: {
    id: string;
    title: string;
    time: string;
    location: string;
    canAttend: boolean;
  }[];
}


export interface CreateCalendarRequest {
  event: Event;
}

export interface CreateCalendartResponse {
  id: string;
}

export interface GetCalendarRequest {
  query: Query;
}

export interface GetCalendarResponse {
  events: Event[];
  page: number;
  total: number;
}
