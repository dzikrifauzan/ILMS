'use client';

import { Pencil, Search, Trash } from 'lucide-react';
import * as React from 'react';
import { useState, useEffect } from 'react';

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

const documents = [
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
  // ... more documents
];

// This would typically come from an API or database
const hierarchicalData = {
  'Plant 1': {
    ISTD: {
      SDI: {
        'Section 1': ['Line A', 'Line B'],
        'Section 2': ['Line C', 'Line D'],
      },
      SCM: {
        'Section 3': ['Line E', 'Line F'],
        'Section 4': ['Line G', 'Line H'],
      },
    },
    PAD: {
      ' Operation': {
        'Section 5': ['Line I', 'Line J'],
        'Section 6': ['Line K', 'Line L'],
      },
    },
  },
  'Plant 2': {
    ISTD: {
      SDI: {
        'Section 7': ['Line M', 'Line N'],
        'Section 8': ['Line O', 'Line P'],
      },
    },
    PAD: {
      'Operation 1': {
        'Section 7': ['Line M', 'Line N'],
        'Section 8': ['Line O', 'Line P'],
      },
    },
  },
};

export function DocumentTable() {
  const [selectedPlant, setSelectedPlant] = useState<string>('');
  const [selectedDivision, setSelectedDivision] = useState<string>('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedSection, setSelectedSection] = useState<string>('');
  const [selectedLine, setSelectedLine] = useState<string>('');

  const [divisionOptions, setDivisionOptions] = useState<string[]>([]);
  const [departmentOptions, setDepartmentOptions] = useState<string[]>([]);
  const [sectionOptions, setSectionOptions] = useState<string[]>([]);
  const [lineOptions, setLineOptions] = useState<string[]>([]);

  useEffect(() => {
    if (selectedPlant) {
      setDivisionOptions(Object.keys(hierarchicalData[selectedPlant] || {}));
      setSelectedDivision('');
      setSelectedDepartment('');
      setSelectedSection('');
      setSelectedLine('');
    }
  }, [selectedPlant]);

  useEffect(() => {
    if (selectedPlant && selectedDivision) {
      setDepartmentOptions(
        Object.keys(hierarchicalData[selectedPlant][selectedDivision] || {}),
      );
      setSelectedDepartment('');
      setSelectedSection('');
      setSelectedLine('');
    }
  }, [selectedPlant, selectedDivision]);

  useEffect(() => {
    if (selectedPlant && selectedDivision && selectedDepartment) {
      setSectionOptions(
        Object.keys(
          hierarchicalData[selectedPlant][selectedDivision][
            selectedDepartment
          ] || {},
        ),
      );
      setSelectedSection('');
      setSelectedLine('');
    }
  }, [selectedPlant, selectedDivision, selectedDepartment]);

  useEffect(() => {
    if (
      selectedPlant &&
      selectedDivision &&
      selectedDepartment &&
      selectedSection
    ) {
      setLineOptions(
        hierarchicalData[selectedPlant][selectedDivision][selectedDepartment][
          selectedSection
        ] || [],
      );
      setSelectedLine('');
    }
  }, [selectedPlant, selectedDivision, selectedDepartment, selectedSection]);

  return (
    <ContentLayout title='Document List'>
      <div className="space-y-4">
        <div className="grid grid-cols-6 gap-4">
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Plant</Label>
            <Select onValueChange={setSelectedPlant}>
              <SelectTrigger>
                <SelectValue placeholder="Select Plant" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(hierarchicalData).map((plant) => (
                  <SelectItem key={plant} value={plant}>
                    {plant}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Division</Label>
            <Select
              onValueChange={setSelectedDivision}
              disabled={!selectedPlant}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Division" />
              </SelectTrigger>
              <SelectContent>
                {divisionOptions.map((division) => (
                  <SelectItem key={division} value={division}>
                    {division}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Department</Label>
            <Select
              onValueChange={setSelectedDepartment}
              disabled={!selectedDivision}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                {departmentOptions.map((department) => (
                  <SelectItem key={department} value={department}>
                    {department}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Section</Label>
            <Select
              onValueChange={setSelectedSection}
              disabled={!selectedDepartment}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent>
                {sectionOptions.map((section) => (
                  <SelectItem key={section} value={section}>
                    {section}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm font-medium">Line</Label>
            <Select onValueChange={setSelectedLine} disabled={!selectedSection}>
              <SelectTrigger>
                <SelectValue placeholder="Select Line" />
              </SelectTrigger>
              <SelectContent>
                {lineOptions.map((line) => (
                  <SelectItem key={line} value={line}>
                    {line}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end gap-2">
            <Button className=" flex bg-white-600 hover:bg-white-700 text-black gap-2">
              <Search className="size-4 mr-2" />
              Search
            </Button>
            <div className="flex items-end">
              <Button className="bg-red-700 hover:bg-red-800">Download</Button>
            </div>
          </div>
        </div>

        <TableElement>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Document No.</TableHead>
              <TableHead>Document Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created By</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead>Change By</TableHead>
              <TableHead>Change Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc, index) => (
              <TableRow key={doc.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{doc.documentNo}</TableCell>
                <TableCell>{doc.documentTitle}</TableCell>
                <TableCell>
                  <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                    {doc.status}
                  </span>
                </TableCell>
                <TableCell>{doc.createdBy}</TableCell>
                <TableCell>{doc.createdDate}</TableCell>
                <TableCell>{doc.changeBy}</TableCell>
                <TableCell>{doc.changeDate}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableElement>
      </div>
    </ContentLayout>
  );
}
