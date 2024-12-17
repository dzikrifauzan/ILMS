export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  auth: {
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },

  // can be replaced with backend data
  app: {
    root: {
      path: '/',
      getHref: () => '/app',
    },
    dashboard: {
      path: '/dashboard',
      getHref: () => '/dashboard',
    },

    // STANDARD WORK
    standardWork: {
      creationForm: {
        path: 'standard-work/creation-form',
        getHref: () => 'standard-work/creation-form',
      },

      ApprovalStatus: {
        path: 'standard-work/approval-status',
        getHref: () => 'standard-work/approval-status',
      },
      SwInquiry: {
        path: 'standard-work/sw-inquiry',
        getHref: () => 'standard-work/sw-inquiry',
      },
      Yamazumi: {
        path: 'standard-work/yamazumi',
        getHref: () => 'standard-work/yamazumi',
      },
    },

    //MASTER DATA
    masterData: {
      JobCategories: {
        path: 'master-data/job-categories',
        getHref: () => 'master-data/job-categories',
      },
      JobElements: {
        path: 'master-data/job-elements',
        getHref: () => 'master-data/job-elements',
      },
    },
    // PROFILE
    profile: {
      path: '/profile',
      getHref: () => '/profile',
    },
  },
} as const;
