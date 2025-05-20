import React from 'react';
import { Users, Cloud, MessageCircle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCard from '../components/dashboard/StatCard';
import WeatherWidget from '../components/dashboard/WeatherWidget';
import RecentMessagesWidget from '../components/dashboard/RecentMessagesWidget';
import RecentActivitiesWidget from '../components/dashboard/RecentActivitiesWidget';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Home Page</h1>
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Farmers" 
          value="246" 
          icon={<Users className="text-blue-500" />} 
          change="+12% from last month"
          link="/farmers/list"
        />
        <StatCard 
          title="Weather Alerts" 
          value="4" 
          icon={<Cloud className="text-yellow-500" />} 
          change="Active alerts"
          link="/weather"
        />
        <StatCard 
          title="New Guidance" 
          value="8" 
          icon={<BookOpen className="text-green-500" />} 
          change="Published this week"
          link="/guidance"
        />
        <StatCard 
          title="Sent Messages" 
          value="172" 
          icon={<MessageCircle className="text-purple-500" />} 
          change="Past 7 days"
          link="/messages"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <WeatherWidget />
        </div>
        <div className="lg:col-span-2">
          <RecentActivitiesWidget />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentMessagesWidget type="sms" />
        <RecentMessagesWidget type="voice" />
      </div>
    </div>
  );
};

export default Dashboard;