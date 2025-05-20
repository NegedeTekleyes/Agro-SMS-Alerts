"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { weatherSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/toast";

export default function WeatherForm() {
  const [sendAlert, setSendAlert] = useState(false);
  const form = useForm({
    resolver: zodResolver(weatherSchema.omit({ id: true, createdAt: true })),
    defaultValues: {
      temperature: 0,
      humidity: 0,
      rainfall: 0,
      windSpeed: 0,
      forecast: "",
      alert: false
    }
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/weather", {
        method: "POST",
        body: JSON.stringify({ ...data, alert: sendAlert })
      });
      
      if (response.ok) {
        toast.success("Weather update saved successfully!");
        form.reset();
      } else {
        throw new Error("Failed to save weather update");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Temperature (°C)"
          type="number"
          {...form.register("temperature", { valueAsNumber: true })}
        />
        
        <Input
          label="Humidity (%)"
          type="number"
          {...form.register("humidity", { valueAsNumber: true })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Rainfall (mm)"
          type="number"
          {...form.register("rainfall", { valueAsNumber: true })}
        />
        
        <Input
          label="Wind Speed (km/h)"
          type="number"
          {...form.register("windSpeed", { valueAsNumber: true })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Weather Forecast</label>
        <textarea
          {...form.register("forecast")}
          rows={3}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="flex items-center gap-2">
        <Switch
          checked={sendAlert}
          onCheckedChange={setSendAlert}
          id="weather-alert"
        />
        <label htmlFor="weather-alert">Send as urgent alert to farmers</label>
      </div>

      <Button type="submit">
        Submit Weather Update
      </Button>
    </form>
  );
}