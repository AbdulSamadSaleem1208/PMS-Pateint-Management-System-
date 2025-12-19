import { Clock, MoreHorizontal } from "lucide-react";

const visits = [
    {
        id: 1,
        patient: "Alice Freeman",
        procedure: "Laser Hair Removal",
        doctor: "Dr. Smith",
        status: "In Progress",
        startTime: "10:30 AM",
        duration: "45m",
        avatar: "AF"
    },
    {
        id: 2,
        patient: "Bob Johnson",
        procedure: "Botox Consultation",
        doctor: "Dr. Jones",
        status: "Waiting",
        startTime: "11:00 AM",
        duration: "15m",
        avatar: "BJ"
    },
    {
        id: 3,
        patient: "Charlie Davis",
        procedure: "Facial Treatment",
        doctor: "Nurse Sarah",
        status: "In Progress",
        startTime: "10:45 AM",
        duration: "60m",
        avatar: "CD"
    },
];

export function ActiveVisits() {
    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] border border-gray-100">
            <div className="border-b border-gray-50 px-6 py-5 flex items-center justify-between">
                <h3 className="text-base font-bold leading-6 text-gray-900 tracking-tight">Active Visits</h3>
                <button className="text-xs font-semibold text-teal-600 hover:text-teal-700 uppercase tracking-wider">View All</button>
            </div>
            <ul role="list" className="divide-y divide-gray-50">
                {visits.map((visit) => (
                    <li key={visit.id} className="px-6 py-4 hover:bg-gray-50/50 transition-colors">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 border border-white shadow-sm ring-1 ring-gray-50">
                                    {visit.avatar}
                                </div>
                                <div className="flex flex-col">
                                    <p className="truncate text-sm font-bold text-gray-900">{visit.patient}</p>
                                    <p className="text-xs font-medium text-gray-500">
                                        {visit.procedure} <span className="text-gray-300 mx-1">•</span> {visit.doctor}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex flex-col items-end">
                                    <span
                                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${visit.status === "In Progress"
                                                ? "bg-green-50 text-green-700 border border-green-100"
                                                : "bg-amber-50 text-amber-700 border border-amber-100"
                                            }`}
                                    >
                                        {visit.status === "In Progress" && <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />}
                                        {visit.status}
                                    </span>
                                    <div className="mt-1 flex items-center text-xs text-gray-400 font-medium">
                                        <Clock className="mr-1 h-3 w-3" />
                                        Started {visit.startTime}
                                    </div>
                                </div>
                                <button className="text-gray-300 hover:text-gray-500 transition-colors">
                                    <MoreHorizontal className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
