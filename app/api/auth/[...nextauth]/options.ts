import { NextAuthOptions, Session } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

import { refreshAccessToken } from "@/utils/refreshToken";

const SPOTIFY_SCOPES =
	"user-library-read user-library-modify user-read-email user-read-private streaming user-read-playback-state user-modify-playback-state playlist-modify-public playlist-modify-private";
declare module "next-auth" {
	interface Session {
		accessToken?: string;
		error?: string;
	}
	interface Account {
		expires_at: number;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		accessToken?: string;
		refreshToken?: string;
		accessTokenExpires?: number;
		error?: string;
		user?: Session["user"];
	}
}

export const authOptions: NextAuthOptions = {
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID as string,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
			authorization: {
				params: {
					scope: SPOTIFY_SCOPES,
				},
			},
		}),
	],
	callbacks: {
		async jwt({ token, account, user }) {
			if (account && user) {
				return {
					accessToken: account.access_token,
					refreshToken: account.refresh_token,
					accessTokenExpires: account.expires_at * 1000,
					user,
				};
			}
			if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
				return token;
			}
			const newToken = await refreshAccessToken(token);
			return newToken;
		},

		async session({ token, session }) {
			session.accessToken = token.accessToken;
			session.error = token.error;
			session.user = token.user;
			return session;
		},
	},
};
