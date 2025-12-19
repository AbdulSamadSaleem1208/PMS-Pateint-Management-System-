"use client";

import { Save } from "lucide-react";

export function ConsentForm() {
    return (
        <div className="space-y-6">
            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Laser Treatment Consent</h3>
                        <p className="mt-1 text-sm text-gray-500">v1.2 - Effective Oct 2023</p>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="h-64 overflow-y-auto rounded-md border border-gray-200 p-4 text-sm text-gray-700 bg-gray-50">
                            <p className="mb-2 font-bold">Informed Consent for Laser Hair Removal</p>
                            <p className="mb-2">I authorize Dr. Smith and their staff to perform laser hair removal treatment...</p>
                            <p className="mb-2">I understand the risks include redness, swelling, and rare pigment changes...</p>
                            <p className="mb-2">I have been given the opportunity to ask questions...</p>
                            <p>[... full legal text ...]</p>
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700">Patient Signature</label>
                            <div className="mt-1 h-32 w-full rounded-md border-2 border-dashed border-gray-300 flex items-center justify-center bg-white">
                                <span className="text-gray-400 italic">Digital Signature Pad Area</span>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700"
                            >
                                <Save className="-ml-1 mr-2 h-5 w-5" />
                                Save Consent
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
