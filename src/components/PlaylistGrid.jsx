import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { fallbackThumbnails, MathThumbnail } from "../utils/getThumbnail";

// Reusable SVG illustrations for each general category (matching branding)
const CategoryIllustration = ({ category, className = "w-7 h-7" }) => {
  const norm = category ? category.toLowerCase() : "";
  if (norm.includes("calculus")) {
    return (
      <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 55 15 C 65 15, 65 25, 50 50 C 35 75, 35 85, 45 85" className="stroke-forest" strokeWidth="3" />
        <path d="M 10 75 Q 40 70, 70 45 T 90 25" className="stroke-gold/30" />
      </svg>
    );
  } else if (norm.includes("geometry")) {
    return (
      <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="50" y1="50" x2="50" y2="10" className="stroke-forest/20" />
        <line x1="50" y1="50" x2="90" y2="50" className="stroke-forest/20" />
        <line x1="50" y1="50" x2="20" y2="80" className="stroke-forest/20" />
        <line x1="30" y1="30" x2="70" y2="70" className="stroke-forest" strokeWidth="3" />
      </svg>
    );
  } else if (norm.includes("vector")) {
    return (
      <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="20" y1="70" x2="70" y2="25" className="stroke-forest" strokeWidth="3" />
        <polygon points="70,22 72,28 66,26" className="fill-forest stroke-none" />
        <line x1="20" y1="70" x2="80" y2="70" className="stroke-gold" />
      </svg>
    );
  } else if (norm.includes("probability")) {
    return (
      <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="50" cy="25" r="8" className="stroke-forest fill-forest/5" />
        <circle cx="30" cy="55" r="8" className="stroke-forest fill-forest/5" />
        <circle cx="70" cy="55" r="8" className="stroke-forest fill-forest/5" />
        <line x1="47" y1="32" x2="33" y2="48" className="stroke-forest/40" />
        <line x1="53" y1="32" x2="67" y2="48" className="stroke-forest/40" />
      </svg>
    );
  } else if (norm.includes("trig")) {
    return (
      <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="50" cy="50" r="35" className="stroke-forest/30" />
        <line x1="15" y1="50" x2="85" y2="50" className="stroke-forest/20" />
        <line x1="50" y1="50" x2="75" y2="25" className="stroke-forest" />
      </svg>
    );
  } else {
    // Algebra/Default
    return (
      <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 25 15 L 15 15 L 15 85 L 25 85" className="stroke-forest" strokeWidth="3" />
        <path d="M 75 15 L 85 15 L 85 85 L 75 85" className="stroke-forest" strokeWidth="3" />
        <text x="38" y="55" className="fill-gold font-sans text-xs stroke-none font-bold">f(x)</text>
      </svg>
    );
  }
};

export default function PlaylistGrid({ chapters }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {chapters.map((chapter, index) => {
        return (
          <PlaylistCard key={chapter.id} chapter={chapter} index={index} itemVariants={itemVariants} />
        );
      })}
    </motion.div>
  );
}

function PlaylistCard({ chapter, itemVariants }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        y: -10,
        boxShadow: "0px 20px 45px rgba(27,62,43,0.15)"
      }}
      onClick={() => window.open(chapter.playlistUrl, "_blank", "noopener,noreferrer")}
      className="bg-white rounded-3xl overflow-hidden border border-forest/5 shadow-[0_12px_35px_rgba(27,62,43,0.02)] flex flex-col h-full group cursor-pointer hover:border-gold/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.22)] transition-all duration-500 relative select-none"
    >
      {/* Thumbnail */}
      <MathThumbnail 
        videoIdOrUrl={chapter.videoId} 
        topicKey={chapter.id} 
        alt={chapter.title || chapter.name} 
        manualThumbnail={chapter.thumbnail}
      >
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-gold text-forest flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 fill-current ml-1" />
          </div>
        </div>
      </MathThumbnail>

      {/* Card Body */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div className="flex-grow flex flex-col mb-6">
          <h3 className="text-xl font-serif font-bold text-forest group-hover:text-gold transition-colors duration-300 line-clamp-2 leading-tight min-h-[56px] flex items-center">
            {chapter.title || chapter.name}
          </h3>
          <p className="text-charcoal/80 text-sm font-sans leading-relaxed line-clamp-3 mt-4 min-h-[60px] flex items-start">
            {chapter.description || chapter.shortDescription}
          </p>
        </div>

        {/* Watch Playlist Button */}
        <div className="relative overflow-hidden rounded-2xl mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(chapter.playlistUrl, "_blank", "noopener,noreferrer");
            }}
            className="w-full py-3.5 px-6 bg-forest text-cream font-sans font-semibold text-sm text-center flex items-center justify-center gap-2 group-hover:bg-gold group-hover:text-forest transition-colors duration-300 shadow-md rounded-xl cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Watch Playlist</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
