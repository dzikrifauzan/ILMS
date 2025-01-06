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

interface ApprovalItem {
  id: number;
  status: 'Completed' | 'Pending';
  nextApproval: string;
  documentNo: string;
  mainDescription: string;
  div: string;
  line: string;
  creationDate: string;
}

export const ApprovalStatus = () => {
  const approvals: ApprovalItem[] = [
    {
      id: 1,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '	PC202412000009',
      mainDescription: '-',
      div: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 2,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '	PC202412000008',
      mainDescription: '-',
      div: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 3,
      status: 'Pending',
      nextApproval: '-',
      documentNo: '	PC202412000007',
      mainDescription: '-',
      div: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 4,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '	PC202412000006',
      mainDescription: '-',
      div: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 5,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '	PC202412000005',
      mainDescription: '-',
      div: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 6,
      status: 'Pending',
      nextApproval: '-',
      documentNo: '	PC202412000004',
      mainDescription: '-',
      div: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 7,
      status: 'Pending',
      nextApproval: '-',
      documentNo: '	PC202412000003',
      mainDescription: '-',
      div: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 8,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '	PC202412000002',
      mainDescription: '-',
      div: 'R&D',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
    {
      id: 9,
      status: 'Completed',
      nextApproval: '-',
      documentNo: '	PC202412000001',
      mainDescription: '-',
      div: 'HR',
      line: 'Small Part',
      creationDate: '10 Dec 2024',
    },
  ];

  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [divFilter, setDivFilter] = useState<string>('All');
  const [lineFilter, setLineFilter] = useState<string>('All');
  const [docNoFilter, setDocNoFilter] = useState<string>('');
  const [filteredApprovals, setFilteredApprovals] =
    useState<ApprovalItem[]>(approvals);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleSearch = () => {
    const filteredData = approvals.filter((item) => {
      const docNoMatch =
        item.documentNo.includes(docNoFilter) || docNoFilter === '';
      return (
        (statusFilter === 'All' || item.status === statusFilter) &&
        (divFilter === 'All' || item.div === divFilter) &&
        (lineFilter === 'All' || item.line === lineFilter) &&
        docNoMatch
      );
    });
    setFilteredApprovals(filteredData);
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
      <div className="mb-6 text-xl font-semibold">Approval Status</div>
      <div className="space-y-6">
        {/* Filters */}
        <div className="items-center bg-white rounded px-2">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="w-full space-y-1.5 md:w-auto">
              <Label className="text-sm text-gray-600">Status</Label>
              <Select onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full space-y-1.5 md:w-auto">
              <Label className="text-sm text-gray-600">Division</Label>
              <Select onValueChange={setDivFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="R&D">R&D</SelectItem>
                  <SelectItem value="HR">HR</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full space-y-1.5 md:w-auto">
              <Label className="text-sm text-gray-600">Line</Label>
              <Select onValueChange={setLineFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Small Part">Small Part</SelectItem>
                  <SelectItem value="Assembly">Assembly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full space-y-1.5 md:w-auto">
              <Label className="text-sm text-gray-600">Document No.</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter document number"
                  className="w-full md:w-[200px]"
                  value={docNoFilter}
                  onChange={(e) => setDocNoFilter(e.target.value)}
                />
                <Button
                  onClick={handleSearch}
                  className="flex items-center rounded bg-white/40 text-black/70 hover:bg-black/10"
                >
                  <div className="flex cursor-pointer items-center gap-2">
                    <Search className="size-4" />
                    <span>Search</span>
                  </div>
                </Button>
              </div>
            </div>

            <div className="w-full md:ml-auto md:w-auto p-5">
              <Button className="flex w-full items-center rounded bg-red-700 text-white hover:bg-red-800 md:w-auto">
                <div className="flex cursor-pointer items-center gap-2">
                  <Download className="size-4" />
                  <span>Download</span>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded p-2 bg-white">
          <div>
            <TableElement className="justify-center">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[70px] text-center">No.</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Next Approval</TableHead>
                  <TableHead className="text-center">Document No</TableHead>
                  <TableHead className="text-center">
                    Main Description
                  </TableHead>
                  <TableHead className="text-center">Divisi</TableHead>
                  <TableHead className="text-center">Line</TableHead>
                  <TableHead className="w-[100px] text-center">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApprovals.map((doc, index) => (
                  <TableRow key={doc.id}>
                    <TableCell className="text-center align-middle">
                      {index + 1}
                    </TableCell>
                    <TableCell className="text-center align-middle">
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
                    <TableCell className="text-center align-middle">
                      {doc.nextApproval}
                    </TableCell>
                    <TableCell className="text-center align-middle">
                      {doc.documentNo}
                    </TableCell>
                    <TableCell className="text-center align-middle">
                      {doc.mainDescription}
                    </TableCell>
                    <TableCell className="text-center align-middle">
                      {doc.div}
                    </TableCell>
                    <TableCell className="text-center align-middle">
                      {doc.line}
                    </TableCell>
                    <TableCell className="text-center align-middle">
                      <div className="flex justify-center gap-2">
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
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between bg-white px-4 py-5">
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
      </div>
    </div>
  );
};
