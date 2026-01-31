
import React, { useState } from 'react';
import { ArrowLeft, Mail, Info } from 'lucide-react';

interface ForgotPasswordFormProps {
  onContinue: (email: string) => void;
  onBack: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onContinue, onBack }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onContinue(email);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <button 
        onClick={onBack}
        className="group flex items-center text-slate-400 hover:text-slate-900 mb-8 transition-colors text-sm font-bold"
      >
        <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Login
      </button>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Forgot Password</h1>
        <p className="text-slate-500 font-medium">Reset your secure access</p>
      </div>

      <div className="mb-8">
        <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl flex items-start space-x-4">
          <div className="bg-blue-100 p-2.5 rounded-xl text-blue-600 shrink-0">
            <Info size={20} />
          </div>
          <p className="text-xs text-blue-800 font-medium leading-relaxed">
            Enter the email address associated with your account and we'll send you a 6-digit verification code.
          </p>
        </div>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <label className="block text-sm font-bold text-slate-700 ml-1">
            Professional Email
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
              <Mail size={18} />
            </div>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all font-medium text-slate-900"
              placeholder="e.g. name@company.com"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_8px_30px_rgb(37,99,235,0.2)] hover:bg-blue-700 active:scale-[0.98] transition-all"
        >
          Send Verification Code
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 font-medium pt-8">
        Remembered your password? <button onClick={onBack} className="text-blue-600 font-bold hover:underline">Login</button>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
