import { ChevronDown, PanelLeft, User2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useNavigation } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { paths } from '@/config/paths';
// import { useAuthorization } from '@/lib/authorization';
import { useLogout, useUser } from '@/stores/auth/hooks';
import { cn } from '@/utils/cn';

import { Link } from '../ui/link';

type SideNavigationItem = {
  name: string;
  to: string;
  children?: { name: string; to: string }[];
};

const LogoComponent = () => {
  return (
    <Link
      className="flex items-center text-white"
      to={paths.app.dashboard.getHref()}
    >
      <span className="text-7xl font-semibold text-white">ILMS</span>
    </Link>
  );
};

const Progress = () => {
  const { state, location } = useNavigation();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
  }, [location?.pathname]);

  useEffect(() => {
    if (state === 'loading') {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(timer);
            return 100;
          }
          const newProgress = oldProgress + 10;
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 300);

      return () => {
        clearInterval(timer);
      };
    }
  }, [state]);

  if (state !== 'loading') {
    return null;
  }

  return (
    <div
      className="fixed left-0 top-0 h-1 bg-blue-500 transition-all duration-200 ease-in-out"
      style={{ width: `${progress}%` }}
    ></div>
  );
};

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const logout = useLogout();
  // const { checkAccess } = useAuthorization();
  const navigation = [
    { name: 'Dashboard', to: paths.app.dashboard.getHref() },
    {
      name: 'Standard Work',
      children: [
        {
          name: 'Creation Form',
          to: paths.app.standardWork.creationForm.getHref(),
        },
        {
          name: 'Approval Status',
          to: paths.app.standardWork.ApprovalStatus.getHref(),
        },
        {
          name: 'SW Inquiry',
          to: paths.app.standardWork.SwInquiry.getHref(),
        },
        {
          name: 'Yamazumi',
          to: paths.app.standardWork.Yamazumi.getHref(),
        },
      ],
    },
    {
      name: 'Master Data',
      children: [
        {
          name: 'Job Categories',
          to: paths.app.masterData.JobCategories.getHref(),
        },
        {
          name: 'Job Element',
          to: paths.app.masterData.JobElements.getHref(),
        },
      ],
    },
    {
      name: 'User',
      to: paths.app.profile.getHref(),
    },
  ].filter(Boolean) as SideNavigationItem[];
  const [user] = useUser();
  const [activeNav, setActiveNav] = useState('');

  return (
    <div className="flex w-full flex-col bg-gray-100">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col bg-red-700 sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <div className="flex h-16 shrink-0 items-center px-4">
            <LogoComponent />
          </div>
          {navigation.map((item) => (
            <div key={item.name} className="w-full">
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setActiveNav(activeNav === item.name ? '' : item.name)
                    }
                    className={cn(
                      'flex w-full items-center px-3 py-2 text-sm font-medium text-white hover:bg-red-800',
                      activeNav === item.name && 'bg-red-800',
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        'ml-auto h-4 w-4 transition-transform',
                        activeNav === item.name && 'rotate-180',
                      )}
                    />
                  </button>
                  {activeNav === item.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.name}
                          to={child.to}
                          className={({ isActive }) =>
                            cn(
                              'block px-3 py-2 text-sm font-medium text-white/70 hover:bg-red-800 hover:text-white',
                              isActive && 'bg-red-800 text-white',
                            )
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    cn(
                      'text-gray-300 hover:bg-red-800 hover:text-white',
                      'group flex flex-1 w-full items-center rounded-md p-2 text-base font-medium',
                      isActive && 'bg-red-800 text-white',
                    )
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <div className="flex items-center gap-2 rounded-lg bg-red-800 p-3 text-white">
            <User2 className="size-10" />
            <div className="flex flex-row items-center">
              <div className="flex flex-col">
                <span className="font-medium">
                  {user.data?.firstName && user.data?.lastName
                    ? `${user.data?.firstName} ${user.data?.lastName}`
                    : 'User'}{' '}
                </span>
                <span className="text-sm text-white/70">
                  {user.data?.role || 'the role'}
                </span>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            className="mt-2 w-full text-white hover:bg-red-800 hover:text-white"
            onClick={() => logout()}
          >
            Logout
          </Button>
        </div>
      </aside>
      <div className="flex flex-col sm:py-0 sm:pl-60">
        <header className=" z-10 flex h-20 items-center bg-background px-4 sm:h-20 sm:justify-end sm:border-0 sm:bg-red-700 sm:px-12">
          <Progress />
          <Drawer>
            <DrawerTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="size-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent
              side="left"
              className="bg-red-800 pt-10 text-white sm:max-w-60"
            >
              <nav className="grid gap-6 text-lg font-medium">
                <div className="flex h-16 shrink-0 items-center px-4">
                  <LogoComponent />
                </div>
                <nav className="flex flex-col space-y-1 px-3 py-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <>
                          <button
                            onClick={() =>
                              setActiveNav(
                                activeNav === item.name ? '' : item.name,
                              )
                            }
                            className={cn(
                              'flex w-full items-center px-3 py-2 text-sm font-medium text-white hover:bg-red-800',
                              activeNav === item.name && 'bg-red-800',
                            )}
                          >
                            {item.name}
                            <ChevronDown
                              className={cn(
                                'ml-auto h-4 w-4 transition-transform',
                                activeNav === item.name && 'rotate-180',
                              )}
                            />
                          </button>
                          {activeNav === item.name && (
                            <div className="ml-4 mt-1 space-y-1">
                              {item.children.map((child) => (
                                <NavLink
                                  key={child.name}
                                  to={child.to}
                                  className={({ isActive }) =>
                                    cn(
                                      'block px-3 py-2 text-sm font-medium text-white/70 hover:bg-red-800 hover:text-white',
                                      isActive && 'bg-red-800 text-white',
                                    )
                                  }
                                >
                                  {child.name}
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            cn(
                              'flex w-full items-center px-3 py-2 text-sm font-medium text-white hover:bg-red-800',
                              isActive && 'bg-red-800',
                            )
                          }
                        >
                          {item.name}
                        </NavLink>
                      )}
                    </div>
                  ))}
                </nav>
              </nav>
              <div className="mt-auto p-4">
                <div className="flex items-center gap-3 rounded-lg bg-red-800 p-3 text-white">
                  <User2 className="size-10" />
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {user.data?.firstName && user.data?.lastName
                        ? `${user.data?.firstName} ${user.data?.lastName}`
                        : 'User'}{' '}
                    </span>
                    <span className="text-sm text-white/70">
                      {user.data?.role || 'the role'}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="mt-2 w-full text-white hover:bg-red-800 hover:text-white"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </header>
        <main className="flex-1 items-start bg-red-700 sm:py-0 sm:px-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
}
