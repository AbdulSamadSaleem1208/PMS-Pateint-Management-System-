import { Check } from "lucide-react";

interface VisitStepperProps {
    steps: { name: string; status: "complete" | "current" | "upcoming" }[];
}

export function VisitStepper({ steps }: VisitStepperProps) {
    return (
        <nav aria-label="Progress">
            <ol role="list" className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
                {steps.map((step, stepIdx) => (
                    <li key={step.name} className="relative md:flex md:flex-1">
                        {step.status === "complete" ? (
                            <a href="#" className="group flex w-full items-center">
                                <span className="flex items-center px-6 py-4 text-sm font-medium">
                                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 group-hover:bg-teal-800">
                                        <Check className="h-6 w-6 text-white" aria-hidden="true" />
                                    </span>
                                    <span className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
                                </span>
                            </a>
                        ) : step.status === "current" ? (
                            <a href="#" className="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
                                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-teal-600">
                                    <span className="text-teal-600">0{stepIdx + 1}</span>
                                </span>
                                <span className="ml-4 text-sm font-medium text-teal-600">{step.name}</span>
                            </a>
                        ) : (
                            <a href="#" className="group flex items-center">
                                <span className="flex items-center px-6 py-4 text-sm font-medium">
                                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                                        <span className="text-gray-500 group-hover:text-gray-900">0{stepIdx + 1}</span>
                                    </span>
                                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                                </span>
                            </a>
                        )}

                        {stepIdx !== steps.length - 1 ? (
                            <>
                                <div className="absolute top-0 right-0 hidden h-full w-5 md:block" aria-hidden="true">
                                    <svg
                                        className="h-full w-full text-gray-300"
                                        viewBox="0 0 22 80"
                                        fill="none"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M0 -2L20 40L0 82"
                                            vectorEffect="non-scaling-stroke"
                                            stroke="currentcolor"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </>
                        ) : null}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
