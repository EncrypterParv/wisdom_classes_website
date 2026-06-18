import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Video, ArrowLeft, Search, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// Mathematical Custom SVG Illustrations for each topic
const MathIllustration = ({ topic, className = "w-12 h-12" }) => {
  switch (topic) {
    case "limits":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Axis */}
          <line x1="10" y1="90" x2="90" y2="90" className="stroke-forest/20" />
          <line x1="20" y1="10" x2="20" y2="90" className="stroke-forest/20" />
          {/* Curve */}
          <path d="M 20 80 Q 50 75, 65 40 T 90 15" className="stroke-forest" />
          {/* Asymptote */}
          <line x1="75" y1="10" x2="75" y2="90" strokeDasharray="4 4" className="stroke-gold/60" />
          {/* Approaching Arrows */}
          <path d="M 55 85 L 70 85" className="stroke-gold" />
          <polygon points="70,83 75,85 70,87" className="fill-gold stroke-none" />
          <path d="M 85 85 L 80 85" className="stroke-gold" />
          <polygon points="80,83 75,85 80,87" className="fill-gold stroke-none" />
          {/* Limit Text notation */}
          <text x="25" y="30" className="fill-forest font-serif text-[10px] italic stroke-none font-bold">lim f(x)</text>
        </svg>
      );
    case "derivative":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Axis */}
          <line x1="15" y1="85" x2="85" y2="85" className="stroke-forest/20" />
          <line x1="20" y1="15" x2="20" y2="85" className="stroke-forest/20" />
          {/* Curve */}
          <path d="M 25 80 C 40 70, 50 30, 80 20" className="stroke-forest" />
          {/* Tangent Line */}
          <line x1="30" y1="80" x2="85" y2="15" className="stroke-gold" />
          {/* Right Triangle for dx/dy */}
          <line x1="60" y1="52" x2="75" y2="52" strokeDasharray="2 2" className="stroke-forest/40" />
          <line x1="75" y1="52" x2="75" y2="30" strokeDasharray="2 2" className="stroke-forest/40" />
          <text x="63" y="60" className="fill-forest/60 font-serif text-[8px] stroke-none">dx</text>
          <text x="78" y="44" className="fill-forest/60 font-serif text-[8px] stroke-none">dy</text>
        </svg>
      );
    case "pnc":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Permutations slots / Factorial tree */}
          <circle cx="50" cy="25" r="8" className="stroke-forest fill-forest/5" />
          <circle cx="30" cy="55" r="8" className="stroke-forest fill-forest/5" />
          <circle cx="70" cy="55" r="8" className="stroke-forest fill-forest/5" />
          <circle cx="20" cy="80" r="6" className="stroke-gold fill-gold/5" />
          <circle cx="40" cy="80" r="6" className="stroke-gold fill-gold/5" />
          <circle cx="60" cy="80" r="6" className="stroke-gold fill-gold/5" />
          <circle cx="80" cy="80" r="6" className="stroke-gold fill-gold/5" />
          {/* Connections */}
          <line x1="47" y1="32" x2="33" y2="48" className="stroke-forest/40" />
          <line x1="53" y1="32" x2="67" y2="48" className="stroke-forest/40" />
          <line x1="28" y1="62" x2="22" y2="74" className="stroke-gold/40" />
          <line x1="32" y1="62" x2="38" y2="74" className="stroke-gold/40" />
          <line x1="68" y1="62" x2="62" y2="74" className="stroke-gold/40" />
          <line x1="72" y1="62" x2="78" y2="74" className="stroke-gold/40" />
          {/* Text */}
          <text x="47" y="28" className="fill-forest font-serif text-[8px] stroke-none font-bold text-center">n!</text>
        </svg>
      );
    case "quadratic":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Axis */}
          <line x1="10" y1="50" x2="90" y2="50" className="stroke-forest/20" />
          <line x1="50" y1="10" x2="50" y2="90" className="stroke-forest/20" />
          {/* Parabola */}
          <path d="M 20 20 Q 50 90, 80 20" className="stroke-forest" />
          {/* Roots (Intersection points) */}
          <circle cx="32.5" cy="50" r="4" className="fill-gold stroke-none" />
          <circle cx="67.5" cy="50" r="4" className="fill-gold stroke-none" />
          {/* Roots text label */}
          <text x="25" y="45" className="fill-forest font-serif text-[8px] stroke-none">α</text>
          <text x="68" y="45" className="fill-forest font-serif text-[8px] stroke-none">β</text>
        </svg>
      );
    case "binomial":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Pascal's Triangle Representation */}
          <text x="50" y="20" className="fill-forest font-serif text-xs stroke-none font-bold text-center" textAnchor="middle">1</text>
          <text x="40" y="40" className="fill-forest font-serif text-xs stroke-none font-bold text-center" textAnchor="middle">1</text>
          <text x="60" y="40" className="fill-forest font-serif text-xs stroke-none font-bold text-center" textAnchor="middle">1</text>
          <text x="30" y="60" className="fill-forest font-serif text-xs stroke-none font-bold text-center" textAnchor="middle">1</text>
          <text x="50" y="60" className="fill-gold font-serif text-xs stroke-none font-bold text-center" textAnchor="middle">2</text>
          <text x="70" y="60" className="fill-forest font-serif text-xs stroke-none font-bold text-center" textAnchor="middle">1</text>
          <text x="20" y="80" className="fill-forest font-serif text-xs stroke-none font-bold text-center" textAnchor="middle">1</text>
          <text x="40" y="80" className="fill-gold font-serif text-xs stroke-none font-bold text-center" textAnchor="middle">3</text>
          <text x="60" y="80" className="fill-gold font-serif text-xs stroke-none font-bold text-center" textAnchor="middle">3</text>
          <text x="80" y="80" className="fill-forest font-serif text-xs stroke-none font-bold text-center" textAnchor="middle">1</text>
          {/* Abstract triangle connection */}
          <polygon points="50,10 15,85 85,85" className="stroke-forest/10 fill-none" />
        </svg>
      );
    case "sequence":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* AP / GP Bar Progression */}
          <rect x="15" y="70" width="10" height="15" className="fill-forest/10 stroke-forest" />
          <rect x="30" y="55" width="10" height="30" className="fill-forest/20 stroke-forest" />
          <rect x="45" y="40" width="10" height="45" className="fill-forest/30 stroke-forest" />
          <rect x="60" y="25" width="10" height="60" className="fill-forest/40 stroke-forest" />
          <rect x="75" y="10" width="10" height="75" className="fill-gold/20 stroke-gold" />
          {/* Summation symbol overlay */}
          <path d="M 35 22 L 55 22 L 43 32 L 55 42 L 35 42" className="stroke-forest" strokeWidth="3" />
        </svg>
      );
    case "lines":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Cartesian plane */}
          <line x1="10" y1="50" x2="90" y2="50" className="stroke-forest/20" />
          <line x1="50" y1="10" x2="50" y2="90" className="stroke-forest/20" />
          {/* Intersecting lines */}
          <line x1="15" y1="80" x2="75" y2="20" className="stroke-forest" />
          <line x1="25" y1="20" x2="85" y2="80" className="stroke-gold" />
          {/* Theta angle indicator */}
          <path d="M 57 43 A 10 10 0 0 0 57 57" className="stroke-gold" />
          <text x="63" y="52" className="fill-gold font-serif text-[10px] stroke-none">θ</text>
        </svg>
      );
    case "relations":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Set A and Set B ovals */}
          <rect x="15" y="20" width="22" height="60" rx="11" className="stroke-forest fill-forest/5" />
          <rect x="63" y="20" width="22" height="60" rx="11" className="stroke-gold fill-gold/5" />
          {/* Set elements */}
          <circle cx="26" cy="35" r="3" className="fill-forest stroke-none" />
          <circle cx="26" cy="50" r="3" className="fill-forest stroke-none" />
          <circle cx="26" cy="65" r="3" className="fill-forest stroke-none" />
          <circle cx="74" cy="35" r="3" className="fill-gold stroke-none" />
          <circle cx="74" cy="50" r="3" className="fill-gold stroke-none" />
          <circle cx="74" cy="65" r="3" className="fill-gold stroke-none" />
          {/* Mapping arrows */}
          <path d="M 29 35 L 71 35" className="stroke-forest/70" />
          <polygon points="68,33 71,35 68,37" className="fill-forest/70 stroke-none" />
          <path d="M 29 50 L 71 65" className="stroke-forest/70" />
          <polygon points="67,61 71,65 69,60" className="fill-forest/70 stroke-none" />
          <path d="M 29 65 L 71 50" className="stroke-gold" />
          <polygon points="68,52 71,50 67,49" className="fill-gold stroke-none" />
          <text x="45" y="15" className="fill-forest font-serif text-[9px] stroke-none font-bold">f: A→B</text>
        </svg>
      );
    case "complex":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Argand Plane */}
          <line x1="10" y1="50" x2="90" y2="50" className="stroke-forest/20" />
          <line x1="50" y1="10" x2="50" y2="90" className="stroke-forest/20" />
          {/* Vector representation */}
          <line x1="50" y1="50" x2="78" y2="22" className="stroke-forest" strokeWidth="3" />
          <circle cx="78" cy="22" r="4" className="fill-gold stroke-none" />
          {/* Circle boundary */}
          <circle cx="50" cy="50" r="40" strokeDasharray="3 3" className="stroke-forest/25" />
          {/* Labels */}
          <text x="81" y="20" className="fill-forest font-serif text-[8px] stroke-none font-bold">z = a + ib</text>
          <text x="85" y="47" className="fill-forest/50 font-serif text-[7px] stroke-none">Re</text>
          <text x="53" y="15" className="fill-forest/50 font-serif text-[7px] stroke-none">Im</text>
        </svg>
      );
    case "trig":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Sine wave or right triangle in circle */}
          <circle cx="50" cy="50" r="35" className="stroke-forest/30" />
          <line x1="15" y1="50" x2="85" y2="50" className="stroke-forest/20" />
          <line x1="50" y1="15" x2="50" y2="85" className="stroke-forest/20" />
          {/* Right triangle */}
          <line x1="50" y1="50" x2="75" y2="25" className="stroke-forest" />
          <line x1="75" y1="25" x2="75" y2="50" className="stroke-gold" />
          <line x1="50" y1="50" x2="75" y2="50" className="stroke-forest" />
          {/* Angle arc */}
          <path d="M 58 50 A 8 8 0 0 0 56 44" className="stroke-gold" />
          <text x="60" y="42" className="fill-gold font-serif text-[9px] stroke-none">θ</text>
        </svg>
      );
    case "conic":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Double Cone structure */}
          <polygon points="20,15 80,15 50,50" className="stroke-forest/20 fill-none" />
          <polygon points="20,85 80,85 50,50" className="stroke-forest/20 fill-none" />
          {/* Slicing Ellipse */}
          <ellipse cx="50" cy="68" rx="20" ry="8" className="stroke-gold fill-gold/5" transform="rotate(-15, 50, 68)" />
          {/* Parabola slice path */}
          <path d="M 35 30 Q 50 15, 65 30" className="stroke-forest" />
          {/* Labels */}
          <text x="38" y="80" className="fill-forest font-serif text-[8px] stroke-none">Ellipse</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="50,15 90,85 10,85" className="stroke-forest" />
          <circle cx="50" cy="55" r="15" className="stroke-gold" />
        </svg>
      );
  }
};

