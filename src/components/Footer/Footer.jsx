

import { useAppContext } from '../../context/AppContext'
import { API_CONFIG } from '../../config/env'

const Footer = () => {
  const { isDarkMode, toggleDarkMode } = useAppContext()

  return (
    <footer className="sticky bottom-0 border-t border-slate-200/70 bg-white/75 backdrop-blur-lg dark:border-slate-700/70 dark:bg-slate-900/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100">Mi App</span>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleDarkMode}
            className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
          >
            {isDarkMode ? 'Modo claro' : 'Modo oscuro'}
          </button>

          <a
            href={API_CONFIG.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200/70 py-2 text-center text-xs text-slate-400 dark:border-slate-700/70 dark:text-slate-500">
        © {new Date().getFullYear()} · Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer