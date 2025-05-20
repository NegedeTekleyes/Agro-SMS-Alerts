import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Users, Cloud, Droplet, MessageCircle, BookOpen, Menu, X, LogOut } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <Home size={20} /> },
    { name: 'Register Farmer', path: '/farmers/register', icon: <Users size={20} /> },
    { name: 'Farmer List', path: '/farmers/list', icon: <Users size={20} /> },
    { name: 'Weather Info', path: '/weather', icon: <Cloud size={20} /> },
    { name: 'Product Guidance', path: '/guidance', icon: <BookOpen size={20} /> },
    { name: 'Message Center', path: '/messages', icon: <MessageCircle size={20} /> },
  ];

  const handleLogout = () => {
    // Clear authentication tokens or session data here
    // Navigate back to login page
    navigate('/login');
  };

  return (
    <div className="flex ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-green-800 text-white hover:bg-green-700 transition-all"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`bg-green-800 text-white flex flex-col transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-0 overflow-hidden'
        }`}
      >
        <div className={`p-4 flex items-center space-x-2 ${!isOpen && 'hidden'}`}>
          <Droplet size={28} className="text-white" />
          <span className="text-xl font-bold">SmartFarm</span>
        </div>

        <nav className={`flex-1 mt-6 ${!isOpen && 'hidden'}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.path} className="px-2 py-1">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-green-700 text-white'
                        : 'text-green-100 hover:bg-green-700 hover:text-white'
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`p-4 mt-auto border-t border-green-700 ${!isOpen && 'hidden'}`}>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 hover:bg-green-700 p-2 rounded-md transition-all"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
          <div className="text-xs text-green-300 mt-2">© 2025 Alpha</div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
""
