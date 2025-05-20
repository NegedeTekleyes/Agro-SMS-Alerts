// components/shared/NotificationBell.tsx
"use client";

import { BellIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function NotificationBell() {
  const [hasNotifications, setHasNotifications] = useState(true);

  return (
    <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
      <BellIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      {hasNotifications && (
        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
      )}
    </button>
  );
}