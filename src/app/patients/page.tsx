import { PatientListTable } from "@/components/modules/patients/patient-list-table";

export default function PatientsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Patients
                </h2>
                <p className="mt-1 text-sm text-gray-500">Manage patient records and history.</p>
            </div>
            <PatientListTable />
        </div>
    );
}
