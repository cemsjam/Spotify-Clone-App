import { getServerAuthSession } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	try {
		const session = await getServerAuthSession();
		if (!session || !session.accessToken) {
			return NextResponse.json({ error: "No session or token provided" }, { status: 400 });
		}
		const res = await fetch(`${process.env.SPOTIFY_API_URL}v1/me/player`, {
			headers: {
				Authorization: `Bearer ${session.accessToken}`,
			},
		});
		if (!res.ok) {
			console.log("res", res, res.status, res.statusText);
			if (res.status === 204) {
				// Handle case where no content is returned (e.g., no song playing)
				return NextResponse.json({ message: "No song is currently being played" }, { status: 204 });
			}
			const errorMessage = await res.text(); // Get the error message from Spotify API
			return NextResponse.json({ error: `Failed to fetch data: ${errorMessage}` }, { status: res.status });
		}
		const data = await res.json();
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: "an error occured in api/player route" }, { status: 500 });
	}
}
