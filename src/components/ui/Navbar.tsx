import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Events', href: '/events', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Dashboard', href: 'profile', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-white/95 backdrop-blur-sm border-b border-neutral-200/50 dark:bg-neutral-900/95 dark:border-neutral-700/50 shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between">
            <div className="flex shrink-0 items-center">
              <span className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">ScheduleThyme</span>
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'text-primary-600 dark:text-primary-400 font-semibold'
                        : 'text-neutral-700 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400',
                      'px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Future: Profile dropdown or login button */}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-white/95 backdrop-blur-sm border-t border-neutral-200/50 dark:bg-neutral-900/95 dark:border-neutral-700/50">
        <div className="space-y-1 px-4 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-primary-50 text-primary-700 border-primary-500 dark:bg-primary-900/20 dark:text-primary-400 dark:border-primary-600'
                  : 'text-neutral-900 hover:bg-neutral-100 hover:text-primary-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-primary-400',
                'block rounded-lg px-4 py-3 text-base font-medium transition-colors border-l-4 border-transparent',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
