import React, { useState, useEffect } from 'react';
import { getTransactions, Transaction } from './services/supabase';

import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import InsightCard from './components/InsightCard';
import SummaryGrid from './components/SummaryGrid';
import TrendChart from './components/TrendChart';
import DistributionChart from './components/DistributionChart';
import RecentTransactions from './components/RecentTransactions';
import FloatingActionButton from './components/FloatingActionButton';
import BottomNav from './components/BottomNav';

export default function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchTransactions();
  }, []);

  // Filter for current month
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const currentMonthTransactions = transactions.filter(t => {
    if (!t.createdAt) return false;
    const date = new Date(t.createdAt);
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
  });

  const totalIncome = currentMonthTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = currentMonthTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const saldoAwal = 35000000; // Fixed initial balance for demo purposes

  return (
    <div className="min-h-screen bg-background text-on-background pb-32 font-body selection:bg-primary/20">
      <Header />
      
      <main className="max-w-5xl mx-auto px-6 pt-6 space-y-10">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <BalanceCard saldoAwal={saldoAwal} totalIncome={totalIncome} totalExpense={totalExpense} />
          <InsightCard />
        </section>

        <SummaryGrid totalIncome={totalIncome} totalExpense={totalExpense} />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TrendChart />
          <DistributionChart />
        </section>

        {loading ? (
          <div className="text-center p-6 text-on-surface-variant text-sm">Memuat transaksi...</div>
        ) : (
          <RecentTransactions transactions={transactions} />
        )}
      </main>

      <FloatingActionButton />
      <BottomNav />
    </div>
  );
}
