import { posts } from "./data";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  console.log(request.nextUrl.searchParams.get("query"));
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");

  if (userId) {
    const postFilter = posts.filter((post) => post.userId === parseInt(userId));
    return NextResponse.json(postFilter);
  }
  // return Response.json(posts);
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const post = await request.json();
  const newPost = {
    id: posts.length + 1,
    ...post,
  };

  posts.push(newPost);
  return Response.json(newPost, {
    status: 201,
  });
}
