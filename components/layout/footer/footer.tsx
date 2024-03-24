import { getTokenInServer } from "@/utils/server-service";
import { FooterPlayer } from "./footer-player";

export const Footer = async () => {
	const token = await getTokenInServer();
	if (!token) return null;
	return <FooterPlayer token={token} uris={"spotify:artist:6HQYnRM4OzToCYPpVBInuU"} />;
};
