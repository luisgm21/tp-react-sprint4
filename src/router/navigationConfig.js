import { ROUTE_PATHS } from './routePaths'

export const NAV_LINKS = [
  { label: 'Inicio', to: ROUTE_PATHS.HOME },
  { label: 'Rick and Morty', to: ROUTE_PATHS.RICK_AND_MORTY_FULL },
  { label: 'Acerca', to: ROUTE_PATHS.ABOUT_FULL },
  { label: 'Usuario 123', to: `${ROUTE_PATHS.USER_BASE}/123` }
]
