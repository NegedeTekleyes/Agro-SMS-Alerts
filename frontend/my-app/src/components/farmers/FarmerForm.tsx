"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { farmerSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button"; // Fixed case sensitivity
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import MapComponent from "@/components/shared/MapComponent";

// Define the form data type based on your schema
type FarmerFormData = {
  name: string;
  phone: string;
  farmSize: number;
  crops: string[];
  communicationMethod: "SMS" | "VOICE";
};

export default function FarmerForm() {
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
    address: ""
  });

  const form = useForm<FarmerFormData>({
    resolver: zodResolver(
      farmerSchema.omit({ 
        id: true, 
        createdAt: true, 
        updatedAt: true 
      })
    ),
    defaultValues: {
      name: "",
      phone: "",
      farmSize: 0,
      crops: [],
      communicationMethod: "SMS"
    }
  });

  const onSubmit = async (data: FarmerFormData) => {
    try {
      const response = await fetch("/api/farmers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          ...data, 
          location 
        })
      });
      
      if (response.ok) {
        toast.success("Farmer registered successfully!");
        form.reset();
      } else {
        throw new Error("Failed to register farmer");
      }
    } catch (error: unknown) {
      toast.error(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          {...form.register("name")}
          error={form.formState.errors.name?.message}
        />
        
        <Input
          label="Phone Number"
          {...form.register("phone")}
          error={form.formState.errors.phone?.message}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Farm Location</label>
        <MapComponent 
          onLocationSelect={(lat: number, lng: number, address: string) => 
            setLocation({ lat, lng, address })
          } 
        />
        <input 
          type="hidden" 
          value={location.lat} 
          {...form.register("lat")}
        />
        <input 
          type="hidden" 
          value={location.lng} 
          {...form.register("lng")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Farm Size (acres)"
          type="number"
          {...form.register("farmSize", { 
            valueAsNumber: true 
          })}
          error={form.formState.errors.farmSize?.message}
        />
        
        <Select
          label="Preferred Communication"
          options={[
            { value: "SMS", label: "Text Message (SMS)" },
            { value: "VOICE", label: "Voice Call" }
          ]}
          {...form.register("communicationMethod")}
          error={form.formState.errors.communicationMethod?.message}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Crops Grown</label>
        <div className="flex flex-wrap gap-2">
          {["Maize", "Wheat", "Rice", "Vegetables", "Fruits"].map((crop) => (
            <div key={crop} className="flex items-center">
              <input
                type="checkbox"
                id={crop}
                value={crop}
                {...form.register("crops")}
                className="mr-2"
              />
              <label htmlFor={crop}>{crop}</label>
            </div>
          ))}
        </div>
        {form.formState.errors.crops && (
          <p className="mt-1 text-sm text-red-600">
            {form.formState.errors.crops.message}
          </p>
        )}
      </div>

      <Button 
        type="submit" 
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? "Registering..." : "Register Farmer"}
      </Button>
    </form>
  );
}