import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // value auto

export async function GET(request: NextRequest) {
  console.log(request);
  return NextResponse.json({ time: new Date().toISOString() });
}
