import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";

export function Media() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = document.getElementById("wedding-video") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id='media' className='py-20 bg-slate-50 dark:bg-slate-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <Video className='w-12 h-12 text-cyan-600 mx-auto mb-6' />
          <h2 className='text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            Our Story
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            Watch our save-the-date video and get a glimpse into our love story.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='max-w-4xl mx-auto'
        >
          <div className='relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl'>
            <video
              id='wedding-video'
              className='w-full h-full object-cover'
              // TODO: Replace with actual wedding video
              poster='https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg'
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls
            >
              {/* Placeholder video - replace with actual wedding video */}
              <source src='/media/video/save-the-date.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>

            {/* Custom Play Button Overlay - Only shown when paused */}
            {!isPlaying && (
              <div className='absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors'>
                <button
                  onClick={handlePlayPause}
                  className='w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110'
                  aria-label='Play video'
                >
                  <Play className='w-8 h-8 text-slate-700 ml-1' />
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Engagement Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='mt-16'
        >
          <div className='max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center'>
              Our Engagement Story
            </h3>
            <div className='bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 md:p-12'>
              <p className='text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6'>
                {/* Add your engagement story here */}
                What began with a simple "hello" in Orlando turned into a love
                story years in the making. Naja and Nilesh met at Full Sail
                University in 2016 and quickly became inseparable studying,
                laughing, supporting each other, and slowly building a life
                together. Along the way, their little family grew: first Chop,
                the fiery kitten from Tampa, then Cuz finally joining them from
                South Carolina, and later Casper, who literally cried until he
                was welcomed into their hearts. Life took them from college
                graduates to building careers and a home in Atlanta, always side
                by side, always choosing each other. In October 2024, surrounded
                by spooky Halloween vibes, ring pop humor, sticky notes, and
                Casper stealing one of the proposal letters, Nilesh asked Naja
                to marry him. She said yes laughing, crying, and full of love.
                Now they're ready for the next chapter, together forever.
              </p>
              {/* <p className='text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6'>
                On [engagement date], in a beautiful setting at [location],
                Nilesh asked Naja to be his forever partner. Surrounded by
                [family/friends/nature], it was a moment we'll cherish for the
                rest of our lives.
              </p>
              <p className='text-lg text-slate-700 dark:text-slate-300 leading-relaxed'>
                Now, we're excited to celebrate our love with all of you as we
                embark on this new chapter together.
              </p> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
