import { Plus } from 'lucide-react';

export default function FloatingActionButton() {
  return (
    <button className="fixed right-6 bottom-28 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full shadow-[0_8px_32px_rgba(0,61,155,0.4)] flex items-center justify-center active:scale-90 transition-all duration-300 z-40 group">
      <Plus size={32} className="group-hover:rotate-90 transition-transform duration-300" />
    </button>
  );
}
