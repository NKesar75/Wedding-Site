import { motion, AnimatePresence } from "framer-motion";
import { Music, X, Volume2 } from "lucide-react";
import { useAudio } from "../contexts/AudioContext";

export function MusicConsent() {
  const { hasRequestedConsent, acceptedConsent, revokeConsent } = useAudio();

  if (hasRequestedConsent) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className='bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full shadow-2xl'
        >
          <div className='text-center'>
            <div className='w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Volume2 className='w-8 h-8 text-white' />
            </div>

            <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
              Add Some Music?
            </h2>

            <p className='text-slate-600 dark:text-slate-300 mb-8 leading-relaxed'>
              We've prepared some beautiful traditional Punjabi music to enhance
              your experience. Would you like to play soft background music
              while you explore our wedding website?
            </p>

            <div className='flex flex-col sm:flex-row gap-3'>
              <button
                onClick={acceptedConsent}
                className='flex-1 bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center gap-2'
              >
                <Music className='w-5 h-5' />
                Yes, Play Music
              </button>

              <button
                onClick={revokeConsent}
                className='flex-1 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 py-3 px-6 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 flex items-center justify-center gap-2'
              >
                <X className='w-5 h-5' />
                No Thanks
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
