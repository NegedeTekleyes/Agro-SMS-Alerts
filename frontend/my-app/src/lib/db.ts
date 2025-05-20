import { z } from "zod";
import {PrismaClient} from "@prisma/client";
export const farmerSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
    address: z.string()
  }),
  farmSize: z.number().positive(),
  crops: z.array(z.string()),
  communicationMethod: z.enum(["SMS", "VOICE"]),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const messageSchema = z.object({
  id: z.string().uuid(),
  farmerId: z.string().uuid(),
  content: z.string(),
  method: z.enum(["SMS", "VOICE"]),
  status: z.enum(["PENDING", "SENT", "FAILED"]),
  createdAt: z.date()
});

export const weatherSchema = z.object({
  id: z.string().uuid(),
  temperature: z.number(),
  humidity: z.number(),
  rainfall: z.number(),
  windSpeed: z.number(),
  forecast: z.string(),
  alert: z.boolean(),
  createdAt: z.date()
});

export const productSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  quantity: z.number().nonnegative(),
  imageUrl: z.string().url().optional(),
  category: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type Farmer = z.infer<typeof farmerSchema>;
export type Message = z.infer<typeof messageSchema>;
export type Weather = z.infer<typeof weatherSchema>;
export type Product = z.infer<typeof productSchema>;