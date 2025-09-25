"use client";
import { useState } from "react";
import { HeroSection } from "@/types";

interface HeroClientProps {
  hero: HeroSection;
}

export default function HeroClient({ hero }: HeroClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          {/* Announcement Banner */}
          {hero.announcement && (
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {hero.announcement.text}{' '}
                <a href={hero.announcement.linkUrl} className="font-semibold text-indigo-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {hero.announcement.linkText} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              {hero.heading}
            </h1>
            <p className="mt-8 text-lg text-gray-500 sm:text-xl">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={hero.primaryCTA.url}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                {hero.primaryCTA.text}
              </a>
              <a 
                href={hero.secondaryCTA.url} 
                className="text-sm font-semibold text-gray-900"
              >
                {hero.secondaryCTA.text} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}
