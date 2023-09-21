interface ExternalUrls {
	spotify: string;
}

interface ExternalIds {
	isrc: string;
	ean: string;
	upc: string;
}

interface Followers {
	href: string;
	total: number;
}

export interface Image {
	url: string;
	height: number;
	width: number;
}

export interface Owner {
	external_urls: ExternalUrls;
	followers: Followers;
	href: string;
	id: string;
	type: string;
	uri: string;
	display_name: string;
}

export interface Playlist {
	collaborative: boolean;
	description: string;
	external_urls: ExternalUrls;
	href: string;
	id: string;
	images: Image[];
	name: string;
	owner: Owner;
	public: boolean;
	snapshot_id: string;
	tracks: {
		href: string;
		total: number;
	};
	type: string;
	uri: string;
}

export interface PlaylistApiResponse {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: Playlist[];
}

export interface PlaylistByIdResponse {
	collaborative: boolean;
	description: string;
	external_urls: ExternalUrls;
	followers: Followers;
	href: string;
	id: string;
	images: Image[];
	name: string;
	owner: Owner;
	public: boolean;
	snapshot_id: string;
	tracks: {
		href: string;
		limit: number;
		next: string;
		offset: number;
		previous: string;
		total: number;
		items: Track[];
	};
	type: string;
	uri: string;
}

export interface Artist {
	external_urls: ExternalUrls;
	followers: Followers;
	genres: string[];
	href: string;
	id: string;
	images: Image[];
	name: string;
	popularity: number;
	type: string;
	uri: string;
}

export interface Album {
	album_type: string;
	total_tracks: number;
	available_markets: string[];
	external_urls: ExternalUrls;
	href: string;
	id: string;
	images: {
		url: string;
		height: number;
		width: number;
	}[];
	name: string;
	release_date: string;
	release_date_precision: string;
	restrictions: {
		reason: string;
	};
	type: string;
	uri: string;
	artists: Artist[];
}

export interface Track {
	added_at: string;
	track: {
		album: Album;
		artists: Artist[];
		available_markets: string[];
		disc_number: number;
		duration_ms: number;
		explicit: boolean;
		external_ids: {
			isrc: string;
			ean: string;
			upc: string;
		};
		external_urls: ExternalUrls;
		href: string;
		id: string;
		is_playable: boolean;
		linked_from: Record<string, unknown>;
		restrictions: {
			reason: string;
		};
		name: string;
		popularity: number;
		preview_url: string;
		track_number: number;
		type: string;
		uri: string;
		is_local: boolean;
	};
}

export interface LikedSongsApiResponse {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: Track[];
}

export interface SpotifyCategoryApiResponse {
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
	items: SpotifyCategoryItem[];
}

export interface SpotifyCategoryItem {
	href: string;
	icons: SpotifyImage[];
	id: string;
	name: string;
}

export interface SpotifyImage {
	height: number;
	url: string;
	width: number;
}
