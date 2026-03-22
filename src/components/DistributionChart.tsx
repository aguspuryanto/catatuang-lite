export default function DistributionChart() {
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
