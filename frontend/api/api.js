import axios from "axios";
import { getUser } from "../utils/auth";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

API.interceptors.request.use((config) => {
  const user = getUser();
  if (user?.token) config.headers.Authorization = `Bearer ${user.token}`;
  return config;
});

export default API;
