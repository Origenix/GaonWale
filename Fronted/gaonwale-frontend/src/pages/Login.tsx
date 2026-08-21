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
    
    if (!identifier || !password) {
      setError('Please enter both details.');
      return;
    }

    try {
      await login({ identifier, password });
      navigate('/home');
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Graphic Background */}
      <div className="h-[30vh] bg-gradient-to-br from-[#7C3AED] via-[#C026D3] to-[#F97316] relative flex items-center justify-center rounded-b-[40px] shadow-lg">
        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-4 h-4 rounded-full border-2 border-white/30"></div>
        <div className="absolute bottom-12 right-12 w-3 h-3 rounded-full bg-white/20"></div>
        <div className="absolute top-1/2 right-8 w-6 h-6 border-2 border-white/20 rotate-45"></div>
        
        {/* Logo */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-white/20 blur-xl rounded-[24px]"></div>
          <img src="/assets/logo/gaonwale-logo.png" alt="GaonWale" className="w-24 h-24 rounded-[24px] shadow-2xl relative z-10 border-2 border-white/20" />
        </motion.div>
      </div>

      {/* Login Form Container */}
      <div className="flex-1 px-6 pt-8 pb-12 flex flex-col bg-white rounded-t-[40px] -mt-6 relative z-20">
        
        {/* Optional Back Button (for demo purposes) */}
        <button onClick={() => navigate('/onboarding')} className="absolute top-6 left-6 text-gray-500 hover:text-gray-900">
          <ArrowLeft size={24} />
        </button>

        <div className="text-center mb-8 mt-2">
          <p className="text-sm font-medium text-gray-500 mb-1">Welcome Back 👋</p>
          <h1 className="text-2xl font-bold text-gray-900">Login to GaonWale</h1>
          <p className="text-sm text-gray-500 mt-2">Enter your details to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 max-w-md w-full mx-auto">
          {error && (
            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl text-center border border-red-100">
              {error}
            </div>
          )}

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Smartphone size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Phone number, username or email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400 font-medium"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock size={20} className="text-gray-400" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400 font-medium"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-sm font-semibold text-[#3B82F6] hover:text-blue-700">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 mt-2 bg-[#3B82F6] hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 flex items-center justify-center"
          >
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : 'Login'}
          </button>
        </form>

        <div className="mt-8 flex items-center justify-center max-w-md w-full mx-auto">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <div className="mt-6 space-y-3 max-w-md w-full mx-auto">
          <button className="w-full py-3.5 flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-700 shadow-sm">
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
            </svg>
            Continue with Google
          </button>
          
          <button className="w-full py-3.5 flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-semibold text-gray-700 shadow-sm">
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
              <path d="M16.671 15.542l.532-3.469h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.514V5.006s-1.375-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.633H7.078v3.469h3.047v8.385a12.09 12.09 0 003.75 0v-8.385h2.796" fill="#ffffff"/>
            </svg>
            Continue with Facebook
          </button>
        </div>

        <div className="mt-8 text-center max-w-md w-full mx-auto">
          <p className="text-gray-500 text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-[#3B82F6] hover:text-blue-700">
              Create new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
