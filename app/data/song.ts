import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();
const clientId = "4247fdc28d44452590bac2ff08feb7c6";
const clientSecret = "e688a17a8b4947baab5a4184d4ee1f52";

export const authenticateSpotify = async () => {
	try {
		const response = await fetch("https://accounts.spotify.com/api/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
			},
			body: "grant_type=client_credentials",
		});

		const data = await response.json();

		if (data.access_token) {
			spotifyApi.setAccessToken(data.access_token);
			return true;
		}
	} catch (error) {
		console.log("Error authenticating Spotify:", error);
	}

	return false;
};

export const fetchSongs = async (playlistUrl: string) => {
	try {
		const playlistId = extractPlaylistIdFromUrl(playlistUrl);
		const response = await spotifyApi.getPlaylistTracks(playlistId);
		const tracks = response.items.map((item: any) => ({
			title: item.track.name,
			artist: item.track.artists[0].name,
			image: item.track.album.images[0].url,
			link: item.track.external_urls.spotify,
		}));
		return tracks;
	} catch (error) {
		console.log("Error fetching songs:", error);
		return [];
	}
};


const extractPlaylistIdFromUrl = (url: string) => {
	const regex = /playlist\/([a-zA-Z0-9]+)/;
	const match = url.match(regex);
	if (match && match.length > 1) {
		return match[1];
	}
	throw new Error("Invalid playlist URL");
};

