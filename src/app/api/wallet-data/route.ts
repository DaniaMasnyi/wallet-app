import { NextResponse } from "next/server";
import walletData from "@/data/wallet-data.json";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(walletData);
}
