import React from 'react';
// Requesting GIFs data by search query
const getGifsApi = async (query: React.SetStateAction<string>) => {
  const res = await fetch(
    // ContentFilter options
    // rating: PG
    `https://api.giphy.com/v1/gifs/search?api_key=0qc40Qx0l2GXQVvCxMDxrpNAV2qtmMmp&q=${query}&limit=25&offset=0&rating=pg&lang=en`,
  ).then(response => response.json());
  const {meta, data} = res;
  if (meta?.status === 200) {
    return data;
  }
  return [];
};

export default getGifsApi;
