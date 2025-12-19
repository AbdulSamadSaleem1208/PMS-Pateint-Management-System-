"use client";

import { useState } from "react";

const procedures = [
    { id: 1, name: "Laser Hair Removal", category: "Laser" },
    { id: 2, name: "Botox Injection", category: "Injectables" },
    { id: 3, name: "Chemical Peel", category: "Skin Care" },
    { id: 4, name: "Microneedling", category: "Skin Care" },
];

export function ProcedureSelector() {
    const [selected, setSelected] = useState<number[]>([]);

    const toggleProcedure = (id: number) => {
        setSelected(prev =>
            prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
        );
    };

    return (
        <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Procedures performed</h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {procedures.map((proc) => (
                        <div
                            key={proc.id}
                            onClick={() => toggleProcedure(proc.id)}
                            className={`relative flex items-center space-x-3 rounded-lg border px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 hover:border-gray-400 cursor-pointer ${selected.includes(proc.id) ? 'border-teal-500 bg-teal-50' : 'border-gray-300 bg-white'}`}
                        >
                            <div className="flex-shrink-0">
                                {/* Icon placeholder */}
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="absolute inset-0" aria-hidden="true" />
                                <p className="text-sm font-medium text-gray-900">{proc.name}</p>
                                <p className="truncate text-sm text-gray-500">{proc.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
