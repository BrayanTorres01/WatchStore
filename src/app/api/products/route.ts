import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Rolex Submariner" },
  { id: 2, name: "Omega Speedmaster" },
  { id: 3, name: "Tag Heuer Carrera" }
];

export async function GET() {
  return NextResponse.json(products);
}