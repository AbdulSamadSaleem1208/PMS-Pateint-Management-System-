"use client";

import { VisitStepper } from "./visit-stepper";
import { ProcedureSelector } from "./procedure-selector";
import { ClinicalNotes } from "./clinical-notes";
import { Camera, Save } from "lucide-react";

const steps = [
    { name: 'Check-In', status: 'complete' },
    { name: 'Procedures', status: 'current' },
    { name: 'Notes & Photos', status: 'upcoming' },
    { name: 'Checkout', status: 'upcoming' },
] as const;

export default function VisitConsole({ visitId }: { visitId: string }) {
    // In a real app, steps status would be dynamic
    // @ts-ignore - suppressing readonly tuple mismatch for mock
    const currentSteps = steps as any;

    return (
        <div className="space-y-6">
            <div className="md:flex md:items-center md:justify-between">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Active Visit: Alice Freeman
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">Visit ID: {visitId} • Dr. Sarah Smith</p>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                    >
                        Cancel Visit
                    </button>
                    <button
                        type="button"
                        className="ml-3 inline-flex items-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700"
                    >
                        <Save className="-ml-1 mr-2 h-5 w-5" />
                        Save Progress
                    </button>
                </div>
            </div>

            <VisitStepper steps={currentSteps} />

            <ProcedureSelector />

            <ClinicalNotes />

            {/* Photography Placeholder */}
            <div className="bg-white shadow sm:rounded-lg mt-6">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Clinical Photography</h3>
                    <button className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-500">
                        <Camera className="mr-2 h-4 w-4" />
                        Add Photo
                    </button>
                </div>
                <div className="px-4 py-5 sm:p-6 text-center text-gray-500 border-t border-gray-100">
                    No photos uploaded yet.
                </div>
            </div>

            <div className="flex justify-end pt-5">
                <button
                    type="button"
                    className="ml-3 inline-flex items-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700"
                >
                    Complete Visit
                </button>
            </div>
        </div>
    );
}
