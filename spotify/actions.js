const BASE_URL = "https://api.spotify.com/v1";

// uses Spotify's Search API to search artist by artist name
let searchArtists = async (http, { artist }) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/search?q=artist:${artist}&type=artist`,
  };

  return http(config).then((res) => res.data);
};

/// uses Spotify's Browse API to get song recommendations
const getRecommendations = async (
  http,
  { artistId1, artistId2, artistId3 }
) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/recommendations?seed_artists=${artistId1},${artistId2},${artistId3}`,
  };

  return http(config).then((res) => res.data);
};

module.exports = { searchArtists, getRecommendations };
