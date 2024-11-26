import { db } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const customers = await db.customers.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return NextResponse.json(customers);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch customers" },
      { status: 500 }
    );
  }
}