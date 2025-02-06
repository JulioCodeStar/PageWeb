import axios from "axios";

const configAxios = {
    baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
};

export default axios.create(configAxios);