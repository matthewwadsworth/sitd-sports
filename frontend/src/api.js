import axios from "axios";

export const API = axios.create({
  baseURL: "https://your-backend-url.onrender.com/api",
});

// Attaches user token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("readerToken");
  if (token) config.headers["x-reader-token"] = token;
  return config;
});
