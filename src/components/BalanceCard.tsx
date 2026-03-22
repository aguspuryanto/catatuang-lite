import { TrendingUp } from 'lucide-react';
import { formatRupiah } from '../utils/formatters';

export default function BalanceCard({ saldoAwal, totalIncome, totalExpense }: { saldoAwal: number, totalIncome: number, totalExpense: number }) {
  const saldoAkhir = saldoAwal + totalIncome - totalExpense;
  return (
    <div className="md:col-span-8 bg-primary rounded-[2rem] p-8 text-on-primary shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      <div className="relative z-10">
        <p className="font-label text-sm uppercase tracking-widest opacity-80 mb-2">Saldo Akhir</p>
        <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter mb-8">{formatRupiah(saldoAkhir)}</h2>
        <div className="flex flex-wrap gap-6 border-t border-white/10 pt-6">
          <div>
            <p className="font-label text-xs opacity-70 mb-1">Saldo Awal</p>
            <p className="font-headline text-xl font-bold">{formatRupiah(saldoAwal)}</p>
          </div>
          <div className="bg-secondary-container/20 px-4 py-2 rounded-xl flex items-center gap-2">
            <TrendingUp size={16} className="text-secondary-fixed" />
            <p className="font-label text-xs font-bold text-secondary-fixed">+22.4% MoM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
