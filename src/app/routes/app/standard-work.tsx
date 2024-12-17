'use client';

import { ChevronLeft, ChevronRight, Pencil, Search, Trash } from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';

import { ContentLayout } from '@/components/layouts';
import { Button } from '@/components/ui/button';
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
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ContentLayout title="SW Document">
      <div className="space-y-4">
        <div className="grid grid-cols-6 gap-4">
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Plant</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Plant" />
              </SelectTrigger>
              <SelectContent></SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Division</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Division" />
              </SelectTrigger>
              <SelectContent></SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Department</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent></SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Section</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent></SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Line</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Line" />
              </SelectTrigger>
              <SelectContent></SelectContent>
            </Select>
          </div>
          <div className="flex items-end gap-2">
            <Button variant="outline" className="flex gap-2">
              <Search className="size-4" />
            </Button>
            <Button className="bg-red-600 hover:bg-red-700">Download</Button>
          </div>
        </div>

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

                    <Button variant="ghost" size="icon" className="size-8">
                      <Trash className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableElement>

        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          >
            <ChevronLeft className="size-4" />
          </Button>
          <span className="text-sm">{currentPage} of 10</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.min(10, prev + 1))}
          >
            <ChevronRight className="size-4" />
          </Button>
          <Select defaultValue="0">
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ContentLayout>
  );
}
