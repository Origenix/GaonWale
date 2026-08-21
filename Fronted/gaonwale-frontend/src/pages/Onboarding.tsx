import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { mediaItems } from "../data/media";

export const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [showTagline, setShowTagline] = useState(false);
  const [heroImage, setHeroImage] = useState(
    mediaItems[0]?.src || "/assets/logo/gaonwale-logo.png",
  );
  const [heroCaption, setHeroCaption] = useState(
    mediaItems[0]?.title || "Village life through every frame",
  );

  useEffect(() => {
    // Show tagline after logo animation
    const timer1 = setTimeout(() => {
      setShowTagline(true);
    }, 1500);

    // Navigate to login after full animation
    const timer2 = setTimeout(() => {
      navigate("/login");
    }, 4000);

    const timer3 = setTimeout(() => {
      const next = mediaItems[Math.floor(Math.random() * mediaItems.length)];
      if (next) {
        setHeroImage(next.src);
        setHeroCaption(next.title);
      }
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#050711] via-[#111328] to-[#252952] flex flex-col items-center justify-center p-6">
      {/* Background Particles/Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={heroImage}
          alt={heroCaption}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#7C3AED] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#EC4899] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5,
          }}
          className="mb-8 relative"
        >
          {/* Logo with glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] via-[#C026D3] to-[#F97316] rounded-[32px] blur-xl opacity-60"></div>
          <img
            src="/assets/logo/gaonwale-logo.png"
            alt="GaonWale"
            className="w-32 h-32 md:w-40 md:h-40 rounded-[32px] object-cover relative z-10 shadow-2xl border-[3px] border-white/10"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-4 tracking-tight"
        >
          GaonWale
        </motion.h1>

        <AnimatePresence>
          {showTagline && (
            <motion.div
              initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="space-y-1"
            >
              <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
                Apne Gaon Ki Baat,
              </p>
              <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#EC4899] font-bold tracking-wide">
                Apne Andaaz Mein
              </p>
              <p className="text-sm text-gray-300 mt-2 max-w-xl mx-auto">
                {heroCaption} ko yaadgar banaane ke liye banaya gaya ek chhota
                sa jalwa. Har frame mein gaon ki ek kahaani chipti hai.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 mt-10 grid grid-cols-2 gap-3 w-full max-w-4xl">
        {mediaItems.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-lg"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-28 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-3">
              <p className="text-sm text-white font-semibold truncate">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Loading indicator line */}
      <motion.div
        className="absolute bottom-16 w-32 h-1 bg-white/10 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#7C3AED] to-[#F97316]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};
