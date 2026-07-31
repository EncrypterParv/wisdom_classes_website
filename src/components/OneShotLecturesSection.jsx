import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, ExternalLink, Star, Play } from "lucide-react";
import { oneShotLectures12 } from "../data/oneShotLectures12";
import { MathThumbnail } from "../utils/getThumbnail";


// YouTube Icon SVG component
const YouTubeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Mathematical Custom SVG Illustrations for lecture topics matching site aesthetic
const TopicIllustration = ({ type, className = "w-7 h-7" }) => {
  switch (type) {
    case "probability":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 10 85 C 30 85, 40 25, 50 25 C 60 25, 70 85, 90 85" className="stroke-forest" />
          <line x1="50" y1="25" x2="50" y2="85" strokeDasharray="3 3" className="stroke-gold" />
          <text x="47" y="20" className="fill-forest font-serif text-[8px] stroke-none font-bold">P(A|B)</text>
        </svg>
      );
    case "geometry3d":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="50" y1="50" x2="50" y2="10" className="stroke-forest/20" />
          <line x1="50" y1="50" x2="90" y2="50" className="stroke-forest/20" />
          <line x1="50" y1="50" x2="20" y2="80" className="stroke-forest/20" />
          <line x1="30" y1="30" x2="70" y2="70" className="stroke-forest" strokeWidth="3" />
          <text x="73" y="75" className="fill-gold font-serif text-[7px] stroke-none">(x,y,z)</text>
        </svg>
      );
    case "vector":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="20" y1="70" x2="70" y2="25" className="stroke-forest" strokeWidth="3" />
          <polygon points="70,22 72,28 66,26" className="fill-forest stroke-none" />
          <line x1="20" y1="70" x2="80" y2="70" className="stroke-gold" />
          <polygon points="80,68 82,70 80,72" className="fill-gold stroke-none" />
        </svg>
      );
    case "relations":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="15" y="20" width="22" height="60" rx="11" className="stroke-forest fill-forest/5" />
          <rect x="63" y="20" width="22" height="60" rx="11" className="stroke-gold fill-gold/5" />
          <circle cx="26" cy="35" r="3" className="fill-forest stroke-none" />
          <circle cx="26" cy="65" r="3" className="fill-forest stroke-none" />
          <circle cx="74" cy="35" r="3" className="fill-gold stroke-none" />
          <circle cx="74" cy="65" r="3" className="fill-gold stroke-none" />
          <path d="M 29 35 L 71 35" className="stroke-forest/70" />
          <path d="M 29 65 L 71 35" className="stroke-gold" />
        </svg>
      );
    case "diff_eq":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 15 75 C 30 75, 45 45, 85 15" className="stroke-forest" strokeWidth="3" />
          <line x1="45" y1="45" x2="55" y2="35" className="stroke-gold/50" />
          <text x="25" y="30" className="fill-forest font-serif text-[9px] stroke-none font-bold">dy/dx</text>
        </svg>
      );
    case "matrix":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 25 15 L 15 15 L 15 85 L 25 85" className="stroke-forest" strokeWidth="3" />
          <path d="M 75 15 L 85 15 L 85 85 L 75 85" className="stroke-forest" strokeWidth="3" />
          <text x="32" y="55" className="fill-gold font-sans text-xs stroke-none font-semibold">aᵢⱼ</text>
        </svg>
      );
    case "derivative":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="15" y1="85" x2="85" y2="85" className="stroke-forest/20" />
          <line x1="20" y1="15" x2="20" y2="85" className="stroke-forest/20" />
          <path d="M 25 80 C 40 70, 50 30, 80 20" className="stroke-forest" />
          <line x1="30" y1="80" x2="85" y2="15" className="stroke-gold" />
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
    case "integration":
    default:
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 55 15 C 65 15, 65 25, 50 50 C 35 75, 35 85, 45 85" className="stroke-forest" strokeWidth="3" />
          <path d="M 10 75 Q 40 70, 70 45 T 90 25" className="stroke-gold/30" />
          <text x="60" y="25" className="fill-forest font-serif text-[9px] stroke-none font-bold">∫ dx</text>
        </svg>
      );
  }
};

