export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CTAButton {
  text: string;
  href: string;
  variant: "primary" | "secondary";
}

export type ID = string & { readonly brand: unique symbol };
export type ISODateString = string & { readonly iso: unique symbol };
export type EmailString = string & { readonly email: unique symbol };

export type EventStatus =
  | "scheduled"
  | "cancelled"
  | "postponed"
  | "completed"
  | "sold_out";

export type ImageAsset = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
};

export type Organizer = {
  id?: ID;
  name: string;
  url?: string;
  email?: EmailString;
  phone?: string;
};

export type Venue =
  | {
      kind: "in_person";
      name?: string;
      addressLine1?: string;
      addressLine2?: string;
      city?: string;
      region?: string;
      postalCode?: string;
      country?: string;
      lat?: number;
      lng?: number;
      mapUrl?: string;
    }
  | {
      kind: "online";
      platform?: string;
      url: string;
      meetingCode?: string;
    };

export type TicketType = {
  id: ID;
  name: string;
  priceUSD: number; // 0 = free
  capacity?: number;
  perOrderLimit?: number;
  salesStart?: ISODateString;
  salesEnd?: ISODateString;
  description?: string;
};

export type EventCategory =
  | "Education"
  | "Workshop"
  | "Conference"
  | "Meetup"
  | "Sports"
  | "Music"
  | "Community"
  | (string & {});

export interface Event {
  id: ID | string;
  slug?: string;
  title: string;
  coverImage?: string | ImageAsset;
  dateStart: ISODateString;
  dateEnd?: ISODateString;
  timezone?: string;
  venue: Venue;
  locationText?: string;
  summary?: string;
  description?: string;
  organizer?: Organizer;
  capacity?: number;
  attendingCount?: number;
  status?: EventStatus;
  priceUSD?: number; // base/starting price
  categories?: EventCategory[];
  tags?: string[];
  tickets?: TicketType[];
  published?: boolean;
  createdAt?: ISODateString;
  updatedAt?: ISODateString;
}

export type EventListSortKey = "date" | "created" | "updated" | "popular";

// Page params (Next.js App Router)
export type EventPageParams = { id: string };
export type EventPageSearchParams = Record<
  string,
  string | string[] | undefined
>;

// Attend modal / API payloads
export type AttendFormValues = {
  fullName: string;
  email: EmailString | string;
  tickets: number;
  phone?: string;
  notes?: string;
};

export type AttendPayload = AttendFormValues & {
  eventId: string;
};
