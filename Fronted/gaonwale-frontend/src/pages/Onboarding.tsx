import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const startY = useRef<number | null>(null);
  const [isLeaving, setIsLeaving] = useState(false);

  const continueToLogin = async () => {
    if (isLeaving) return;
    setIsLeaving(true);
    await controls.start({ y: "-100%", opacity: 0, transition: { duration: 0.72, ease: [0.65, 0, 0.35, 1] } });
    navigate("/login");
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        void continueToLogin();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isLeaving]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    startY.current = event.clientY;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startY.current === null) return;
    const delta = startY.current - event.clientY;
    startY.current = null;
    if (delta > 55) void continueToLogin();
  };

  return (
    <motion.main
      animate={controls}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { startY.current = null; }}
      className="relative min-h-[100dvh] overflow-hidden bg-[#54249b] select-none touch-pan-y"
      aria-label="GaonWale splash screen. Swipe up to continue."
    >
      {/* Full-screen gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(185,48,255,.72),transparent_34%),linear-gradient(145deg,#6325ad_0%,#a523b9_34%,#f23872_68%,#ffad16_100%)]" />
      <div className="absolute -left-20 top-28 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
      <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-orange-300/35 blur-3xl" />

      {/* Decorative village-app particles */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <span className="absolute left-[22%] top-[24%] h-3 w-3 rotate-45 rounded-[3px] border-2 border-yellow-300" />
        <span className="absolute left-[76%] top-[28%] h-3 w-3 rounded-full bg-yellow-300" />
        <span className="absolute left-[83%] top-[40%] h-2.5 w-2.5 rotate-45 rounded-full border-2 border-yellow-300" />
        <span className="absolute left-[18%] top-[58%] h-3 w-3 rounded-full border-2 border-yellow-300" />
        <span className="absolute left-[74%] top-[62%] h-3 w-3 rotate-45 rounded-[3px] border-2 border-yellow-300" />
        <span className="absolute left-[9%] top-[46%] h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="absolute right-[12%] top-[49%] h-1.5 w-1.5 rounded-full bg-white/20" />
      </div>

      {/* Phone-like splash panel */}
      <section className="relative mx-auto flex min-h-[100dvh] w-full max-w-[430px] flex-col items-center overflow-hidden border-x border-white/10 px-6 pt-[max(1.6rem,env(safe-area-inset-top))] pb-[max(1.2rem,env(safe-area-inset-bottom))] sm:my-5 sm:min-h-[calc(100dvh-2.5rem)] sm:rounded-[34px] sm:border-2 sm:border-white/20 sm:shadow-[0_25px_80px_rgba(45,13,86,.35)]">
        <div className="relative z-10 rounded-2xl border border-white/35 bg-white/5 px-5 py-2 text-center backdrop-blur-sm">
          <span className="text-lg font-bold text-white">Step 1</span>
        </div>
        <p className="relative z-10 mt-2 text-xl font-medium text-white">Splash Screen</p>

        <motion.div
          initial={{ scale: 0.72, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 170, damping: 17, delay: 0.15 }}
          className="relative z-10 mt-[19dvh]"
        >
          <div className="absolute -inset-8 rounded-[54px] bg-fuchsia-400/45 blur-3xl" />
          <div className="absolute -inset-5 rounded-full border border-white/10" />
          <div className="absolute -inset-11 rounded-full border border-white/10" />
          <div className="absolute -inset-16 rounded-full border border-white/5" />
          <motion.img
            src="/assets/logo/gaonwale-logo.png"
            alt="GaonWale"
            className="relative h-44 w-44 rounded-[38px] border-2 border-white/25 object-cover shadow-[0_20px_55px_rgba(67,15,116,.35)] sm:h-48 sm:w-48"
            animate={{ y: [0, -5, 0], rotate: [0, -1, 1, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="relative z-10 mt-20 text-center text-white"
        >
          <h1 className="text-3xl font-extrabold tracking-tight">GaonWale</h1>
          <p className="mt-3 text-base font-medium">Apne Gaon Ki Baat,</p>
          <p className="mt-1 text-base font-medium">Apne Andaaz Mein</p>
        </motion.div>

        <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 gap-2" aria-hidden="true">
          <span className="h-1.5 w-10 rounded-full bg-white" />
          <span className="h-1.5 w-10 rounded-full bg-white/25" />
          <span className="h-1.5 w-10 rounded-full bg-white/25" />
        </div>

        <button
          type="button"
          onClick={() => void continueToLogin()}
          className="absolute bottom-9 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-white outline-none"
          aria-label="Swipe up to continue to login"
        >
          <motion.span
            animate={{ y: [5, -5, 5], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
            className="text-2xl font-light leading-none"
          >⌃</motion.span>
          <span className="text-xs font-semibold tracking-wide text-white/90">Swipe up to continue</span>
          <span className="mt-2 h-1.5 w-32 rounded-full bg-white/90 sm:w-36" />
        </button>
      </section>
    </motion.main>
  );
};
