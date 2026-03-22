import { Menu, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 flex justify-between items-center px-6 py-4 w-full">
      <div className="flex items-center gap-4">
        <button className="text-primary active:scale-95 transition-transform duration-200">
          <Menu size={24} />
        </button>
        <h1 className="font-headline font-extrabold text-primary text-xl tracking-tight">CatatUang</h1>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-primary active:scale-95 transition-transform duration-200 p-2 rounded-full hover:bg-slate-200/50">
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
}
