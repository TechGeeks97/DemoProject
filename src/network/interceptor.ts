import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Create an Axios instance
const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// Request interceptor
api.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    // Do something before sending the request
    console.log("Request Interceptor - Request Config:", config);
    return config;
  },
  (error) => {
    // Do something with the request error
    console.error("Request Interceptor - Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    // Do something with the response data
    console.log("Response Interceptor - Response Data:", response.data);
    return response;
  },
  (error) => {
    // Do something with the response error
    console.error("Response Interceptor - Response Error:", error);
    return Promise.reject(error);
  }
);

// Export the Axios instance
export default api;
