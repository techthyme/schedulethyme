import  HeroSection  from "@/components/ui/heros/main_v1";
import { heroData } from "@/data";
import {
  CalendarDaysIcon,
  ClockIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/20/solid'

const services = [
  {
    name: 'Facility Booking',
    description: 'Reserve meeting rooms, conference halls, and workspaces with ease. Real-time availability and instant confirmation.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Training Schedules',
    description: 'Schedule and manage training sessions for teams. Track attendance and monitor progress effortlessly.',
    icon: UserGroupIcon,
  },
  {
    name: 'Consultation Planning',
    description: 'Book one-on-one consultations and expert sessions. Flexible scheduling to fit your busy calendar.',
    icon: ClockIcon,
  },
  {
    name: 'Event Management',
    description: 'Organize corporate events and meetings. Streamlined planning with automated notifications and reminders.',
    icon: CalendarDaysIcon,
  },
]

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-indigo-50/20">
      <HeroSection hero={heroData} />
      
      {/* Our Services section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Our Services</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
            Everything you need to schedule efficiently
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Streamline your scheduling process with our comprehensive suite of tools designed for modern businesses.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            {services.map((service) => (
              <div key={service.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <service.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                  {service.name}
                </dt>{' '}
                <dd className="inline">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
