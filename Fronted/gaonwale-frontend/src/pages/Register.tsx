import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, AtSign, Smartphone, Lock, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      await login();
      navigate('/home');
    } catch {
      setError('Unable to create your account. Please try again.');
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#faf9ff] text-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#6d28d9] via-[#c026d3] to-[#f97316] px-5 pb-20 pt-[max(1.5rem,env(safe-area-inset-top))]">
        <div className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl" />
        <button type="button" aria-label="Back to login" onClick={() => navigate('/login')} className="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md active:scale-95"><ArrowLeft size={23} /></button>
        <div className="relative z-10 mx-auto mt-5 w-fit"><img src="/assets/logo/gaonwale-logo.png" alt="GaonWale logo" className="h-20 w-20 rounded-[24px] border-2 border-white/30 object-cover shadow-2xl" /></div>
        <div className="relative z-10 mt-3 text-center text-white"><h1 className="text-2xl font-extrabold">GaonWale</h1><p className="mt-1 text-sm text-white/90">Apne Gaon Ki Baat, Apne Andaaz Mein</p></div>
      </section>

      <section className="relative z-20 -mt-10 min-h-[72dvh] rounded-t-[34px] bg-white px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-8 shadow-[0_-18px_45px_rgba(76,29,149,.12)] sm:mx-auto sm:max-w-md">
        <div className="mx-auto max-w-sm">
          <div className="mb-6 text-center"><h2 className="text-[27px] font-extrabold tracking-tight">Create your account</h2><p className="mt-1 text-sm text-gray-500">Sign up to start your journey</p></div>
          <form onSubmit={handleRegister} className="space-y-3.5">
            {error && <div role="alert" className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">{error}</div>}
            <label className="relative block"><User size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /><input aria-label="Full Name" required placeholder="Full Name" className="h-14 w-full rounded-2xl border border-gray-200 bg-[#fafaff] pl-12 pr-4 text-[15px] font-medium outline-none focus:border-[#7c3aed] focus:ring-4 focus:ring-purple-100" /></label>
            <label className="relative block"><AtSign size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /><input aria-label="Username" required placeholder="Username" autoComplete="username" className="h-14 w-full rounded-2xl border border-gray-200 bg-[#fafaff] pl-12 pr-4 text-[15px] font-medium outline-none focus:border-[#7c3aed] focus:ring-4 focus:ring-purple-100" /></label>
            <label className="relative block"><Smartphone size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /><input aria-label="Mobile Number" required type="tel" inputMode="tel" placeholder="Mobile Number" className="h-14 w-full rounded-2xl border border-gray-200 bg-[#fafaff] pl-12 pr-4 text-[15px] font-medium outline-none focus:border-[#7c3aed] focus:ring-4 focus:ring-purple-100" /></label>
            <label className="relative block"><Lock size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /><input aria-label="Password" required minLength={6} type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoComplete="new-password" className="h-14 w-full rounded-2xl border border-gray-200 bg-[#fafaff] pl-12 pr-12 text-[15px] font-medium outline-none focus:border-[#7c3aed] focus:ring-4 focus:ring-purple-100" /><button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl p-2 text-gray-400 active:scale-90">{showPassword ? <EyeOff size={19} /> : <Eye size={19} />}</button></label>
            <label className="relative block"><Lock size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /><input aria-label="Confirm Password" required minLength={6} type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" autoComplete="new-password" className="h-14 w-full rounded-2xl border border-gray-200 bg-[#fafaff] pl-12 pr-12 text-[15px] font-medium outline-none focus:border-[#7c3aed] focus:ring-4 focus:ring-purple-100" /><button type="button" aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'} onClick={() => setShowConfirmPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl p-2 text-gray-400 active:scale-90">{showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}</button></label>
            <button type="submit" disabled={isLoading} className="h-14 w-full rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-base font-bold text-white shadow-lg shadow-blue-500/25 transition active:scale-[.98] disabled:opacity-60">{isLoading ? 'Creating account…' : 'Sign Up'}</button>
          </form>
          <div className="my-7 flex items-center gap-4"><span className="h-px flex-1 bg-gray-200" /><span className="text-xs font-semibold text-gray-400">OR</span><span className="h-px flex-1 bg-gray-200" /></div>
          <div className="space-y-3"><button type="button" className="h-13 min-h-13 w-full rounded-2xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 shadow-sm">🌈&nbsp; Continue with Google</button><button type="button" className="h-13 min-h-13 w-full rounded-2xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 shadow-sm">🔵&nbsp; Continue with Facebook</button></div>
          <p className="mt-7 pb-2 text-center text-sm text-gray-500">Already have an account? <Link to="/login" className="font-bold text-blue-600">Login</Link></p>
        </div>
      </section>
    </main>
  );
};
