export const config = {
  app: {
    name: 'Bench Dashboard',
    version: '0.1.0',
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  },
} as const;
