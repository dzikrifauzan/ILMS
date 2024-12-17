import * as React from 'react';

import { Head } from '../seo';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="py-1">
        <div className="mx-auto px-4 sm:px-9 md:px-1">
          <h2 className="font-semibold text-black">{title}</h2>
        </div>
        <div className="mx-auto max-w-full px-4 py-6 sm:px-6 md:px-8">
          {children}
        </div>
      </div>
    </>
  );
};
