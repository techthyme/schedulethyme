"use client";
import { useState } from "react";
// import AttendanceModal from "@/components/AttendanceModal";
import { CalendarDay, CalendarMonth } from "@/types";

interface CalendarClientProps {
  calendar: CalendarDay[];
}

export default function CalendarClient({ calendar }: CalendarClientProps) {
const [selectedDate, setSelectedDate] = useState<string | null>(null);
const handleDateClick = (date: string) => {
    setSelectedDate(date);
  }; 

 

  
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="grid grid-cols-7 gap-2">
        {/* Calendar rendering logic here */}
        {calendar.map((day) => (
          <div 
            key={day.date}
            onClick={() => handleDateClick(day.date)}
            className="p-2 text-center cursor-pointer hover:bg-gray-100 rounded"
          >
            {/* Day content */}
            <div className="text-sm">
      {new Date(day.date).getDate()}
    </div>
    {day.hasEvents && (
      <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mt-1"></div>
    )}
          </div>
        ))}
      </div>
    </div>
  );