import axios, { AxiosRequestConfig } from "axios";
import { useCallback } from "react";

// Define the base URL using environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL;

export const useApi = () => {
  const fetchData = useCallback(
    async <T,>(
      endpoint: string,
      config?: AxiosRequestConfig
    ): Promise<T | undefined> => {
      try {
        const response = await axios.get<T>(
          `${API_BASE_URL}${endpoint}`,
          config
        );
        return response.data;
      } catch (error) {
        console.error("Error en la solicitud:", error);
        return undefined;
      }
    },
    []
  );

  const createURL = (endpoint: string) => {
    return `${API_BASE_URL}${endpoint}`;
  };

  return { fetchData, createURL };
};
