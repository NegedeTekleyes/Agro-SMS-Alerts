'use client';

import { useState, useEffect } from 'react';
import { getMessages } from '../utils/api';
import toast from 'react-hot-toast';

// Define the Message interface
interface Message {
  id: string | number;
  content: string;
  channel: 'SMS' | 'VOICE';
  type: 'WEATHER' | 'PRODUCT' | string;
  sentAt: string;
  status?: string;
}

export default function MessageTable() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      try {
        const response = await getMessages();
        setMessages(response.data);
        setFilteredMessages(response.data);
      } catch {
        toast.error('Failed to fetch messages');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredMessages(messages);
    } else if (filter === 'SMS' || filter === 'VOICE') {
      setFilteredMessages(messages.filter((msg) => msg.channel === filter));
    } else {
      setFilteredMessages(messages.filter((msg) => msg.type === filter));
    }
  }, [filter, messages]);

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Message Logs</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Messages</option>
          <option value="SMS">SMS</option>
          <option value="VOICE">Voice</option>
          <option value="WEATHER">Weather</option>
          <option value="PRODUCT">Product</option>
        </select>
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <svg
            className="animate-spin h-8 w-8 text-blue-500"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        </div>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Content</th>
              <th className="border p-2">Channel</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Sent At</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredMessages.map((msg) => (
              <tr
                key={msg.id}
                className="hover:bg-blue-50 transition cursor-pointer"
                onClick={() => toast.success(`Clicked message ID: ${msg.id}`)}
              >
                <td className="border p-2">{msg.content}</td>
                <td className="border p-2">{msg.channel}</td>
                <td className="border p-2">{msg.type}</td>
                <td className="border p-2">{new Date(msg.sentAt).toLocaleString()}</td>
                <td className="border p-2">{msg.status || 'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}