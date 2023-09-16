export const mockPlaylistAndArtists = [
	{
		id: 1,
		name: "liked songs",
		creator: "Cemre Kur",
		type: "playlist",
		songs: 757,
		coverImage: "https://misc.scdn.co/liked-songs/liked-songs-64.png",
	},
	{
		id: 2,
		creator: "Cemre Kur",
		name: "rhcp mix",
		type: "playlist",
		songs: 757,
		coverImage:
			"https://mosaic.scdn.co/60/ab67616d00001e0209fd83d32aee93dceba78517ab67616d00001e025590b4ee88187cb06a5b102dab67616d00001e0294d08ab63e57b0cae74e8595ab67616d00001e02de1af2785a83cc660155a0c4",
	},
	{
		id: 3,
		name: "muse",
		artist: "muse",
		type: "artist",
		coverImage: "https://i.scdn.co/image/ab6761610000e5eb0accbbe13e1aa147dd27671c",
	},
	{
		id: 4,
		name: "Meteora(bonus edition)",
		artist: "linkin park",
		type: "album",
		coverImage: "https://i.scdn.co/image/ab67616d0000485189a8fab8bf8cd2b77da1fd17",
		songs: 16,
	},
	{
		id: 5,
		name: "lex fridman podcast",
		creator: "lex fridman",
		type: "podcast",
		coverImage: "https://i.scdn.co/image/ab6765630000f68d563ebb538d297875b10114b7",
	},
] as const;
