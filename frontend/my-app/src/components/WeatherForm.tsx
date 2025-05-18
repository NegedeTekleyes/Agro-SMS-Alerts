'use client';

import { useState } from 'react';
import { addWeatherUpdate } from '../utils/api';
import toast from 'react-hot-toast';
import ConfirmationModal from './ConfirmationModal';

export default function WeatherForm() {
  const [formData, setFormData] = useState({ temperature: '', condition: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({ temperature: '', condition: '' });

  const validateForm = () => {
    let valid = true;
    const newErrors = { temperature: '', condition: '' };
    if (!formData.temperature || isNaN(parseInt(formData.temperature))) {
      newErrors.temperature = 'Valid temperature is required';
      valid = false;
    }
    if (!formData.condition.trim()) {
      newErrors.condition = 'Condition is required';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const confirmSubmit = async () => {
    setIsModalOpen(false);
    setIsLoading(true);
    try {
      await addWeatherUpdate({
        temperature: parseInt(formData.temperature),
        condition: formData.condition,
        date: new Date(),
      });
      toast.success('Weather update added!');
      setFormData({ temperature: '', condition: '' });
    } catch {
      toast.error('Failed to add weather update');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Add Weather Update</h2>
      <div className="space-y-4">
        <div>
          <input
            type="number"
            placeholder="Temperature (°C)"
            value={formData.temperature}
            onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
            className={`border p-2 w-full rounded ${errors.temperature ? 'border-red-500' : ''}`}
            disabled={isLoading}
          />
          {errors.temperature && (
            <p className="text-red-500 text-sm mt-1">{errors.temperature}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Condition (e.g., Sunny)"
            value={formData.condition}
            onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
            className={`border p-2 w-full rounded ${errors.condition ? 'border-red-500' : ''}`}
            disabled={isLoading}
          />
          {errors.condition && (
            <p className="text-red-500 text-sm mt-1">{errors.condition}</p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition disabled:bg-blue-300"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 mx-auto text-white"
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
          ) : (
            'Add Weather'
          )}
        </button>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmSubmit}
        title="Confirm Weather Update"
        message="Are you sure you want to add this weather update?"
      />
    </div>
  );
}