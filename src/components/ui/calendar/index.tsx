"use client";
import { useState, useMemo } from "react";
import { Event } from "@/types";

interface CalendarProps {
  events: Event[];
  onDateClick?: (date: Date, events: Event[]) => void;
  onDateHover?: (date: Date, events: Event[]) => void;
  selectedDate?: Date | null;
}

interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  hasEvents: boolean;
  events: Event[];
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function Calendar({ 
  events, 
  onDateClick, 
  onDateHover, 
  selectedDate 
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredDay, setHoveredDay] = useState<CalendarDay | null>(null);
  
  const { currentMonth, nextMonth, prevMonth } = useMemo(() => {
    const current = new Date(currentDate);
    const next = new Date(current);
    next.setMonth(current.getMonth() + 1);
    const prev = new Date(current);
    prev.setMonth(current.getMonth() - 1);
    
    return {
      currentMonth: current,
      nextMonth: next,
      prevMonth: prev
    };
  }, [currentDate]);

  const generateCalendarDays = (targetDate: Date): CalendarDay[] => {
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth();
    
    // First day of the month and last day
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Get the day of week for first day (0 = Sunday)
    const firstDayOfWeek = firstDay.getDay();
    
    const days: CalendarDay[] = [];
    
    // Add previous month's trailing days
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = prevMonth.getDate() - i;
      days.push({
        date,
        isCurrentMonth: false,
        hasEvents: false,
        events: []
      });
    }
    
    // Add current month's days
    for (let date = 1; date <= lastDay.getDate(); date++) {
      const dayTimestamp = new Date(year, month, date).getTime();
      const dayEvents = events.filter(event => {
        const eventDate = new Date(event.dateStart * 1000);
        return eventDate.getDate() === date && 
               eventDate.getMonth() === month && 
               eventDate.getFullYear() === year;
      });
      
      days.push({
        date,
        isCurrentMonth: true,
        hasEvents: dayEvents.length > 0,
        events: dayEvents
      });
    }
    
    // Add next month's leading days to complete the grid
    const totalCells = Math.ceil(days.length / 7) * 7;
    let nextDate = 1;
    while (days.length < totalCells) {
      days.push({
        date: nextDate,
        isCurrentMonth: false,
        hasEvents: false,
        events: []
      });
      nextDate++;
    }
    
    return days;
  };

  const currentMonthDays = generateCalendarDays(currentMonth);
  const nextMonthDays = generateCalendarDays(nextMonth);

  const goToPrevious = () => {
    setCurrentDate(prevMonth);
  };

  const goToNext = () => {
    setCurrentDate(nextMonth);
  };

  const renderCalendarGrid = (days: CalendarDay[], monthLabel: string) => (
    <div className="flex-1 min-w-0">
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-8 text-center">
        {monthLabel}
      </h3>
      
      {/* Day headers */}
      <div className="grid grid-cols-7 gap-0 mb-2">
        {DAYS.map(day => (
          <div key={day} className="p-2 text-center">
            <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {day}
            </span>
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-0">
        {days.map((day, index) => {
          const dayDate = new Date(
            monthLabel.includes(MONTHS[currentMonth.getMonth()]) ? currentMonth.getFullYear() : nextMonth.getFullYear(), 
            monthLabel.includes(MONTHS[currentMonth.getMonth()]) ? currentMonth.getMonth() : nextMonth.getMonth(), 
            day.date
          );
          const isSelected = selectedDate && 
            selectedDate.getDate() === day.date && 
            selectedDate.getMonth() === dayDate.getMonth() && 
            selectedDate.getFullYear() === dayDate.getFullYear();
          
          return (
            <div key={index} className="aspect-square p-1 relative">
              <div
                className={`
                  w-full h-full flex items-center justify-center rounded-full text-sm font-medium transition-all relative
                  ${day.isCurrentMonth 
                    ? 'text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800' 
                    : 'text-neutral-300 dark:text-neutral-600'
                  }
                  ${day.hasEvents 
                    ? 'bg-primary-500 text-white hover:bg-primary-600' 
                    : ''
                  }
                  ${isSelected 
                    ? 'ring-2 ring-secondary-500 ring-offset-2 dark:ring-offset-neutral-900' 
                    : ''
                  }
                  cursor-pointer
                `}
                onClick={() => {
                  if (day.isCurrentMonth && onDateClick) {
                    onDateClick(dayDate, day.events);
                  }
                }}
                onMouseEnter={() => {
                  if (day.isCurrentMonth && day.hasEvents) {
                    setHoveredDay(day);
                    if (onDateHover) {
                      onDateHover(dayDate, day.events);
                    }
                  }
                }}
                onMouseLeave={() => {
                  setHoveredDay(null);
                }}
              >
                {day.date}
                {day.hasEvents && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-secondary-400 rounded-full border-2 border-white dark:border-neutral-900 text-xs flex items-center justify-center text-white font-bold">
                    {day.events.length}
                  </div>
                )}
              </div>
              
              {/* Hover preview */}
              {hoveredDay === day && day.hasEvents && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-white dark:bg-neutral-800 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700 p-3 min-w-64 max-w-80">
                  <div className="text-sm font-medium text-neutral-900 dark:text-white mb-2">
                    {day.events.length} event{day.events.length > 1 ? 's' : ''} on {MONTHS[dayDate.getMonth()]} {day.date}
                  </div>
                  <div className="space-y-2">
                    {day.events.slice(0, 3).map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary-500 mt-1.5 flex-shrink-0"></div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-neutral-900 dark:text-white truncate">
                            {event.title}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
                            {event.location || event.place}
                          </div>
                        </div>
                      </div>
                    ))}
                    {day.events.length > 3 && (
                      <div className="text-xs text-neutral-500 dark:text-neutral-500 text-center">
                        +{day.events.length - 3} more event{day.events.length - 3 > 1 ? 's' : ''}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl mb-4">
            Availability
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Prices may increase on weekends or holidays
          </p>
        </div>

        {/* Calendar Navigation and Grid */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Previous month"
            >
              <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="text-center">
              <span className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
                {currentMonth.getFullYear()}
              </span>
            </div>
            
            <button
              onClick={goToNext}
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Next month"
            >
              <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Two month grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {renderCalendarGrid(
              currentMonthDays,
              `${MONTHS[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`
            )}
            {renderCalendarGrid(
              nextMonthDays,
              `${MONTHS[nextMonth.getMonth()]} ${nextMonth.getFullYear()}`
            )}
          </div>
        </div>
      </div>
    </div>
  );
}