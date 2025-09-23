import Dashboard from "@/components/client/dashboard";

interface SVR_DashboardProps {
  eventId?: string;
  page?: number;
}

export default async function SVR_Dashboard({ eventId }: SVR_DashboardProps) {
  // Using hardcoded data in the Dashboard component
  return <Dashboard />;
}