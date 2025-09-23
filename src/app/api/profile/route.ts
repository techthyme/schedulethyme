import { NextRequest, NextResponse } from "next/server";
import {
  CreateProfileRequest,
  GetProfileRequest,
  GetProfileResponse,
} from "@/types/api";
import { mockProfiles } from "@/data";

export async function GET(request: NextRequest) {
  try {
    // const { searchParams } = new URL(request.url);
    /**
     * events.find((event) => event.id === selectedProfile)
     */
    // const params: GetProfileRequest = {} as GetProfileRequest;

    // TODO: Replace with actual backend API call
    // const response = await fetch(`${process.env.BACKEND_API_URL}/conversations`, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${token}`,
    //     'Content-Type': 'application/json',
    //   },
    // });

    // Returns all the data from each profile but removes the user data
    const cleaned = mockProfiles.map((profile) => {
      return {
        ...profile,
        user: undefined,
      };
    });

    const res: GetProfileResponse = {
      profile: cleaned[0],
    };

    return NextResponse.json(res);
  } catch (error) {
    console.error("Error fetching conversations:", error);
    return NextResponse.json(
      { error: "Failed to fetch conversations" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateProfileRequest = await request.json();
    console.log("create event request body: ", body);

    const res = {
      id: "mock_event_id",
    };

    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    console.error("Error creating conversation:", error);
    return NextResponse.json(
      { error: "Failed to create conversation" },
      { status: 500 },
    );
  }
}
