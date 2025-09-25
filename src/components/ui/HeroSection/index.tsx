"use client";
import { useState } from "react";
import { HeroSection } from "@/types";
import { Button } from "@/components/ui/button";

interface HeroClientProps {
  hero: HeroSection;
}

export default function HeroClient({ hero }: HeroClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center py-20">
      {/* Hero Content */}
      <div className="relative w-full">
        <div className="mx-auto max-w-5xl text-center">
          
          {/* Announcement Banner */}
          {hero.announcement && (
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm text-primary-700 border border-primary-200 dark:bg-primary-900/20 dark:border-primary-800 dark:text-primary-300">
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
          <div className="space-y-8">
            <h1 className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl leading-tight">
              {hero.heading}
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
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
      </div>
    </div>
  );
}
