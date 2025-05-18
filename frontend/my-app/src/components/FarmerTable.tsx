'use client';

import { useState, useEffect } from 'react';
import { getFarmers } from '../utils/api';
import toast from 'react-hot-toast';

// Define the Farmer interface
interface Farmer {
  id: string | number;
  phone: string;
  name?: string;
  region?: string;
  createdAt: string;
}

export default function FarmerTable() {
  const [farmers, setFarmers] = useState<Farmer[]>([]); // Initialize as empty array
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchFarmers = async () => {
      setIsLoading(true);
      try {
        const response = await getFarmers();
        // Ensure response.data is an array
        const farmerData = Array.isArray(response.data) ? response.data : [];
        setFarmers(farmerData);
      } catch {
        toast.error('Failed to fetch farmers');
        setFarmers([]); // Fallback to empty array on error
      } finally {
        setIsLoading(false);
      }
    };
    fetchFarmers();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Registered Farmers</h2>
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
      ) : farmers.length === 0 ? (
        <p className="text-gray-500">No farmers registered yet.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Phone</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Region</th>
              <th className="border p-2">Registered At</th>
            </tr>
          </thead>
          <tbody>
            {farmers.map((farmer) => (
              <tr
                key={farmer.id}
                className="hover:bg-blue-50 transition cursor-pointer"
                onClick={() => toast.success(`Clicked farmer: ${farmer.phone}`)}
              >
                <td className="border p-2">{farmer.phone}</td>
                <td className="border p-2">{farmer.name || 'N/A'}</td>
                <td className="border p-2">{farmer.region || 'N/A'}</td>
                <td className="border p-2">{new Date(farmer.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}