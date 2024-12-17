'use client';

import {
  Camera,
  Upload,
  FilePlus,
  Plus,
  Pencil,
  Trash2,
  Save,
} from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ColumnDef } from '@tanstack/react-table';

interface ProcessElement {
  id: number;
  elementJob: string;
  category: string;
  manual: string;
  walking: string;
  driving: string;
  distance: string;
  frequency: string;
  total: string;
}

export const CreationForm = () => {
  const [processElements, setProcessElements] = React.useState<
    ProcessElement[]
  >([
    {
      id: 1,
      elementJob: 'JC10412/20/000009',
      category: 'Supply Point A',
      manual: '10 pt',
      walking: '10 pt',
      driving: '20 pt',
      distance: '???',
      frequency: '???',
      total: '???',
    },
  ]);

  const columns: ColumnDef<ProcessElement>[] = [
    { accessorKey: 'id', header: 'No.' },
    { accessorKey: 'elementJob', header: 'Element Job' },
    { accessorKey: 'category', header: 'Category' },
    { accessorKey: 'manual', header: 'Manual' },
    { accessorKey: 'walking', header: 'Walking' },
    { accessorKey: 'driving', header: 'Driving' },
    { accessorKey: 'distance', header: 'Distance' },
    { accessorKey: 'frequency', header: 'Frequency' },
    { accessorKey: 'total', header: 'Total' },
    {
      id: 'actions',
      cell: ({ row }) => (
        <div className="flex justify-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Pencil className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Trash2 className="size-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white">
      <div className="mb-6">
        <div className="text-xl font-semibold mb-4">Creation Form</div>

        <div className="flex justify-between items-center mb-6">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Tack Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="time1">Time 1</SelectItem>
              <SelectItem value="time2">Time 2</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button className="bg-red-700 hover:bg-red-800">
              <Upload className="mr-2 size-4" />
              Upload
            </Button>
            <Button variant="outline">
              <Save className="mr-2 size-4" />
              Save Draft
            </Button>
            <Button variant="outline">
              <FilePlus className="mr-2 size-4" />
              Preview
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4">
          {/* Left Column */}
          <div className="col-span-1 space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 block mb-1">
                    Author
                  </label>
                  <Input value="Steven" disabled className="bg-gray-50" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">
                    Status
                  </label>
                  <Input value="Draft" disabled className="bg-gray-50" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">
                    Revision
                  </label>
                  <Input value="1.-" disabled className="bg-gray-50" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 block mb-1">
                    Man Power No.
                  </label>
                  <Input placeholder="Enter man power no." />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Upload Image</h3>
              <div className="border-2 border-dashed rounded-lg p-8">
                <div className="flex flex-col items-center justify-center text-gray-500">
                  <Camera className="size-12 mb-2" />
                  <span>Camera</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Pastikan Foto Yang diambil terlihat jelas
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Location',
                'Sub Location',
                'Division',
                'Departement',
                'Section',
                'Line',
              ].map((label) => (
                <div key={label}>
                  <label className="text-sm text-gray-600 block mb-1">
                    {label}
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">{label} 1</SelectItem>
                      <SelectItem value="2">{label} 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <Input placeholder="Add Process Name" className="flex-1" />
              <Select defaultValue="gentan-1">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gentan-1">Gentan-I</SelectItem>
                  <SelectItem value="gentan-2">TSKK</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-red-700 hover:bg-red-800">
                <Plus className="mr-2 size-4" />
                Add
              </Button>
            </div>

            <div className="rounded-md border">
              <Table data={processElements} columns={columns}>
                <TableHeader>
                  <TableRow>
                    {columns.map((column) => (
                      <TableHead key={column.id}>
                        {column.header as React.ReactNode}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {processElements.map((element) => (
                    <TableRow key={element.id}>
                      {columns.map((column) => (
                        <TableCell key={column.id}>
                          {column.accessorKey
                            ? element[
                                column.accessorKey as keyof ProcessElement
                              ]
                            : column.cell
                              ? column.cell({ row: { original: element } })
                              : null}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
