import { motion } from "framer-motion";
import { coursesData } from "../data/playlists";
import PlaylistGrid from "../components/PlaylistGrid";
import { BookOpen, Video, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function JEE() {
  const data = coursesData.jee;

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Navigation Breadcrumb Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-forest/75 hover:text-forest font-sans font-semibold text-sm mb-8 transition-colors duration-300">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Course Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-forest text-cream rounded-3xl p-8 md:p-12 border border-gold/20 shadow-xl mb-16 relative overflow-hidden text-left"
        >
          {/* Decorative mathematical formula in header */}
          <div className="absolute right-12 bottom-0 opacity-[0.03] select-none pointer-events-none font-serif text-9xl">
            lim
          </div>

          <div className="flex flex-col gap-6 relative z-10 max-w-3xl">
            <span className="px-3.5 py-1 text-xs font-sans font-semibold uppercase tracking-wider text-gold bg-gold/10 rounded-full border border-gold/20 w-fit">
              {data.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-cream">
              {data.title}
            </h1>
            <p className="text-cream/80 text-base md:text-lg leading-relaxed font-sans">
              {data.description}
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-cream/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                  <BookOpen className="w-4.5 h-4.5" />
                </div>
                <span className="font-sans font-medium text-sm text-cream/90">{data.totalChapters} Core Chapters</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                  <Video className="w-4.5 h-4.5" />
                </div>
                <span className="font-sans font-medium text-sm text-cream/90">{data.totalVideos}+ Lectures</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Playlist Chapters Section */}
        <div className="text-left mb-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-forest">
            Chapter Playlists
          </h2>
          <p className="text-charcoal/70 text-sm font-sans mt-2">
            Select a chapter below to access step-by-step topic discussions.
          </p>
        </div>

        <PlaylistGrid chapters={data.chapters} />

      </div>
    </div>
  );
}
