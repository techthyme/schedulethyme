import { NextRequest, NextResponse } from "next/server";
import {mockCollabs, mockEvents, mockProfiles} from "@/data"
import { GetProfileResponse } from "@/types/api";


 export async function GET(request: NextRequest) {
  console.log("[GET] /api/profile route hit");

  const res: GetProfileResponse ={
    profile: {
    ...mockProfiles[0], 
    events: mockEvents.slice(0, 6)
    /**
     * 
     * id: string;
       name: string;
       bio?: string;
       organization?: string;
       profession?: string;
       avatarUrl?: string;
       user?: User;
       events?: Event[];
     */
  }
  }

  return NextResponse.json(res);
}