'use client';

import {
  ChevronLeft,
  ChevronRight,
  Trash2,
  Plus,
  Pencil,
  Search,
  Trash,
} from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  ConfirmationDialog,
  Dialog,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  TableBody,
  TableCell,
  TableElement,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface JobElement {
  id: number;
  elementId: string;
  category: string;
  elementName: string;
  manual: string;
  walking: string;
  driving: string;
  createdBy: string;
  createdDate: string;
}

export const JobElementTable = () => {
  const elements: JobElement[] = [
    {
      id: 1,
      elementId: 'JC10412/20/000009',
      category: 'Preparation',
      elementName: 'Line Auditor',
      manual: '10 kg',
      walking: '10M',
      driving: '10M',
      createdBy: 'Admin',
      createdDate: '20 Dec 2024',
    },
    {
      id: 2,
      elementId: 'JC10412/20/000008',
      category: 'Preparation',
      elementName: 'Line Auditor',
      manual: '10 kg',
      walking: '10M',
      driving: '10M',
      createdBy: 'Admin',
      createdDate: '20 Dec 2024',
    },
    {
      id: 3,
      elementId: 'JC10412/20/000007',
      category: 'Preparation',
      elementName: 'Line Auditor',
      manual: '10 kg',
      walking: '10M',
      driving: '10M',
      createdBy: 'Admin',
      createdDate: '20 Dec 2024',
    },
    {
      id: 4,
      elementId: 'JC10412/20/000006',
      category: 'Preparation',
      elementName: 'Line Auditor',
      manual: '10 kg',
      walking: '10M',
      driving: '10M',
      createdBy: 'Admin',
      createdDate: '20 Dec 2024',
    },
    {
      id: 5,
      elementId: 'JC10412/20/000005',
      category: 'Preparation',
      elementName: 'Line Auditor',
      manual: '10 kg',
      walking: '10M',
      driving: '10M',
      createdBy: 'Admin',
      createdDate: '20 Dec 2024',
    },
    {
      id: 6,
      elementId: 'JC10412/20/000004',
      category: 'Preparation',
      elementName: 'Line Auditor',
      manual: '10 kg',
      walking: '10M',
      driving: '10M',
      createdBy: 'Admin',
      createdDate: '20 Dec 2024',
    },
    {
      id: 7,
      elementId: 'JC10412/20/000003',
      category: 'Preparation',
      elementName: 'Line Auditor',
      manual: '10 kg',
      walking: '10M',
      driving: '10M',
      createdBy: 'Admin',
      createdDate: '20 Dec 2024',
    },
    {
      id: 8,
      elementId: 'JC10412/20/000002',
      category: 'Preparation',
      elementName: 'Line Auditor',
      manual: '10 kg',
      walking: '10M',
      driving: '10M',
      createdBy: 'Admin',
      createdDate: '20 Dec 2024',
    },
  ];

  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className=" p-5 rounded-3xl bg-white m-5 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-semibold">Job Element</div>
        <Button className="flex items-center px-1 rounded text-white bg-red-700 hover:bg-red-800">
          <div className="flex cursor-pointer items-center gap-2">
            <Plus className="size-4" />
            <span>Add</span>
          </div>
        </Button>
      </div>
      <div className="flex flex-row gap-4">
        <TableElement>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">No.</TableHead>
              <TableHead>Element ID</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Element Name</TableHead>
              <TableHead>Manual</TableHead>
              <TableHead>Walking</TableHead>
              <TableHead>Driving</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead>Created Dt</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {elements.map((element: JobElement, index: number) => (
              <TableRow key={element.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{element.elementId}</TableCell>
                <TableCell>{element.category}</TableCell>
                <TableCell>{element.elementName}</TableCell>
                <TableCell>{element.manual}</TableCell>
                <TableCell>{element.walking}</TableCell>
                <TableCell>{element.driving}</TableCell>
                <TableCell>{element.createdBy}</TableCell>
                <TableCell>{element.createdDate}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="size-8">
                      <Pencil className="size-4" />
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild></DialogTrigger>
                      <ConfirmationDialog
                        title="Delete Element"
                        triggerButton={
                          <Button variant="ghost">
                            <Trash2 className="size-4" />
                          </Button>
                        }
                        confirmButton={
                          <Button variant="destructive">Delete</Button>
                        }
                      />
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableElement>

        {/* Filter */}
        <div className="w-[250px] h-fit p-4 bg-gray-100 rounded-lg space-y-4">
          <div className="text-sm font-medium">Filter</div>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="categoryName"
                className="text-sm text-gray-600 block mb-1"
              >
                Category Name
              </label>
              <Input
                id="categoryName"
                placeholder="Enter category name"
                className="bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="categoryId"
                className="text-sm text-gray-600 block mb-1"
              >
                Category ID
              </label>
              <Input
                id="categoryId"
                placeholder="Enter category ID"
                className="bg-white"
              />
            </div>
            <div className="flex justify-center gap-2">
              <Button className="flex px-1 items-center rounded text-white bg-red-700 hover:bg-red-800">
                <div className="flex cursor-pointer items-center gap-2">
                  <Trash className="size-4" />
                  <span>Clear</span>
                </div>
              </Button>
              <Button className="flex px-1 items-center rounded text-black bg-white hover:bg-white/30">
                <div className="flex cursor-pointer items-center gap-2">
                  <Search className="size-4" />
                  <span>Search</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-2 py-20 mb-20">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="size-4" />
        </Button>

        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-700">
            {currentPage} of {totalPages}
          </span>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
};
