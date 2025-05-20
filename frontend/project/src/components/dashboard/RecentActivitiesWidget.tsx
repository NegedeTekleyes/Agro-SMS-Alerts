import React from 'react';
import { Circle, User, Cloud, BookOpen, MessageSquare, AlertTriangle } from 'lucide-react';

const RecentActivitiesWidget: React.FC = () => {
  // Mock data - in a real app this would come from an API
  const activities = [
    {
      id: 1,
      type: 'farmerAdd',
      description: 'New farmer registered: Abebe Kasa from Amhara',
      time: '2 hours ago',
      icon: <User size={16} className="text-blue-500" />
    },
    {
      id: 2,
      type: 'weatherAlert',
      description: 'Weather alert sent: Heavy rainfall expected in Southern part of Amhara Region',
      time: '4 hours ago',
      icon: <Cloud size={16} className="text-yellow-500" />
    },
    {
      id: 3,
      type: 'guidance',
      description: 'New product guide published: Effective use of organic fertilizers',
      time: '6 hours ago',
      icon: <BookOpen size={16} className="text-green-500" />
    },
    {
      id: 4,
      type: 'message',
      description: 'Bulk SMS sent to 42 farmers about upcoming training session',
      time: '8 hours ago',
      icon: <MessageSquare size={16} className="text-purple-500" />
    },
    {
      id: 5,
      type: 'alert',
      description: 'System alert: 3 farmers have outdated phone numbers',
      time: '1 day ago',
      icon: <AlertTriangle size={16} className="text-red-500" />
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-800">Recent Activities</h3>
      </div>
      
      <div className="divide-y divide-gray-100">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-gray-50">
            <div className="flex">
              <div className="mr-3 mt-0.5">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  {activity.icon}
                </div>
              </div>
              <div>
                <p className="text-gray-800">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 bg-gray-50 text-center">
        <button className="text-sm text-green-600 font-medium hover:underline">
          View all activities
        </button>
      </div>
    </div>
  );
};

export default RecentActivitiesWidget;