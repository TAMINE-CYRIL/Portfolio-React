import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <nav className="flex items-center justify-between shadow-md bg-white dark:bg-gray-900 px-8 py-4">
        <ul className="flex items-center space-x-8">
          <li>
            <Link
              to="/"
              className="text-lg font-bold text-gray-700 dark:text-white hover:text-amber-500 transition-colors duration-300"
            >
              {t('nav.home')}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg font-bold text-gray-700 dark:text-white hover:text-amber-500 transition-colors duration-300"
            >
              {t('nav.about')}
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="text-lg font-bold text-gray-700 dark:text-white hover:text-amber-500 transition-colors duration-300"
            >
              {t('nav.project')}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg font-bold text-gray-700 dark:text-white hover:text-amber-500 transition-colors duration-300"
            >
              {t('nav.contact')}
            </Link>
          </li>
        </ul>
        <LanguageSelector />
      </nav>
    </header>
  );
}