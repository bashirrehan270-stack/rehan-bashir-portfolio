import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  duration?: number;
}

export default function LoadingScreen({
  duration = 2200,
}: LoadingScreenProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0F19]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
            },
          }}
        >
          {/* Background Glow */}

          <motion.div
            className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          <div className="relative flex flex-col items-center">

            {/* Logo */}

            <motion.div
              initial={{
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/40
                bg-white/5
                text-4xl
                font-black
                tracking-widest
                backdrop-blur-xl
              "
            >
              <span className="text-white">
                R
              </span>

              <span className="text-cyan-400">
                B
              </span>
            </motion.div>

            {/* Name */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="mt-8 text-3xl font-bold"
            >
              Rehan Bashir
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
              }}
              className="mt-2 text-slate-400"
            >
              Python Developer • AI Enthusiast
            </motion.p>

            {/* Progress */}

            <div className="mt-10 h-1 w-72 overflow-hidden rounded-full bg-white/10">

              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: duration / 1000,
                  ease: "easeInOut",
                }}
              />

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}