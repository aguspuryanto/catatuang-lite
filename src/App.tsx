import React from 'react';
import { 
  Menu, 
  Bell, 
  TrendingUp, 
  Brain, 
  ArrowDown, 
  ArrowUp, 
  ShoppingCart, 
  Wallet, 
  Plus, 
  LayoutDashboard, 
  ReceiptText, 
  User 
} from 'lucide-react';

function Header() {
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

function BalanceCard() {
  return (
    <div className="md:col-span-8 bg-primary rounded-[2rem] p-8 text-on-primary shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      <div className="relative z-10">
        <p className="font-label text-sm uppercase tracking-widest opacity-80 mb-2">Saldo Akhir</p>
        <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter mb-8">Rp 42.850.000</h2>
        <div className="flex flex-wrap gap-6 border-t border-white/10 pt-6">
          <div>
            <p className="font-label text-xs opacity-70 mb-1">Saldo Awal</p>
            <p className="font-headline text-xl font-bold">Rp 35.000.000</p>
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

function InsightCard() {
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

function SummaryGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-surface-container-lowest p-6 rounded-[2rem] border border-outline-variant/15 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
            <ArrowDown size={24} strokeWidth={2.5} />
          </div>
          <div>
            <p className="font-label text-xs text-on-surface-variant font-medium">Total Pemasukan</p>
            <p className="font-headline text-2xl font-bold text-secondary">Rp 12.400.000</p>
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
            <p className="font-headline text-2xl font-bold text-tertiary">Rp 4.550.000</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrendChart() {
  const data = [
    { month: 'JAN', income: 40, expense: 30 },
    { month: 'FEB', income: 60, expense: 40 },
    { month: 'MAR', income: 50, expense: 45 },
    { month: 'APR', income: 80, expense: 35 },
    { month: 'MEI', income: 70, expense: 60 },
  ];

  return (
    <div className="md:col-span-2 bg-surface-container-low p-8 rounded-[2rem]">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-headline text-xl font-bold">Tren Bulanan</h3>
        <div className="flex gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Income</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-tertiary"></span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Expense</span>
          </div>
        </div>
      </div>
      <div className="h-48 flex items-end justify-between gap-4 px-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col justify-end items-center gap-1 h-full">
            <div 
              className="w-full bg-primary/20 rounded-t-lg transition-all duration-500" 
              style={{ height: `${item.income}%` }}
            ></div>
            <div 
              className="w-full bg-tertiary/40 rounded-t-lg relative z-10 transition-all duration-500" 
              style={{ height: `${item.expense}%`, marginTop: `-${item.expense}%` }}
            ></div>
            <span className="text-[10px] mt-2 font-bold text-on-surface-variant">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DistributionChart() {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-[2rem] border border-outline-variant/10 flex flex-col items-center shadow-sm">
      <h3 className="font-headline text-lg font-bold w-full text-left mb-6">Distribusi Biaya</h3>
      <div className="relative w-40 h-40 mb-6">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <circle className="stroke-surface-container-high" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
          <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="60 100" strokeWidth="3"></circle>
          <circle className="stroke-tertiary" cx="18" cy="18" fill="none" r="16" strokeDasharray="25 100" strokeDashoffset="-60" strokeWidth="3"></circle>
          <circle className="stroke-secondary" cx="18" cy="18" fill="none" r="16" strokeDasharray="15 100" strokeDashoffset="-85" strokeWidth="3"></circle>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Total</span>
          <span className="font-headline font-bold text-lg">Rp 4.5M</span>
        </div>
      </div>
      <div className="w-full space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-xs font-medium">Kebutuhan</span>
          </div>
          <span className="text-xs font-bold">60%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            <span className="text-xs font-medium">Gaya Hidup</span>
          </div>
          <span className="text-xs font-bold">25%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="text-xs font-medium">Tabungan</span>
          </div>
          <span className="text-xs font-bold">15%</span>
        </div>
      </div>
    </div>
  );
}

function RecentTransactions() {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center px-2">
        <h3 className="font-headline text-xl font-bold">Transaksi Terakhir</h3>
        <button className="text-primary font-bold text-xs uppercase tracking-widest hover:opacity-80 transition-opacity">Lihat Semua</button>
      </div>
      <div className="space-y-3">
        <div className="bg-surface-container-lowest p-5 rounded-[1.5rem] flex items-center justify-between group hover:bg-surface-container transition-colors shadow-sm border border-outline-variant/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center">
              <ShoppingCart size={20} className="text-on-surface-variant" />
            </div>
            <div>
              <p className="font-headline font-bold text-sm">Indomaret Point</p>
              <p className="text-xs text-on-surface-variant mt-0.5">Hanya hari ini &bull; 14:20</p>
            </div>
          </div>
          <p className="font-headline font-bold text-tertiary">- Rp 124.000</p>
        </div>
        
        <div className="bg-surface-container-low p-5 rounded-[1.5rem] flex items-center justify-between group hover:bg-surface-container transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center">
              <Wallet size={20} className="text-on-surface-variant" />
            </div>
            <div>
              <p className="font-headline font-bold text-sm">Gaji Bulanan</p>
              <p className="text-xs text-on-surface-variant mt-0.5">25 Mei &bull; 08:00</p>
            </div>
          </div>
          <p className="font-headline font-bold text-secondary">+ Rp 12.000.000</p>
        </div>
      </div>
    </section>
  );
}

function FloatingActionButton() {
  return (
    <button className="fixed right-6 bottom-28 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full shadow-[0_8px_32px_rgba(0,61,155,0.4)] flex items-center justify-center active:scale-90 transition-all duration-300 z-40 group">
      <Plus size={32} className="group-hover:rotate-90 transition-transform duration-300" />
    </button>
  );
}

function BottomNav() {
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

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background pb-32 font-body selection:bg-primary/20">
      <Header />
      
      <main className="max-w-5xl mx-auto px-6 pt-6 space-y-10">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <BalanceCard />
          <InsightCard />
        </section>

        <SummaryGrid />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TrendChart />
          <DistributionChart />
        </section>

        <RecentTransactions />
      </main>

      <FloatingActionButton />
      <BottomNav />
    </div>
  );
}
