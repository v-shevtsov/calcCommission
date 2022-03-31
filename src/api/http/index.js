import fetch from 'node-fetch-cache';

export const fetchJSON = async (url, options = {}) => {
  const response = await fetch(url, options);
  return response.json();
};
