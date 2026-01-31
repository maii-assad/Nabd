
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface SuccessScreenProps {
  onBackToLogin: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onBackToLogin }) => {
  return (
    <div className="animate-in fade-in zoom-in duration-500 text-center">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500">
          <CheckCircle2 size={48} />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Password Changed!</h1>
      <p className="text-gray-500 mb-10 max-w-xs mx-auto">
        Your password has been successfully reset. You can now use your new password to log in to your account.
      </p>
      <button 
        onClick={onBackToLogin}
        className="w-full bg-[#2b82d9] text-white font-bold py-3.5 rounded-xl shadow-[0_4px_14px_0_rgba(43,130,217,0.39)] hover:bg-[#2572c0] transition-all transform active:scale-[0.98]"
      >
        Back to Login
      </button>
    </div>
  );
};

export default SuccessScreen;
