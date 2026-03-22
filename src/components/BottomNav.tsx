import { LayoutDashboard, ReceiptText, Wallet, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white/90 backdrop-blur-xl rounded-t-3xl z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-outline-variant/10">
      <a href="#" className="flex flex-col items-center justify-center bg-surface-container text-primary rounded-2xl px-6 py-2.5 active:scale-90 transition-all duration-300">
        <LayoutDashboard size={20} className="mb-1" />
        <span className="font-inter text-[10px] font-bold uppercase tracking-wider">Dashboard</span>
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-2 hover:text-primary active:scale-90 transition-all duration-300">
        <ReceiptText size={20} className="mb-1" />
        <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Transactions</span>
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-2 hover:text-primary active:scale-90 transition-all duration-300">
        <Wallet size={20} className="mb-1" />
        <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Budget</span>
      </a>
      <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-2 hover:text-primary active:scale-90 transition-all duration-300">
        <User size={20} className="mb-1" />
        <span className="font-inter text-[10px] font-semibold uppercase tracking-wider">Profile</span>
      </a>
    </nav>
  );
}
