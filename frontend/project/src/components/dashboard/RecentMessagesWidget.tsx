import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

interface RecentMessagesWidgetProps {
  type: 'sms' | 'voice';
}

type SmsMessage = {
  id: number;
  recipient: string;
  content: string;
  time: string;
  status: string;
  type: 'sms';
};

type VoiceMessage = {
  id: number;
  recipient: string;
  content: string;
  time: string;
  duration: string;
  status: string;
  type: 'voice';
};

type Message = SmsMessage | VoiceMessage;

const RecentMessagesWidget: React.FC<RecentMessagesWidgetProps> = ({ type }) => {
  // Mock data - in a real app this would come from an API
  const messages: Message[] = type === 'sms' 
    ? [
        { id: 1, recipient: 'John Mzembe', content: 'Heavy rainfall expected in your region tomorrow. Secure your crops and livestock.', time: '2 hours ago', status: 'delivered', type: 'sms' },
        { id: 2, recipient: 'Grace Banda', content: 'New training on organic fertilizers next Tuesday at community center.', time: '3 hours ago', status: 'delivered', type: 'sms' },
        { id: 3, recipient: 'Peter Chikondi', content: 'Your region will experience dry conditions next week. Plan irrigation accordingly.', time: '1 day ago', status: 'failed', type: 'sms' },
      ]
    : [
        { id: 1, recipient: 'Farmers in Central Region', content: 'Weather alert: Expected rainfall patterns for next week', time: '5 hours ago', duration: '45 seconds', status: 'completed', type: 'voice' },
        { id: 2, recipient: 'New Farmers Group', content: 'Introduction to the new pest control methods', time: '1 day ago', duration: '1:23 minutes', status: 'completed', type: 'voice' },
        { id: 3, recipient: 'Southern Region Farmers', content: 'Instructions for drought preparedness', time: '2 days ago', duration: '58 seconds', status: 'missed', type: 'voice' },
      ];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center">
          {type === 'sms' 
            ? <MessageCircle size={20} className="text-green-600 mr-2" /> 
            : <Phone size={20} className="text-blue-600 mr-2" />
          }
          <h3 className="font-semibold text-gray-800">
            Recent {type === 'sms' ? 'SMS' : 'Voice'} Messages
          </h3>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {messages.map((message) => (
          <div key={message.id} className="p-4 hover:bg-gray-50">
            <div className="flex justify-between">
              <p className="font-medium text-gray-800">{message.recipient}</p>
              <span 
                className={`text-xs px-2 py-1 rounded-full ${
                  message.status === 'delivered' || message.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : message.status === 'failed' || message.status === 'missed'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {message.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1 line-clamp-1">{message.content}</p>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>{message.time}</span>
              {type === 'voice' && message.type === 'voice' && <span>Duration: {message.duration}</span>}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 bg-gray-50 flex justify-between">
        <button className="text-sm text-green-600 font-medium hover:underline">
          View all
        </button>
        <button className="text-sm text-green-600 font-medium hover:underline">
          Send new {type === 'sms' ? 'SMS' : 'Voice'} message
        </button>
      </div>
    </div>
  );
};

export default RecentMessagesWidget;