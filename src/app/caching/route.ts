import { NextRequest, NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

export const dynamic = "force-dynamic"; // value auto

export async function GET(request: NextRequest) {
  return NextResponse.json({ time: new Date().toISOString() });
}
