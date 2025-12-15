import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectMedia } from '../types';

interface MediaCarouselProps {
  media: ProjectMedia[];
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  if (media.length === 0) {
    return (
      <div className="w-full aspect-video bg-zinc-800 flex items-center justify-center rounded-lg">
        <ImageIcon className="text-zinc-600 w-12 h-12" />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video group overflow-hidden rounded-xl bg-black border border-zinc-800 shadow-2xl">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 w-full h-full"
        >
          {media[currentIndex].type === 'image' && (
            <img
              src={media[currentIndex].url}
              alt={media[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          )}

          {media[currentIndex].type === 'video' && (
            <video
              src={media[currentIndex].url}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}

          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {media.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
            {media.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MediaCarousel;
