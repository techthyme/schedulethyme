import { Event, Profile } from "@/types";

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
