export interface Event {
  id: string;
  title: string;
  dateStart: number; // Epoch time
  dateEnd?: number; // Epoch time
  location: string;
  description?: string;
  price?: number; // USD price, undefined = free
  imageUrl?: string;
  status: EventStatus;
}

// Event status for future scheduling features
export type EventStatus = "scheduled" | "cancelled" | "completed";
