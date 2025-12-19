"use client";

import { Bell, Search, UserCircle, ChevronDown } from "lucide-react";

export function TopBar() {
    return (
        <header className="sticky top-0 z-10 flex h-20 w-full items-center justify-between border-b border-gray-100 bg-white/80 backdrop-blur-md px-8">
            {/* Search Bar */}
            <div className="flex items-center flex-1 max-w-lg">
                <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-2xl border-none bg-gray-50 py-2.5 pl-10 pr-3 text-sm text-gray-900 focus:ring-0 focus:bg-white focus:shadow-sm transition-all placeholder-gray-400"
                        placeholder="Search for patients, appointments, or invoices..."
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                {/* Notifications */}
                <button className="relative rounded-full p-2 text-gray-400 hover:text-teal-600 hover:bg-teal-50 transition-colors">
                    <span className="sr-only">View notifications</span>
                    <Bell className="h-6 w-6" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white animate-pulse" />
                </button>

                <div className="h-8 w-px bg-gray-200"></div>

                {/* Profile Dropdown */}
                <div className="relative">
                    <button className="flex items-center gap-3 p-1 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-bold border-2 border-white shadow-sm">
                            SS
                        </div>
                        <div className="flex flex-col items-start hidden md:flex">
                            <span className="text-sm font-bold text-gray-900">Dr. Sarah Smith</span>
                            <span className="text-xs text-gray-500 font-medium">Head Dermatologist</span>
                        </div>
                        <ChevronDown className="h-4 w-4 text-gray-400 ml-1" />
                    </button>
                </div>
            </div>
        </header>
    );
}
