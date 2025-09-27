'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'



const timeline = [
  {
    name: 'Established ScheduleThyme',
    description:
      'Founded our scheduling platform to serve the unique needs of businesses and organizations across the US Virgin Islands.',
    date: 'Jan 2022',
    dateTime: '2022-01',
  },
  {
    name: 'Partnered with local facilities',
    description:
      'Built partnerships with conference centers, training facilities, and consulting spaces across St. Thomas, St. John, and St. Croix.',
    date: 'Jun 2022',
    dateTime: '2022-06',
  },
  {
    name: 'Launched training programs',
    description:
      'Introduced comprehensive professional development workshops and certification programs for Caribbean professionals.',
    date: 'Nov 2022',
    dateTime: '2022-11',
  },
  {
    name: 'Expanded consulting services',
    description:
      'Added one-on-one business consulting and mentorship programs to support local entrepreneurs and growing businesses.',
    date: 'Apr 2023',
    dateTime: '2023-04',
  },
]
const jobOpenings = [
  {
    id: 1,
    role: 'Facilities Coordinator',
    href: '#',
    description:
      'Manage scheduling and coordination of meeting spaces, conference rooms, and training facilities across the USVI.',
    salary: '$45,000 - $55,000 USD',
    location: 'St. Thomas, USVI',
  },
  {
    id: 2,
    role: 'Training Program Manager',
    href: '#',
    description:
      'Develop and oversee professional development workshops, certification programs, and educational events.',
    salary: '$50,000 - $65,000 USD',
    location: 'St. Croix, USVI',
  },
  {
    id: 3,
    role: 'Business Consultant',
    href: '#',
    description:
      'Provide strategic guidance and mentorship to local entrepreneurs and growing businesses in the Caribbean.',
    salary: '$60,000 - $75,000 USD',
    location: 'Remote/USVI',
  },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="multiethnic-businesspeople-with-medical-face-mask-2025-02-19-13-02-31-utc"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
               
                  
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-5xl font-extralight tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
                Connecting Caribbean professionals through seamless space scheduling
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg font-light text-pretty text-gray-500 sm:text-xl/8">
                  ScheduleThyme brings together businesses, professionals, and organizations across the US Virgin Islands through our comprehensive facility scheduling platform. From conference centers in Charlotte Amalie to training spaces in Christiansted, we make it easy to find, book, and manage the perfect space for your next meeting, workshop, or consulting session.
                </p>
              </div>
              <img
                alt=""
                src="business-people-sitting-at-meeting-2025-02-25-02-26-51-utc.jpg"
                className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
        </div>


        /
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">Our community</h2>
                <p className="mt-6 text-xl/8 text-gray-700">
                  We're proud to serve the vibrant business community of the US Virgin Islands. Our team understands the unique challenges and opportunities of doing business in the Caribbean, and we're committed to supporting local growth and development.
                </p>
                <p className="mt-6 text-base/7 text-gray-600">
                  From small startups in Cruz Bay to established enterprises in Frederiksted, we provide the tools and spaces needed to foster collaboration, learning, and business success across all three major islands.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt=""
                    src="multiethnic-businesspeople-with-medical-face-mask-2025-02-19-13-02-31-utc.JPG"
                    className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                    <img
                      alt=""
                      src="asia-businesswomen-using-laptop-talk-to-colleagues-2024-11-02-12-22-03-utc.jpg"
                      className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src="a-group-of-people-in-a-pub-drinking-and-talking-2024-10-22-03-35-41-utc.jpg"
                      className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      alt=""
                      src="eden-island-seychelles-2024-12-16-04-53-59-utc.jpg"
                      className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-light tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Empowering Caribbean businesses through accessible facilities and training
            </h2>
            <p className="mt-6 text-base/7 text-gray-600">
              Our mission is to strengthen the business ecosystem of the US Virgin Islands by providing easy access to professional facilities, world-class training programs, and expert consulting services. We believe that great spaces and quality education are the foundation of economic growth.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-light tracking-tight text-gray-900">150+</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-light tracking-tight text-gray-900">Active facilities</p>
                <p className="mt-2 text-base/7 text-gray-600">Conference rooms, training centers, and meeting spaces across the USVI.</p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
              <p className="flex-none text-3xl font-light tracking-tight text-white">2,500+</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-light tracking-tight text-white">
                  Professionals trained through our certification and workshop programs.
                </p>
                <p className="mt-2 text-base/7 text-gray-400">
                  Building skills and expertise across the Caribbean business community.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
              <p className="flex-none text-3xl font-light tracking-tight text-white">95%</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-light tracking-tight text-white">Customer satisfaction rate</p>
                <p className="mt-2 text-base/7 text-indigo-200">
                  Our clients consistently rate their experience with our facilities and services as exceptional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-light tracking-tight text-pretty text-gray-900 sm:text-4xl">
                Join our mission to strengthen the Caribbean business community
              </h2>
              <p className="mt-6 text-xl/8 text-gray-600">
                We're looking for passionate individuals who understand the unique opportunities and challenges of doing business in the US Virgin Islands. Help us build the infrastructure that supports local economic growth and professional development.
              </p>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
                className="mt-16 aspect-6/5 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 lg:aspect-auto lg:h-138"
              />
            </div>
            <div className="w-full lg:max-w-xl lg:flex-auto">
              <h3 className="sr-only">Job openings</h3>
              <ul className="-my-8 divide-y divide-gray-100">
                {jobOpenings.map((opening) => (
                  <li key={opening.id} className="py-8">
                    <dl className="relative flex flex-wrap gap-x-3">
                      <dt className="sr-only">Role</dt>
                      <dd className="w-full flex-none text-lg font-light tracking-tight text-gray-900">
                        <a href={opening.href}>
                          {opening.role}
                          <span aria-hidden="true" className="absolute inset-0" />
                        </a>
                      </dd>
                      <dt className="sr-only">Description</dt>
                      <dd className="mt-2 w-full flex-none text-base/7 text-gray-600">{opening.description}</dd>
                      <dt className="sr-only">Salary</dt>
                      <dd className="mt-4 text-base/7 font-light text-gray-900">{opening.salary}</dd>
                      <dt className="sr-only">Location</dt>
                      <dd className="mt-4 flex items-center gap-x-3 text-base/7 text-gray-500">
                        <svg viewBox="0 0 2 2" aria-hidden="true" className="size-0.5 flex-none fill-gray-300">
                          <circle r={1} cx={1} cy={1} />
                        </svg>
                        {opening.location}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex border-t border-gray-100 pt-8">
                <a href="#" className="text-sm/6 font-light text-indigo-600 hover:text-indigo-500">
                  View all openings <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
