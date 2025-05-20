import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Bell, LogOut, User } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-green-400 shadow-sm z-10">
      <div className="px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-black-400 hover:text-gray-200">Smart Farming Platform</h1>
        
        <div className="flex items-center space-x-4">
          <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 hover:text-red-700 focus:outline-none">
            <Bell size={20} />
          </button>
          
          <div className="relative group">
            <button className="flex items-center space-x-2 focus:outline-none">
              <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                <User size={16} />
              </div>
              <span className="text-sm font-medium text-gray-700 hover:text-blue-800">{user?.name}</span>
            </button>
            
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 hidden group-hover:block">
              <div className="py-2">
                <button 
                  onClick={logout}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-gray-100 font-bold focus:outline-none"
                >
                  <LogOut size={16} className="mr-2" />
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;