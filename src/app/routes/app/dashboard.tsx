'use client';

import { ContentLayout } from '@/components/layouts';
import { cn } from '@/utils/cn';

interface MetricProps {
  label: string;
  value: number;
  indicator?: 'green' | 'red' | 'blue';
}

function Metric({ label, value, indicator }: MetricProps) {
  return (
    <div className="flex flex-col items-center border-l first:border-l-0 px-2 sm:px-3 lg:px-4 scale-90 sm:scale-95 md:scale-100">
      <span className="text-[10px] sm:text-xs md:text-sm text-gray-600">
        {label}
      </span>
      <div className="flex items-center gap-1">
        <span className="text-sm sm:text-base font-semibold">{value}</span>
        {indicator && (
          <div
            className={cn(
              'w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-white',
              indicator === 'green' && 'bg-green-500',
              indicator === 'red' && 'bg-red-500',
              indicator === 'blue' && 'bg-blue-500',
            )}
          >
            {value % 100}
          </div>
        )}
      </div>
    </div>
  );
}

export function DashboardRoute() {
  return (
    <ContentLayout title="Dashboard">
      <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
        <div className="flex justify-between items-center">
          <Metric label="Std. Working Time" value={455} />
          <Metric label="Eff. Target" value={437} />
          <Metric label="Ave. Workload" value={455} indicator="green" />
          <Metric label="Max. Workload" value={495} indicator="red" />
          <Metric label="Min. Workload" value={430} indicator="blue" />
        </div>
      </div>
    </ContentLayout>
  );
}
