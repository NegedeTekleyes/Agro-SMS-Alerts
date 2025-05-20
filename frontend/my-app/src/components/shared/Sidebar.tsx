// components/shared/Sidebar.tsx
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-md">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Menu
        </h2>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/farmers"
              className="flex items-center p-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Farmers
            </Link>
          </li>
          <li>
            <Link
              href="/messages"
              className="flex items-center p-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Messages
            </Link>
          </li>
          <li>
            <Link
              href="/weather"
              className="flex items-center p-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Weather
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="flex items-center p-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}