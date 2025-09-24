import { NextRequest, NextResponse } from "next/server";
 export async function GET (request: NextRequest){
console.log("[GET] /api/profile route hit");

const mockProfile={
  id: "123",
  name: "antonio Rosario",
  email: "antonio@gmail.com",
  role: "user",
  createdAt: new Date().toISOString(),

};

return NextResponse.json(mockProfile);
 }