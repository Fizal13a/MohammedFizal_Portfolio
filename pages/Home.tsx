import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { PROJECTS } from "../constants";

const Home: React.FC = () => {
  const professionalProjects = PROJECTS.filter(p => p.category === 'Professional');
  const personalProjects = PROJECTS.filter(p => p.category === 'Personal');
  const tools = PROJECTS.filter(p => p.category === 'Tools');

  return (
    <div className="min-h-screen bg-dark text-zinc-200 selection:bg-indigo-500/30 selection:text-indigo-200 font-sans">
      
      {/* Background Texture */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <Header />

      <div className="relative z-10">
        <Hero />
        <About />

        <main className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto space-y-32">

          {/* Professional Projects */}
          <section id="professional" className="scroll-mt-28">
            <div className="flex items-end gap-4 mb-20 border-b border-zinc-800 pb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Professional Work
              </h2>
              <span className="text-zinc-500 font-mono text-sm mb-1 pb-1">
                / SELECTED PROJECTS
              </span>
            </div>

            <div className="space-y-32">
              {professionalProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isAlternate={index % 2 !== 0}
                />
              ))}
            </div>
          </section>

          {/* Personal Projects */}
          <section id="personal" className="scroll-mt-28">
            <div className="flex items-end gap-4 mb-20 border-b border-zinc-800 pb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Personal Projects
              </h2>
              <span className="text-zinc-500 font-mono text-sm mb-1 pb-1">
                / EXPERIMENTS & JAMS
              </span>
            </div>

            <div className="space-y-32">
              {personalProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isAlternate={index % 2 !== 0}
                />
              ))}
            </div>
          </section>

          {/* Tools */}
          <section id="tools" className="scroll-mt-28">
            <div className="flex items-end gap-4 mb-20 border-b border-zinc-800 pb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Tools
              </h2>
              <span className="text-zinc-500 font-mono text-sm mb-1 pb-1">
                / Editor Tools
              </span>
            </div>

            <div className="space-y-32">
              {tools.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isAlternate={index % 2 !== 0}
                />
              ))}
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
