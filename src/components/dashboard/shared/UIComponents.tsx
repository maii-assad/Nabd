import React from 'react';
import { DownloadCloud } from 'lucide-react';

export const StandardCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`bg-white rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-100 p-6 ${className}`}>
            {children}
        </div>
    );
};

export const ActionHeader = ({ title, showExport = true }: { title: string, showExport?: boolean }) => {
    return (
        <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
            {showExport && (
                <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-lg text-xs font-bold transition-colors border border-slate-200">
                    <DownloadCloud size={14} />
                    Export PDF
                </button>
            )}
        </div>
    );
};
