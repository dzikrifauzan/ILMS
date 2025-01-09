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
import { useState, useEffect } from 'react';

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
import { api } from '@/lib/api-client';

type Document = {
  id: number;
  documentNo: string;
  documentTitle: string;
  status: string;
  created_by: string;
  createdDate: string;
  changeBy: string;
  changeDate: string;
};

// const documents: Document[] = [
//   {
//     id: 1,
//     documentNo: 'PC202412000001',
//     documentTitle: 'Supply Route A',
//     status: 'Draft',
//     createdBy: 'Admin',
//     createdDate: '10 Dec 2024',
//     changeBy: 'Admin',
//     changeDate: '10 Dec 2024',
//   },
//   {
//     id: 2,
//     documentNo: 'PC202412000002',
//     documentTitle: 'Supply Route A',
//     status: 'Draft',
//     createdBy: 'Admin',
//     createdDate: '10 Dec 2024',
//     changeBy: 'Admin',
//     changeDate: '10 Dec 2024',
//   },
//   {
//     id: 3,
//     documentNo: 'PC202412000003',
//     documentTitle: 'Supply Route A',
//     status: 'Draft',
//     createdBy: 'Admin',
//     createdDate: '10 Dec 2024',
//     changeBy: 'Admin',
//     changeDate: '10 Dec 2024',
//   },
//   {
//     id: 4,
//     documentNo: 'PC202412000004',
//     documentTitle: 'Supply Route A',
//     status: 'Draft',
//     createdBy: 'Admin',
//     createdDate: '10 Dec 2024',
//     changeBy: 'Admin',
//     changeDate: '10 Dec 2024',
//   },
//   {
//     id: 5,
//     documentNo: 'PC202412000005',
//     documentTitle: 'Supply Route A',
//     status: 'Draft',
//     createdBy: 'Admin',
//     createdDate: '10 Dec 2024',
//     changeBy: 'Admin',
//     changeDate: '10 Dec 2024',
//   },
//   {
//     id: 6,
//     documentNo: 'PC202412000006',
//     documentTitle: 'Supply Route A',
//     status: 'Draft',
//     createdBy: 'Admin',
//     createdDate: '10 Dec 2024',
//     changeBy: 'Admin',
//     changeDate: '10 Dec 2024',
//   },
//   {
//     id: 7,
//     documentNo: 'PC202412000007',
//     documentTitle: 'Supply Route A',
//     status: 'Draft',
//     createdBy: 'Admin',
//     createdDate: '10 Dec 2024',
//     changeBy: 'Admin',
//     changeDate: '10 Dec 2024',
//   },
//   {
//     id: 8,
//     documentNo: 'PC202412000008',
//     documentTitle: 'Supply Route A',
//     status: 'Draft',
//     createdBy: 'Admin',
//     createdDate: '10 Dec 2024',
//     changeBy: 'Admin',
//     changeDate: '10 Dec 2024',
//   },
//   {
//     id: 9,
//     documentNo: 'PC202412000009',
//     documentTitle: 'Supply Route A',
//     status: 'Draft',
//     createdBy: 'Admin',
//     createdDate: '10 Dec 2024',
//     changeBy: 'Admin',
//     changeDate: '10 Dec 2024',
//   },
// ];

export function DocumentTable() {
  const totalPages = 10;
  const [documents, setDocuments] = useState<Document[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [filteredDocument, setFilteredApprovals] =
    useState<Document[]>(documents);
  console.log('ini response document', documents);
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handleSearch = () => {
    const filteredData = documents.filter((item) => {
      return statusFilter === 'All' || item.status === statusFilter;
    });
    setFilteredApprovals(filteredData);
  };

  const fetchDocumentTable = async () => {
    try {
      const response = await api.get(`/gentani/master-data/job-categories`);
      console.log('ini respon', response);
      setDocuments(response.data);
    } catch (error) {
      console.error('Connection Error');
    }
  };

  useEffect(() => {
    fetchDocumentTable();
  }, []);
  return (
    <div
      className="rounded-3xl bg-gray-100 p-5 overflow-y-scroll"
      style={{
        height: 'calc(100vh - 40px)',
        margin: '20px',
        scrollbarWidth: 'none',
      }}
    >
      <div className="mb-6 text-xl font-semibold">Sw Inquiry</div>
      <div className="space-y-6">
        <div className="flex flex-wrap flex-col gap-4 md:flex-row md:items-end">
          <div className="w-full space-y-1.5 md:w-auto">
            <Label className="text-sm text-gray-600">Status</Label>
            <Select onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="Draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* <div className="w-full space-y-1.5 md:w-auto">
            <Label className="text-sm text-gray-600">Division</Label>
            <Select>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="div1">Division 1</SelectItem>
                <SelectItem value="div2">Division 2</SelectItem>
              </SelectContent>
            </Select>
          </div> */}

          {/* <div className="w-full space-y-1.5 md:w-auto">
            <Label className="text-sm text-gray-600">Departement</Label>
            <Select>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dept1">Departement 1</SelectItem>
                <SelectItem value="dept2">Departement 2</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
          {/* <div className="w-full space-y-1.5 md:w-auto">
            <Label className="text-sm text-gray-600">Section</Label>
            <Select>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sect1">Section 1</SelectItem>
                <SelectItem value="sect2">Section 2</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
          {/* <div className="w-full space-y-1.5 md:w-auto">
            <Label className="text-sm text-gray-600">Line</Label>
            <Select>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="line1">Line 1</SelectItem>
                <SelectItem value="line2">Line 2</SelectItem>
              </SelectContent>
            </Select>
          </div> */}

          <div className="w-full space-y-1.5 md:w-auto">
            <div className="flex gap-2">
              <Button
                onClick={handleSearch}
                className="flex w-full items-center rounded bg-white/40 px-1 text-black/70 hover:bg-black/10 md:w-auto"
              >
                <div className="flex cursor-pointer items-center gap-2">
                  <Search className="size-4" />
                  <span>Search</span>
                </div>
              </Button>
            </div>
          </div>

          <div className="w-full md:ml-auto md:w-auto">
            <Button className="flex w-full items-center rounded bg-red-700 text-white hover:bg-red-800 md:w-auto">
              <div className="flex cursor-pointer items-center gap-2">
                <Download className="size-4" />
                <span>Download</span>
              </div>
            </Button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
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
                  <TableCell>{doc.created_by}</TableCell>
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
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-2 py-10">
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
  );
}
