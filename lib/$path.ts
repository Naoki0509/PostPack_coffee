export const pagesPath = {
  about: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/about" as const,
      hash: url?.hash,
    }),
  },
  login: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/login" as const,
      hash: url?.hash,
    }),
  },
  signup: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/signup" as const,
      hash: url?.hash,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: "/" as const,
    hash: url?.hash,
  }),
};

export type PagesPath = typeof pagesPath;
