"use client"
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useLogin } from "@/hook/useLogin"; // <-- your login hook
import Image from "next/image";
import { useGlobalStore } from "@/store/globalStore";

export default function LoginPortal() {
  const { loginPortal, setLoginPortal } = useGlobalStore();
  const { login, loading, error, success } = useLogin();

  const [form, setForm] = useState({
    emailOrUsername: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    login(form);
  };

  const handleClose = () =>{
    setLoginPortal(false)
  }

  return (
    <>
      {loginPortal &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            aria-modal="true"
            role="dialog"
          >
            <div className="relative w-full max-w-md rounded-2xl bg-neutral-900 p-6 shadow-2xl ring-1 ring-white/10">
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-neutral-300 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close"
                type="button"
              >
                ✕
              </button>

              {/* Logo */}
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/toouk-mini-logo.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="h-6 w-auto rounded"
                />
                <h1 className="text-xl font-semibold text-white">Login</h1>
              </div>

              <p className="mb-6 text-sm text-neutral-400">
                Welcome back! Please enter your credentials to continue.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <span className="mb-1 block text-sm text-neutral-300">
                    Email
                  </span>
                  <input
                    name="emailOrUsername"
                    type="text"
                    placeholder="you@example.com"
                    value={form.emailOrUsername}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-800 p-2.5 text-neutral-100 placeholder-neutral-500 focus:border-blue-500 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm text-neutral-300">
                    Password
                  </span>
                  <input
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-800 p-2.5 text-neutral-100 placeholder-neutral-500 focus:border-blue-500 focus:outline-none"
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full rounded-lg bg-blue-600 p-2.5 font-medium text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Logging in…" : "Login"}
                </button>

                {error && (
                  <p className="text-sm text-red-400" role="alert">
                    {error}
                  </p>
                )}
                {success && (
                  <p className="text-sm text-green-400">
                    Login successful!
                  </p>
                )}
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
