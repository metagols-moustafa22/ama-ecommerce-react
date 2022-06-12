// export const HTTP = "http://"

const domain = "https://api.metagols.com";
const api = "/api";

export const imageUrl = (path: string | undefined) =>
  domain + api + "/gallery/download?path=" + path;

export const baseURL = domain + api;
