import { JWT } from "next-auth/jwt";

export async function refreshAccessToken(token: JWT): Promise<JWT> {
	try {
		const basicAuth = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString(
			"base64"
		);

		const res = await fetch(process.env.SPOTIFY_REFRESH_TOKEN_URL!, {
			method: "POST",
			headers: {
				Authorization: `Basic ${basicAuth}`,
				"Content-type": "application/x-www-form-urlencoded",
			},
			body: `grant_type=refresh_token&refresh_token=${token.refreshToken}`,
		});
		if (!res.ok) {
			const errorMessage = await res.text();
			throw new Error(`Failed to refresh token: ${errorMessage}`);
		}

		const json = await res.json();

		if (!json.access_token || !json.expires_in) {
			throw new Error("Invalid response from Spotify API");
		}
		return {
			...token,
			accessToken: json.access_token,
			accessTokenExpires: Date.now() + json.expires_in * 1000,
		};
	} catch (error) {
		return {
			...token,
			error: "[REFRESH_ACCESS_TOKEN_ERROR]",
		};
	}
}
