import { getServerAuthSession } from "./auth";

export const fetchDataInServer = async (URL: string, responseErrorMessage?: string) => {
	try {
		const session = await getServerAuthSession();
		if (session) {
			const res = await fetch(URL, {
				headers: {
					Authorization: `Bearer ${session.accessToken}`,
				},
			});
			if (!res.ok) {
				throw new Error(
					`${responseErrorMessage && responseErrorMessage + ","}Something went wrong`
				);
			}
			const json = await res.json();
			return json;
		}
	} catch (error) {
		console.log("Internal Error", error);
	}
};

export const fetchFeaturedPlaylistInServer = async (
	URL: string,
	responseErrorMessage?: string
) => {
	try {
		const res = await fetch(URL);
		if (!res.ok) {
			throw new Error(
				`${responseErrorMessage && responseErrorMessage + ","}Something went wrong`
			);
		}
		const json = await res.json();
		return json;
	} catch (error) {
		console.log("Internal Error", error);
	}
};

export const getCurrentUserInServer = async () => {
	try {
		const session = await getServerAuthSession();
		if (session) {
			const res = await fetch(`${process.env.SPOTIFY_API_URL}me`, {
				headers: {
					Authorization: `Bearer ${session.accessToken}`,
				},
			});
			if (!res.ok) {
				throw new Error("[FETCH_CURRENT_USER_PLAYLIST],Something went wrong");
			}
			const json = await res.json();
			return json;
		}
	} catch (error) {
		console.log("Internal Error", error);
	}
};

export const getTokenInServer = async () => {
	try {
		const session = await getServerAuthSession();
		if (!session) throw new Error("[GET_TOKEN_IN_SERVER],Unauthorized");
		if (session) return session.accessToken;
	} catch (error) {
		console.log("Internal Error", error);
	}
};
