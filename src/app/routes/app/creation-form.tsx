'use client';

import {
  Camera,
  Upload,
  FilePlus,
  Trash2,
  Save,
  Pencil,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  ConfirmationDialog,
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import JobFormModal from '@/components/ui/form-modal/form-modal';
import { Input } from '@/components/ui/input';
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
import { useUser } from '@/stores/auth';

type ProcessElement = {
  id: number;
  elementJob: string;
  category: string;
  manual: string;
  walking: string;
  driving: string;
  distance: string;
  frequency: string;
  total: string;
};

const documents: ProcessElement[] = [
  {
    id: 1,
    elementJob: 'JC10412/20/000009',
    category: 'Supply Point A',
    manual: '10s',
    walking: '10s',
    driving: '20s',
    distance: '???',
    frequency: '???',
    total: '???',
  },
  {
    id: 2,
    elementJob: 'JC10412/20/000009',
    category: 'Supply Point A',
    manual: '10s',
    walking: '10s',
    driving: '20s',
    distance: '???',
    frequency: '???',
    total: '???',
  },
  {
    id: 3,
    elementJob: 'JC10412/20/000009',
    category: 'Supply Point A',
    manual: '10s',
    walking: '10s',
    driving: '20s',
    distance: '???',
    frequency: '???',
    total: '???',
  },
  {
    id: 4,
    elementJob: 'JC10412/20/000009',
    category: 'Supply Point A',
    manual: '10s',
    walking: '10s',
    driving: '20s',
    distance: '???',
    frequency: '???',
    total: '???',
  },
  {
    id: 5,
    elementJob: 'JC10412/20/000009',
    category: 'Supply Point A',
    manual: '10s',
    walking: '10s',
    driving: '20s',
    distance: '???',
    frequency: '???',
    total: '???',
  },
  {
    id: 6,
    elementJob: 'JC10412/20/000009',
    category: 'Supply Point A',
    manual: '10s',
    walking: '10s',
    driving: '20s',
    distance: '???',
    frequency: '???',
    total: '???',
  },
  {
    id: 7,
    elementJob: 'JC10412/20/000009',
    category: 'Supply Point A',
    manual: '10s',
    walking: '10s',
    driving: '20s',
    distance: '???',
    frequency: '???',
    total: '???',
  },
  {
    id: 8,
    elementJob: 'JC10412/20/000009',
    category: 'Supply Point A',
    manual: '10s',
    walking: '10s',
    driving: '20s',
    distance: '???',
    frequency: '???',
    total: '???',
  },
  {
    id: 9,
    elementJob: 'JC10412/20/000009',
    category: 'Supply Point A',
    manual: '10s',
    walking: '10s',
    driving: '20s',
    distance: '???',
    frequency: '???',
    total: '???',
  },
  {
    id: 10,
    elementJob: 'JC10412/20/000009',
    category: 'Supply Point A',
    manual: '10s',
    walking: '10s',
    driving: '20s',
    distance: '???',
    frequency: '???',
    total: '???',
  },
];

const formData = {
  information: {
    author: 'Nama',
    status: 'Draft',
    revision: '12',
    manpowerId: '',
  },
};
export const CreationForm = () => {
  const [User] = useUser();
  const totalPages = 1000000;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  return (
    <div className="m-5 rounded-3xl bg-white p-5">
      <div className="mb-6 text-xl font-semibold">Creation Form</div>
      <div className="mb-6">
        <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Select>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Tack Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="time1">Tack Time 1.6</SelectItem>
              <SelectItem value="time2">Tack Time 2.1</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button className="flex w-full items-center rounded bg-red-700 px-1 text-white hover:bg-red-800 sm:w-auto">
              <label className="flex w-full cursor-pointer items-center justify-center gap-2">
                <input type="file" className="hidden" />
                <Upload className="size-4" />
                <span>Upload</span>
              </label>
            </Button>
            <Button className="flex w-full items-center rounded bg-red-700 px-1 text-white hover:bg-red-800 sm:w-auto">
              <div className="flex w-full cursor-pointer items-center justify-center gap-2">
                <Save className="size-4" />
                <span>Save Draft</span>
              </div>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex w-full items-center rounded bg-red-700 px-1 text-white hover:bg-red-800 sm:w-auto">
                  <div className="flex w-full cursor-pointer items-center justify-center gap-2">
                    <FilePlus className="size-4" />
                    <span>Preview</span>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[95vw] sm:w-auto">
                <div className="grid gap-6 py-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">Information</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <span className="text-sm text-gray-600">
                              Author:
                            </span>
                            <span className="ml-2 text-sm">
                              {User.data?.firstName}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">
                              Status:
                            </span>
                            <span className="ml-2 text-sm">
                              {formData.information.status}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">
                              Revision:
                            </span>
                            <span className="ml-2 text-sm">
                              {formData.information.revision}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600">
                              Manpower ID:
                            </span>
                            <span className="ml-2 text-sm">
                              {formData.information.manpowerId}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Document Content</h3>
                        <div className="rounded-lg border p-4">
                          <p className="text-sm text-gray-600">
                            Document preview will be displayed here
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>{' '}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-1">
            <div className="space-y-4">
              <h3 className="font-medium">Information</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-600">
                    {formData.information.author}
                  </span>
                  <span className="text-sm">: {User.data?.firstName}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-600">Status</span>
                  <span className="text-sm">
                    : {formData.information.status}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-sm text-gray-600">Revision</span>
                  <span className="text-sm">
                    : {formData.information.revision}
                  </span>
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor="manpower"
                    className="w-32 text-sm text-gray-600"
                  >
                    Manpower ID
                  </label>
                  <span className="text-sm">:</span>
                  <Input
                    id="manpower"
                    type="number"
                    placeholder="No."
                    maxLength={7}
                    max={9999999}
                    className="ml-2 h-7 w-16 rounded-lg border-2 border-gray-300 px-2 py-1 text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Upload Image</h3>
              <div className="rounded-lg border-2 border-dashed p-8">
                <div className="flex flex-col items-center justify-center text-gray-500">
                  <Camera className="mb-2 size-12" />
                  <span>Camera</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                Pastikan Foto Yang diambil terlihat jelas
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Location',
                'Sub Location',
                'Division',
                'Departement',
                'Section',
                'Line',
              ].map((label) => (
                <div key={label}>
                  <label
                    htmlFor={label}
                    className="mb-1 block text-sm text-gray-600"
                  >
                    {label}
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">{label} 1</SelectItem>
                      <SelectItem value="2">{label} 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5">
            <div className="mb-4 flex flex-col items-center gap-2 sm:flex-row">
              <Input
                placeholder="Add Process Name"
                className="w-full sm:flex-1"
              />
              <Select defaultValue="gentan-1">
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gentan-1">Gentan-I</SelectItem>
                  <SelectItem value="gentan-2">TSKK</SelectItem>
                </SelectContent>
              </Select>
              <Dialog>
                <DialogTrigger asChild></DialogTrigger>
                <JobFormModal />
              </Dialog>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
              <TableElement>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">No.</TableHead>
                    <TableHead className="w-[200px]">Element Job</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="w-[10px]">Manual</TableHead>
                    <TableHead className="w-[10px]">Walking</TableHead>
                    <TableHead className="w-[150px]">Driving</TableHead>
                    <TableHead>Distance</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead className="w-[100px]">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.map((doc: ProcessElement, index: number) => (
                    <TableRow key={doc.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{doc.elementJob}</TableCell>
                      <TableCell>{doc.category}</TableCell>
                      <TableCell>{doc.manual}</TableCell>
                      <TableCell>{doc.walking}</TableCell>
                      <TableCell>{doc.driving}</TableCell>
                      <TableCell>{doc.distance}</TableCell>
                      <TableCell>{doc.frequency}</TableCell>
                      <TableCell>{doc.total}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8"
                          >
                            <Pencil className="size-4" />
                          </Button>

                          <Dialog>
                            <DialogTrigger asChild></DialogTrigger>
                            <ConfirmationDialog
                              title="Delete Element"
                              body="are you sure you want to delete?"
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
              <div className="mb-20 flex items-center justify-between px-2 py-20">
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
          </div>
        </div>
      </div>
    </div>
  );
};
