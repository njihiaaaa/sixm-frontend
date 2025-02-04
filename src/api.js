import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://sixm-backend.onrender.com", // Use env variable if available
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Global Error Handling
api.interceptors.response.use(
  (response) => response, // Pass through successful responses
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
