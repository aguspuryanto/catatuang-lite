import { Wallet, ShoppingCart } from 'lucide-react';
import { Transaction } from '../services/supabase';
import { formatRupiah, formatDate } from '../utils/formatters';

export default function RecentTransactions({ transactions }: { transactions: Transaction[] }) {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center px-2">
        <h3 className="font-headline text-xl font-bold">Transaksi Terakhir</h3>
        <button className="text-primary font-bold text-xs uppercase tracking-widest hover:opacity-80 transition-opacity">Lihat Semua</button>
      </div>
      <div className="space-y-3">
        {transactions.length === 0 ? (
          <div className="text-center p-6 text-on-surface-variant text-sm">Belum ada transaksi bulan ini.</div>
        ) : (
          transactions.slice(0, 5).map((t) => (
            <div key={t.id} className="bg-surface-container-lowest p-5 rounded-[1.5rem] flex items-center justify-between group hover:bg-surface-container transition-colors shadow-sm border border-outline-variant/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center">
                  {t.type === 'income' ? (
                    <Wallet size={20} className="text-on-surface-variant" />
                  ) : (
                    <ShoppingCart size={20} className="text-on-surface-variant" />
                  )}
                </div>
                <div>
                  <p className="font-headline font-bold text-sm">{t.description || t.mainCategory}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{t.createdAt ? formatDate(t.createdAt) : '-'}</p>
                </div>
              </div>
              <p className={`font-headline font-bold ${t.type === 'income' ? 'text-secondary' : 'text-tertiary'}`}>
                {t.type === 'income' ? '+' : '-'} {formatRupiah(t.amount)}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
