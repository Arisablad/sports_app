import axios from "axios";

const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': "_0da65c2c51704543b3aa8242cf1a65e2"
    }
});

// apiClient.interceptors.response.use(
//     (response) => response,
//     (error) => Promise.reject(error.response.data.err),
// );

export default apiClient;
