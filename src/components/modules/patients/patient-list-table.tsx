"use client";

import { useState } from "react";
import { Search, Plus, Filter, MoreHorizontal, User } from "lucide-react";
import Link from "next/link";
import { Patient } from "@/types";

// Mock data (same as before, just UI upgrade)
const mockPatients: Patient[] = [
    {
        id: "1",
        full_name: "Alice Freeman",
        date_of_birth: "1990-05-12",
        gender: "female",
        phone: "+92 300 1234567",
        last_visit_date: "2023-10-25",
    },
    {
        id: "2",
        full_name: "Bob Johnson",
        date_of_birth: "1985-08-20",
        gender: "male",
        phone: "+92 321 7654321",
        last_visit_date: "2023-11-01",
    },
    {
        id: "3",
        full_name: "Charlie Davis",
        date_of_birth: "1992-12-05",
        gender: "other",
        phone: "+92 333 1122334",
        last_visit_date: "2023-09-15",
    },
];

export function PatientListTable() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPatients = mockPatients.filter((p) =>
        p.full_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-xl border-gray-200 bg-white py-3 pl-10 pr-3 leading-5 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm transition-shadow hover:bg-gray-50/50 focus:bg-white"
                        placeholder="Search patients by name, phone or MRN..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex space-x-3">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none hover:border-gray-300 transition-all"
                    >
                        <Filter className="-ml-1 mr-2 h-4 w-4 text-gray-400" aria-hidden="true" />
                        Filters
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-xl border border-transparent bg-teal-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all active:scale-95"
                    >
                        <Plus className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Add Patient
                    </button>
                </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] border border-gray-100">
                <table className="min-w-full divide-y divide-gray-50">
                    <thead className="bg-gray-50/50">
                        <tr>
                            <th scope="col" className="py-4 pl-6 pr-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500 sm:pl-6">
                                Name
                            </th>
                            <th scope="col" className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                                Phone
                            </th>
                            <th scope="col" className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                                Date of Birth
                            </th>
                            <th scope="col" className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                                Last Visit
                            </th>
                            <th scope="col" className="relative py-4 pl-3 pr-6 sm:pr-6">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 bg-white">
                        {filteredPatients.map((patient) => (
                            <tr key={patient.id} className="group hover:bg-gray-50/50 transition-colors">
                                <td className="whitespace-nowrap py-4 pl-6 pr-3 sm:pl-6">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0">
                                            <div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100">
                                                <User className="h-5 w-5" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <Link href={`/patients/${patient.id}`} className="font-semibold text-gray-900 hover:text-teal-600 transition-colors">
                                                {patient.full_name}
                                            </Link>
                                            <div className="text-xs text-gray-500">MRN: #{patient.id.padStart(5, '0')}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-600">{patient.phone}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-600">{patient.date_of_birth}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                        {patient.last_visit_date || 'N/A'}
                                    </span>
                                </td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium sm:pr-6">
                                    <button className="text-gray-400 hover:text-teal-600 transition-colors p-2 rounded-full hover:bg-teal-50">
                                        <MoreHorizontal className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
