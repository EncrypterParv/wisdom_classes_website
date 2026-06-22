import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Video, ArrowLeft, Search, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { MathThumbnail } from "../utils/getThumbnail";
import { ipmatPlaylists } from "../data/ipmatPlaylists";

// Mathematical Custom SVG Illustrations for each IPMAT topic
const MathIllustration = ({ topic, className = "w-12 h-12" }) => {
  switch (topic) {
    case "sequence":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="15" y="70" width="10" height="15" className="fill-forest/10 stroke-forest" />
          <rect x="30" y="55" width="10" height="30" className="fill-forest/20 stroke-forest" />
          <rect x="45" y="40" width="10" height="45" className="fill-forest/30 stroke-forest" />
          <rect x="60" y="25" width="10" height="60" className="fill-forest/40 stroke-forest" />
          <rect x="75" y="10" width="10" height="75" className="fill-gold/20 stroke-gold" />
        </svg>
      );
    case "trig":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="50" cy="50" r="35" className="stroke-forest/30" />
          <line x1="15" y1="50" x2="85" y2="50" className="stroke-forest/20" />
          <line x1="50" y1="15" x2="50" y2="85" className="stroke-forest/20" />
          <line x1="50" y1="50" x2="75" y2="25" className="stroke-forest" />
          <line x1="75" y1="25" x2="75" y2="50" className="stroke-gold" />
        </svg>
      );
    case "probability":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 10 85 C 30 85, 40 25, 50 25 C 60 25, 70 85, 90 85" className="stroke-forest" />
          <line x1="50" y1="25" x2="50" y2="85" strokeDasharray="3 3" className="stroke-gold" />
        </svg>
      );
    case "quadratic":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="50" x2="90" y2="50" className="stroke-forest/20" />
          <line x1="50" y1="10" x2="50" y2="90" className="stroke-forest/20" />
          <path d="M 20 20 Q 50 90, 80 20" className="stroke-forest" />
          <circle cx="32.5" cy="50" r="4" className="fill-gold stroke-none" />
          <circle cx="67.5" cy="50" r="4" className="fill-gold stroke-none" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="50" cy="50" r="30" className="stroke-forest" />
        </svg>
      );
  }
};

