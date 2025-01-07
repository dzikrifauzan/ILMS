'use client';

import { useState } from 'react';

import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
  const [filteredElements, setFilteredElements] = useState<any[]>([]);

  return (
    <div
      className="overflow-y-scroll rounded-3xl bg-gray-100 p-5"
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
        <div className="w-[250px] space-y-4 rounded-lg bg-white p-4">
          <div className="flex items-center gap-2">
            <Filter className="size-4" />
            <h3 className="font-medium">Filter</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="plant" className="text-sm font-medium">
                Plant
              </label>
              <Select>
                <SelectTrigger id="plant" className="bg-white">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plant1">Plant 1</SelectItem>
                  <SelectItem value="plant2">Plant 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="sublocation" className="text-sm font-medium">
                Sub Location
              </label>
              <Select>
                <SelectTrigger id="sublocation" className="bg-white">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="loc1">Location 1</SelectItem>
                  <SelectItem value="loc2">Location 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="division" className="text-sm font-medium">
                Division
              </label>
              <Select>
                <SelectTrigger id="division" className="bg-white">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="div1">Division 1</SelectItem>
                  <SelectItem value="div2">Division 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="department" className="text-sm font-medium">
                Department
              </label>
              <Select>
                <SelectTrigger id="department" className="bg-white">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dept1">Department 1</SelectItem>
                  <SelectItem value="dept2">Department 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="section" className="text-sm font-medium">
                Section
              </label>
              <Select>
                <SelectTrigger id="section" className="bg-white">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sec1">Section 1</SelectItem>
                  <SelectItem value="sec2">Section 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="line" className="text-sm font-medium">
                Line
              </label>
              <Select>
                <SelectTrigger id="line" className="bg-white">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="line1">Line 1</SelectItem>
                  <SelectItem value="line2">Line 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
