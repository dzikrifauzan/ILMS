'use client';

import { cn } from '@/utils/cn';

interface MetricProps {
  label: string;
  value: number;
  percentage?: number;
  showIndicator?: boolean;
}

function Metric({
  label,
  value,
  percentage = 0,
  showIndicator = true,
}: MetricProps) {
  return (
    <div
      className={cn(
        'p-6 border-l first:border-l-0 px-90',
        'flex flex-col items-center',
        'flex-1',
      )}
    >
      <h2 className="mb-1 text-xs">{label}</h2>
      <div className="flex items-center gap-3">
        <span className=" font-semibold">{value}</span>
        {showIndicator && (
          <div
            className={cn(
              'rounded-full flex items-center gap-1 px-2 py-1',
              'text-sm font-medium',
              percentage > 20 ? 'bg-red-200' : 'bg-green-200',
            )}
          >
            <span className="text-xs">▲</span>
            <span className="text-xs">{percentage}%</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function DashboardRoute() {
  return (
    <div
      className="rounded-3xl bg-gray-100 p-5 overflow-y-scroll"
      style={{
        height: 'calc(100vh - 40px)',
        marginTop: '20px',
        marginBottom: '20px',
        marginRight: '20px',
        scrollbarWidth: 'none',
      }}
    >
      <div className="mb-6 text-xl font-semibold">Dashboard</div>
      <div className="rounded-lg bg-white p-2 shadow-sm sm:p-1">
        <div className="flex flex-wrap items-center justify-between space-x-4 sm:space-x-2">
          <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
            <Metric
              label="Std. Working Time"
              value={455}
              showIndicator={false}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
            <Metric label="Eff. Target" value={437} showIndicator={false} />
          </div>
          <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
            <Metric label="Ave. Workload" value={455} percentage={10} />
          </div>
          <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
            <Metric label="Max. Workload" value={495} percentage={22} />
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <Metric label="Min. Workload" value={430} percentage={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
