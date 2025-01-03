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
      categoryId: 'PC202412000009',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 2,
      categoryId: 'PC202412000008',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 3,
      categoryId: 'PC202412000007',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 4,
      categoryId: 'PC202412000006',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 5,
      categoryId: 'PC202412000005',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 6,
      categoryId: 'PC202412000004',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 7,
      categoryId: 'PC202412000003',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 8,
      categoryId: 'PC202412000002',
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
  const [filters, setFilters] = useState({
    categoryId: '',
    category: '',
  });

  const [filteredCategories, setFilteredCategories] =
    useState<JobCategory[]>(categories);
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  const handleSearch = () => {
    const filtered = categories.filter((category) => {
      return (
        (filters.category === '' ||
          category.category.includes(filters.category)) &&
        (filters.categoryId === '' ||
          category.categoryId.includes(filters.categoryId))
      );
    });
    setFilteredCategories(filtered);
  };

  const handleClear = () => {
    setFilters({
      categoryId: '',
      category: '',
    });
    setFilteredCategories(categories);
  };

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
      <div className="mb-6 flex items-center justify-between">
        <div className="text-xl font-semibold">Job Categories</div>
        <Button className="rounded bg-red-700 px-1 text-white hover:bg-red-800">
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
            {filteredCategories.map((doc: JobCategory, index: number) => (
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

        {/* Filter */}
        <div className="h-fit w-[250px] space-y-4 rounded-lg bg-gray-100 p-4">
          <div className="text-sm font-medium">Filter</div>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="category"
                className="mb-1 block text-sm text-gray-600"
              >
                Category Name
              </label>
              <Input
                id="category"
                placeholder="Enter category name"
                className="bg-white"
                value={filters.category}
                onChange={handleFilterChange}
              />
            </div>
            <div>
              <label
                htmlFor="categoryId"
                className="mb-1 block text-sm text-gray-600"
              >
                Category ID
              </label>
              <Input
                id="categoryId"
                placeholder="Enter category ID"
                className="bg-white"
                value={filters.categoryId}
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
      {/* Pagination */}
      <div className="flex items-center justify-between px-2 py-20">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <div className="flex cursor-pointer items-center">
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
    </div>
  );
};
