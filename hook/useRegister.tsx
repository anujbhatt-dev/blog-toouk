import { useState } from "react";
import axios from "axios";
import { useGlobalStore } from "@/store/globalStore";
import { authStore } from "@/store/authStore";

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
}

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const setRegisterPortal = useGlobalStore((state) => state.setRegisterPortal);
  const setUser = authStore((state) => state.setUser);

  const register = async (data: RegisterData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT1}/users`, data);
      setSuccess(true);
      setUser(res.data.user)
    } catch (err: any) {
      const message =
        err.response?.data?.message || err.message || "Failed to register";
      setError(message);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setRegisterPortal(false);
      }, 1000);
    }
  };

  return { register, loading, error, success };
}
