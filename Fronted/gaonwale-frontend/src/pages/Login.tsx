import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Smartphone, Lock, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!identifier.trim() || !password) {
      setError('Please enter both details.');
      return;
    }
    try {
      await login({ identifier, password });
      navigate('/home');
    } catch {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#faf9ff] text-gray-900">
      <section className="relative min-h-[46dvh] overflow-hidden bg-gradient-to-br from-[#6d28d9] via-[#c026d3] to-[#f97316] px-6 pt-[max(2rem,env(safe-area-inset-top))] pb-20">
        <div className="pointer-events-none absolute -left-16 top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-12 bottom-8 h-56 w-56 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute left-8 top-24 h-3 w-3 rotate-45 border-2 border-yellow-300/80" />
        <div className="absolute right-10 top-16 h-4 w-4 rounded-full bg-yellow-300/80" />
        <div className="absolute left-12 bottom-24 h-4 w-4 rounded-full border-2 border-yellow-300/70" />
        <button type="button" aria-label="Back to onboarding" onClick={() => navigate('/onboarding')} className="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition active:scale-95">
          <ArrowLeft size={23} />
        </button>
        <motion.div initial={{ scale: .75, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .55 }} className="relative mx-auto mt-8 w-fit">
          <div className="absolute -inset-5 rounded-[38px] bg-white/20 blur-2xl" />
          <img src="/assets/logo/gaonwale-logo.png" alt="GaonWale logo" className="relative h-28 w-28 rounded-[30px] border-2 border-white/30 object-cover shadow-2xl sm:h-32 sm:w-32" />
        </motion.div>
        <div className="relative z-10 mt-5 text-center text-white">
          <h1 className="text-3xl font-extrabold tracking-tight">GaonWale</h1>
          <p className="mt-1 text-base font-medium text-white/90">Apne Gaon Ki Baat,</p>
          <p className="text-base font-semibold text-white">Apne Andaaz Mein</p>
        </div>
        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">
          <span className="h-1.5 w-12 rounded-full bg-white" /><span className="h-1.5 w-7 rounded-full bg-white/30" /><span className="h-1.5 w-7 rounded-full bg-white/30" />
        </div>
      </section>

      <section className="relative z-20 -mt-10 min-h-[58dvh] rounded-t-[34px] bg-white px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-8 shadow-[0_-18px_45px_rgba(76,29,149,.12)] sm:mx-auto sm:max-w-md">
        <div className="mx-auto max-w-sm">
          <div className="mb-7 text-center">
            <p className="text-sm font-medium text-gray-500">Welcome Back 👋</p>
            <h2 className="mt-1 text-[27px] font-extrabold tracking-tight">Login to GaonWale</h2>
            <p className="mt-1 text-sm text-gray-500">Enter your details to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-3.5">
            {error && <div role="alert" className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">{error}</div>}
            <label className="relative block">
              <Smartphone size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input aria-label="Phone number, username or email" value={identifier} onChange={(e) => setIdentifier(e.target.value)} autoComplete="username" placeholder="Phone number, username or email" className="h-14 w-full rounded-2xl border border-gray-200 bg-[#fafaff] pl-12 pr-4 text-[15px] font-medium outline-none transition focus:border-[#7c3aed] focus:ring-4 focus:ring-purple-100" />
            </label>
            <label className="relative block">
              <Lock size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input aria-label="Password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder="Password" className="h-14 w-full rounded-2xl border border-gray-200 bg-[#fafaff] pl-12 pr-12 text-[15px] font-medium outline-none transition focus:border-[#7c3aed] focus:ring-4 focus:ring-purple-100" />
              <button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl p-2 text-gray-400 active:scale-90">{showPassword ? <EyeOff size={19} /> : <Eye size={19} />}</button>
            </label>
            <div className="flex justify-end pt-0.5"><Link to="/forgot-password" className="text-sm font-semibold text-blue-600">Forgot Password?</Link></div>
            <button type="submit" disabled={isLoading} className="h-14 w-full rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-base font-bold text-white shadow-lg shadow-blue-500/25 transition active:scale-[.98] disabled:opacity-60">
              {isLoading ? 'Signing in…' : 'Login'}
            </button>
          </form>

          <div className="my-7 flex items-center gap-4"><span className="h-px flex-1 bg-gray-200" /><span className="text-xs font-semibold text-gray-400">OR</span><span className="h-px flex-1 bg-gray-200" /></div>
          <div className="space-y-3">
            <button type="button" className="h-13 min-h-13 w-full rounded-2xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 shadow-sm transition active:scale-[.99]">🌈&nbsp; Continue with Google</button>
            <button type="button" className="h-13 min-h-13 w-full rounded-2xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 shadow-sm transition active:scale-[.99]">🔵&nbsp; Continue with Facebook</button>
          </div>
          <p className="mt-7 pb-2 text-center text-sm text-gray-500">Don't have an account? <Link to="/register" className="font-bold text-blue-600">Create new account</Link></p>
        </div>
      </section>
    </main>
  );
};
