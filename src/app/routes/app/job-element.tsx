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
    setFilteredElements(elements);
  };
  const [filteredElements, setFilteredElements] =
    useState<JobElement[]>(elements);

  const handleSearch = () => {
    const filtered = elements.filter((element) => {
      return (
        (filters.category === '' ||
          element.category.includes(filters.category)) &&
        (filters.elementId === '' ||
          element.elementId.includes(filters.elementId)) &&
        (filters.elementName === '' ||
          element.elementName.includes(filters.elementName)) &&
        (filters.unit === '' || element.manual.includes(filters.unit)) // Misalnya, "unit" cocok dengan "manual".
      );
    });
    setFilteredElements(filtered);
  };

  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
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
        <div className="text-xl font-semibold">Job Element</div>
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
            {filteredElements.map((element: JobElement, index: number) => (
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
        <div className="h-fit w-[250px] space-y-4 rounded-lg bg-gray-100 p-4">
          <div className="text-sm font-medium">Filter</div>
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

      {/* Pagination */}
      <div className="flex items-center justify-between px-2 py-20">
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
