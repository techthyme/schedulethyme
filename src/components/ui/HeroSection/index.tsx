"use client";
import { useState } from "react";
import { HeroSection } from "@/types";

interface HeroClientProps {
  hero: HeroSection;
}

export default function HeroClient({ hero }: HeroClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center">
      {/* Hero Content */}
      <div className="relative w-full px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Main Content */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-6">
              {hero.heading}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl mb-10">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
              <a
                href={hero.primaryCTA.url}
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
              >
                {hero.primaryCTA.text}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              {/* Announcement Banner */}
              {hero.announcement && (
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">🔥</span>
                  <span>{hero.announcement.text}</span>
                  <a href={hero.announcement.linkUrl} className="ml-2 font-semibold text-orange-600 hover:text-orange-700">
                    {hero.announcement.linkText}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
