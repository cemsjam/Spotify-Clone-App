import { NextRequest, NextResponse } from "next/server";
import { getServerAuthSession } from "./utils/auth";

export async function middleware(request: NextRequest) {
	const session = await getServerAuthSession();
	if (!session || !session.user) {
		return NextResponse.redirect(new URL("/", request.url));
	}
	console.log(request.nextUrl.pathname);
	return NextResponse.next();
}

export const config = {
	matcher: ["/playlist", "/search", "/collection", "/album"],
};
