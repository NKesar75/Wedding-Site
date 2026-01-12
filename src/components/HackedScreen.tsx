import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Skull, Zap, AlertTriangle } from "lucide-react";

export function HackedScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [showSkipButton, setShowSkipButton] = useState(false);

  const hackedLines = [
    "SYSTEM BREACH DETECTED...",
    "Accessing personal files...",
    "Downloading wedding photos...",
    "Extracting guest list...",
    "Compromising security protocols...",
    "Installing malware...",
    "99% Complete...",
    "JUST KIDDING! 😄",
    "Welcome to Naja & Nilesh's Wedding Website!",
    "Click anywhere to continue...",
  ];

  useEffect(() => {
    setIsVisible(true);

    // Show skip button after 2 seconds
    const skipTimer = setTimeout(() => {
      setShowSkipButton(true);
    }, 2000);

    // Auto-advance lines
    const lineTimer = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < hackedLines.length - 1) {
          return prev + 1;
        } else {
          // Auto-hide after showing all lines
          // setTimeout(() => setIsVisible(false), 3000);
          clearInterval(lineTimer);
          return prev;
        }
      });
    }, 1500);

    return () => {
      clearTimeout(skipTimer);
      clearInterval(lineTimer);
    };
    // }
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 z-[200] bg-black text-green-400 font-mono overflow-hidden cursor-pointer'
        onClick={handleSkip}
      >
        {/* Matrix-style background effect */}
        <div className='absolute inset-0 opacity-5 md:opacity-10'>
          <div className='text-[8px] md:text-xs leading-none whitespace-pre-wrap break-all animate-pulse'>
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className='animate-bounce'
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {Math.random().toString(36).substring(2, 15)}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className='relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8'>
          {/* Skull icon with glitch effect */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className='mb-2 md:mb-8'
          >
            <Skull className='w-10 h-10 md:w-20 md:h-20 text-red-500' />
          </motion.div>

          {/* Warning header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center mb-3 md:mb-8'
          >
            <div className='flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-4'>
              <AlertTriangle className='w-5 h-5 md:w-8 md:h-8 text-red-500 animate-pulse' />
              <h1 className='text-lg md:text-2xl lg:text-4xl font-bold text-red-500 animate-pulse'>
                SYSTEM COMPROMISED
              </h1>
              <AlertTriangle className='w-5 h-5 md:w-8 md:h-8 text-red-500 animate-pulse' />
            </div>
            <div className='flex items-center justify-center gap-1 md:gap-2'>
              <Terminal className='w-4 h-4 md:w-6 md:h-6' />
              <span className='text-xs md:text-sm lg:text-lg'>
                UNAUTHORIZED ACCESS DETECTED
              </span>
              <Zap className='w-4 h-4 md:w-6 md:h-6 animate-bounce' />
            </div>
          </motion.div>

          {/* Terminal output */}
          <div className='bg-black/80 border-2 border-green-400 rounded-lg p-2 md:p-6 w-full max-w-2xl mx-4'>
            <div className='flex items-center gap-1 md:gap-2 mb-2 md:mb-4 border-b border-green-400 pb-2'>
              <div className='w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full'></div>
              <div className='w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full'></div>
              <div className='w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full'></div>
              <span className='ml-1 md:ml-2 text-xs md:text-sm'>
                root@hacker-terminal
              </span>
            </div>

            <div className='space-y-1 md:space-y-2'>
              {hackedLines.slice(0, currentLine + 1).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center gap-1 md:gap-2 ${
                    index === hackedLines.length - 3
                      ? "text-yellow-400 text-base md:text-xl font-bold"
                      : ""
                  } ${
                    index === hackedLines.length - 2
                      ? "text-cyan-400 text-sm md:text-lg"
                      : ""
                  } ${
                    index === hackedLines.length - 1
                      ? "text-white text-xs md:text-sm animate-pulse"
                      : ""
                  } ${
                    index < hackedLines.length - 3 ? "text-xs md:text-base" : ""
                  }`}
                >
                  <span className='text-green-400 flex-shrink-0'>$</span>
                  <span className='break-words'>{line}</span>
                  {index === currentLine && index < hackedLines.length - 1 && (
                    <span className='animate-pulse'>|</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          {currentLine < hackedLines.length - 3 && (
            <div className='mt-3 md:mt-8 w-full max-w-md mx-4'>
              <div className='flex justify-between text-xs md:text-sm mb-1 md:mb-2'>
                <span>Hacking Progress:</span>
                <span>
                  {Math.min(
                    Math.round((currentLine / (hackedLines.length - 4)) * 100),
                    99
                  )}
                  %
                </span>
              </div>
              <div className='w-full bg-gray-800 rounded-full h-1.5 md:h-2'>
                <motion.div
                  className='bg-red-500 h-1.5 md:h-2 rounded-full'
                  initial={{ width: 0 }}
                  animate={{
                    width: `${Math.min(
                      (currentLine / (hackedLines.length - 4)) * 100,
                      99
                    )}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          )}

          {/* Skip button */}
          <AnimatePresence>
            {showSkipButton && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onClick={handleSkip}
                className='mt-3 md:mt-8 px-4 py-2 md:px-6 md:py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm md:text-base font-semibold transition-colors border-2 border-red-400 hover:border-red-300'
              >
                <span className='hidden md:inline'>
                  Skip Hack (Click Anywhere)
                </span>
                <span className='md:hidden'>Skip (Tap Anywhere)</span>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Glitch effects */}
          <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
            {Array.from({ length: 3 }, (_, i) => (
              <motion.div
                key={i}
                className='absolute bg-red-500/20 h-1'
                style={{
                  top: `${20 + i * 30}%`,
                  left: 0,
                  right: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: [0, 1, 0],
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: 2 + i * 0.5,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom warning */}
        <div className='absolute bottom-2 md:bottom-4 left-0 right-0 text-center px-4'>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='text-red-400 font-bold text-xs md:text-base lg:text-xl'
          >
            ⚠️ This is a prank! Your device is perfectly safe ⚠️
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
