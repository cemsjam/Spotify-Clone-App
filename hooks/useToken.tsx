"use client";

import { useSession } from "next-auth/react";

const useToken = () => {
	const { data: session } = useSession();
	if (session) {
		return session.accessToken;
	} else {
		return null;
	}
};
