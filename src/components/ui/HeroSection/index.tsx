"use client";
import { useState } from "react";
import { HeroSection } from "@/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeroClientProps {
  hero: HeroSection;
}

const companies = [
  {
    name: "Vercel",
    logo: "/logos/vercel.svg",
    image: "/portrait-of-a-businessman-holding-glasses-looking-2024-10-19-04-33-11-utc.jpg"
  },
  {
    name: "Vercel",
    logo: "/logos/vercel.svg", 
    image: "/group-of-engineers-analyzing-the-results-of-techno-2025-01-09-06-23-16-utc.jpg"
  },
  {
    name: "ARC",
    logo: "/logos/arc.svg",
    image: "/a-young-business-woman-sitting-in-the-office-looki-2025-03-13-01-23-25-utc.jpg"
  },
  {
    name: "Raycast",
    logo: "/logos/raycast.svg",
    image: "/unrecognizable-woman-raising-hand-during-conferenc-2025-02-10-09-49-36-utc.jpg"
  },
  {
    name: "Runway",
    logo: "/logos/runway.svg",
    image: "/young-speaker-talking-to-audience-at-conference-2025-03-09-23-13-04-utc.jpg"
  },
  {
    name: "Ramp",
    logo: "/logos/ramp.svg",
    image: "/images/ramp-finance.jpg"
  }
];

export default function HeroClient({ hero }: HeroClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="relative min-h-screen flex items-center py-32 bg-gradient-to-br from-indigo-100/20 overflow-hidden isolate">
        {/* Background streak */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        
        {/* Wavy Gradient Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden" style={{zIndex: -20}}>
          <div 
            className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%] opacity-30"
            style={{
              background: 'linear-gradient(135deg, rgba(165, 180, 252, 0.3) 0%, rgba(196, 181, 253, 0.2) 50%, rgba(165, 180, 252, 0.1) 100%)',
              borderRadius: '50% 40% 60% 30%',
              transform: 'rotate(-5deg)',
              animation: 'wave1 20s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute inset-0 w-[130%] h-[130%] -right-[15%] -bottom-[15%] opacity-20"
            style={{
              background: 'linear-gradient(45deg, rgba(196, 181, 253, 0.25) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(165, 180, 252, 0.1) 100%)',
              borderRadius: '40% 60% 30% 50%',
              transform: 'rotate(5deg)',
              animation: 'wave2 25s ease-in-out infinite reverse'
            }}
          />
        </div>
        
        {/* Hero Content - Sumip Style */}
        <div className="relative w-full z-10">
          <div className="mx-auto max-w-7xl text-center px-6 lg:px-8">
            
            {/* Announcement Banner */}
            {hero.announcement && (
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm text-indigo-700 border border-indigo-200">
                <span className="text-base">✨</span>
                <span>{hero.announcement.text}</span>
                <a 
                  href={hero.announcement.linkUrl} 
                  className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  {hero.announcement.linkText} →
                </a>
              </div>
            )}
            
            {/* Main Headline - Sumip Style */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-gray-900 leading-tight max-w-6xl mx-auto">
Empowering Virgin Islanders with Reliable Scheduling, Built on Trust and Designed for Growth.               <br />
                <span className="block"></span>
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg font-light text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10">
Where productivity meets simplicity — so you can focus on what matters most.            </p>

            {/* CTA Buttons - Sumip Style */}
            <div className="mb-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/events" passHref>
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-3 font-light shadow-lg"
                >
                  {hero.primaryCTA.text} →
                </Button>
              </Link>
              
              <Link href="/about" passHref>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-3 font-light"
                >
                  Learn more
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Company Showcase - Much Larger Images */}
      <div className="-mt-32 py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Much larger image grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 w-full">
            {/* All images much larger */}
            <div className="md:col-span-1">
              <div className="relative group overflow-hidden rounded-3xl aspect-[3/4] bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src={companies[0].image}
                  alt={`${companies[0].name} workspace`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            
            <div className="md:col-span-1 md:mt-8">
              <div className="relative group overflow-hidden rounded-3xl aspect-[3/4] bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src={companies[1].image}
                  alt={`${companies[1].name} workspace`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            
            <div className="md:col-span-1 md:mt-4">
              <div className="relative group overflow-hidden rounded-3xl aspect-[3/4] bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src={companies[2].image}
                  alt={`${companies[2].name} workspace`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            
            <div className="md:col-span-1 md:mt-12">
              <div className="relative group overflow-hidden rounded-3xl aspect-[3/4] bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src={companies[3].image}
                  alt={`${companies[3].name} workspace`}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}