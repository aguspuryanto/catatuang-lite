import { Brain } from 'lucide-react';

export default function InsightCard() {
  return (
    <div className="md:col-span-4 bg-tertiary-fixed text-on-tertiary-fixed p-6 rounded-[2rem] flex flex-col justify-between h-full min-h-[200px]">
      <div className="flex items-start justify-between">
        <Brain size={28} className="text-tertiary" />
        <span className="text-[10px] font-bold font-label px-2 py-1 bg-tertiary/10 rounded-lg tracking-wider">AI INSIGHT</span>
      </div>
      <div className="mt-6">
        <p className="font-headline text-xl font-bold leading-tight mb-2">Pengeluaran bulan ini naik 20%</p>
        <p className="text-sm opacity-80">Sebagian besar berasal dari kategori <span className="font-bold underline">Gaya Hidup</span>.</p>
      </div>
    </div>
  );
}
