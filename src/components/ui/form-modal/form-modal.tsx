// This file should be moved from src\components\ui\formModal\form-modal.tsx to src\components\ui\form-modal\form-modal.tsx

'use client';

import { Plus } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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

interface JobFormData {
  category: string;
  element: string;
  gentanI: {
    manual: number;
    walking: number;
    driving: number;
  };
}

export default function JobFormModal() {
  const [formData, setFormData] = React.useState<JobFormData>({
    category: '',
    element: '',
    gentanI: {
      manual: 0,
      walking: 0,
      driving: 0,
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center rounded bg-red-700 px-1 text-white hover:bg-red-800">
          <div className="flex cursor-pointer items-center gap-2">
            <Plus className="size-4" />
            <span>Add</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Job Form</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="category">Job Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  category: value,
                }))
              }
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category1">Category 1</SelectItem>
                <SelectItem value="category2">Category 2</SelectItem>
                <SelectItem value="category3">Category 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="element">Job Element</Label>
            <Select
              value={formData.element}
              onValueChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  element: value,
                }))
              }
            >
              <SelectTrigger id="element">
                <SelectValue placeholder="Select Job Element" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="element1">Element 1</SelectItem>
                <SelectItem value="element2">Element 2</SelectItem>
                <SelectItem value="element3">Element 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Gentan-I</Label>
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  id="manual"
                  value={formData.gentanI.manual || ''}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      gentanI: {
                        ...prev.gentanI,
                        manual: Number(e.target.value),
                      },
                    }))
                  }
                  className="w-16"
                />
                <label
                  htmlFor="manual"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Manual
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  id="walking"
                  value={formData.gentanI.walking || ''}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      gentanI: {
                        ...prev.gentanI,
                        walking: Number(e.target.value),
                      },
                    }))
                  }
                  className="w-16"
                />
                <label
                  htmlFor="walking"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Walking
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  id="driving"
                  value={formData.gentanI.driving || ''}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      gentanI: {
                        ...prev.gentanI,
                        driving: Number(e.target.value),
                      },
                    }))
                  }
                  className="w-16"
                />
                <label
                  htmlFor="driving"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Driving
                </label>
              </div>
            </div>
          </div>
          <div>
            <Button className="h-10 w-20 bg-red-700 hover:bg-red-800">
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
