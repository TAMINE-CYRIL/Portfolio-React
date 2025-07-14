import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between shadow-md bg-white dark:bg-gray-900 px-8 py-4">
        <ul className="flex items-center space-x-8">
          <li>
            <Link
              to="/"
              className="text-lg font-bold text-gray-700 dark:text-white hover:text-amber-500 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg font-bold text-gray-700 dark:text-white hover:text-amber-500 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="text-lg font-bold text-gray-700 dark:text-white hover:text-amber-500 transition-colors duration-300"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg font-bold text-gray-700 dark:text-white hover:text-amber-500 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
