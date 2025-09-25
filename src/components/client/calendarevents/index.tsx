"use client";
import { useState } from "react";
// import AttendanceModal from "@/components/AttendanceModal";
import { CalendarDay, CalendarMonth } from "@/types";
import calendar from "@/components/server/calendar";

interface CalendarClientProps {
  calendar: CalendarDay[];
}

export default function CalendarClient({ calendar }: CalendarClientProps) {
const [selectedDate, setSelectedDate] = useState<string | null>(null);
const handleDateClick = (date: string) => {
    setSelectedDate(date);
  }; 

 

  
  };

function handleDateClick(date: any): void {
  throw new Error("Function not implemented.");
}

  return (
    <>
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="grid grid-cols-7 gap-2">
     
      </div>
    </div>
    </>
  );
};