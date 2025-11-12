"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (!res.error) {
        router.push("/admin/panel");
      } else {
        alert("Invalid credentials");
      }
    } else {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        alert("Signup successful! You can now log in.");
        setIsLogin(true);
      } else {
        const data = await res.json();
        alert(data.error || "Signup failed");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Animated background waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="relative z-10 bg-gray-900/70 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-800 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-zinc-700 to-zinc-200 text-transparent bg-clip-text">
          {isLogin ? "Admin Login" : "Admin Signup"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none placeholder-gray-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full bg-gray-800 border border-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none placeholder-gray-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-zinc-900 to-zinc-300 hover:from-zinc-300 hover:to-zinc-900 text-white py-3 rounded-lg font-semibold transition-transform duration-200 hover:scale-[1.02]"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-5">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-zinc-100 hover:text-cyan-300 transition"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
