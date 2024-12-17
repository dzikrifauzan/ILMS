'use client';

import {
  ChevronLeft,
  ChevronRight,
  SquarePen,
  Trash2,
  Plus,
  Search,
} from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
      categoryId: 'JC10412/20/000009',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 2,
      categoryId: 'JC10412/20/000008',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 3,
      categoryId: 'JC10412/20/000007',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 4,
      categoryId: 'JC10412/20/000006',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 5,
      categoryId: 'JC10412/20/000005',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 6,
      categoryId: 'JC10412/20/000004',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 7,
      categoryId: 'JC10412/20/000003',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 8,
      categoryId: 'JC10412/20/000002',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
    {
      id: 9,
      categoryId: 'JC10412/20/000001',
      category: 'Supply Point A',
      createdBy: 'Tester',
      createdDate: '10 Dec 2024',
      changedBy: 'Admin',
      changeDate: '10 Dec 2024',
    },
  ];

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-semibold">Job Categories</div>
        <Button className="bg-red-700 hover:bg-red-800">
          <Plus className="mr-2 size-4" />
          Add
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <div className="rounded-md border">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">No</th>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  <th className="px-4 py-2 text-left">Created By</th>
                  <th className="px-4 py-2 text-left">Created Date</th>
                  <th className="px-4 py-2 text-left">Changed By</th>
                  <th className="px-4 py-2 text-left">Change Date</th>
                  <th className="px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id} className="border-t">
                    <td className="px-4 py-2">{category.id}</td>
                    <td className="px-4 py-2">{category.categoryId}</td>
                    <td className="px-4 py-2">{category.category}</td>
                    <td className="px-4 py-2">{category.createdBy}</td>
                    <td className="px-4 py-2">{category.createdDate}</td>
                    <td className="px-4 py-2">{category.changedBy}</td>
                    <td className="px-4 py-2">{category.changeDate}</td>
                    <td className="px-4 py-2">
                      <div className="flex justify-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <SquarePen className="size-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between px-2 py-4">
            <Button variant="outline" size="icon">
              <ChevronLeft className="size-4" />
            </Button>
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-700">2 of 10</span>
            </div>
            <Button variant="outline" size="icon">
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="w-[250px] h-[275px] p-4 bg-gray-50 rounded-lg space-y-4">
          <div className="text-sm font-medium">Filter</div>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="categoryName"
                className="text-sm text-gray-600 block mb-1"
              >
                Category Name
              </label>
              <Input
                id="categoryName"
                placeholder="Enter category name"
                className="bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="categoryId"
                className="text-sm text-gray-600 block mb-1"
              >
                Category ID
              </label>
              <Input
                id="categoryId"
                placeholder="Enter category ID"
                className="bg-white"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                <Trash2 className="mr-2 size-4" />
                Clear
              </Button>
              <Button className="flex-1 bg-red-700 hover:bg-red-800">
                <Search className="mr-2 size-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
