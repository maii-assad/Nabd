export interface PatientListItem {
    id: string;
    name: string;
    subtitle: string;
    patientId: string;
    demographics: string;
    lastVisit: string;
    upcoming: string;
    status: 'Active' | 'Disabled';
    avatar: string;
}

export interface PatientProfile {
    id: string;
    name: string;
    patientId: string;
    gender: string;
    age: number;
    dateOfBirth: string;
    nationalId: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    country: string;
    bloodType: string;
    insuranceType: string;
    status: 'Active' | 'Disabled';
    lastVisit: string;
    upcomingAppointment: string;
    emergencyContact: {
        name: string;
        relationship: string;
        phone: string;
    };
    allergies: string[];
    chronicDiseases: string[];
    currentMedications: string;
    avatar: string;
}

export interface PatientFilters {
    gender: string;
    status: string;
    lastVisit: string;
    upcomingAppointment: string;
}