import { Search, Bell, Plus, ChevronDown } from 'lucide-react';

const TopBar = () => {
    return (
        <header className="px-10 py-6 flex items-center justify-between border-b border-slate-100 bg-white sticky top-0 z-10">
            <div className="flex items-center gap-12 flex-1">
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Dashboard</h1>

                <div className="relative max-w-md w-full ml-10 hidden md:block">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Search size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative text-slate-500 hover:text-slate-800 transition-colors">
                    <Bell size={24} />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                        2
                    </span>
                </button>

                <div className="w-px h-8 bg-slate-200 mx-1"></div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold shadow-[0_4px_14px_rgba(37,99,235,0.2)] transition-all active:scale-95">
                    <Plus size={18} />
                    <span>Add New User</span>
                    <ChevronDown size={16} className="ml-1 opacity-70" />
                </button>
            </div>
        </header>
    );
};

export default TopBar;
