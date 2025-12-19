import { Users, Calendar, Clock, Activity, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
    { name: "Total Patients Today", stat: "12", icon: Users, change: "+12%", trend: "up", color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Scheduled Appointments", stat: "8", icon: Calendar, change: "+5%", trend: "up", color: "text-teal-600", bg: "bg-teal-50" },
    { name: "Active Visits", stat: "3", icon: Activity, change: "Now", trend: "neutral", color: "text-rose-600", bg: "bg-rose-50" },
    { name: "Pending Follow-ups", stat: "5", icon: Clock, change: "-2%", trend: "down", color: "text-amber-600", bg: "bg-amber-50" },
];

export function StatsCards() {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
                <div
                    key={item.name}
                    className="relative overflow-hidden rounded-2xl bg-white px-6 py-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                >
                    <div className="flex items-center justify-between">
                        <div className={cn("rounded-xl p-3 transition-colors", item.bg)}>
                            <item.icon className={cn("h-6 w-6", item.color)} aria-hidden="true" />
                        </div>
                        {item.trend !== "neutral" && (
                            <div className={cn("flex items-center text-xs font-semibold px-2 py-1 rounded-full", item.trend === "up" ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50")}>
                                {item.trend === "up" ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                                {item.change}
                            </div>
                        )}
                        {item.trend === "neutral" && (
                            <div className="flex items-center text-xs font-semibold px-2 py-1 rounded-full text-gray-600 bg-gray-100">
                                Live
                            </div>
                        )}
                    </div>


                    <div className="mt-4">
                        <p className="truncate text-sm font-medium text-gray-500">{item.name}</p>
                        <dd className="mt-1 flex items-baseline pb-1">
                            <p className="text-3xl font-bold text-gray-900 tracking-tight">{item.stat}</p>
                        </dd>
                    </div>
                </div>
            ))}
        </div>
    );
}
