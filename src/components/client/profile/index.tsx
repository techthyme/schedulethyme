"use client";
import { Profile } from "@/types";

interface ProfileClientProps {
  profile: Profile;
}

export default function ProfileClient({ profile }: ProfileClientProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Upcoming Profile
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Join us for workshops, training sessions, and consulting
            opportunities designed to help you grow your skills and connect with
            the community.
          </p>
        </div>
      </div>
    </div>
  );
}
