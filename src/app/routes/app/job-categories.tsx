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
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  TableBody,
  TableCell,
  TableElement,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { api } from '@/lib/api-client';

interface JobCategory {
  id: number;
  category_id: string;
  category_name: string;
  created_by: string;
  created_dt: string;
  changed_by: string;
  changed_dt: string;
}

export const JobCategoriesTable = () => {
  const totalPages = 10;
  const [formData, setFormData] = useState({
    category_name: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [documents, setDocuments] = useState<JobCategory[]>([]);
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const fetchDocumentTable = async () => {
    try {
      const response = await api.get(`/gentani/master-data/job-categories`);
      console.log('ini respon', response);
      setDocuments(response.data);
    } catch (error) {
      console.error('Connection Error', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/gentani/master-data/job-category/`, {
        data: { category_id: id },
      });
      fetchDocumentTable();
    } catch (error) {
      console.error('Connection Error', error);
    }
  };

  const handleAddCategory = async (category_name: string) => {
    try {
      await api.post('/gentani/master-data/job-category', {
        category_name: category_name,
      });
      fetchDocumentTable();
    } catch (error) {
      console.error('Connection Error', error);
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
      <div className="mb-6 flex items-center justify-between">
        <div className="text-xl font-semibold">Job Categories</div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded bg-red-700 px-1 text-white hover:bg-red-800">
              <div className="flex cursor-pointer items-center gap-2">
                <Plus className="size-4" />
                <span>Add</span>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Job Category</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category_name" className="text-right">
                  Category Name
                </Label>
                <Input
                  id="category_name"
                  className="col-span-3"
                  value={formData.category_name}
                  onChange={(e) =>
                    setFormData({ category_name: e.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={() => {
                  handleAddCategory(formData.category_name);
                  close();
                }}
              >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-4 w-full bg-white rounded-l">
          <TableElement>
            <TableHeader className="bg-gray-300">
              <TableRow>
                <TableHead className="w-[50px]">No.</TableHead>
                <TableHead>Document No.</TableHead>
                <TableHead>Category Name</TableHead>
                <TableHead>Created By</TableHead>
                <TableHead>Created Date</TableHead>
                <TableHead>Change By</TableHead>
                <TableHead>Change Date</TableHead>
                <TableHead className="w-[100px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc: JobCategory, index: number) => (
                <TableRow key={doc.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{doc.category_id}</TableCell>
                  <TableCell>{doc.category_name}</TableCell>
                  <TableCell>{doc.created_by}</TableCell>
                  <TableCell>
                    {doc.created_dt
                      ? new Date(doc.created_dt).toLocaleDateString('id-ID', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })
                      : '-'}
                  </TableCell>
                  <TableCell>{doc.changed_by || '-'}</TableCell>
                  <TableCell>
                    {doc.changed_dt
                      ? new Date(doc.changed_dt).toLocaleDateString('id-ID', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })
                      : '-'}
                  </TableCell>
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
                            <Button
                              onClick={() => handleDelete(doc.category_id)}
                              variant="destructive"
                            >
                              Delete
                            </Button>
                          }
                        />
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}{' '}
            </TableBody>
          </TableElement>
        </div>
        {/* Filter */}
        <div className="w-[250px] space-y-4 rounded bg-white p-4">
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
              />
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
