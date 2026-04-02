export const API_CONFIG = {
  host: import.meta.env.VITE_API_HOST || 'localhost',
  port: import.meta.env.VITE_API_PORT || '4021',
  baseUrl: `http://${import.meta.env.VITE_API_HOST || 'localhost'}:${import.meta.env.VITE_API_PORT || '4021'}/v1`,
};
