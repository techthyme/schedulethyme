import  HeroSection  from "@/components/ui/HeroSection";
import { heroData, mockEvents } from "@/data";
import EventGrid from "@/components/ui/eventgrid";
import Services from "@/components/ui/services";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <HeroSection hero={heroData} />
      <EventGrid events={mockEvents} />
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 ScheduleThyme. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
