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
    image: "/images/vercel-team.jpg"
  },
  {
    name: "Remote",
    logo: "/logos/remote.svg", 
    image: "/images/remote-workspace.jpg"
  },
  {
    name: "ARC",
    logo: "/logos/arc.svg",
    image: "/images/arc-browser.jpg"
  },
  {
    name: "Raycast",
    logo: "/logos/raycast.svg",
    image: "/images/raycast-app.jpg"
  },
  {
    name: "Runway",
    logo: "/logos/runway.svg",
    image: "/images/runway-creative.jpg"
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
    <div className="relative min-h-screen flex items-center py-32">
      {/* Hero Content */}
      <div className="relative w-full">
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
            <h1 className="text-6xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-7xl lg:text-8xl leading-tight">
              {hero.heading}
            </h1>
            <p className="mx-auto max-w-4xl text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button
                href={hero.primaryCTA.url}
                variant="primary"
                size="lg"
                className="group"
              >
                {hero.primaryCTA.text}
                <svg 
                  className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>

        </div>

        {/* Company Showcase - Full Width */}
        <div className="mt-12 mb-8 w-full">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-xs uppercase tracking-wider font-medium">
              Trusted by industry leaders
            </p>
          </div>
          
          {/* Staggered grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 w-full px-4">
              {/* First row - 2 images */}
              <div className="md:col-span-1">
                <div className="relative group overflow-hidden rounded-2xl aspect-square bg-gray-100">
                  <Image
                    src={companies[0].image}
                    alt={`${companies[0].name} workspace`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="md:col-span-1 md:mt-12">
                <div className="relative group overflow-hidden rounded-2xl aspect-square bg-gray-100">
                  <Image
                    src={companies[1].image}
                    alt={`${companies[1].name} workspace`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Center large image */}
              <div className="md:col-span-2 md:mt-6">
                <div className="relative group overflow-hidden rounded-2xl aspect-[16/10] bg-gray-100">
                  <Image
                    src={companies[2].image}
                    alt={`${companies[2].name} workspace`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Right side images */}
              <div className="md:col-span-1 md:mt-16">
                <div className="relative group overflow-hidden rounded-2xl aspect-square bg-gray-100">
                  <Image
                    src={companies[3].image}
                    alt={`${companies[3].name} workspace`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="md:col-span-1 md:mt-6">
                <div className="relative group overflow-hidden rounded-2xl aspect-square bg-gray-100">
                  <Image
                    src={companies[4].image}
                    alt={`${companies[4].name} workspace`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
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
