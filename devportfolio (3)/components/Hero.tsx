import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  // Split name for styling (First name bold, Last name subtle)
  const nameParts = PROFILE.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left z-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4">
            {firstName} <span className="text-zinc-500">{lastName}</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="h-1 w-12 bg-indigo-500 rounded-full mt-3 hidden md:block"></div>
            <p className="text-xl md:text-2xl text-zinc-300 font-light tracking-wide">
              {PROFILE.role}
            </p>
          </div>
        </motion.div>

        {/* Video/Visual Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-lg"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">

            {/* Video */}
            <video
              src="https://res.cloudinary.com/damqgasyv/video/upload/v1765775835/Portfolio_ijsqoa.mov"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 to-transparent" />
            <div className="absolute inset-0 bg-black/20" />

            {/* Fake UI Overlay */}
            <div className="absolute top-4 left-4 flex gap-2 z-10">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>

          </div>

        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;