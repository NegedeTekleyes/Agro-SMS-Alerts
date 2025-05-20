import Sidebar from "@/components/shared/Sidebar";
import ThemeToggle from "@/components/shared/ThemeToggle";
import NotificationBell from "@/components/shared/NotificationBell";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Smart Farming Admin
            </h1>
            
            <div className="flex items-center gap-4">
              <NotificationBell />
              <ThemeToggle />
              <div className="flex items-center">
                <span className="mr-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Admin User
                </span>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  AU
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-gray-100 dark:bg-gray-800">
          {children}
        </main>
      </div>
    </div>
  );
}