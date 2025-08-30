"use client";
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedStarsBackground from "@/components/layout/AnimatedStarsBackground";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Animate vertical background position for parallax effect
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.status === 200) {
      router.push('/dashboard');
    } else {
      setError(data.error);
    }
  };

  return (
    <AnimatedStarsBackground className="min-h-screen flex justify-center items-center">
      {/* Home page background overlays and animated elements for full match */}
      <figure className="bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] absolute size-64 md:size-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
      <motion.div
        style={{ translateY: "-50%", translateX: "-50%" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        animate={{ rotate: "1turn" }}
        className="size-[344px] md:size-[580px] absolute opacity-20 border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className=" absolute size-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
        <div className=" absolute size-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
        <div className=" absolute size-5 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-white inline-flex items-center justify-center rounded-full">
          <div className="size-2 bg-white rounded-full" />
        </div>
      </motion.div>
      <motion.div
        style={{ translateY: "-50%", translateX: "-50%" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        animate={{ rotate: "-1turn" }}
        className=" absolute size-[444px] md:size-[780px] rounded-full border border-dashed border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        style={{ translateY: "-50%", translateX: "-50%" }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        animate={{ rotate: "1turn" }}
        className=" absolute size-[544px] md:size-[980px] rounded-full border opacity-20  border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className=" absolute size-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
        <div className=" absolute size-2 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
      </motion.div>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg z-10 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSignIn} className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <motion.button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
          >
            Sign In
          </motion.button>
        </form>
      </div>
    </AnimatedStarsBackground>
  );
}
