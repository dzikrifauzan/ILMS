'use client';

import {
  ChevronLeft,
  ChevronRight,
  Download,
  Pencil,
  Search,
  Trash2,
} from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  ConfirmationDialog,
  Dialog,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  TableBody,
  TableCell,
  TableElement,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Document = {
  id: number;
  documentNo: string;
  documentTitle: string;
  status: string;
  createdBy: string;
  createdDate: string;
  changeBy: string;
  changeDate: string;
};

const documents: Document[] = [
  {
    id: 1,
    documentNo: 'PC202412000001',
    documentTitle: 'Supply Route A',
    status: 'Draft',
    createdBy: 'Admin',
    createdDate: '10 Dec 2024',
    changeBy: 'Admin',
    changeDate: '10 Dec 2024',
  },
  {
    id: 2,
    documentNo: 'PC202412000002',
    documentTitle: 'Supply Route A',
    status: 'Draft',
    createdBy: 'Admin',
    createdDate: '10 Dec 2024',
    changeBy: 'Admin',
    changeDate: '10 Dec 2024',
  },
  {
    id: 3,
    documentNo: 'PC202412000003',
    documentTitle: 'Supply Route A',
    status: 'Draft',
    createdBy: 'Admin',
    createdDate: '10 Dec 2024',
    changeBy: 'Admin',
    changeDate: '10 Dec 2024',
  },
  {
    id: 4,
    documentNo: 'PC202412000004',
    documentTitle: 'Supply Route A',
    status: 'Draft',
    createdBy: 'Admin',
    createdDate: '10 Dec 2024',
    changeBy: 'Admin',
    changeDate: '10 Dec 2024',
  },
  {
    id: 5,
    documentNo: 'PC202412000005',
    documentTitle: 'Supply Route A',
    status: 'Draft',
    createdBy: 'Admin',
    createdDate: '10 Dec 2024',
    changeBy: 'Admin',
    changeDate: '10 Dec 2024',
  },
  {
    id: 6,
    documentNo: 'PC202412000006',
    documentTitle: 'Supply Route A',
    status: 'Draft',
    createdBy: 'Admin',
    createdDate: '10 Dec 2024',
    changeBy: 'Admin',
    changeDate: '10 Dec 2024',
  },
  {
    id: 7,
    documentNo: 'PC202412000007',
    documentTitle: 'Supply Route A',
    status: 'Draft',
    createdBy: 'Admin',
    createdDate: '10 Dec 2024',
    changeBy: 'Admin',
    changeDate: '10 Dec 2024',
  },
  {
    id: 8,
    documentNo: 'PC202412000008',
    documentTitle: 'Supply Route A',
    status: 'Draft',
    createdBy: 'Admin',
    createdDate: '10 Dec 2024',
    changeBy: 'Admin',
    changeDate: '10 Dec 2024',
  },
  {
    id: 9,
    documentNo: 'PC202412000009',
    documentTitle: 'Supply Route A',
    status: 'Draft',
    createdBy: 'Admin',
    createdDate: '10 Dec 2024',
    changeBy: 'Admin',
    changeDate: '10 Dec 2024',
  },
];

export function DocumentTable() {
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className=" p-5 rounded-3xl bg-white mr-5 mb-5">
      <div className="mb-6 text-xl font-semibold">Sw Inquiry</div>
      <div className="space-y-6">
        <div className="flex items-end gap-4">
          <div className="space-y-1.5">
            <Label className="text-sm text-gray-600">Status</Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label className="text-sm text-gray-600">Division</Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="div1">Division 1</SelectItem>
                <SelectItem value="div2">Division 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label className="text-sm text-gray-600">Departement</Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dept1">Departement 1</SelectItem>
                <SelectItem value="dept2">Departement 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm text-gray-600">Section</Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sect1">Section 1</SelectItem>
                <SelectItem value="sect2">Section 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm text-gray-600">Line</Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="line1">Line 1</SelectItem>
                <SelectItem value="line2">Line 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <div className="flex gap-2">
              <Button className="flex items-center px-1 rounded bg-white/40 hover:bg-black/10 text-black/70">
                <div className="flex cursor-pointer items-center gap-2">
                  <Search className="size-4" />
                  <span>Search</span>
                </div>
              </Button>
            </div>
          </div>

          <div className="ml-auto">
            <Button className="flex items-center rounded text-white bg-red-700 hover:bg-red-800 ">
              <div className="flex cursor-pointer items-center gap-2">
                <Download className="size-4" />
                <span>Download</span>
              </div>
            </Button>
          </div>
        </div>
        {/* Table */}
        <TableElement>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">No.</TableHead>
              <TableHead>Document No.</TableHead>
              <TableHead>Document Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead>Change By</TableHead>
              <TableHead>Change Date</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc: Document, index: number) => (
              <TableRow key={doc.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{doc.documentNo}</TableCell>
                <TableCell>{doc.documentTitle}</TableCell>
                <TableCell>
                  <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                    {doc.status}
                  </span>
                </TableCell>
                <TableCell>{doc.createdBy}</TableCell>
                <TableCell>{doc.createdDate}</TableCell>
                <TableCell>{doc.changeBy}</TableCell>
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
        <div className="flex items-center justify-between px-2 py-10">
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
      </div>
    </div>
  );
}
