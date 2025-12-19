export type UserRole = 'admin' | 'doctor' | 'nurse' | 'receptionist';

export interface User {
    id: string;
    email: string;
    full_name: string;
    role: UserRole;
    avatar_url?: string;
}

export interface Patient {
    id: string;
    full_name: string;
    date_of_birth: string;
    gender: 'male' | 'female' | 'other';
    phone: string;
    email?: string;
    address?: string;
    medical_history_summary?: string;
    last_visit_date?: string;
}

export type AppointmentStatus = 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';

export interface Appointment {
    id: string;
    patient_id: string;
    patient_name: string; // denormalized for easy display
    doctor_id: string;
    doctor_name: string;
    start_time: string; // ISO string
    end_time: string; // ISO string
    status: AppointmentStatus;
    notes?: string;
    type: 'consultation' | 'procedure' | 'follow-up';
}

export type VisitStatus = 'in-progress' | 'completed' | 'cancelled';

export interface Visit {
    id: string;
    appointment_id: string;
    patient_id: string;
    provider_id: string;
    date: string;
    status: VisitStatus;
    procedures: string[];
    clinical_notes?: string;
    images?: string[]; // URLs
}
