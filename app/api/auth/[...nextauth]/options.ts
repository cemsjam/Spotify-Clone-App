import { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { User } from "next-auth";
declare module "next-auth" {
	interface Session {
		user: User & {
			accessToken: string;
		};
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		accessToken?: string;
	}
}

export const authOptions: NextAuthOptions = {
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID as string,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
			authorization: {
				params: {
					scope: "user-library-read user-read-email",
				},
			},
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			// console.log(account, token);
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ token, session }) {
			session.user.accessToken = token.accessToken || "";
			return session;
		},
	},
};
