'use client';

import {
  ChevronLeft,
  ChevronRight,
  Download,
  Pencil,
  Search,
  Trash,
  Trash2,
} from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import { ConfirmationDialog, Dialog, DialogTrigger } from '@/components/ui/dialog';

interface ApprovalItem {
  id: number;
  status: 'Completed' | 'Pending';
  nextApproval: string;
  documentNo: string;
  mainDescription: string;
  dept: string;
  line: string;
  creationDate: string;
}

export const ApprovalStatus = () => {
  const approvals: ApprovalItem[] = [
    {
      id: 1,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000001',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 2,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000002',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 3,
      status: 'Pending',
      nextApproval: '-',
      documentNo: '000003',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 4,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000004',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 5,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000005',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 6,
      status: 'Pending',
      nextApproval: '-',
      documentNo: '000006',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 7,
      status: 'Pending',
      nextApproval: '-',
      documentNo: '000007',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 8,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000008',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 9,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '000009',
      mainDescription: '-',
      dept: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
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
      <div className="mb-6 text-xl font-semibold">Approval Status</div>
      <div className="space-y-6">
        {/* Filters */}
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
            <Label className="text-sm text-gray-600">Document No.</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Enter document number"
                className="w-[200px]"
              />
              <Button className="flex items-center rounded bg-white/40 hover:bg-black/10 text-black/70">
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
              <TableHead className="w-[70px]">No.</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Next Approval</TableHead>
              <TableHead>Document No</TableHead>
              <TableHead>main Description</TableHead>
              <TableHead>Divisi</TableHead>
              <TableHead>Line</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {approvals.map((doc: ApprovalItem, index: number) => (
              <TableRow key={doc.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <span
                    className={`rounded px-2 py-0.5 text-xs font-medium ${
                      doc.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {doc.status}
                  </span>
                </TableCell>
                <TableCell>{doc.nextApproval}</TableCell>
                <TableCell>{doc.documentNo}</TableCell>
                <TableCell>{doc.mainDescription}</TableCell>
                <TableCell>{doc.dept}</TableCell>
                <TableCell>{doc.line}</TableCell>
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
      </div>
    </div>
  );
};
