'use client';

import { Bar, BarChart, XAxis, YAxis } from 'recharts';

import { Card } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Trash } from 'lucide-react';

const data = [
  {
    name: 'MP1',
    process1: 120,
    process2: 140,
    process3: 140,
    process4: 0,
  },
  {
    name: 'MP 2',
    process1: 120,
    process2: 140,
    process3: 140,
    process4: 100,
  },
  {
    name: 'MP 3',
    process1: 100,
    process2: 100,
    process3: 100,
    process4: 0,
  },
  {
    name: 'MP 4',
    process1: 100,
    process2: 0,
    process3: 0,
    process4: 0,
  },
];

export function Yamazumi() {
  const [filters, setFilters] = useState({
    category: '',
    elementId: '',
    elementName: '',
    unit: '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  const handleClear = () => {
    setFilters({
      category: '',
      elementId: '',
      elementName: '',
      unit: '',
    });
    setFilteredElements([]);
  };

  const [filteredElements, setFilteredElements] = useState<any[]>([]);

  const handleSearch = () => {
    const filtered = data.filter((element) => {
      return (
        (filters.category === '' || element.name.includes(filters.category)) &&
        (filters.elementId === '' ||
          element.name.includes(filters.elementId)) &&
        (filters.elementName === '' ||
          element.name.includes(filters.elementName)) &&
        (filters.unit === '' || element.name.includes(filters.unit))
      );
    });
    setFilteredElements(filtered);
  };

  return (
    <div
      className="rounded-3xl bg-gray-100 p-5 overflow-y-scroll"
      style={{
        height: 'calc(100vh - 40px)',
        margin: '20px',
        scrollbarWidth: 'none',
      }}
    >
      <div className="mb-6 text-xl font-semibold">Yamazumi</div>
      <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Card className="w-full p-4">
          <ChartContainer
            config={{
              process1: {
                label: 'Process 1',
                color: 'hsl(142.1 76.2% 36.3%)', // Dark green
              },
              process2: {
                label: 'Process 2',
                color: 'hsl(142.1 70.6% 45.3%)', // Light green
              },
              process3: {
                label: 'Process 3',
                color: 'hsl(54.3 91.7% 49.8%)', // Yellow
              },
              process4: {
                label: 'Process 4',
                color: 'hsl(36 99.2% 49.8%)', // Orange
              },
            }}
            className="h-[600px]"
          >
            <BarChart
              data={filteredElements.length > 0 ? filteredElements : data}
            >
              <XAxis dataKey="name" />
              <YAxis domain={[0, 800]} />
              <Bar
                dataKey="process1"
                stackId="stack"
                fill="var(--color-process1)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="process2"
                stackId="stack"
                fill="var(--color-process2)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="process3"
                stackId="stack"
                fill="var(--color-process3)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="process4"
                stackId="stack"
                fill="var(--color-process4)"
                radius={[0, 0, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </Card>
        <div className="h-fit w-[250px] space-y-4 rounded-lg bg-white p-4">
          {/* <div className="p-4 bg-gray-100 rounded-lg"> */}
          <h3 className="p-4 bg-gray-100 rounded-lg">Filter</h3>
          {/* </div> */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="category"
                className="mb-1 block text-sm text-gray-600"
              >
                Category
              </label>
              <Input
                id="category"
                placeholder="category"
                className="bg-white"
                value={filters.category}
                onChange={handleFilterChange}
              />
            </div>
            <div>
              <label
                htmlFor="elementId"
                className="mb-1 block text-sm text-gray-600"
              >
                Element ID
              </label>
              <Input
                id="elementId"
                placeholder="Element ID"
                className="bg-white"
                value={filters.elementId}
                onChange={handleFilterChange}
                type="text"
              />
            </div>
            <div>
              <label
                htmlFor="elementName"
                className="mb-1 block text-sm text-gray-600"
              >
                Element Name
              </label>
              <Input
                id="elementName"
                placeholder="Element Name"
                className="bg-white"
                value={filters.elementName}
                onChange={handleFilterChange}
              />
            </div>
            <div>
              <label
                htmlFor="unit"
                className="mb-1 block text-sm text-gray-600"
              >
                Unit
              </label>
              <Input
                id="unit"
                placeholder="Unit"
                className="bg-white"
                value={filters.unit}
                onChange={handleFilterChange}
              />
            </div>
            <div className="flex justify-center gap-2">
              <Button
                onClick={handleClear}
                className="flex items-center rounded bg-red-700 px-1 text-white hover:bg-red-800"
              >
                <div className="flex cursor-pointer items-center gap-2">
                  <Trash className="size-4" />
                  <span>Clear</span>
                </div>
              </Button>
              <Button
                onClick={handleSearch}
                className="flex items-center rounded bg-white px-1 text-black hover:bg-white/30"
              >
                <div className="flex cursor-pointer items-center gap-2">
                  <Search className="size-4" />
                  <span>Search</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
