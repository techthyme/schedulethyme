import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How do I book a facility or training room?",
    answer:
      "You can easily book facilities through our platform by selecting the type of space you need, choosing your preferred date and time, and completing the booking form. All bookings are confirmed instantly with email notifications.",
  },
  {
    question: 'What types of facilities are available for booking?',
    answer:
      'We offer a variety of spaces including commercial kitchens, collaboration spaces, training rooms, conference facilities, and consultation areas across the US Virgin Islands.',
  },
  {
    question: 'Can I cancel or reschedule my booking?',
    answer:
      'Yes, you can cancel or reschedule your booking up to 24 hours before your scheduled time. Simply log into your account and manage your reservations, or contact our support team for assistance.',
  },
  {
    question: 'What training programs do you offer?',
    answer:
      "We offer comprehensive training programs in food safety, business development, technology skills, and hybrid workshops. Our programs are designed for Caribbean professionals and include both online and in-person options.",
  },
  {
    question: "How do I register for a training session?",
    answer:
      'To register for training, browse our available programs, select the session that fits your schedule, and complete the registration form. You will receive confirmation and all necessary materials via email.',
  },
  {
    question: 'Is there a cost for using ScheduleThyme services?',
    answer:
      "Pricing varies by service type and duration. Facility bookings are charged hourly, while training programs have fixed fees. Contact us for detailed pricing information or check our services page for current rates.",
  },
  {
    question: 'Do you offer consultation services?',
    answer:
      "Yes, we provide one-on-one business consultations and mentorship programs. Our experienced consultants help with business planning, strategy development, and professional growth across various industries.",
  },
  {
    question: 'What areas of the US Virgin Islands do you serve?',
    answer:
      "We serve all three main islands: St. Thomas, St. John, and St. Croix. Our facilities and services are strategically located to provide convenient access across the territory.",
  },
]

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center relative isolate">
      {/* Background gradient blur */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.25rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.8%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - FAQ Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8 sm:text-5xl">
              Frequently asked questions
            </h1>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Disclosure key={index} as="div" className="border-b border-gray-900/10">
                  <DisclosureButton className="group flex w-full items-center justify-between py-6 text-left">
                    <span className="text-base font-semibold text-gray-900 pr-8 leading-7">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0">
                      <PlusIcon 
                        aria-hidden="true" 
                        className="h-6 w-6 text-gray-500 group-data-[open]:hidden" 
                      />
                      <MinusIcon 
                        aria-hidden="true" 
                        className="h-6 w-6 text-gray-500 hidden group-data-[open]:block" 
                      />
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="pb-6 pr-8">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:flex lg:items-start lg:justify-center">
            <div className="relative w-full">
              <img
                src="latin-woman-taking-selfie-at-a-carnival-party-in-t-2025-08-11-05-36-12-utc.jpg"
                alt="Person with colorful face paint and clothing"
                className="w-full h-[600px] lg:h-[700px] rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}