// Math Card Component with YouTube dynamic thumbnail loading and fallback to topic-relevant Unsplash backgrounds
const ChapterCard = ({ chapter, index }) => {
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${chapter.videoId}/hqdefault.jpg`);
  const [isFallback, setIsFallback] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Trigger fallback when YouTube image fails to load
  const handleImageError = () => {
    if (!isFallback) {
      setImgSrc(chapter.fallbackThumbnail);
      setIsFallback(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0px 20px 40px rgba(27,62,43,0.12)",
      }}
      onClick={() => window.open(chapter.playlistUrl, "_blank", "noopener,noreferrer")}
      className="bg-white rounded-3xl overflow-hidden border border-forest/5 shadow-[0_10px_30px_rgba(27,62,43,0.02)] flex flex-col group cursor-pointer hover:border-gold/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.18)] transition-all duration-500 relative select-none"
    >
      {/* Thumbnail Area */}
      <div className="relative h-48 overflow-hidden bg-forest/5 shrink-0">
        <img
          src={imgSrc}
          alt={chapter.name}
          className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out ${
            imgLoaded ? "opacity-100" : "opacity-30"
          }`}
          onLoad={() => setImgLoaded(true)}
          onError={handleImageError}
          loading="lazy"
        />

        {/* Fallback pattern overlay shown on top of the fallback image for aesthetic depth */}
        {isFallback && (
          <div className="absolute inset-0 bg-forest/10 opacity-20 pointer-events-none mix-blend-overlay">
            {/* Background formula patterns */}
            <div className="absolute inset-0 font-serif text-[10px] flex flex-wrap gap-4 p-2 overflow-hidden leading-tight">
              <div>f(x) = dx/dy</div>
              <div>lim x→∞</div>
              <div>a² + b² = c²</div>
              <div>∑ x_i</div>
            </div>
          </div>
        )}

        {/* Absolute dark/gradient overlay when hovering */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-forest/10 to-transparent opacity-45 group-hover:opacity-65 transition-opacity duration-300" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-gold text-forest flex items-center justify-center shadow-lg transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hover:bg-cream hover:text-gold">
            <Play className="w-6 h-6 fill-current ml-1" />
          </div>
        </div>

        {/* Topic Symbol Badge inside the thumbnail corner */}
        <div className="absolute bottom-4 left-4 bg-cream/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-serif font-bold text-forest border border-gold/30 flex items-center gap-1.5 shadow-md">
          <span className="text-gold font-sans">∫</span>
          <span>{chapter.symbol}</span>
        </div>
      </div>

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
              <p className="text-xs text-gold font-sans font-semibold uppercase tracking-wider mt-0.5">
                Chapter {index + 1}
              </p>
            </div>
          </div>

          <p className="text-charcoal/80 text-sm font-sans leading-relaxed line-clamp-2 mb-4">
            {chapter.shortDescription}
          </p>

          {/* Playlist Preview Area */}
          <div className="bg-cream/40 rounded-xl p-3.5 border border-forest/5 mb-6 text-xs font-sans text-charcoal/70 flex flex-col gap-2 group-hover:bg-cream/70 transition-colors duration-300">
            <div className="flex items-center justify-between font-semibold">
              <span className="text-forest">Playlist Preview</span>
              <span className="text-gold uppercase tracking-wider text-[10px]">Lectures Series</span>
            </div>
            <p className="text-[11px] leading-relaxed line-clamp-2 text-charcoal/60 italic">
              {chapter.details}
            </p>
          </div>
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

export default function Class11() {
  const [searchQuery, setSearchQuery] = useState("");

  const chaptersData = [
    {
      id: "limits",
      name: "Limits",
      shortDescription: "Approaching values, continuity & limit theorems",
      details: "Master the concept of neighborhood, left & right hand limits, standard limit theorems, sandwich theorem, evaluation methods, and continuity.",
      illustrationType: "limits",
      symbol: "lim x→a",
      videoId: "OldCe3-rVv0",
      playlistUrl: "https://www.youtube.com/watch?v=OldCe3-rVv0&list=PLkG0JIX8a6A48RWkwjQ1ERHXv2kXM1MU-",
      fallbackThumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "derivative",
      name: "Derivative",
      shortDescription: "Rate of change, first principles & differentiation rules",
      details: "Learn rate of change, derivatives using first principles, sum/difference/product/quotient rules, chain rule, and physical interpretations.",
      illustrationType: "derivative",
      symbol: "dy/dx",
      videoId: "3z3ruWRGDqE",
      playlistUrl: "https://www.youtube.com/watch?v=3z3ruWRGDqE&list=PLkG0JIX8a6A6CwJoTYiGXDoWGS8bfeDcl",
      fallbackThumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "pnc",
      name: "Permutation and Combination",
      shortDescription: "Counting techniques, arrangements & selections",
      details: "Understand basic counting principles, factorial notation, permutations of like/unlike things, circular permutation, combinations, and application problems.",
      illustrationType: "pnc",
      symbol: "ⁿP_r / ⁿC_r",
      videoId: "C4XHatxgImY",
      playlistUrl: "https://www.youtube.com/watch?v=C4XHatxgImY&list=PLkG0JIX8a6A63a2pow_Wowli1B5wW-AFf",
      fallbackThumbnail: "https://images.unsplash.com/photo-1453733190148-c44698c26588?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "quadratic",
      name: "Quadratic Equation",
      shortDescription: "Roots, discriminant, nature & graphing parabolas",
      details: "Learn standard forms, discriminant, nature of roots, relations between roots & coefficients, common roots, and graphing quadratic functions.",
      illustrationType: "quadratic",
      symbol: "ax²+bx+c",
      videoId: "dSc2772LBDs",
      playlistUrl: "https://www.youtube.com/watch?v=dSc2772LBDs&list=PLkG0JIX8a6A6-xjtuigEQ5stvVCR2GTY1",
      fallbackThumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "binomial",
      name: "Binomial Theorem",
      shortDescription: "Expansion, general term & Pascal's triangle",
      details: "Master binomial expansion for positive integers, general term, middle term, binomial coefficients, Pascal's triangle, and applications.",
      illustrationType: "binomial",
      symbol: "(x+y)ⁿ",
      videoId: "2-UStKP5Tfg",
      playlistUrl: "https://www.youtube.com/watch?v=2-UStKP5Tfg&list=PLkG0JIX8a6A65E2vYUgtNx_zrp0xx3dhN",
      fallbackThumbnail: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "sequence",
      name: "Sequence & Series",
      shortDescription: "AP, GP, HP progressions & sum formulas",
      details: "Explore arithmetic progressions (AP), geometric progressions (GP), harmonic progressions (HP), A.M., G.M., H.M. relations, and sum of special series.",
      illustrationType: "sequence",
      symbol: "∑ a_n",
      videoId: "BtwZWzpo1J8",
      playlistUrl: "https://www.youtube.com/watch?v=BtwZWzpo1J8&list=PLkG0JIX8a6A58I-Z3-gsonCp6VugKNdcy",
      fallbackThumbnail: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "lines",
      name: "Straight Lines",
      shortDescription: "Slope, intercepts, angle between lines & distance",
      details: "Understand cartesian coordinates, slope of a line, various forms of straight line equations, angle between lines, distance of a point from a line.",
      illustrationType: "lines",
      symbol: "y = mx+c",
      videoId: "5FlUyP88Tjk",
      playlistUrl: "https://www.youtube.com/watch?v=5FlUyP88Tjk&list=PLkG0JIX8a6A6oCPc2KO4h9M0tIp4pEgxQ",
      fallbackThumbnail: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "conic",
      name: "Conic Sections",
      shortDescription: "Parabola, ellipse, hyperbola & circle geometry",
      details: "Master coordinate equations, standard forms, tangents, normals, focal chords, and geometric properties of circles, parabolas, ellipses, and hyperbolas.",
      illustrationType: "conic",
      symbol: "x²/a² + y²/b² = 1",
      videoId: "5nKm0xECZPY",
      playlistUrl: "https://www.youtube.com/watch?v=5nKm0xECZPY&list=PLkG0JIX8a6A71k4-RZgTmxXqwIQtCOSxk",
      fallbackThumbnail: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "relations",
      name: "Relation and Functions",
      shortDescription: "Domain, range, types of functions & graphs",
      details: "Learn cartesian product of sets, relations, types of relations, definition of function, domain, co-domain, range, and standard real functions.",
      illustrationType: "relations",
      symbol: "f: A→B",
      videoId: "1gDTcbwMIs4",
      playlistUrl: "https://www.youtube.com/watch?v=1gDTcbwMIs4&list=PLkG0JIX8a6A5bLz8yv9JHTzHQu6fbnph2",
      fallbackThumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "complex",
      name: "Complex Numbers",
      shortDescription: "Real & imaginary parts, Argand plane & operations",
      details: "Explore the imaginary unit i, real/imaginary parts, algebraic operations, conjugate, modulus, argument, polar representation, and Argand plane.",
      illustrationType: "complex",
      symbol: "z = a+ib",
      videoId: "LuH7gJ3c52o",
      playlistUrl: "https://www.youtube.com/watch?v=LuH7gJ3c52o&list=PLkG0JIX8a6AdQGGmdfm5E7CSPbQfxcUC",
      fallbackThumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "trigonometry",
      name: "Trigonometry",
      shortDescription: "Ratios, identities, equations & inverse functions",
      details: "Master trigonometric angles, sign of ratios in quadrants, sum/difference formulas, multiple angles, general equations, and inverse functions.",
      illustrationType: "trig",
      symbol: "sin²θ+cos²θ",
      videoId: "yITZG4Jjp3g",
      playlistUrl: "https://www.youtube.com/watch?v=yITZG4Jjp3g&list=PLkG0JIX8a6A7s5CqF80Inv_KxjPsrMYdl",
      fallbackThumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop"
    }
  ];

  // Filtering chapters based on search query
  const filteredChapters = chaptersData.filter((chapter) =>
    chapter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chapter.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          className="bg-forest text-cream rounded-3xl p-8 md:p-12 border border-gold/20 shadow-xl mb-16 relative overflow-hidden text-left"
        >
          {/* Decorative mathematical formula in header */}
          <div className="absolute right-12 bottom-0 opacity-[0.03] select-none pointer-events-none font-serif text-9xl">
            ∑
          </div>

          <div className="flex flex-col gap-6 relative z-10 max-w-3xl">
            <span className="px-3.5 py-1 text-xs font-sans font-semibold uppercase tracking-wider text-gold bg-gold/10 rounded-full border border-gold/20 w-fit flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-gold" />
              Advanced Mathematics Library
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-cream">
              Class 11 Mathematics
            </h1>
            <p className="text-cream/80 text-base md:text-lg leading-relaxed font-sans">
              Welcome to the Mathematics Learning Library. Explore complete step-by-step lecture playlists for all core Class 11 topics, curated for competitive entrance preparation and deep concept mastery.
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-cream/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                  <BookOpen className="w-4.5 h-4.5" />
                </div>
                <span className="font-sans font-medium text-sm text-cream/90">11 Core Chapters</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                  <Video className="w-4.5 h-4.5" />
                </div>
                <span className="font-sans font-medium text-sm text-cream/90">165+ Video Lectures</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search Bar section */}
        <div className="mb-12 max-w-xl text-left">
          <label htmlFor="chapter-search" className="block text-sm font-sans font-semibold text-forest mb-2">
            Search Chapters
          </label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest/40" />
            <input
              id="chapter-search"
              type="text"
              placeholder="Search by topic, keyword (e.g. 'tri', 'com', 'con')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3.5 bg-white border border-forest/10 rounded-2xl font-sans text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 shadow-sm"
            />
          </div>
        </div>

        {/* Playlist Grid Section */}
        <div className="text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-forest">
            Chapter Playlists
          </h2>
          <p className="text-charcoal/70 text-sm font-sans mt-2">
            Click on any chapter card to open the YouTube playlist in a new browser tab.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredChapters.map((chapter, index) => (
              <ChapterCard key={chapter.id} chapter={chapter} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {filteredChapters.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-3xl border border-forest/5 p-8 max-w-md mx-auto mt-12"
          >
            <p className="text-charcoal/75 font-sans font-medium text-lg">No chapters matches your search query.</p>
            <p className="text-charcoal/50 font-sans text-sm mt-2">Try searching with other keywords or terms.</p>
          </motion.div>
        )}

      </div>
    </div>
  );
}
