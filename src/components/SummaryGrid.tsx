import { ArrowDown, ArrowUp } from 'lucide-react';
import { formatRupiah } from '../utils/formatters';

export default function SummaryGrid({ totalIncome, totalExpense }: { totalIncome: number, totalExpense: number }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-surface-container-lowest p-6 rounded-[2rem] border border-outline-variant/15 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
            <ArrowDown size={24} strokeWidth={2.5} />
          </div>
          <div>
            <p className="font-label text-xs text-on-surface-variant font-medium">Total Pemasukan</p>
            <p className="font-headline text-2xl font-bold text-secondary">{formatRupiah(totalIncome)}</p>
          </div>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-6 rounded-[2rem] border border-outline-variant/15 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
            <ArrowUp size={24} strokeWidth={2.5} />
          </div>
          <div>
            <p className="font-label text-xs text-on-surface-variant font-medium">Total Pengeluaran</p>
            <p className="font-headline text-2xl font-bold text-tertiary">{formatRupiah(totalExpense)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
