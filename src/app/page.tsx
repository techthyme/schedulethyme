import  HeroSection  from "@/components/ui/HeroSection";
import { heroData, mockEvents } from "@/data";
import EventGrid from "@/components/ui/eventgrid";
import Services from "@/components/ui/services";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-neutral-50 dark:bg-neutral-900">
      {/* Glassmorphism background effect */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl dark:bg-primary-800/10"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl dark:bg-secondary-800/10"></div>
      </div>
      
      <div className="container mx-auto px-4 space-y-24 lg:space-y-32">
        <HeroSection hero={heroData} />
        <Services />
        <EventGrid events={mockEvents} />
      </div>
      
      <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-100 py-16 mt-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-white">ScheduleThyme</h3>
            <p className="text-neutral-400 max-w-md mx-auto">
              Professional scheduling for facilities, training, and consulting services
            </p>
            <div className="pt-8 border-t border-neutral-800">
              <p className="text-neutral-500">© 2024 ScheduleThyme. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
