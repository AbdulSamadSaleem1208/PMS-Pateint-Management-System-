import { User, Phone, Mail, Calendar, Edit, ShieldCheck } from "lucide-react";

interface PatientHeaderProps {
    patient: {
        name: string;
        dob: string;
        gender: string;
        phone: string;
        email: string;
    };
}

export function PatientHeader({ patient }: PatientHeaderProps) {
    return (
        <div className="bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 to-emerald-600 h-24"></div>
            <div className="px-6 pb-6">
                <div className="relative flex items-end -mt-10 mb-6">
                    <div className="h-20 w-20 rounded-2xl bg-white p-1 shadow-md border border-gray-100">
                        <div className="h-full w-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                            <User className="h-10 w-10" />
                        </div>
                    </div>
                    <div className="ml-4 mb-1">
                        <h3 className="text-2xl font-bold text-gray-900">{patient.name}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                            <span className="flex items-center">Male</span>
                            <span className="mx-2">•</span>
                            <span>34 Years</span>
                        </div>
                    </div>
                    <div className="ml-auto mb-2 space-x-3">
                        <button className="inline-flex items-center rounded-xl bg-white border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                            <Edit className="mr-2 h-4 w-4 text-gray-500" />
                            Edit Profile
                        </button>
                        <button className="inline-flex items-center rounded-xl bg-teal-600 border border-transparent px-4 py-2 text-sm font-medium text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-colors">
                            Start Visit
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-50 pt-6">
                    <div className="flex items-start">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mr-3">
                            <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">DOB</p>
                            <p className="text-sm font-medium text-gray-900">{patient.dob}</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg mr-3">
                            <Phone className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Phone</p>
                            <p className="text-sm font-medium text-gray-900">{patient.phone}</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="p-2 bg-orange-50 text-orange-600 rounded-lg mr-3">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Email</p>
                            <p className="text-sm font-medium text-gray-900">{patient.email}</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="p-2 bg-green-50 text-green-600 rounded-lg mr-3">
                            <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Insurance</p>
                            <p className="text-sm font-medium text-gray-900">Self Pay</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
