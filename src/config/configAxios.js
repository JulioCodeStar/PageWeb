import axios from "axios";

const API = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

const configAxios = axios.create({
  baseURL: `${API.replace(/\/$/, "")}/api`,  // quedará "...com/api"
  timeout: 10_000,
});

export default configAxios;