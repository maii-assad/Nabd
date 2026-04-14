import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopBar from '../TopBar';
import {
    MapPin,
    Mail,
    Phone,
    Calendar,
    ShieldCheck,
    History,
    Heart,
    AlertTriangle,
    FileText
} from 'lucide-react';

interface PatientProfile {
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

const mockPatientData: Record<string, PatientProfile> = {
    '1': {
        id: '1',
        name: 'Sara Magdy Mohamed',
        patientId: '#P-45',
        gender: 'Female',
        age: 32,
        dateOfBirth: '03/15/1992',
        nationalId: 'XXX-XX-3422',
        phone: '+1 (555) 234-5678',
        email: 'sara.magdy@email.com',
        address: '123 Main St, Apartment 5A',
        city: 'Springfield',
        country: 'Egypt',
        bloodType: 'A+',
        insuranceType: 'Private Insurance',
        status: 'Active',
        lastVisit: 'Jan 12, 2024',
        upcomingAppointment: 'Feb 15, 2024',
        emergencyContact: {
            name: 'Ahmed Magdy',
            relationship: 'Brother',
            phone: '+1 (555) 876-5432'
        },
        allergies: ['Penicillin', 'Peanuts'],
        chronicDiseases: ['Type 2 Diabetes'],
        currentMedications: 'Metformin 500mg - Twice daily',
        avatar: 'https://i.pravatar.cc/150?img=5'
    },
    '2': {
        id: '2',
        name: 'Sara Magdy Mohamed',
        patientId: '#P-46',
        gender: 'Female',
        age: 32,
        dateOfBirth: '03/15/1992',
        nationalId: 'XXX-XX-3422',
        phone: '+1 (555) 234-5678',
        email: 'sara.magdy2@email.com',
        address: '456 Oak Ave',
        city: 'Springfield',
        country: 'Egypt',
        bloodType: 'B+',
        insuranceType: 'Self Pay',
        status: 'Active',
        lastVisit: 'Jan 12, 2024',
        upcomingAppointment: '-',
        emergencyContact: {
            name: 'Mohamed Ali',
            relationship: 'Father',
            phone: '+1 (555) 111-2222'
        },
        allergies: [],
        chronicDiseases: [],
        currentMedications: 'None',
        avatar: 'https://i.pravatar.cc/150?img=9'
    },
    '3': {
        id: '3',
        name: 'Sara Magdy Mohamed',
        patientId: '#P-47',
        gender: 'Female',
        age: 32,
        dateOfBirth: '03/15/1992',
        nationalId: 'XXX-XX-3422',
        phone: '+1 (555) 234-5678',
        email: 'sara.magdy3@email.com',
        address: '789 Elm St',
        city: 'Springfield',
        country: 'Egypt',
        bloodType: 'O+',
        insuranceType: 'Government Insurance',
        status: 'Disabled',
        lastVisit: 'Jan 12, 2024',
        upcomingAppointment: 'Feb 15, 2024',
        emergencyContact: {
            name: 'Fatma Hassan',
            relationship: 'Mother',
            phone: '+1 (555) 333-4444'
        },
        allergies: ['Sulfa Drugs'],
        chronicDiseases: ['Hypertension', 'Asthma'],
        currentMedications: 'Lisinopril 10mg, Albuterol inhaler',
        avatar: 'https://i.pravatar.cc/150?img=10'
    },
    '4': {
        id: '4',
        name: 'Sara Magdy Mohamed',
        patientId: '#P-48',
        gender: 'Female',
        age: 32,
        dateOfBirth: '03/15/1992',
        nationalId: 'XXX-XX-3422',
        phone: '+1 (555) 234-5678',
        email: 'sara.magdy4@email.com',
        address: '321 Pine Rd',
        city: 'Springfield',
        country: 'Egypt',
        bloodType: 'AB+',
        insuranceType: 'Private Insurance',
        status: 'Disabled',
        lastVisit: 'Jan 12, 2024',
        upcomingAppointment: 'Feb 15, 2024',
        emergencyContact: {
            name: 'Ali Hassan',
            relationship: 'Husband',
            phone: '+1 (555) 555-6666'
        },
        allergies: ['Latex', 'Aspirin'],
        chronicDiseases: ['Rheumatoid Arthritis'],
        currentMedications: 'Methotrexate 15mg weekly',
        avatar: 'https://i.pravatar.cc/150?img=12'
    },
    '5': {
        id: '5',
        name: 'Sara Magdy Mohamed',
        patientId: '#P-49',
        gender: 'Female',
        age: 32,
        dateOfBirth: '03/15/1992',
        nationalId: 'XXX-XX-3422',
        phone: '+1 (555) 234-5678',
        email: 'sara.magdy5@email.com',
        address: '654 Cedar Ln',
        city: 'Springfield',
        country: 'Egypt',
        bloodType: 'A-',
        insuranceType: 'Self Pay',
        status: 'Active',
        lastVisit: 'Jan 12, 2024',
        upcomingAppointment: 'Feb 15, 2024',
        emergencyContact: {
            name: 'Nour Magdy',
            relationship: 'Sister',
            phone: '+1 (555) 777-8888'
        },
        allergies: ['Shellfish'],
        chronicDiseases: [],
        currentMedications: 'None',
        avatar: 'https://i.pravatar.cc/150?img=16'
    }
};

const PatientProfileDetail = ({ onMenuClick }: { onMenuClick: () => void }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [patient, setPatient] = useState<PatientProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            if (id && mockPatientData[id]) {
                setPatient(mockPatientData[id]);
            } else {
                setPatient(mockPatientData['1']);
            }
            setLoading(false);
        }, 400);
    }, [id]);

    if (loading) {
        return (
            <div className="flex flex-col h-full bg-slate-50 relative font-sans w-full">
                <TopBar
                    title={
                        <span className="text-slate-400">
                            User Management <span className="mx-2">&rsaquo;</span>
                            <span className="text-slate-900">Patient Profile</span>
                        </span> as any
                    }
                    onMenuClick={onMenuClick}
                    onAddUserClick={() => { }}
                />
                <div className="flex-1 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            </div>
        );
    }

    if (!patient) return null;

    return (
        <div className="flex flex-col flex-1 h-full w-full bg-slate-50 relative font-sans overflow-hidden">
            <TopBar
                title={
                    <span className="text-slate-400">
                        <span
                            className="cursor-pointer hover:text-slate-600 transition-colors"
                            onClick={() => navigate('/dashboard/users')}
                        >
                            User Management
                        </span>
                        <span className="mx-2">&rsaquo;</span>
                        <span className="text-slate-900">Patient Profile</span>
                    </span> as any
                }
                onMenuClick={onMenuClick}
                onAddUserClick={() => { }}
            />

            <div className="flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-[1200px] mx-auto space-y-6 md:space-y-8 pb-10">

                    {/* Header Section */}
                    <div className="bg-white rounded-[24px] p-6 lg:p-10 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-6 md:gap-8 relative">
                        <button className="absolute top-6 right-6 flex items-center gap-2 border border-slate-200 rounded-lg px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-50 transition-colors">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            Edit
                        </button>

                        <div className="relative shrink-0">
                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full p-2 border-2 border-blue-50">
                                <img src={patient.avatar} alt={patient.name} className="w-full h-full object-cover rounded-full bg-slate-100" />
                            </div>
                            {patient.status === 'Active' && (
                                <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></div>
                            )}
                        </div>

                        <div className="flex-1 text-center md:text-left pt-2 md:pt-0">
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-2">
                                <h1 className="text-3xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{patient.name}</h1>
                                <span className="bg-[#eff6ff] text-blue-600 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider">
                                    Patient {patient.patientId}
                                </span>
                            </div>

                            <p className="text-base text-slate-400 font-bold mb-6">
                                {patient.gender}, {patient.age} years old <span className="mx-2">&bull;</span> Blood Type: {patient.bloodType}
                            </p>

                            <div className="flex flex-wrap flex-col md:flex-row items-center justify-center md:justify-start gap-3">
                                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                                    <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                                    <span className="text-sm font-bold text-slate-600 truncate">{patient.phone}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                                    <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                                    <span className="text-sm font-bold text-slate-600 truncate">{patient.email}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                                    <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                                    <span className="text-sm font-bold text-slate-600 truncate">{patient.city}, {patient.country}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

                        {/* Personal Information */}
                        <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                            <div className="px-8 py-6 border-b border-slate-100/60">
                                <h2 className="text-xl font-extrabold text-slate-900 text-center tracking-tight">Personal Information</h2>
                            </div>
                            <div className="p-8 space-y-6 flex-1">
                                <div>
                                    <p className="text-xs font-bold text-[#b0bec5] mb-1">Full Name</p>
                                    <p className="text-base font-bold text-slate-900">{patient.name}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#b0bec5] mb-1">Patient ID</p>
                                    <p className="text-base font-bold text-slate-900">{patient.patientId}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#b0bec5] mb-1">National ID</p>
                                    <p className="text-base font-bold text-slate-900">{patient.nationalId}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#b0bec5] mb-1">Date of Birth</p>
                                    <p className="text-base font-bold text-slate-900">{patient.dateOfBirth}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#b0bec5] mb-1">Gender</p>
                                    <p className="text-base font-bold text-slate-900">{patient.gender}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#b0bec5] mb-1">Phone Number</p>
                                    <p className="text-base font-bold text-slate-900">{patient.phone}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#b0bec5] mb-1">Email Address</p>
                                    <p className="text-base font-bold text-slate-900 break-all">{patient.email}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#b0bec5] mb-1">Address</p>
                                    <p className="text-base font-bold text-slate-900">{patient.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Medical Information */}
                        <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                            <div className="px-8 py-6 border-b border-slate-100/60">
                                <h2 className="text-xl font-extrabold text-slate-900 text-center tracking-tight">Medical Information</h2>
                            </div>
                            <div className="p-8 space-y-6 flex-1">
                                <div>
                                    <p className="text-xs font-bold text-[#b0bec5] mb-1">Blood Type</p>
                                    <p className="text-base font-bold text-slate-900">{patient.bloodType}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#b0bec5] mb-1">Insurance Type</p>
                                    <p className="text-base font-bold text-slate-900">{patient.insuranceType}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#b0bec5] mb-2">
                                        <span className="flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4 text-amber-500" />
                                            Allergies
                                        </span>
                                    </p>
                                    {patient.allergies.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {patient.allergies.map((allergy, i) => (
                                                <span key={i} className="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-sm font-bold">
                                                    {allergy}
                                                </span>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-slate-400 font-medium">No known allergies</p>
                                    )}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#b0bec5] mb-2">
                                        <span className="flex items-center gap-2">
                                            <Heart className="w-4 h-4 text-red-500" />
                                            Chronic Diseases
                                        </span>
                                    </p>
                                    {patient.chronicDiseases.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {patient.chronicDiseases.map((disease, i) => (
                                                <span key={i} className="bg-amber-50 text-amber-600 px-3 py-1.5 rounded-lg text-sm font-bold">
                                                    {disease}
                                                </span>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-slate-400 font-medium">No chronic diseases</p>
                                    )}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-[#b0bec5] mb-1">
                                        <span className="flex items-center gap-2">
                                            <FileText className="w-4 h-4 text-blue-500" />
                                            Current Medications
                                        </span>
                                    </p>
                                    <p className="text-base font-bold text-slate-900 mt-2">{patient.currentMedications}</p>
                                </div>
                            </div>
                        </div>

                        {/* Visits & Account Info */}
                        <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                            <div className="px-8 py-6 border-b border-slate-100/60">
                                <h2 className="text-xl font-extrabold text-slate-900 text-center tracking-tight">Visits & Account Info</h2>
                            </div>
                            <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col">

                                {/* Last Visit */}
                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                                        <History className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-black tracking-widest text-[#b0bec5] uppercase mb-0.5">LAST VISIT</p>
                                        <p className="text-sm font-extrabold text-slate-900">{patient.lastVisit}</p>
                                    </div>
                                </div>

                                {/* Upcoming Appointment */}
                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                                        <Calendar className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-black tracking-widest text-[#b0bec5] uppercase mb-0.5">UPCOMING APPOINTMENT</p>
                                        <p className={`text-sm font-extrabold ${patient.upcomingAppointment !== '-' ? 'text-blue-600' : 'text-slate-400'}`}>
                                            {patient.upcomingAppointment !== '-' ? patient.upcomingAppointment : 'No upcoming appointments'}
                                        </p>
                                    </div>
                                </div>

                                {/* Account Status */}
                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                                        <ShieldCheck className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-black tracking-widest text-[#b0bec5] uppercase mb-0.5">ACCOUNT STATUS</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-extrabold text-slate-900">{patient.status}</span>
                                            <div className={`w-2 h-2 rounded-full ${patient.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Emergency Contact */}
                                <div className="bg-red-50/50 rounded-[20px] p-6 border border-red-100/50 mt-2">
                                    <h3 className="text-sm font-black text-red-500 tracking-widest uppercase mb-4">EMERGENCY CONTACT</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-xs font-bold text-[#b0bec5] mb-0.5">Name</p>
                                            <p className="text-sm font-bold text-slate-900">{patient.emergencyContact.name}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#b0bec5] mb-0.5">Relationship</p>
                                            <p className="text-sm font-bold text-slate-900">{patient.emergencyContact.relationship}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#b0bec5] mb-0.5">Phone</p>
                                            <p className="text-sm font-bold text-slate-900">{patient.emergencyContact.phone}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-slate-50 hidden md:block"></div>
                                <div className="mt-auto md:mt-0 pb-2">
                                    <button className="w-full py-4 rounded-[14px] border-2 border-red-100 text-red-500 font-extrabold hover:bg-red-50 transition-colors uppercase tracking-wide text-sm">
                                        DEACTIVATE ACCOUNT
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientProfileDetail;