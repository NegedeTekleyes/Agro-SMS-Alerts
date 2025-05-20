import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  link: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change, link }) => {
  return (
    <Link 
      to={link}
      className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
          <p className="text-xs text-gray-500 mt-1">{change}</p>
        </div>
        <div className="p-2 rounded-lg bg-gray-50 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex items-center text-green-600 text-xs font-medium mt-3 group">
        <span>View details</span>
        <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default StatCard;