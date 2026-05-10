export const routes = {
  home: '/' as const,
  profile: (username: string) => `/profile/${username}` as const,
  repo: (username: string, repoName: string) =>
    `/repo/${username}/${repoName}` as const,
} as const;
