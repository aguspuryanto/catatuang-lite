export default function TrendChart() {
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
