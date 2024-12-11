export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || "https://mock.akakce.dev",
  },
  cdn: {
    baseUrl: import.meta.env.VITE_CDN_BASE_URL || "https://cdn.akakce.com",
  },
} as const;
