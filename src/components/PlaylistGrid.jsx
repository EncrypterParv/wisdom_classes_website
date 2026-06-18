import { motion } from "framer-motion";
import { Play, Video } from "lucide-react";

export default function PlaylistGrid({ chapters }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {chapters.map((chapter) => (
        <motion.div
          key={chapter.id}
          variants={itemVariants}
          className="bg-white rounded-3xl overflow-hidden border border-forest/5 shadow-[0_10px_35px_rgba(27,62,43,0.02)] flex flex-col group hover:shadow-[0_20px_50px_rgba(27,62,43,0.08)] hover:-translate-y-1 transition-all duration-300"
        >
          {/* Playlist Thumbnail & Video Count Badge */}
          <div className="relative h-48 overflow-hidden bg-forest/5 shrink-0">
            <img
              src={chapter.thumbnail}
              alt={chapter.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Absolute Overlay when hovering */}
            <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/40 transition-colors duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gold/90 text-forest flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                <Play className="w-5 h-5 fill-forest" />
              </div>
            </div>

            {/* Video Count Badge */}
            <div className="absolute top-4 right-4 bg-forest/90 text-cream px-3 py-1.5 rounded-full text-xs font-sans font-semibold flex items-center gap-1.5 backdrop-blur-sm shadow-md border border-white/10">
              <Video className="w-3.5 h-3.5 text-gold" />
              <span>{chapter.videoCount} Lecture Videos</span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-8 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-xl font-serif font-bold text-forest mb-3.5 group-hover:text-gold transition-colors duration-300">
                {chapter.title}
              </h3>
              <p className="text-charcoal/80 text-sm font-sans leading-relaxed mb-8">
                {chapter.description}
              </p>
            </div>

            {/* Watch Playlist Button */}
            <a
              href={chapter.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-2xl bg-forest hover:bg-forest-light text-cream font-sans font-medium text-sm text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Play className="w-4 h-4 fill-cream" />
              <span>Watch Playlist Lectures</span>
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
