import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const headersList = new Headers(request.headers);
  const headerList = headers();
  console.log(headerList.get("Authorization"));
  console.log(request.cookies.get("token"));

  cookies().set("theme", "dark");

  console.log(cookies().get("theme"));

  return new Response("<h1>Profile Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "token=test123",
    },
  });
}
