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
import { useState, useEffect } from 'react';

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
import { api } from '@/lib/api-client';

interface JobElement {
  id: number;
  element_id: string;
  category_name: string;
  element_name: string;
  time_manual: string;
  time_walking: string;
  time_driving: string;
  created_by: string;
  created_dt: string;
}

export const JobElementTable = () => {
  const [dataJobElement, setDataJobElement] = useState<JobElement[]>([]);
  const fetchJobElement = async () => {
    try {
      const response = await api.get(`/gentani/master-data/job-elements`);
      console.log('ini respon job element', response);
      setDataJobElement(response.data);
    } catch (error) {
      console.error('Connection Error', error);
    }
  };

  useEffect(() => {
    fetchJobElement();
  }, []);
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
        margin: '20px',
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
            {dataJobElement.map((element: JobElement, index: number) => (
              <TableRow key={element.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{element.element_id}</TableCell>
                <TableCell>{element.category_name}</TableCell>
                <TableCell>{element.element_name}</TableCell>
                <TableCell>{element.time_manual}</TableCell>
                <TableCell>{element.time_walking}</TableCell>
                <TableCell>{element.time_driving}</TableCell>
                <TableCell>{element.created_by}</TableCell>
                <TableCell>{element.created_dt}</TableCell>
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
              />
            </div>
            <div>
              <label
                htmlFor="unit"
                className="mb-1 block text-sm text-gray-600"
              >
                Unit
              </label>
              <Input id="unit" placeholder="Unit" className="bg-white" />
            </div>
            <div className="flex justify-center gap-2">
              <Button className="flex items-center rounded bg-red-700 px-1 text-white hover:bg-red-800">
                <div className="flex cursor-pointer items-center gap-2">
                  <Trash className="size-4" />
                  <span>Clear</span>
                </div>
              </Button>
              <Button className="flex items-center rounded bg-white px-1 text-black hover:bg-white/30">
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
