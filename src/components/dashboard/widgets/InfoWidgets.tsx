import { AlertTriangle, ChevronDown } from 'lucide-react';
import { StandardCard } from '../shared/UIComponents';

export const AlertStack = () => {
    const alerts = [
        { title: 'New appointment', color: 'bg-slate-50', iconColor: 'text-blue-500' },
        { title: 'Dr. Sarah is unavailable today', color: 'bg-slate-50', iconColor: 'text-blue-500' },
        { title: 'Medication stock is running low', color: 'bg-slate-50', iconColor: 'text-blue-500' },
    ];

    return (
        <StandardCard>
            <h3 className="text-base font-extrabold text-slate-900 mb-4">Notifications & Alerts</h3>
            <div className="space-y-3">
                {alerts.map((alert, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border border-slate-100 ${alert.color}`}>
                        <AlertTriangle size={18} className={alert.iconColor} />
                        <span className="text-sm font-bold text-slate-900">{alert.title}</span>
                    </div>
                ))}
            </div>
            <button className="w-full mt-4 text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center justify-center gap-1 transition-colors">
                see all <ChevronDown size={14} />
            </button>
        </StandardCard>
    );
};

export const PatientFeed = () => {
    const patients = [
        { name: 'Jenny Wilson', email: 'w.lawson@example.com', avatar: 'https://i.pravatar.cc/150?1' },
        { name: 'Devon Lane', email: 'dat.roberts@example.com', avatar: 'https://i.pravatar.cc/150?2' },
        { name: 'Jane Cooper', email: 'jgraham@example.com', avatar: 'https://i.pravatar.cc/150?3' },
        { name: 'Dianne Russell', email: 'curtis.d@example.com', avatar: 'https://i.pravatar.cc/150?4' },
        { name: 'Dianne Russell', email: 'curtis.d@example.com', avatar: 'https://i.pravatar.cc/150?5' },
        { name: 'Dianne Russell', email: 'curtis.d@example.com', avatar: 'https://i.pravatar.cc/150?6' },
    ];

    return (
        <StandardCard>
            <h3 className="text-base font-extrabold text-slate-900 mb-5">Recent Patients</h3>
            <div className="space-y-5">
                {patients.map((patient, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                        <img src={patient.avatar} alt={patient.name} className="w-10 h-10 rounded-full object-cover bg-slate-100" />
                        <div>
                            <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{patient.name}</p>
                            <p className="text-xs text-slate-500 font-medium">{patient.email}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-6 text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center justify-center gap-1 transition-colors">
                see all <ChevronDown size={14} />
            </button>
        </StandardCard>
    );
};

export const AppointmentSummary = () => {
    const stats = [
        { label: 'Completed', count: '1,43,382', percent: 85, color: 'bg-indigo-600' },
        { label: 'Pending', count: '87,974', percent: 65, color: 'bg-indigo-500' },
        { label: 'Cancelled', count: '45,211', percent: 35, color: 'bg-indigo-400' },
        { label: 'No-Show', count: '21,893', percent: 15, color: 'bg-indigo-600' },
    ];

    return (
        <StandardCard>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-extrabold text-slate-900">Appointments</h3>
                <button className="text-xs font-bold text-slate-500 flex items-center gap-1">
                    Last 7 Days <ChevronDown size={14} />
                </button>
            </div>

            <div className="space-y-6">
                {stats.map((stat, i) => (
                    <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-slate-700">{stat.label}</span>
                            <span className="font-bold text-slate-900">{stat.count}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full ${stat.color}`}
                                style={{ width: `${stat.percent}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </StandardCard>
    );
};
