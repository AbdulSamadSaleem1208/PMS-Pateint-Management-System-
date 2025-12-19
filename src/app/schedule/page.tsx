import { CalendarView } from "@/components/modules/schedule/calendar-view";
import { Plus } from "lucide-react";

export default function SchedulePage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Schedule
                </h2>
                <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                    <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    New Appointment
                </button>
            </div>
            <CalendarView />
        </div>
    );
}
