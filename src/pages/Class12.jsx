import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Video, ArrowLeft, Search, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// Mathematical Custom SVG Illustrations for each Class 12 topic
const MathIllustration = ({ topic, className = "w-12 h-12" }) => {
  switch (topic) {
    case "probability":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Normal Distribution Curve */}
          <path d="M 10 85 C 30 85, 40 25, 50 25 C 60 25, 70 85, 90 85" className="stroke-forest" />
          {/* Mean line */}
          <line x1="50" y1="25" x2="50" y2="85" strokeDasharray="3 3" className="stroke-gold" />
          {/* Shaded standard deviation area */}
          <path d="M 40 65 L 60 65" className="stroke-gold/60" />
          <text x="47" y="20" className="fill-forest font-serif text-[8px] stroke-none font-bold">P(A|B)</text>
        </svg>
      );
    case "geometry3d":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* 3D Axes */}
          <line x1="50" y1="50" x2="50" y2="10" className="stroke-forest/20" /> {/* Z */}
          <line x1="50" y1="50" x2="90" y2="50" className="stroke-forest/20" /> {/* Y */}
          <line x1="50" y1="50" x2="20" y2="80" className="stroke-forest/20" /> {/* X */}
          {/* 3D Line */}
          <line x1="30" y1="30" x2="70" y2="70" className="stroke-forest" strokeWidth="3" />
          {/* Vector projections */}
          <line x1="70" y1="70" x2="70" y2="50" strokeDasharray="2 2" className="stroke-gold/65" />
          <line x1="70" y1="70" x2="50" y2="70" strokeDasharray="2 2" className="stroke-gold/65" />
          <text x="73" y="75" className="fill-gold font-serif text-[7px] stroke-none">(x,y,z)</text>
        </svg>
      );
    case "vector":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Vector arrow A */}
          <line x1="20" y1="70" x2="70" y2="25" className="stroke-forest" strokeWidth="3" />
          <polygon points="70,22 72,28 66,26" className="fill-forest stroke-none" />
          {/* Vector arrow B */}
          <line x1="20" y1="70" x2="80" y2="70" className="stroke-gold" />
          <polygon points="80,68 82,70 80,72" className="fill-gold stroke-none" />
          {/* Projection line */}
          <line x1="70" y1="25" x2="70" y2="70" strokeDasharray="3 3" className="stroke-forest/30" />
          {/* Labels */}
          <text x="45" y="38" className="fill-forest font-serif text-[9px] stroke-none font-bold">a</text>
          <text x="50" y="80" className="fill-gold font-serif text-[9px] stroke-none font-bold">b</text>
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
    case "diff_eq":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Curve and Slope field sketch */}
          <path d="M 15 75 C 30 75, 45 45, 85 15" className="stroke-forest" strokeWidth="3" />
          {/* Tiny vector slope hashes */}
          <line x1="25" y1="65" x2="35" y2="60" className="stroke-gold/50" />
          <line x1="45" y1="45" x2="55" y2="35" className="stroke-gold/50" />
          <line x1="65" y1="25" x2="75" y2="15" className="stroke-gold/50" />
          <line x1="15" y1="80" x2="25" y2="80" className="stroke-gold/50" />
          <text x="25" y="30" className="fill-forest font-serif text-[9px] stroke-none font-bold">dy/dx + Py = Q</text>
        </svg>
      );
    case "matrix":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Square Brackets */}
          <path d="M 25 15 L 15 15 L 15 85 L 25 85" className="stroke-forest" strokeWidth="3" />
          <path d="M 75 15 L 85 15 L 85 85 L 75 85" className="stroke-forest" strokeWidth="3" />
          {/* Matrix Elements Grid */}
          <text x="32" y="35" className="fill-gold font-sans text-xs stroke-none font-semibold">a₁₁</text>
          <text x="58" y="35" className="fill-gold font-sans text-xs stroke-none font-semibold">a₁₂</text>
          <text x="32" y="68" className="fill-gold font-sans text-xs stroke-none font-semibold">a₂₁</text>
          <text x="58" y="68" className="fill-gold font-sans text-xs stroke-none font-semibold">a₂₂</text>
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
    case "integration":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Integrals symbol ∫ */}
          <path d="M 55 15 C 65 15, 65 25, 50 50 C 35 75, 35 85, 45 85" className="stroke-forest" strokeWidth="3" />
          {/* Area under a curve sketch */}
          <path d="M 10 75 Q 40 70, 70 45 T 90 25" className="stroke-gold/20" />
          {/* Shaded area vertical lines */}
          <line x1="45" y1="63" x2="45" y2="85" strokeDasharray="1 1" className="stroke-gold/40" />
          <line x1="55" y1="56" x2="55" y2="85" strokeDasharray="1 1" className="stroke-gold/40" />
          <line x1="65" y1="49" x2="65" y2="85" strokeDasharray="1 1" className="stroke-gold/40" />
          <line x1="20" y1="85" x2="80" y2="85" className="stroke-forest/20" />
          <text x="62" y="25" className="fill-forest font-serif text-[10px] stroke-none font-bold">∫ f(x) dx</text>
        </svg>
      );
    case "lpp":
      return (
        <svg viewBox="0 0 100 100" className={`${className} stroke-gold fill-none`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Cartesian Axes */}
          <line x1="15" y1="85" x2="85" y2="85" className="stroke-forest/20" />
          <line x1="20" y1="15" x2="20" y2="85" className="stroke-forest/20" />
          {/* Feasible Region Boundary lines */}
          <line x1="20" y1="65" x2="75" y2="85" className="stroke-forest" />
          <line x1="20" y1="35" x2="80" y2="70" className="stroke-gold" />
          <line x1="60" y1="20" x2="60" y2="85" className="stroke-forest/40" strokeDasharray="2 2" />
          {/* Shaded Feasible area */}
          <polygon points="20,65 52,53 60,58 60,85 20,85" className="fill-gold/15 stroke-none" />
          <text x="25" y="78" className="fill-forest font-serif text-[7px] stroke-none">Feasible</text>
          <text x="25" y="85" className="fill-forest font-serif text-[7px] stroke-none">Region</text>
          <text x="45" y="25" className="fill-gold font-serif text-[8px] stroke-none font-bold">Max Z</text>
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

export default function Class12() {
  const [searchQuery, setSearchQuery] = useState("");

  const chaptersData = [
    {
      id: "probability",
      name: "Probability",
      shortDescription: "Conditional probability, Bayes' theorem & random variables",
      details: "Learn conditional probability, multiplication theorem on probability, independent events, Bayes' theorem, random variables and probability distributions.",
      illustrationType: "probability",
      symbol: "P(A|B)",
      videoId: "NKBI57ptWBI",
      playlistUrl: "https://www.youtube.com/watch?v=NKBI57ptWBI&list=PLkG0JIX8a6A50BYYfkPfnrhXmkO8wUpGe",
      fallbackThumbnail: "https://images.unsplash.com/photo-1453733190148-c44698c26588?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "geometry3d",
      name: "3D Geometry",
      shortDescription: "Direction cosines, lines & planes in space",
      details: "Master direction cosines and direction ratios of a line, equation of a line in space, shortest distance between lines, and equations of planes.",
      illustrationType: "geometry3d",
      symbol: "cos(α)",
      videoId: "OmUWNMmWIT0",
      playlistUrl: "https://www.youtube.com/watch?v=OmUWNMmWIT0&list=PLkG0JIX8a6A48CinaAT4_4TNCkvCDxmKp",
      fallbackThumbnail: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "vector",
      name: "Vector Algebra",
      shortDescription: "Vectors, dot product, cross product & projections",
      details: "Understand vectors and scalars, components of a vector, addition, scalar multiplication, scalar product (dot product), and vector product (cross product) of vectors.",
      illustrationType: "vector",
      symbol: "a · b",
      videoId: "5XF_YcAEbAI",
      playlistUrl: "https://www.youtube.com/watch?v=5XF_YcAEbAI&list=PLkG0JIX8a6A7ENjgYFvf7VpLzpIDz9uvI",
      fallbackThumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "relations",
      name: "Relations and Functions",
      shortDescription: "Types of relations, one-one & onto functions",
      details: "Learn types of relations: reflexive, symmetric, transitive, and equivalence relations. Master one-to-one, onto, and composite functions.",
      illustrationType: "relations",
      symbol: "f: A→B",
      videoId: "AJXNObjS3B0",
      playlistUrl: "https://www.youtube.com/watch?v=AJXNObjS3B0&list=PLkG0JIX8a6A4yJ-6yrRECgc4rn-TM2AtB",
      fallbackThumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "diff-equations",
      name: "Differential Equations",
      shortDescription: "Order, degree, general solutions & applications",
      details: "Understand order and degree, general and particular solutions, homogeneous and linear differential equations, and variable separable method.",
      illustrationType: "diff_eq",
      symbol: "dy/dx + Py",
      videoId: "09c3dDy0IK8",
      playlistUrl: "https://www.youtube.com/watch?v=09c3dDy0IK8&list=PLkG0JIX8a6A45liwwfXuz2ESsRGOFQoTW",
      fallbackThumbnail: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "matrices",
      name: "Matrices and Determinants",
      shortDescription: "Matrix algebra, determinants, adjoint & inverse",
      details: "Master matrix operations, transpose, determinants, properties of determinants, adjoint and inverse of a matrix, and solving systems of linear equations.",
      illustrationType: "matrix",
      symbol: "[A] · [B]",
      videoId: "rUYLSTJGcc",
      playlistUrl: "https://www.youtube.com/watch?v=rUYLSTJGcc&list=PLkG0JIX8a6A47HbWRUXcw-W6ruAP6X-Zo",
      fallbackThumbnail: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "continuity",
      name: "Continuity and Differentiability",
      shortDescription: "Limits, continuity, differentiability & chain rule",
      details: "Learn continuity of real-valued functions, differentiability of exponential, logarithmic, and parametric functions, and Mean Value Theorems.",
      illustrationType: "derivative",
      symbol: "f'(x)",
      videoId: "-LInTs_KDx0",
      playlistUrl: "https://www.youtube.com/watch?v=-LInTs_KDx0&list=PLkG0JIX8a6A4aycSfVu5vp3hNY94p_nGj",
      fallbackThumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "inverse-trig",
      name: "Inverse Trigonometric Functions",
      shortDescription: "Principal value branches & inverse properties",
      details: "Explore definitions, range, domain, principal value branches, and algebraic properties of inverse trigonometric functions.",
      illustrationType: "trig",
      symbol: "sin⁻¹(x)",
      videoId: "JNDCfGVH1iU",
      playlistUrl: "https://www.youtube.com/watch?v=JNDCfGVH1iU&list=PLkG0JIX8a6A4fZAb3r3u1HF0veq4Ad_Bp",
      fallbackThumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "integration",
      name: "Integration",
      shortDescription: "Definite & indefinite integrals & methods",
      details: "Master integration as inverse process of differentiation, substitution, integration by parts, partial fractions, and definite integral properties.",
      illustrationType: "integration",
      symbol: "∫ f(x)dx",
      videoId: "2EGWNGtXwug",
      playlistUrl: "https://www.youtube.com/watch?v=2EGWNGtXwug&list=PLkG0JIX8a6A6DeWIwaJK9B3aBq36uAEd6",
      fallbackThumbnail: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "differentiation-core",
      name: "Differentiation (Core)",
      shortDescription: "Standard formulas, implicit & higher-order derivatives",
      details: "Master differentiation rules, derivatives of composite functions, implicit differentiation, logarithmic differentiation, and second-order derivatives.",
      illustrationType: "derivative",
      symbol: "d/dx",
      videoId: "pBizgy_IT2g",
      playlistUrl: "https://www.youtube.com/watch?v=pBizgy_IT2g&list=PLkG0JIX8a6A4JMEYHcl6hdnxUcAy4TxoZ",
      fallbackThumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "differentiation-applied",
      name: "Differentiation (Applied)",
      shortDescription: "Tangents, normals, approximations & maxima/minima",
      details: "Apply differentiation to rates of change, increasing & decreasing functions, tangents and normals, approximations, and maxima & minima.",
      illustrationType: "derivative",
      symbol: "Δy/Δx",
      videoId: "DSigzKc_vx8",
      playlistUrl: "https://www.youtube.com/watch?v=DSigzKc_vx8&list=PLkG0JIX8a6A7rs58I71G2I5z0agdPA8Qd",
      fallbackThumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "linear-programming",
      name: "Linear Programming",
      shortDescription: "Optimization, constraints & feasible region",
      details: "Master linear programming problems, graphical method of solution, feasible and infeasible regions, and optimal feasible solutions under constraints.",
      illustrationType: "lpp",
      symbol: "Max Z = ax+by",
      videoId: "5nKm0xECZPY",
      playlistUrl: "https://www.youtube.com/watch?v=5nKm0xECZPY&list=PLkG0JIX8a6A71k4-RZgTmxXqwlQtCOSxk",
      fallbackThumbnail: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop"
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
            ∫
          </div>

          <div className="flex flex-col gap-6 relative z-10 max-w-3xl">
            <span className="px-3.5 py-1 text-xs font-sans font-semibold uppercase tracking-wider text-gold bg-gold/10 rounded-full border border-gold/20 w-fit flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-gold" />
              Advanced Mathematics Library
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-cream">
              Class 12 Mathematics
            </h1>
            <p className="text-cream/80 text-base md:text-lg leading-relaxed font-sans">
              Complete Chapter-Wise Mathematics Learning Library. Explore complete step-by-step lecture playlists for all core Class 12 topics, curated for board exams and competitive entrance preparation.
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-cream/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                  <BookOpen className="w-4.5 h-4.5" />
                </div>
                <span className="font-sans font-medium text-sm text-cream/90">12 Core Chapters</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                  <Video className="w-4.5 h-4.5" />
                </div>
                <span className="font-sans font-medium text-sm text-cream/90">180+ Video Lectures</span>
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
              placeholder="Search by topic, keyword (e.g. 'prob', 'vec', 'diff')..."
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
