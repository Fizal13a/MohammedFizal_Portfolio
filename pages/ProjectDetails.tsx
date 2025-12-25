import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { PROJECTS } from "../constants";
import { PROJECT_DETAILS } from "../data/projectDetails";
import MediaCarousel from "../components/MediaCarousel";
import {
  Github,
  Play,
  Youtube,
  ShoppingBag,
  Link as LinkIcon
} from "lucide-react";


const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const projectIndex = PROJECTS.findIndex(p => p.id === id);
    const project = PROJECTS[projectIndex];
    const details = PROJECT_DETAILS.find(d => d.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <div className="p-10 text-white">Project not found</div>;
    }

    const prevProject =
        PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
    const nextProject =
        PROJECTS[(projectIndex + 1) % PROJECTS.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto text-white"
        >
            {/* Back Button */}
            <button
                onClick={() => navigate("/")}
                className="mb-10 text-sm text-zinc-400 hover:text-white"
            >
                ← Back
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* LEFT SIDE */}
                <div className="space-y-10">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">
                            {project.title}
                        </h1>
                        <p className="text-zinc-400 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Tags */}
                    {details?.tags && (
                        <div className="flex flex-wrap gap-2">
                            {details.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs font-semibold uppercase tracking-wider
                             text-indigo-300 bg-indigo-500/10
                             border border-indigo-500/20 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Project Links */}
                    {project.links && project.links.length > 0 && (
                        <div className="flex flex-wrap gap-4">
                            {project.links.map(link => {
                                let Icon = Play;
                                if (link.type === "github") Icon = Github;
                                if (link.type === "video") Icon = Youtube;
                                if (link.type === "store") Icon = ShoppingBag;
                                if (link.type === "link") Icon = LinkIcon;

                                return (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2
                     rounded-lg border border-zinc-700
                     text-sm text-zinc-300 hover:text-white
                     hover:border-indigo-500 hover:bg-indigo-500/10
                     transition-colors"
                                    >
                                        <Icon size={16} />
                                        {link.label}
                                    </a>
                                );
                            })}
                        </div>
                    )}

                    {/* Role */}
                    {details?.role && (
                        <div>
                            <h3 className="text-xl font-semibold mb-2">My Role</h3>
                            <p className="text-zinc-400">{details.role}</p>
                        </div>
                    )}

                    {/* Contributions */}
                    {details?.contributions && (
                        <div>
                            <h3 className="text-xl font-semibold mb-2">My Contributions</h3>
                            <ul className="list-disc ml-5 space-y-2 text-zinc-400">
                                {details.contributions.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Prev / Next */}
                    <div className="flex justify-between pt-10 border-t border-zinc-800">
                        <button
                            onClick={() => navigate(`/projects/${prevProject.id}`)}
                            className="text-sm text-zinc-400 hover:text-white"
                        >
                            ← Previous
                        </button>

                        <button
                            onClick={() => navigate(`/projects/${nextProject.id}`)}
                            className="text-sm text-zinc-400 hover:text-white"
                        >
                            Next →
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE — MEDIA */}
                <div className="space-y-6">

                    {/* HERO MEDIA (first item) */}
                    {project.media[0] && (
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-black">
                            <MediaCarousel media={[project.media[0]]} />
                        </div>
                    )}

                    {/* REMAINING MEDIA GRID */}
                    {project.media.length > 1 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {project.media.slice(1).map((mediaItem, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-black"
                                >
                                    <MediaCarousel media={[mediaItem]} />
                                </div>
                            ))}
                        </div>
                    )}

                </div>


            </div>
        </motion.div>
    );
};

export default ProjectDetails;
