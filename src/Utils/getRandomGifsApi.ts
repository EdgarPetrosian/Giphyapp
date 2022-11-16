// Random GIF data fetcher
const getRandomGifsApi = async () => {
  const res = await fetch(
    // rating: PG
    'https://api.giphy.com/v1/gifs/random?api_key=0qc40Qx0l2GXQVvCxMDxrpNAV2qtmMmp&tag=&rating=pg',
  ).then(response => response.json());
  const {meta, data} = res;
  if (meta?.status === 200) {
    return data?.images?.['480w_still'];
  }
  return [];
};

export default getRandomGifsApi;
