import { CheckCircle, Clock } from "lucide-react";

const events = [
    { id: 1, content: 'Visit Completed', target: 'Laser Hair Removal', date: 'Oct 25', icon: CheckCircle, iconBackground: 'bg-green-500' },
    { id: 2, content: 'Appointment Scheduled', target: 'Consultation', date: 'Oct 20', icon: Clock, iconBackground: 'bg-gray-400' },
    { id: 3, content: 'Profile Created', target: '', date: 'Oct 20', icon: Clock, iconBackground: 'bg-gray-400' },
];

export function VisitTimeline() {
    return (
        <div className="flow-root bg-white p-6 shadow sm:rounded-lg">
            <h4 className="mb-4 text-lg font-medium text-gray-900">Activity Timeline</h4>
            <ul role="list" className="-mb-8">
                {events.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className="relative pb-8">
                            {eventIdx !== events.length - 1 ? (
                                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                                    <span
                                        className={`flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white ${event.iconBackground}`}
                                    >
                                        <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            {event.content} <span className="font-medium text-gray-900">{event.target}</span>
                                        </p>
                                    </div>
                                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                        <time dateTime={event.date}>{event.date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
