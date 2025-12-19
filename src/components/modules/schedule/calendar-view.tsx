"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock Data
const weekDays = ["Mon 20", "Tue 21", "Wed 22", "Thu 23", "Fri 24", "Sat 25"];
const hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

const appointments = [
    { id: 1, title: "Laser - Alice", day: "Mon 20", hour: "10 AM", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { id: 2, title: "Botox - Bob", day: "Wed 22", hour: "2 PM", color: "bg-green-100 text-green-700 border-green-200" },
    { id: 3, title: "Consult - Charlie", day: "Fri 24", hour: "11 AM", color: "bg-purple-100 text-purple-700 border-purple-200" },
];

export function CalendarView() {
    return (
        <div className="flex flex-col h-[600px] bg-white text-gray-700 shadow rounded-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">October 2023</h2>
                <div className="flex items-center space-x-2">
                    <button className="p-1 rounded-full hover:bg-gray-100"><ChevronLeft className="h-5 w-5" /></button>
                    <button className="px-3 py-1 text-sm font-medium border rounded-md hover:bg-gray-50">Today</button>
                    <button className="p-1 rounded-full hover:bg-gray-100"><ChevronRight className="h-5 w-5" /></button>
                </div>
            </div>

            {/* Grid */}
            <div className="flex flex-1 overflow-auto">
                {/* Sidebar Time Labels */}
                <div className="w-16 flex-shrink-0 border-r border-gray-200 bg-gray-50">
                    <div className="h-10 border-b border-gray-200"></div> {/* Spacer for header */}
                    {hours.map(hour => (
                        <div key={hour} className="h-20 border-b border-gray-100 text-xs text-gray-500 flex items-center justify-center">
                            {hour}
                        </div>
                    ))}
                </div>

                {/* Main Grid */}
                <div className="flex-1 grid grid-cols-6 min-w-[800px]">
                    {/* Day Headers */}
                    {weekDays.map(day => (
                        <div key={day} className="h-10 border-b border-r border-gray-200 bg-gray-50 text-sm font-medium text-gray-700 flex items-center justify-center">
                            {day}
                        </div>
                    ))}

                    {/* Cells */}
                    {hours.map(hour => (
                        weekDays.map(day => {
                            const appt = appointments.find(a => a.day === day && a.hour === hour);
                            return (
                                <div key={`${day}-${hour}`} className="h-20 border-b border-r border-gray-100 relative group hover:bg-gray-50 transition-colors">
                                    {/* Add logic to detect click or display items */}
                                    {appt && (
                                        <div className={`absolute inset-1 m-1 p-2 rounded text-xs font-semibold border ${appt.color} overflow-hidden`}>
                                            {appt.title}
                                        </div>
                                    )}
                                </div>
                            )
                        })
                    ))}
                </div>
            </div>
        </div>
    );
}
