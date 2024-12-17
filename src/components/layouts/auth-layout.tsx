import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { paths } from '@/config/paths';
import { useUser } from '@/stores/auth/hooks';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const AuthLayout = ({ children, title }: LayoutProps) => {
  const [user] = useUser();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLogin) {
      console.log(user);
      navigate(redirectTo ? redirectTo : paths.app.dashboard.getHref(), {
        replace: true,
      });
    }
  }, [user, navigate, redirectTo]);

  return (
    <>
      <div className="flex min-h-screen flex-col justify-center bg-red-700 py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="py-5 text-center text-7xl font-extrabold text-white">
            ILMS
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-10 py-8 shadow sm:rounded-lg sm:px-10">
            <h3 className=" mt-1 text-center font-extrabold text-gray-900">
              {title}
            </h3>
            <div className="py-3"> </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
