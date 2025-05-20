import React, { useState } from 'react';
import { MessageCircle, Phone, Filter, Send, Users } from 'lucide-react';

const MessageCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sms' | 'voice'>('sms');
  const [messageType, setMessageType] = useState<'individual' | 'bulk'>('individual');
  const [formData, setFormData] = useState({
    recipients: '',
    region: '',
    message: '',
    schedule: 'now'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message will be sent via ${activeTab.toUpperCase()} to: ${formData.recipients || 'All farmers in ' + formData.region}`);
  };
  
  // Mock data
  const regions = ['Amhara Region', 'Oromia Region', 'Afar Region', 'Somalia Region'];
  const recentMessages = [
    { id: 1, type: 'sms', recipients: 'Farmers in Amhara Region (42)', content: 'Weather alert: Heavy rainfall expected in your region tomorrow. Secure crops and prepare drainage.', date: '2023-09-25', status: 'delivered' },
    { id: 2, type: 'voice', recipients: 'All Registered Farmers (246)', content: 'New agricultural training program available next week. Register at your local extension office.', date: '2023-09-20', status: 'completed' },
    { id: 3, type: 'sms', recipients: 'Tobacco Farmers (58)', content: 'Price update: Wheat buying season starts next month with improved rates. Prepare your harvest.', date: '2023-09-15', status: 'delivered' },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Message Center</h1>
        <div className="text-sm text-gray-500">
          Send important updates to registered farmers
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="border-b border-gray-100">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('sms')}
                  className={`px-4 py-3 font-medium flex items-center ${
                    activeTab === 'sms' 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <MessageCircle size={18} className="mr-2" />
                  Send SMS
                </button>
                <button
                  onClick={() => setActiveTab('voice')}
                  className={`px-4 py-3 font-medium flex items-center ${
                    activeTab === 'voice' 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Phone size={18} className="mr-2" />
                  Send Voice Message
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-4">
                <div className="flex rounded-lg border border-gray-300 p-1 w-fit">
                  <button
                    type="button"
                    onClick={() => setMessageType('individual')}
                    className={`px-4 py-1.5 rounded ${
                      messageType === 'individual' 
                        ? 'bg-green-600 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Individual
                  </button>
                  <button
                    type="button"
                    onClick={() => setMessageType('bulk')}
                    className={`px-4 py-1.5 rounded flex items-center ${
                      messageType === 'bulk' 
                        ? 'bg-green-600 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Users size={16} className="mr-1" />
                    Bulk Message
                  </button>
                </div>
              </div>
              
              {messageType === 'individual' ? (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Recipient Phone Number <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type="text"
                    name="recipients"
                    value={formData.recipients}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="e.g. +265 99 123 4567"
                    required
                  />
                </div>
              ) : (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Region <span className='text-red-500'>*</span>
                  </label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Select Region</option>
                    {regions.map(region => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                    <option value="all">All Regions</option>
                  </select>
                </div>
              )}
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {activeTab === 'sms' ? 'Message Content*' : 'Voice Message Script*'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder={activeTab === 'sms' 
                    ? "Type your SMS message here..." 
                    : "Write the script for the voice message here..."
                  }
                  required
                ></textarea>
                {activeTab === 'sms' && (
                  <div className="mt-1 text-xs text-gray-500 flex justify-between">
                    <span>Keep messages clear and concise</span>
                    <span>{formData.message.length} / 160 characters</span>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Schedule
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="schedule"
                      value="now"
                      checked={formData.schedule === 'now'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Send immediately
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="schedule"
                      value="later"
                      checked={formData.schedule === 'later'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Schedule for later
                  </label>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg flex items-center"
                >
                  <Send size={18} className="mr-2" />
                  Send {activeTab === 'sms' ? 'SMS' : 'Voice Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-semibold text-gray-800">Recent Messages</h3>
            </div>
            
            <div className="divide-y divide-gray-100">
              {recentMessages.map((message) => (
                <div key={message.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {message.type === 'sms' 
                        ? <MessageCircle size={16} className="text-green-600 mr-2" /> 
                        : <Phone size={16} className="text-blue-600 mr-2" />
                      }
                      <span className="text-xs font-medium text-gray-600 uppercase">
                        {message.type}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(message.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-800 mt-1">
                    To: {message.recipients}
                  </p>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {message.content}
                  </p>
                  <div className="mt-2 flex justify-between">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        message.status === 'delivered' || message.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {message.status}
                    </span>
                    <button className="text-xs text-green-600 hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-3 bg-gray-50 text-center">
              <button className="text-sm text-green-600 font-medium hover:underline">
                View all messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCenter;