import React from 'react';
import { SOCIAL_LINKS, PROFILE } from '../constants';
import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900/30 border-y border-zinc-800/50 backdrop-blur-sm scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
        >
          {/* Left: Bio */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-indigo-500"></span> About Me
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              {PROFILE.bio}
            </p>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="p-3 bg-zinc-800 rounded-lg text-indigo-400">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">Email</div>
                  <a href={`mailto:${PROFILE.email}`} className="hover:text-white transition-colors">
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-300">
                <div className="p-3 bg-zinc-800 rounded-lg text-indigo-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">Location</div>
                  <span>{PROFILE.location}</span>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:bg-indigo-600 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;