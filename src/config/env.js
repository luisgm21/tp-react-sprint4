// Environment configuration
export const API_CONFIG = {
  RICKANDMORTY_API_URL: import.meta.env.VITE_RICKANDMORTY_API_URL || 'https://rickandmortyapi.com/api/character',
  GITHUB_URL: import.meta.env.VITE_GITHUB_URL || 'https://github.com',
  NODE_ENV: import.meta.env.VITE_NODE_ENV || 'development',
  API_KEY: import.meta.env.VITE_API_KEY || '', // Variable sensible
}

// Log current environment (development only)
if (API_CONFIG.NODE_ENV === 'development') {
  console.log('Environment Config:', {
    API_URL: API_CONFIG.RICKANDMORTY_API_URL,
    GITHUB_URL: API_CONFIG.GITHUB_URL,
    ENV: API_CONFIG.NODE_ENV,
  })
}
