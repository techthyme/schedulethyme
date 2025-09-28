import { useState } from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from '@heroicons/react/20/solid'
import AddEventModal from '@/components/ui/AddEventModal'
import { EventDraft } from '@/types'

interface CalendarEvent {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  day: number; // 0-6 for week days
  color: 'blue' | 'green' | 'pink' | 'orange' | 'purple';
  attendees: string[];
  timeSlot: number; // 0-23 for hours
  duration: number; // in hours
}

interface MeetingsCalendarProps {
  title?: string;
  className?: string;
}

const weekDays = [
  { name: 'Wed', date: 10, isToday: false },
  { name: 'Thu', date: 11, isToday: false },
  { name: 'Fri', date: 12, isToday: true },
  { name: 'Sat', date: 13, isToday: false },
  { name: 'Sun', date: 14, isToday: false },
  { name: 'Mon', date: 15, isToday: false },
]

const timeSlots = [
  '08:00 AM',
  '09:00 AM', 
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM'
]

const defaultEvents: CalendarEvent[] = [
  {
    id: 1,
    title: 'Weekly Meeting',
    startTime: '08:00AM',
    endTime: '09:00AM',
    day: 0,
    color: 'pink',
    attendees: ['user1', 'user2', 'user3'],
    timeSlot: 8,
    duration: 1
  },
  {
    id: 2,
    title: 'Sprint 1',
    startTime: '10:00AM',
    endTime: '01:00PM',
    day: 0,
    color: 'blue',
    attendees: ['user1', 'user2'],
    timeSlot: 10,
    duration: 3
  },
  {
    id: 3,
    title: 'Daily Standup',
    startTime: '09:00AM',
    endTime: '12:00PM',
    day: 1,
    color: 'purple',
    attendees: ['user1', 'user2', 'user3'],
    timeSlot: 9,
    duration: 3
  },
  {
    id: 4,
    title: 'Feedback Design',
    startTime: '07:00AM',
    endTime: '08:00PM',
    day: 2,
    color: 'green',
    attendees: ['user1', 'user2', 'user3'],
    timeSlot: 7,
    duration: 1
  },
  {
    id: 5,
    title: 'Sprint 2',
    startTime: '08:00AM',
    endTime: '09:00AM',
    day: 2,
    color: 'blue',
    attendees: ['user1', 'user2'],
    timeSlot: 8,
    duration: 1
  },
  {
    id: 6,
    title: 'Prototyping',
    startTime: '10:00AM',
    endTime: '01:00PM',
    day: 2,
    color: 'green',
    attendees: ['user1', 'user2', 'user3'],
    timeSlot: 10,
    duration: 3
  },
  {
    id: 7,
    title: 'Feedback Design',
    startTime: '08:00AM',
    endTime: '11:00AM',
    day: 3,
    color: 'pink',
    attendees: ['user1', 'user2', 'user3'],
    timeSlot: 8,
    duration: 3
  },
  {
    id: 8,
    title: 'Wireframe',
    startTime: '10:00AM',
    endTime: '11:00AM',
    day: 4,
    color: 'purple',
    attendees: ['user1', 'user2', 'user3'],
    timeSlot: 10,
    duration: 1
  },
  {
    id: 9,
    title: 'High Fidelity',
    startTime: '11:00AM',
    endTime: '02:00PM',
    day: 4,
    color: 'green',
    attendees: ['user1', 'user2', 'user3'],
    timeSlot: 11,
    duration: 3
  }
]

const getEventColor = (color: CalendarEvent['color']) => {
  const colors = {
    blue: 'bg-blue-100 border-blue-200',
    green: 'bg-emerald-100 border-emerald-200', 
    pink: 'bg-pink-100 border-pink-200',
    orange: 'bg-orange-100 border-orange-200',
    purple: 'bg-purple-100 border-purple-200'
  }
  return colors[color] || colors.blue
}

export default function MeetingsCalendar({ 
  title = "Upcoming meetings",
  className = ""
}: MeetingsCalendarProps) {
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false)

  const handleAddEvent = (eventDraft: EventDraft) => {
    console.log('New event booking:', eventDraft)
    // TODO: Handle the event booking submission
  }
  return (
    <div className={`${className} bg-white rounded-lg`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
            </button>
            <h2 className="text-lg font-medium text-gray-900">January 2024</h2>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronRightIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-white hover:shadow-sm rounded-md transition">
            Daily
          </button>
          <button className="px-3 py-1 text-sm bg-white text-blue-600 shadow-sm rounded-md">
            Weekly
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-white hover:shadow-sm rounded-md transition">
            Monthly
          </button>
        </div>

        <button 
          onClick={() => setIsAddEventModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          <PlusIcon className="w-4 h-4" />
          Add Event
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="flex">
        {/* Time Column */}
        <div className="w-20 border-r border-gray-200">
          <div className="h-16 border-b border-gray-200 flex items-center justify-center text-xs text-gray-500 font-medium">
            GMT+7
          </div>
          {timeSlots.map((time, index) => (
            <div key={index} className="h-16 border-b border-gray-100 flex items-start justify-end pr-3 pt-2">
              <span className="text-xs text-gray-500">{time}</span>
            </div>
          ))}
        </div>

        {/* Days Columns */}
        <div className="flex-1 grid grid-cols-6">
          {weekDays.map((day, dayIndex) => (
            <div key={dayIndex} className="border-r border-gray-200 last:border-r-0">
              {/* Day Header */}
              <div className="h-16 border-b border-gray-200 flex flex-col items-center justify-center">
                <div className="text-lg font-semibold text-gray-900">{day.date}</div>
                <div className={`text-xs ${day.isToday ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                  {day.name}
                </div>
              </div>

              {/* Time Slots */}
              <div className="relative">
                {timeSlots.map((_, timeIndex) => (
                  <div key={timeIndex} className="h-16 border-b border-gray-100 relative">
                    {/* Events for this day and time slot */}
                    {defaultEvents
                      .filter(event => event.day === dayIndex && event.timeSlot - 8 === timeIndex)
                      .map((event) => (
                        <div
                          key={event.id}
                          className={`absolute left-1 right-1 ${getEventColor(event.color)} border rounded-md p-2 m-1 shadow-sm hover:shadow-md transition cursor-pointer`}
                          style={{
                            height: `${event.duration * 64 - 8}px`, // 64px per hour minus margins
                            zIndex: 10
                          }}
                        >
                          <div className="text-xs font-medium text-gray-900 truncate mb-1">
                            {event.title}
                          </div>
                          <div className="text-xs text-gray-600 mb-1">
                            {event.startTime} - {event.endTime}
                          </div>
                          <div className="flex items-center gap-1">
                            {event.attendees.slice(0, 3).map((_, idx) => (
                              <div
                                key={idx}
                                className="w-4 h-4 bg-gray-300 rounded-full text-xs flex items-center justify-center text-gray-600"
                              >
                                {String.fromCharCode(65 + idx)}
                              </div>
                            ))}
                            {event.attendees.length > 3 && (
                              <span className="text-xs text-gray-500">+{event.attendees.length - 3}</span>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Event Modal */}
      <AddEventModal
        isOpen={isAddEventModalOpen}
        onClose={() => setIsAddEventModalOpen(false)}
        onSubmit={handleAddEvent}
      />
    </div>
  )
}