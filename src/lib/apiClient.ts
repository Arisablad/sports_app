import axios from "axios";

const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
        'X-RapidAPI-Host': `${import.meta.env.VITE_RAPID_API_HOST}`
    }
});

// apiClient.interceptors.response.use(
//     (response) => response,
//     (error) => Promise.reject(error.response.data.err),
// );

export default apiClient;
