import { NextRequest, NextResponse } from "next/server";
import {
  CreateResourceRequest,
  GetResourcesResponse,
} from "@/types/api";
import { mockResources } from "@/data";
import { Resource } from "@/types";

// Convert Google Calendar Resource to our Resource type


export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const resourceId = searchParams.get('id');
    
    let resources: Resource[] = [];

    if (resourceId) {
     const selectedResource = mockResources.find((resource) => resource.id === resourceId);
     
      if (!selectedResource) {
        return NextResponse.json(
          { error: "Resource not found" },
          { status: 404 }
        );
      }

      resources.push(selectedResource)
    }
    
    const res: GetResourcesResponse = {
      resources: resources,
      page: 1,
      total: resources.length,
    };

    return NextResponse.json(res);
  } catch (error) {
    console.error("Error fetching Resources:", error);
    return NextResponse.json(
      { error: "Failed to fetch Resources" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateResourceRequest = await request.json();
    console.log("create Resource request body: ", body);
    // We could handle the query body here and do a switch to handle the 
    // various request types

    const res = {
      id: "mock_Resource_id",
    };
    console.log("resource created not really")
    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    console.error("Error creating conversation:", error);
    return NextResponse.json(
      { error: "Failed to create conversation" },
      { status: 500 },
    );
  }
}
