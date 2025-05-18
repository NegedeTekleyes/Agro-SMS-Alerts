'use client';

import { useState } from 'react';
import { addProduct } from '../utils/api';
import toast from 'react-hot-toast';
import ConfirmationModal from './ConfirmationModal';

export default function ProductForm() {
  const [formData, setFormData] = useState({ name: '', description: '', price: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({ name: '', description: '', price: '' });

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', description: '', price: '' };
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
      valid = false;
    }
    if (!formData.price || isNaN(parseFloat(formData.price))) {
      newErrors.price = 'Valid price is required';
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
      await addProduct({
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
      });
      toast.success('Product added!');
      setFormData({ name: '', description: '', price: '' });
    } catch {
      toast.error('Failed to add product');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Add Product</h2>
      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`border p-2 w-full rounded ${errors.name ? 'border-red-500' : ''}`}
            disabled={isLoading}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className={`border p-2 w-full rounded ${errors.description ? 'border-red-500' : ''}`}
            disabled={isLoading}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>
        <div>
          <input
            type="number"
            placeholder="Price ($/kg)"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className={`border p-2 w-full rounded ${errors.price ? 'border-red-500' : ''}`}
            disabled={isLoading}
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
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
            'Add Product'
          )}
        </button>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmSubmit}
        title="Confirm Product Addition"
        message="Are you sure you want to add this product?"
      />
    </div>
  );
}