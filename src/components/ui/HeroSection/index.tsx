"use client";
import { useState } from "react";
import { HeroSection } from "@/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
        {/* Wave layers using CSS transforms */}
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
        <div 
          className="absolute top-1/4 left-1/4 w-[100%] h-[100%] opacity-15"
          style={{
            background: 'radial-gradient(ellipse 80% 60%, rgba(165, 180, 252, 0.2) 0%, rgba(196, 181, 253, 0.1) 50%, transparent 100%)',
            borderRadius: '60% 30% 40% 70%',
            transform: 'rotate(10deg)',
            animation: 'wave3 30s ease-in-out infinite'
          }}
        />
      </div>
      
      {/* Subtle Animated Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gentle floating orbs */}
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-gradient-to-r from-indigo-200/15 to-purple-200/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-r from-purple-200/12 to-indigo-200/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s', animationDuration: '8s'}}></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative w-full z-10">
        <div className="mx-auto max-w-5xl text-center">
          
          {/* Announcement Banner */}
          {hero.announcement && (
            <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm text-primary-700 border border-primary-200 dark:bg-primary-900/20 dark:border-primary-800 dark:text-primary-300">
              <span className="text-base">✨</span>
              <span>{hero.announcement.text}</span>
              <a 
                href={hero.announcement.linkUrl} 
                className="font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
              >
                {hero.announcement.linkText} →
              </a>
            </div>
          )}
          
          {/* Main Content */}
          <div className="space-y-12">
            <h1 className="text-6xl font-extralight tracking-tight text-neutral-900 dark:text-white sm:text-7xl lg:text-8xl leading-tight">
              {hero.heading}
            </h1>
            <p className="mx-auto max-w-4xl text-2xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <Button
                href={hero.primaryCTA.url}
                variant="primary"
                size="xl"
                className="group min-w-[200px]"
              >
                {hero.primaryCTA.text}
                <svg 
                  className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              
              <Button
                variant="outline"
                size="xl"
                className="min-w-[180px]"
              >
                Learn More
              </Button>
            </div>
          </div>

        </div>

        {/* Company Showcase - Full Width */}
        <div className="mt-12 mb-8 w-full">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-xs uppercase tracking-wider font-light">
              Trusted by industry leaders
            </p>
          </div>
          
          {/* Staggered grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 w-full px-4">
              {/* First row - 2 images */}
              <div className="md:col-span-1">
                <div className="relative group overflow-hidden rounded-3xl aspect-square bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={companies[0].image}
                    alt={`${companies[0].name} workspace`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              
              <div className="md:col-span-1 md:mt-12">
                <div className="relative group overflow-hidden rounded-3xl aspect-square bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={companies[1].image}
                    alt={`${companies[1].name} workspace`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Center large image */}
              <div className="md:col-span-2 md:mt-6">
                <div className="relative group overflow-hidden rounded-3xl aspect-[16/10] bg-gray-100 shadow-xl hover:shadow-3xl transition-all duration-500">
                  <Image
                    src={companies[2].image}
                    alt={`${companies[2].name} workspace`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              
              {/* Right side images */}
              <div className="md:col-span-1 md:mt-16">
                <div className="relative group overflow-hidden rounded-3xl aspect-square bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={companies[3].image}
                    alt={`${companies[3].name} workspace`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              
              <div className="md:col-span-1 md:mt-6">
                <div className="relative group overflow-hidden rounded-3xl aspect-square bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={companies[4].image}
                    alt={`${companies[4].name} workspace`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
