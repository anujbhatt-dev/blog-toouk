import { useState } from "react";
import axios from "axios";
import { useGlobalStore } from "@/store/globalStore";
import { authStore } from "@/store/authStore";

interface LoginData {
  emailOrUsername: string;
  password: string;
}

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const setLoginPortal = useGlobalStore((state) => state.setLoginPortal);
  const setUser = authStore((state) => state.setUser);

  const login = async (data: LoginData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT2}/auth/login`, data);
      setSuccess(true);
      setUser(res.data.user)
    } catch (err: any) {
      const message =
        err.response?.data?.message || err.message || "Failed to login";
      setError(message);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setLoginPortal(false);
      }, 1000);
    }
  };

  return { login, loading, error, success };
}
