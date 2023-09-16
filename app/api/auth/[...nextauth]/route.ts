import SpotifyProvider from "next-auth/providers/spotify";
import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
	interface Session {
		user: User & {
			token: JWT;
		};
	}
}

const handler = NextAuth({
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID as string,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ token, session }) {
			console.log(token);
			session.user.token = token;
			return session;
		},
	},
});

export { handler as GET, handler as POST };
