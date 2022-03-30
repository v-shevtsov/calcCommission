import { fetchBuilder, MemoryCache } from 'node-fetch-cache';

export const fetch = fetchBuilder.withCache(new MemoryCache({ ttl: 1000 }));

export const fetchJSON = async (url, options = {}) => {
  const response = await fetch(url, options);
  return response.json();
};
