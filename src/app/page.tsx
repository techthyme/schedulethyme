import  HeroSection  from "@/components/ui/HeroSection";
import { heroData, mockEvents } from "@/data";
import EventGrid from "@/components/ui/eventgrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection hero={heroData} />
    <EventGrid events={mockEvents} />
      <footer className="bg-gray-900 text-white">
        
      </footer>
    </main>
  );
}
