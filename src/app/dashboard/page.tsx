import { StatsCards } from "@/components/modules/dashboard/stats-cards";
import { ActiveVisits } from "@/components/modules/dashboard/active-visits";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Dashboard
                </h2>
                <p className="mt-1 text-sm text-gray-500">Overview of today's clinic activity.</p>
            </div>

            <StatsCards />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <ActiveVisits />

                {/* Placeholder for Appointments List or Notifications */}
                <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Notifications & Alerts</h3>
                    </div>
                    <div className="p-4">
                        <div className="rounded-md bg-yellow-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    {/* Icon */}
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-yellow-800">Low Stock Alert</h3>
                                    <div className="mt-2 text-sm text-yellow-700">
                                        <p>Botox Type A is running low (3 units remaining).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
