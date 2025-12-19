"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Users,
    Calendar,
    Stethoscope,
    CreditCard,
    Package,
    Settings,
    LogOut,
    Activity
} from "lucide-react";

const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Patients", href: "/patients", icon: Users },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    { name: "Visits", href: "/visits/active", icon: Stethoscope }, // Fixed href to match console
    { name: "Billing", href: "/billing", icon: CreditCard },
    { name: "Inventory", href: "/inventory", icon: Package },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex bg-white h-screen w-72 flex-col border-r border-gray-100 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)] z-20 transition-all duration-300">
            {/* Brand Header */}
            <div className="flex h-20 items-center border-b border-gray-50 px-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                        <Activity className="h-6 w-6" />
                    </div>
                    <div>
                        <span className="block text-lg font-bold tracking-tight text-gray-900">Aesthetica</span>
                        <span className="block text-xs font-medium text-gray-500 uppercase tracking-widest">ClinicOS</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-1 flex-col overflow-y-auto pt-8 pb-4">
                <nav className="flex-1 space-y-1 px-4">
                    <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Main Menu</p>
                    {navigation.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    isActive
                                        ? "bg-teal-50 text-teal-700 shadow-sm"
                                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900",
                                    "group flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ease-in-out"
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        isActive ? "text-teal-600" : "text-gray-400 group-hover:text-gray-500",
                                        "mr-3 h-5 w-5 flex-shrink-0 transition-colors"
                                    )}
                                    aria-hidden="true"
                                />
                                {item.name}
                                {isActive && (
                                    <div className="ml-auto h-2 w-2 rounded-full bg-teal-600"></div>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Footer Actions */}
            <div className="border-t border-gray-50 p-4 mx-4 mb-4 space-y-2">
                <button
                    className="group flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    <Settings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                    Settings
                </button>
                <button
                    className="group flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                    <LogOut className="mr-3 h-5 w-5 text-red-400 group-hover:text-red-500" />
                    Logout
                </button>
            </div>
        </div>
    );
}
