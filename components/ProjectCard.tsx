import React from 'react';
import { Project } from '../types';
import MediaCarousel from './MediaCarousel';
import { motion } from 'framer-motion';
import {
  Github,
  Play,
  Youtube,
  ShoppingBag,
  Link as LinkIcon
} from 'lucide-react';
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  isAlternate: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isAlternate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-8 md:gap-16 items-center mb-32 ${
        isAlternate ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      {/* Media Section - 60% width on Desktop */}
      <div className="w-full md:w-3/5 relative">
        <MediaCarousel media={project.media} />
      </div>

      {/* Content Section - 40% width on Desktop */}
      <div className="w-full md:w-2/5 flex flex-col items-start justify-center">
        
        {/* Clickable Project Title */}
        <Link to={`/projects/${project.id}`}>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight hover:underline cursor-pointer">
            {project.title}
          </h3>
        </Link>

        <p className="text-zinc-400 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.links.map((link) => {
            let Icon = Play;
            if (link.type === 'github') Icon = Github;
            if (link.type === 'store') Icon = ShoppingBag;
            if (link.type === 'video') Icon = Youtube;
            if (link.type === 'link') Icon = LinkIcon;

            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-zinc-800 group-hover:bg-indigo-600 transition-colors">
                  <Icon size={16} />
                </div>
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
