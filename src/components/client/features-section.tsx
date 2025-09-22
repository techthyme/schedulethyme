"use client";

import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
} from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Feature } from "@/types/index";

const features: Feature[] = [
  {
    id: "real-time",
    title: "Real-Time Availability",
    description:
      "Check space availability and book instantly with our real-time booking system.",
    icon: "clock",
  },
  {
    id: "mobile-first",
    title: "Mobile-Optimized",
    description:
      "Fully responsive design that works perfectly on all your devices.",
    icon: "device-mobile",
  },
  {
    id: "calendar-sync",
    title: "Calendar Integration",
    description:
      "Sync with Google Calendar and Outlook to manage all your appointments.",
    icon: "calendar",
  },
  {
    id: "expert-network",
    title: "Expert Network",
    description:
      "Access a curated network of professional trainers and consultants.",
    icon: "star",
  },
  {
    id: "flexible-scheduling",
    title: "Flexible Scheduling",
    description:
      "Book by the hour, day, or recurring sessions to fit your needs.",
    icon: "adjustments",
  },
  {
    id: "secure-payments",
    title: "Secure Payments",
    description: "Safe and secure payment processing for all your bookings.",
    icon: "shield-check",
  },
];

function FeatureIcon({ type }: { type: string }) {
  const iconMap = {
    clock: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    "device-mobile": (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
        />
      </svg>
    ),
    calendar: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    star: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    adjustments: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
        />
      </svg>
    ),
    "shield-check": (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  };

  return iconMap[type as keyof typeof iconMap] || iconMap.star;
}

export function FeaturesSection() {
  return (
    <Section className="bg-white">
      <SectionHeader>
        <SectionTitle>Why Choose ScheduleThyme?</SectionTitle>
        <SectionSubtitle>
          Built with modern features to make scheduling and learning effortless
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {features.map((feature) => (
          <div key={feature.id} className="text-center lg:text-left">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto lg:mx-0 mb-4">
              <FeatureIcon type={feature.icon} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of professionals who trust ScheduleThyme for their
          space, training, and consulting needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" href="#register">
            Create Free Account
          </Button>
          <Button variant="outline" size="lg" href="#contact">
            Contact Sales
          </Button>
        </div>
      </div>
    </Section>
  );
}
