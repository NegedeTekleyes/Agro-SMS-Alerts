"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";

export default function ProductForm() {
  const [image, setImage] = useState<File | null>(null);
  const form = useForm({
    resolver: zodResolver(productSchema.omit({ id: true, createdAt: true, updatedAt: true, imageUrl: true })),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      quantity: 0,
      category: ""
    }
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price.toString());
      formData.append("quantity", data.quantity.toString());
      formData.append("category", data.category);
      if (image) {
        formData.append("image", image);
      }

      const response = await fetch("/api/products", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        toast.success("Product added successfully!");
        form.reset();
        setImage(null);
      } else {
        throw new Error("Failed to add product");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Product Name"
          {...form.register("name")}
          error={form.formState.errors.name}
        />
        
        <Input
          label="Category"
          {...form.register("category")}
          error={form.formState.errors.category}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          {...form.register("description")}
          rows={3}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Price"
          type="number"
          {...form.register("price", { valueAsNumber: true })}
          error={form.formState.errors.price}
        />
        
        <Input
          label="Quantity"
          type="number"
          {...form.register("quantity", { valueAsNumber: true })}
          error={form.formState.errors.quantity}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Product Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>

      <Button type="submit">
        Add Product
      </Button>
    </form>
  );
}