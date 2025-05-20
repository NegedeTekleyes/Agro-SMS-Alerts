// frontend/src/components/MessageComposer.tsx
'use client';
import { useState } from 'react';
import { api } from '@/lib/api';

interface Farmer {
  id: number;
  phone: string;
  name: string | null;
  region: string | null;
}

interface MessageComposerProps {
  farmers: Farmer[]; 
}
// Define the MessageForm interface

interface MessageForm {
  farmerId: string;
  content: string;
  channel: 'SMS' | 'VOICE';
}

export default function MessageComposer({ farmers }: MessageComposerProps) {
  const [form, setForm] = useState<MessageForm>({
    farmerId: farmers[0]?.id.toString() || '', // Initialize with first farmer's ID if available
    content: '',
    channel: 'SMS'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.messages.send({
        farmerId: Number(form.farmerId), // Convert string to number for backend
        content: form.content,
        channel: form.channel
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      alert('Message sent successfully!');
      setForm(prev => ({ ...prev, content: '' })); // Clear content after sending
    } catch (error) {
      console.error('Message sending error:', error);
      alert(`Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="farmer-select" className="block text-sm font-medium mb-1">
          Select Farmer
        </label>
        <select
          id="farmer-select"
          value={form.farmerId}
          onChange={(e) => setForm({...form, farmerId: e.target.value})}
          required
          className="w-full p-2 border rounded"
        >
          {farmers.map(farmer => (
            <option key={farmer.id} value={farmer.id.toString()}>
              {farmer.name || 'Unnamed Farmer'} ({farmer.phone})
              {farmer.region ? ` - ${farmer.region}` : ''}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="message-content" className="block text-sm font-medium mb-1">
          Message Content
        </label>
        <textarea
          id="message-content"
          value={form.content}
          onChange={(e) => setForm({...form, content: e.target.value})}
          required
          className="w-full p-2 border rounded min-h-[100px]"
          placeholder="Type your message here..."
        />
      </div>
      
      <div>
        <label htmlFor="channel-select" className="block text-sm font-medium mb-1">
          Communication Channel
        </label>
        <select
          id="channel-select"
          value={form.channel}
          onChange={(e) => setForm({...form, channel: e.target.value as 'SMS' | 'VOICE'})}
          className="w-full p-2 border rounded"
        >
          <option value="SMS">SMS</option>
          <option value="VOICE">Voice Call</option>
        </select>
      </div>
      
      <button 
        type="submit" 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}