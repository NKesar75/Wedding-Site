import React from "react";
import { Calendar, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id='home' className='min-h-screen relative overflow-hidden'>
      {/* Background */}
      <div
        className='absolute inset-0 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900'
        style={{
          // TODO: Replace with a more personal image
          backgroundImage: `url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />
      <div className='absolute inset-0 bg-white/70 dark:bg-slate-900/70' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center'>
        <div className='text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heart className='w-16 h-16 text-cyan-600 mx-auto mb-6' />

            <h1 className='text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4'>
              Naja <span className='text-cyan-600'>&</span> Nilesh
            </h1>

            <p className='text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8'>
              are getting married
            </p>

            <div className='flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-slate-700 dark:text-slate-300'>
              <div className='flex items-center gap-2'>
                <Calendar className='w-5 h-5 text-cyan-600' />
                <span>October 23-24, 2026</span>
              </div>
              <div className='flex items-center gap-2'>
                <MapPin className='w-5 h-5 text-cyan-600' />
                <span>Columbia, South Carolina</span>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              {/* TODO: add this back when RSVP is ready */}
              {/* <button
                onClick={() => scrollToSection("rsvp")}
                className='bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg'
              >
                RSVP Now
              </button> */}
              <button
                onClick={() => scrollToSection("itinerary")}
                className='border-2 border-cyan-600 text-cyan-600 dark:text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-600 hover:text-white transform hover:scale-105 transition-all duration-200'
              >
                View Schedule
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 animate-pulse'></div>
        </div>
      </div>
    </section>
  );
}
