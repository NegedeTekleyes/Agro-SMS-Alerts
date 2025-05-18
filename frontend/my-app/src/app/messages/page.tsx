// src/app/messages/page.tsx
import Link from 'next/link';
import MessageTable from '../../components/MessageTable';

export default function Messages() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Message Logs</h1>
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">
        Back to Dashboard
      </Link>
      <MessageTable />
    </div>
  );
}