import  HeroSection  from "@/components/ui/HeroSection";
import { heroData, mockEvents } from "@/data";
import Services from "@/components/ui/services";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-indigo-50/20">
      <HeroSection hero={heroData} />
     
    </main>
  );
}
