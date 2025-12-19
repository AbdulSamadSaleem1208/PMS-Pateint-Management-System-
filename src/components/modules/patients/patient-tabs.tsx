"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { VisitTimeline } from "@/components/modules/patients/visit-timeline";
import { ConsentForm } from "@/components/modules/patients/consent-form";

const tabs = [
    { name: "Overview", href: "#" },
    { name: "Visit Timeline", href: "#" },
    { name: "Consents", href: "#" },
    { name: "Photos", href: "#" },
    { name: "Billing", href: "#" },
];

export function PatientTabs() {
    const [currentTab, setCurrentTab] = useState("Overview");

    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-xl border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    value={currentTab}
                    onChange={(e) => setCurrentTab(e.target.value)}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setCurrentTab(tab.name)}
                                className={cn(
                                    currentTab === tab.name
                                        ? "border-teal-600 text-teal-700"
                                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                    "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-bold transition-colors"
                                )}
                                aria-current={currentTab === tab.name ? "page" : undefined}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="mt-6">
                {currentTab === "Overview" && (
                    <div className="rounded-2xl bg-white p-8 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] border border-gray-100">
                        <h4 className="text-lg font-bold text-gray-900">Medical History Summary</h4>
                        <div className="mt-4 space-y-4">
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <span className="text-xs font-semibold text-gray-400 uppercase">Conditions</span>
                                <p className="text-sm font-medium text-gray-900 mt-1">Mild Acne Vulgaris</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <span className="text-xs font-semibold text-gray-400 uppercase">Allergies</span>
                                <p className="text-sm font-medium text-gray-900 mt-1">None reported</p>
                            </div>
                        </div>
                    </div>
                )}
                {currentTab === "Visit Timeline" && (
                    <VisitTimeline />
                )}
                {currentTab === "Consents" && (
                    <ConsentForm />
                )}
                {currentTab !== "Overview" && currentTab !== "Visit Timeline" && currentTab !== "Consents" && (
                    <div className="rounded-2xl bg-white p-12 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-center text-center">
                        <div className="h-12 w-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl">🚧</span>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">Coming Soon</h3>
                        <p className="text-gray-500 mt-2">The {currentTab} module is currently under development.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
