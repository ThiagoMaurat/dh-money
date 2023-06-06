import axios, { AxiosError } from "axios";
import { getSession, signOut } from "next-auth/react";

interface ErrorAPI {
  error: string;
}

export const api = axios.create({
  baseURL: process.env.NEXT_API_URL || "https://digitalmoney.ctd.academy",
});

getSession().then((session) => {
  api.defaults.headers.common["Authorization"] = `${session?.user?.token}`;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorAPI>) => {
    if (
      error?.response?.status === 401 &&
      error?.response?.data.error.includes("expired")
    ) {
      signOut({ redirect: true, callbackUrl: "/" });
    }

    return Promise.reject(error);
  }
);