const ChapterCard = ({ chapter, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0px 20px 40px rgba(27,62,43,0.12)",
      }}
      onClick={() => window.open(chapter.playlistUrl, "_blank", "noopener,noreferrer")}
      className="bg-white rounded-3xl overflow-hidden border border-forest/5 shadow-[0_10px_30px_rgba(27,62,43,0.02)] flex flex-col group cursor-pointer hover:border-gold/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.18)] transition-all duration-500 relative select-none"
    >
      {/* Thumbnail */}
      <MathThumbnail 
        videoIdOrUrl={chapter.videoId} 
        topicKey={chapter.id} 
        alt={chapter.name} 
        manualThumbnail={chapter.thumbnail}
      >
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-gold text-forest flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 fill-current ml-1" />
          </div>
        </div>
      </MathThumbnail>

      {/* Card Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between text-left relative">
        <div>
          {/* Header row with Icon and Title */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-forest/5 text-forest flex items-center justify-center shrink-0 group-hover:bg-forest/10 group-hover:text-gold transition-colors duration-300">
              <MathIllustration topic={chapter.illustrationType} className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-forest group-hover:text-gold transition-colors duration-300 line-clamp-1">
                {chapter.name}
              </h3>
              {chapter.category && (
                <p className="text-xs text-gold font-sans font-semibold uppercase tracking-wider mt-0.5">
                  {chapter.category}
                </p>
              )}
            </div>
          </div>

          <p className="text-charcoal/80 text-sm font-sans leading-relaxed line-clamp-2 mb-4">
            {chapter.shortDescription}
          </p>

          {chapter.details && (
            <div className="bg-cream/40 rounded-xl p-3.5 border border-forest/5 mb-6 text-xs font-sans text-charcoal/70 flex flex-col gap-2 group-hover:bg-cream/70 transition-colors duration-300">
              <div className="flex items-center justify-between font-semibold">
                <span className="text-forest">Playlist Preview</span>
                <span className="text-gold uppercase tracking-wider text-[10px]">Lectures Series</span>
              </div>
              <p className="text-[11px] leading-relaxed line-clamp-2 text-charcoal/60 italic">
                {chapter.details}
              </p>
            </div>
          )}
        </div>

        {/* Watch Playlist CTA */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="w-full py-3.5 px-6 bg-forest text-cream font-sans font-semibold text-sm text-center flex items-center justify-center gap-2 group-hover:bg-gold group-hover:text-forest transition-colors duration-300 shadow-md">
            <Play className="w-4 h-4 fill-current" />
            <span>Watch Playlist Lectures</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function IPMAT() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories from playlists
  const categories = ["All", ...new Set(ipmatPlaylists.map(p => p.category).filter(Boolean))];

  // Filter based on search query and category
  const filteredPlaylists = ipmatPlaylists.filter(playlist => {
    const matchesSearch = playlist.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (playlist.shortDescription && playlist.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (playlist.details && playlist.details.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || playlist.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen relative overflow-hidden">
      {/* Background Math Formula decorations */}
      <div className="absolute top-20 right-[-10%] w-[40%] h-[40%] opacity-[0.02] text-forest select-none pointer-events-none font-serif text-[12vw] leading-none">
        ∫ e^x dx = e^x
      </div>
      <div className="absolute bottom-20 left-[-5%] w-[35%] h-[35%] opacity-[0.02] text-forest select-none pointer-events-none font-serif text-[10vw] leading-none">
        ∇ × B = μ₀J
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
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
          className="bg-forest text-cream rounded-3xl p-8 md:p-12 border border-gold/20 shadow-xl mb-12 relative overflow-hidden text-left"
        >
          <div className="absolute right-12 bottom-0 opacity-[0.03] select-none pointer-events-none font-serif text-9xl">
            %
          </div>

          <div className="flex flex-col gap-6 relative z-10 max-w-3xl">
            <span className="px-3.5 py-1 text-xs font-sans font-semibold uppercase tracking-wider text-gold bg-gold/10 rounded-full border border-gold/20 w-fit flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-gold" />
              IIM Integrated MBA Entrance
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-cream">
              IPMAT Mathematics
            </h1>
            <p className="text-cream/80 text-base md:text-lg leading-relaxed font-sans">
              Build competitive logical aptitude, data parsing capability, and quantitative aptitude for the top IIMs. Access structured chapter playlists focusing on arithmetic shortcuts, logical puzzles, and advanced math.
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-cream/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                  <BookOpen className="w-4.5 h-4.5" />
                </div>
                <span className="font-sans font-medium text-sm text-cream/90">5+ Total Chapters</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                  <Video className="w-4.5 h-4.5" />
                </div>
                <span className="font-sans font-medium text-sm text-cream/90">80+ Video Lectures</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Controls Section: Search & Category Pills */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Search bar */}
          <div className="w-full md:max-w-md text-left">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest/40" />
              <input
                type="text"
                placeholder="Search playlists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3.5 bg-white border border-forest/10 rounded-2xl font-sans text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 shadow-sm"
              />
            </div>
          </div>

          {/* Category Filters */}
          {categories.length > 2 && (
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-sans font-semibold border transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-gold border-gold text-forest shadow-sm"
                      : "bg-white border-forest/10 text-forest/70 hover:border-forest/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Playlist Grid Section */}
        <div className="text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-forest">
            IPMAT Chapter Playlists
          </h2>
          <p className="text-charcoal/70 text-sm font-sans mt-2">
            Click on any chapter card to open the YouTube playlist in a new browser tab.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPlaylists.map((chapter, index) => (
              <ChapterCard key={chapter.id} chapter={chapter} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {filteredPlaylists.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-3xl border border-forest/5 p-8 max-w-md mx-auto mt-12"
          >
            <p className="text-charcoal/75 font-sans font-medium text-lg">No playlists matches your search query.</p>
            <p className="text-charcoal/50 font-sans text-sm mt-2">Try searching with other keywords or terms.</p>
          </motion.div>
        )}

      </div>
    </div>
  );
}
