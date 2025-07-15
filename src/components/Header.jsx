import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white shadow-md px-4 sm:px-8 py-4">
        <div className="hidden md:flex items-center justify-between">
          <ul className="flex items-center space-x-8">
            <LanguageSelector />
            <li>
              <Link
                to="/"
                className="text-lg font-bold text-gray-700 hover:text-amber-500 transition-colors duration-300"
              >
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-bold text-gray-700 hover:text-amber-500 transition-colors duration-300"
              >
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="text-lg font-bold text-gray-700 hover:text-amber-500 transition-colors duration-300"
              >
                {t('nav.project')}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg font-bold text-gray-700 hover:text-amber-500 transition-colors duration-300"
              >
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <LanguageSelector />
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-amber-500 transition-colors duration-300"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="top-full left-0 right-0 bg-white">
              <ul className="flex flex-col py-4">
                <li>
                  <Link
                    to="/"
                    onClick={toggleMenu}
                    className="block px-4 py-3 text-lg font-bold text-gray-700 hover:text-amber-500 hover:bg-gray-50 transition-colors duration-300"
                  >
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={toggleMenu}
                    className="block px-4 py-3 text-lg font-bold text-gray-700 hover:text-amber-500 hover:bg-gray-50 transition-colors duration-300"
                  >
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/project"
                    onClick={toggleMenu}
                    className="block px-4 py-3 text-lg font-bold text-gray-700 hover:text-amber-500 hover:bg-gray-50 transition-colors duration-300"
                  >
                    {t('nav.project')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={toggleMenu}
                    className="block px-4 py-3 text-lg font-bold text-gray-700 hover:text-amber-500 hover:bg-gray-50 transition-colors duration-300"
                  >
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}