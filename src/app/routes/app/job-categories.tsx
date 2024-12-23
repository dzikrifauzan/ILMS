'use client';

import {
  ChevronLeft,
  ChevronRight,
  SquarePen,
  Trash2,
  Plus,
  Search,
  Pencil,
} from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  TableBody,
  TableCell,
  TableElement,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ConfirmationDialog,
  Dialog,
  DialogTrigger,
} from '@/components/ui/dialog';

interface JobCategory {
  id: number;
  categoryId: string;
  category: string;
  createdBy: string;
  createdDate: string;
  changedBy: string;
  changeDate: string;
}

export const JobCategoriesTable = () => {
  const categories: JobCategory[] = [
    {
      id: 1,
      categoryId: 'JC10412/20/000009',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 2,
      categoryId: 'JC10412/20/000008',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 3,
      categoryId: 'JC10412/20/000007',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 4,
      categoryId: 'JC10412/20/000006',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 5,
      categoryId: 'JC10412/20/000005',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 6,
      categoryId: 'JC10412/20/000004',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 7,
      categoryId: 'JC10412/20/000003',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 8,
      categoryId: 'JC10412/20/000002',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 9,
      categoryId: 'JC10412/20/000001',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
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
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-semibold">Job Categories</div>
        <Button className="flex items-center px-1 rounded text-white bg-red-700 hover:bg-red-800 ">
          <div className="flex cursor-pointer items-center gap-2">
            <Plus className="size-4" />
            <span>Add</span>
          </div>
        </Button>
      </div>

      <TableElement>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">No.</TableHead>
            <TableHead>Document No.</TableHead>
            <TableHead>Document Title</TableHead>
            <TableHead>Created By</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Change By</TableHead>
            <TableHead>Change Date</TableHead>
            <TableHead className="w-[100px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((doc: JobCategory, index: number) => (
            <TableRow key={doc.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{doc.categoryId}</TableCell>
              <TableCell>{doc.category}</TableCell>

              <TableCell>{doc.createdBy}</TableCell>
              <TableCell>{doc.createdDate}</TableCell>
              <TableCell>{doc.changedBy}</TableCell>
              <TableCell>{doc.changeDate}</TableCell>
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

      {/* Pagination */}
      <div className="flex items-center justify-between px-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <div className="flex cursor-pointer items-centers">
            <ChevronLeft className="size-4" />
            <span></span>
          </div>
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
          <div className="flex cursor-pointer items-center">
            <ChevronRight className="size-4" />
            <span></span>
          </div>
        </Button>
      </div>
      {/* Filter
      <div className="w-[250px] h-[275px] p-4 bg-gray-50 rounded-lg space-y-4">
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
            <Button className=" flex px-1 items-center rounded text-white bg-red-700 hover:bg-red-800 ">
              <div className="flex cursor-pointer items-center gap-2">
                <Trash2 className="size-4" />
                <span>Delete</span>
              </div>
            </Button>
            <Button className="flex  px-1 items-center rounded text-white bg-red-700 hover:bg-red-800 ">
              <div className="flex cursor-pointer items-center gap-2">
                <Search className="size-4" />
                <span>Search</span>
              </div>
            </Button>
          </div>
        </div>
      </div> */}
    </div>
  );
};
