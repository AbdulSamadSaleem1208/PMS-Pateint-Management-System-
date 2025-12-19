import { PatientHeader } from "@/components/modules/patients/patient-header";
import { PatientTabs } from "@/components/modules/patients/patient-tabs";

export default function PatientProfilePage({ params }: { params: { id: string } }) {
    // Mock fetch based on ID
    const patient = {
        name: "Alice Freeman",
        dob: "1990-05-12",
        gender: "Female",
        phone: "+92 300 1234567",
        email: "alice@example.com",
        id: params.id
    };

    return (
        <div className="space-y-6">
            <PatientHeader patient={patient} />
            <PatientTabs />
        </div>
    );
}
