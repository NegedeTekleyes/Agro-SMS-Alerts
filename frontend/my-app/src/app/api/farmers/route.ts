// app/api/farmers/route.ts
import { NextResponse } from "next/server";
import { farmerSchema } from "@/lib/schemas";
import { db } from "@/lib/db"; // Changed from default import to named import

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = farmerSchema.parse(body);
    
    // Save to database
    const farmer = await db.farmer.create({
      data: validatedData
    });
    
    return NextResponse.json(farmer, { status: 201 });
  } catch (error: any) { // Added type annotation for error
    return NextResponse.json(
      { error: error.message || "Failed to create farmer" },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    const farmers = await db.farmer.findMany();
    return NextResponse.json(farmers);
  } catch (error: any) { // Added type annotation for error
    return NextResponse.json(
      { error: error.message || "Failed to fetch farmers" }, // Added error.message
      { status: 500 }
    );
  }
}