export default function OneShotLecturesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = ["All", "Calculus", "Algebra", "Geometry", "Probability"];

  const featuredLecture = oneShotLectures12.find((item) => item.featured) || oneShotLectures12[0];
  const regularLectures = oneShotLectures12.filter((item) => !item.featured);

  // Filtering logic
  const filterLecture = (lecture) => {
    const matchesSearch = lecture.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lecture.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedFilter === "All" || lecture.category === selectedFilter;
    return matchesSearch && matchesCategory;
  };

  const isFeaturedVisible = filterLecture(featuredLecture);
  const filteredRegularLectures = regularLectures.filter(filterLecture);

  return (
    <div className="relative text-left" id="one-shot-lectures">
      {/* Low-opacity subtle floating mathematical symbols background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.035] text-forest">
        <div className="absolute top-16 left-[5%] font-serif text-[9vw] leading-none">∫</div>
        <div className="absolute top-36 right-[8%] font-serif text-[8vw] leading-none">π</div>
        <div className="absolute bottom-24 left-[12%] font-serif text-[8vw] leading-none">Σ</div>
        <div className="absolute top-[50%] right-[15%] font-serif text-[7vw] leading-none">θ</div>
        <div className="absolute bottom-16 right-[5%] font-serif text-[9vw] leading-none">Δ</div>
      </div>

      <div className="relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold border border-gold/20 text-xs font-sans font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Class 12 Special Revision
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-serif font-black text-forest tracking-tight relative inline-block pb-3"
          >
            12th One Shot Lectures
            {/* Animated Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-charcoal/80 text-base sm:text-lg font-sans leading-relaxed mt-4"
          >
            Complete chapter-wise one shot revision lectures for Class 12 Mathematics. Click any chapter to start learning instantly.
          </motion.p>
        </div>


        {/* SEARCH BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-xl mx-auto mb-8"
        >
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest/40 group-focus-within:text-gold transition-colors duration-300" />
            <input
              type="text"
              aria-label="Search a chapter"
              placeholder="Search a chapter..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/90 backdrop-blur-md border border-forest/10 rounded-2xl font-sans text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold/50 shadow-sm group-hover:border-forest/20 transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-sans font-semibold text-charcoal/50 hover:text-forest bg-forest/5 hover:bg-forest/10 px-2 py-1 rounded-md transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        {/* FILTER CHIPS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-2.5 mb-14"
        >
          {categories.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`relative px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-forest text-cream shadow-md scale-105 border border-forest"
                    : "bg-white/80 text-charcoal/80 hover:text-forest border border-forest/10 hover:border-gold/40 hover:bg-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-forest rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* FEATURED CARD */}
        <AnimatePresence mode="popLayout">
          {isFeaturedVisible && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <div
                onClick={() => window.open(featuredLecture.youtubeUrl, "_blank", "noopener,noreferrer")}
                className="relative rounded-3xl p-1 bg-gradient-to-r from-gold/30 via-forest/20 to-gold/40 hover:from-gold hover:via-forest/40 hover:to-gold transition-all duration-500 shadow-lg hover:shadow-2xl group cursor-pointer overflow-hidden"
              >
                {/* Inner Card Box */}
                <div className="bg-gradient-to-br from-white via-cream-light to-white rounded-[22px] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group-hover:translate-y-[-2px] transition-transform duration-500">
                  
                  {/* Subtle Background Accent */}
                  <div className="absolute right-0 top-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none group-hover:bg-gold/10 transition-colors duration-500" />
                  
                  {/* Content Left */}
                  <div className="flex-1 space-y-4 text-left z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold-dark border border-gold/30 text-xs font-sans font-bold uppercase tracking-wider">
                      <Star className="w-3.5 h-3.5 fill-gold-dark text-gold-dark" />
                      ⭐ Featured Lecture
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-forest group-hover:text-gold transition-colors duration-300">
                      {featuredLecture.name}
                    </h3>

                    <p className="text-charcoal/80 font-sans text-base sm:text-lg font-medium">
                      Complete One Shot Revision
                    </p>

                    <div className="flex items-center gap-4 pt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-forest/70 bg-forest/5 px-3 py-1 rounded-full border border-forest/10">
                        Category: {featuredLecture.category}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail / CTA Right */}
                  <div className="w-full md:w-80 shrink-0 z-10 flex flex-col items-center gap-4">
                    <div className="w-full h-44 rounded-2xl overflow-hidden shadow-md relative border border-forest/10 group-hover:border-gold/40 transition-colors duration-300">
                      <MathThumbnail
                        videoIdOrUrl={featuredLecture.videoId}
                        topicKey={featuredLecture.id}
                        alt={featuredLecture.name}
                        className="w-full h-full"
                      />
                      <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/0 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <YouTubeIcon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    <div className="w-full py-4 px-6 bg-forest text-cream font-sans font-bold text-base rounded-2xl flex items-center justify-center gap-2 group-hover:bg-gold group-hover:text-forest transition-all duration-300 shadow-md group-hover:shadow-lg">
                      <YouTubeIcon className="w-5 h-5 text-red-500 group-hover:text-forest transition-colors" />
                      <span>Watch Now →</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LECTURE CARDS GRID (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredRegularLectures.map((lecture, index) => (
              <motion.div
                key={lecture.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0px 20px 40px rgba(27,62,43,0.12)",
                }}
                onClick={() => window.open(lecture.youtubeUrl, "_blank", "noopener,noreferrer")}
                className="bg-white rounded-3xl overflow-hidden border border-forest/5 shadow-[0_10px_30px_rgba(27,62,43,0.02)] flex flex-col group cursor-pointer hover:border-gold/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.18)] transition-all duration-500 relative select-none text-left"
              >
                {/* Thumbnail */}
                <MathThumbnail 
                  videoIdOrUrl={lecture.videoId} 
                  topicKey={lecture.id} 
                  alt={lecture.name}
                >
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-gold text-on-gold flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
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
                        <TopicIllustration type={lecture.illustrationType} className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-forest group-hover:text-gold transition-colors duration-300 line-clamp-1">
                          {lecture.name}
                        </h3>
                        <p className="text-xs text-gold font-sans font-semibold uppercase tracking-wider mt-0.5">
                          CHAPTER {index + 2}
                        </p>
                      </div>
                    </div>

                    <p className="text-charcoal/80 text-sm font-sans leading-relaxed line-clamp-2 mb-4">
                      {lecture.shortDescription}
                    </p>

                    {/* Playlist Preview Area */}
                    <div className="bg-cream/40 rounded-xl p-3.5 border border-forest/5 mb-6 text-xs font-sans text-charcoal/70 flex flex-col gap-2 group-hover:bg-cream/70 transition-colors duration-300">
                      <div className="flex items-center justify-between font-semibold">
                        <span className="text-forest">Playlist Preview</span>
                        <span className="text-gold uppercase tracking-wider text-[10px]">Lectures Series</span>
                      </div>
                      <p className="text-[11px] leading-relaxed line-clamp-2 text-charcoal/60 italic">
                        {lecture.details}
                      </p>
                    </div>

                  </div>

                  {/* Watch Playlist CTA */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="w-full py-3.5 px-6 bg-forest text-on-forest font-sans font-semibold text-sm text-center flex items-center justify-center gap-2 group-hover:bg-gold group-hover:text-on-gold transition-colors duration-300 shadow-md">
                      <Play className="w-4 h-4 fill-current" />
                      <span>Watch Playlist Lectures</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search / Filter State */}
        {!isFeaturedVisible && filteredRegularLectures.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-3xl border border-forest/10 p-8 max-w-md mx-auto"
          >
            <p className="text-forest font-serif font-bold text-xl">No lectures found</p>
            <p className="text-charcoal/60 font-sans text-sm mt-2">
              No One Shot lecture matched "{searchQuery}" under "{selectedFilter}". Try clearing your search or selecting "All".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedFilter("All");
              }}
              className="mt-6 px-6 py-2.5 bg-forest text-cream font-sans font-semibold text-xs rounded-full hover:bg-gold hover:text-forest transition-colors duration-300"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

