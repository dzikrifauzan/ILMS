// This file should be moved from src\components\ui\formModal\form-modal.tsx to src\components\ui\form-modal\form-modal.tsx

'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import { Plus } from 'lucide-react';

interface JobFormData {
  category: string;
  element: string;
  gentanI: {
    manual: boolean;
    walking: boolean;
    driving: boolean;
  };
}

export default function JobFormModal() {
  const [formData, setFormData] = React.useState<JobFormData>({
    category: '',
    element: '',
    gentanI: {
      manual: false,
      walking: false,
      driving: false,
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center px-1 rounded text-white bg-red-700 hover:bg-red-800 ">
          <div className="flex cursor-pointer items-center gap-2">
            <Plus className="size-4" />
            <span>Add</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Job Form</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="category">Job Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, category: value }))
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
            <Label htmlFor="category">Job Element</Label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, category: value }))
              }
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Select Job Element" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category1">Element 1</SelectItem>
                <SelectItem value="category2">Element 2</SelectItem>
                <SelectItem value="category3">Element 3</SelectItem>
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
                  value={formData.gentanI.manual ? 1 : 0}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      gentanI: {
                        ...prev.gentanI,
                        manual: Boolean(Number(e.target.value)),
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
                  value={formData.gentanI.walking ? 1 : 0}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      gentanI: {
                        ...prev.gentanI,
                        walking: Boolean(Number(e.target.value)),
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
                  value={formData.gentanI.driving ? 1 : 0}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      gentanI: {
                        ...prev.gentanI,
                        driving: Boolean(Number(e.target.value)),
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
                </label>{' '}
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
