import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle, Award, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import StatisticsSection from "../components/StatisticsSection";
import GallerySection from "../components/GallerySection";
import TestimonialCard from "../components/TestimonialCard";
import FreeResourcesSection from "../components/FreeResourcesSection";

// Dynamic Counter Hook for animating statistics
const StatCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // Extract numerical value
    const end = parseInt(value.toString().replace(/\D/g, ""), 10);
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  // Append any non-numeric suffixes (like +)
  const suffix = value.toString().replace(/[0-9]/g, "");
  return <span>{count}{suffix}</span>;
};

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax transform offsets for background depth
  const backgroundY = useTransform(scrollY, [0, 800], [0, 150]);
  const foregroundY = useTransform(scrollY, [0, 800], [0, -50]);

  // Track mouse coordinates for the spotlight effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Curated list of floating mathematical symbols with random properties
  const floatingSymbols = [
    { char: "∫", x: "8%", y: "15%", scale: 1.5, duration: 9, delay: 0 },
    { char: "d/dx", x: "85%", y: "12%", scale: 1.1, duration: 11, delay: 1 },
    { char: "π", x: "18%", y: "78%", scale: 1.2, duration: 8, delay: 2.5 },
    { char: "Σ", x: "78%", y: "82%", scale: 1.4, duration: 10, delay: 1.5 },
    { char: "∞", x: "48%", y: "85%", scale: 1.3, duration: 12, delay: 3 },
    { char: "sin(θ)", x: "42%", y: "10%", scale: 1.0, duration: 10, delay: 2 },
    { char: "f(x)", x: "90%", y: "65%", scale: 1.1, duration: 9, delay: 0.5 },
    { char: "√", x: "5%", y: "55%", scale: 1.3, duration: 13, delay: 4 },
  ];

  // Course badges below the main hero text
  const courseBadges = [
    { label: "Class 11", icon: "📘", path: "/class-11" },
    { label: "Class 12", icon: "📗", path: "/class-12" },
    { label: "JEE Prep", icon: "🎯", path: "/jee" },
    { label: "NDA Maths", icon: "🪖", path: "/nda" },
    { label: "IPMAT Quant", icon: "📊", path: "/ipmat" }
  ];

  return (
    <div className="relative overflow-hidden bg-cream min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section 
        onMouseMove={handleMouseMove}
        className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto z-10"
      >
        {/* Mouse follow spotlight glow */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-70"
          style={{
            background: `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212,175,55,0.06), transparent 50%)`
          }}
        />

        {/* Parallax Floating Mathematical Symbols */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 select-none pointer-events-none z-0"
        >
          {floatingSymbols.map((sym, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ 
                opacity: [0.03, 0.09, 0.03], 
                y: [0, -20, 0],
                rotate: [0, 15, -15, 0]
              }}
              transition={{ 
                duration: sym.duration, 
                repeat: Infinity, 
                delay: sym.delay,
                ease: "easeInOut" 
              }}
              style={{ top: sym.y, left: sym.x, scale: sym.scale }}
              className="absolute font-serif font-black text-forest text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              {sym.char}
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full relative z-10">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-left flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-4 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-forest bg-forest/5 border border-forest/10 inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
                Premium Online & Offline Batches
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-forest leading-[1.12]"
            >
              Master Mathematics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest via-forest to-gold font-serif">
                with Somesh Jain Sir
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-charcoal/90 text-base sm:text-lg md:text-xl font-sans leading-relaxed max-w-xl"
            >
              20+ Years of Excellence in Mathematics Education. Developing conceptual clarity, problem-solving speed, and exam confidence.
            </motion.p>

            {/* Interactive Mini Course Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-2.5 my-2"
            >
              {courseBadges.map((badge, idx) => (
                <Link key={idx} to={badge.path}>
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(212,175,55,0.25)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3.5 py-2 rounded-xl bg-white/60 hover:bg-white backdrop-blur-md border border-forest/10 text-xs font-sans font-semibold text-forest cursor-pointer flex items-center gap-1.5 transition-colors duration-300"
                  >
                    <span>{badge.icon}</span>
                    <span>{badge.label}</span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-forest hover:bg-forest-light text-on-forest rounded-2xl font-sans font-bold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5"
              >
                <span>Book a Free Demo Class</span>
                <ArrowRight className="w-4.5 h-4.5 text-gold" />
              </Link>
              <a
                href="#courses"
                className="px-8 py-4 bg-white/70 hover:bg-white text-forest border border-forest/15 rounded-2xl font-sans font-bold transition-all duration-300 inline-flex items-center justify-center backdrop-blur-md"
              >
                Browse Playlists
              </a>
            </motion.div>

            {/* Animated statistics in Hero Workspace */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-forest/10"
            >
              <div>
                <div className="text-2xl font-serif font-black text-forest">
                  <StatCounter value="20+" />
                </div>
                <div className="text-[10px] text-charcoal/60 font-sans font-bold uppercase tracking-wider mt-1">Teaching Yrs</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-black text-forest">
                  <StatCounter value="2000+" />
                </div>
                <div className="text-[10px] text-charcoal/60 font-sans font-bold uppercase tracking-wider mt-1">Students Mentored</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-black text-forest">
                  <StatCounter value="7+" />
                </div>
                <div className="text-[10px] text-charcoal/60 font-sans font-bold uppercase tracking-wider mt-1">Online Teaching Yrs</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-black text-forest">
                  <StatCounter value="100+" />
                </div>
                <div className="text-[10px] text-charcoal/60 font-sans font-bold uppercase tracking-wider mt-1">Math Playlists</div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: Hero Portrait + Dynamic SVG Mathematical Graph overlay */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div 
              style={{ y: foregroundY }}
              className="relative w-80 h-96 sm:w-96 sm:h-[450px] rounded-[2rem] overflow-hidden border-2 border-gold/40 shadow-2xl z-10 group bg-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent z-20" />
              <img
                src="/somesh-jain.jpg"
                alt="Somesh Jain Sir — Mathematics Educator"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 z-30 text-cream text-left">
                <h3 className="text-2xl font-serif font-bold text-cream mb-1">
                  Somesh Jain
                </h3>
                <p className="text-xs uppercase font-sans font-semibold tracking-widest text-gold">
                  Mathematics Educator · 20+ Years
                </p>
              </div>
            </motion.div>

            {/* Dynamic Graph Canvas drawing/plotting itself behind Somesh Sir's photo */}
            <div className="absolute inset-0 w-[120%] h-[120%] -top-[10%] -left-[10%] z-0 pointer-events-none overflow-hidden select-none">
              <svg viewBox="0 0 400 400" className="w-full h-full stroke-forest/15 fill-none" strokeWidth="1.5">
                {/* Graph Coordinate Plane */}
                <line x1="200" y1="20" x2="200" y2="380" className="stroke-gold/45" strokeWidth="2" />
                <line x1="20" y1="200" x2="380" y2="200" className="stroke-gold/45" strokeWidth="2" />
                
                {/* Arrowheads */}
                <polygon points="200,10 195,22 205,22" className="fill-gold/45 stroke-none" />
                <polygon points="200,390 195,378 205,378" className="fill-gold/45 stroke-none" />
                <polygon points="390,200 378,195 378,205" className="fill-gold/45 stroke-none" />
                <polygon points="10,200 22,195 22,205" className="fill-gold/45 stroke-none" />
                
                {/* Horizontal Grid lines */}
                <line x1="20" y1="100" x2="380" y2="100" />
                <line x1="20" y1="150" x2="380" y2="150" />
                <line x1="20" y1="250" x2="380" y2="250" />
                <line x1="20" y1="300" x2="380" y2="300" />
                
                {/* Vertical Grid lines */}
                <line x1="100" y1="20" x2="100" y2="380" />
                <line x1="150" y1="20" x2="150" y2="380" />
                <line x1="250" y1="20" x2="250" y2="380" />
                <line x1="300" y1="20" x2="300" y2="380" />

                {/* Animated Trigonometric Sine Wave */}
                <motion.path
                  d="M 20,200 Q 110,60 200,200 T 380,200"
                  className="stroke-forest/40"
                  strokeWidth="3"
                  animate={{
                    strokeDashoffset: [0, -360]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ strokeDasharray: "12, 6" }}
                />

                {/* Second shifting Wave curve (Cosine phase) */}
                <motion.path
                  d="M 20,200 Q 110,340 200,200 T 380,200"
                  className="stroke-gold/30"
                  strokeWidth="2"
                  animate={{
                    strokeDashoffset: [360, 0]
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ strokeDasharray: "8, 4" }}
                />

                {/* Parabola self-plotting curve */}
                <motion.path
                  d="M 60,80 Q 200,370 340,80"
                  className="stroke-forest/30"
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Math Formulas overlay coordinates */}
                <text x="260" y="85" className="fill-forest/30 font-serif text-[11px] italic stroke-none">y = sin(x)</text>
                <text x="215" y="145" className="fill-gold/40 font-serif text-[11px] italic stroke-none">f(x) = x²</text>
                <text x="35" y="190" className="fill-forest/30 font-serif text-[11px] italic stroke-none">dy/dx</text>
                <text x="215" y="270" className="fill-forest/30 font-serif text-[11px] italic stroke-none font-bold">∫ f(x) dx</text>
              </svg>
            </div>

            {/* Rotating border grids */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[410px] sm:w-[410px] sm:h-[500px] border border-gold/30 rounded-3xl -rotate-6 pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[410px] sm:w-[410px] sm:h-[500px] border border-forest/10 rounded-3xl rotate-3 pointer-events-none z-0" />
          </div>

        </div>
      </section>

      {/* 2. ABOUT SOMESH SIR SECTION */}
      <section id="about" className="py-24 bg-cream-light relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 text-left"
          >
            <span className="px-3.5 py-1 text-xs font-sans font-semibold uppercase tracking-wider text-forest bg-forest/5 rounded-full border border-forest/10 w-fit">
              Meet the Instructor
            </span>
            <h2 className="text-4xl font-serif font-bold text-forest tracking-tight">
              Somesh Jain
            </h2>
            <p className="text-charcoal/85 leading-relaxed font-sans text-base">
              Somesh Jain is a highly experienced Mathematics educator with more than 20 years of teaching experience. He holds a B.Sc. in Mathematics and an MBA in Marketing & Finance. He has extensive experience teaching Class 11, Class 12, IIT-JEE, and other competitive examinations.
            </p>
            <p className="text-charcoal/80 leading-relaxed font-sans text-sm">
              He has been teaching online for over 7 years and has successfully taught and mentored more than 2000 students through online learning platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="font-sans font-medium text-sm text-charcoal">B.Sc. Mathematics</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="font-sans font-medium text-sm text-charcoal">MBA (Marketing & Finance)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="font-sans font-medium text-sm text-charcoal">20+ Years Teaching Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="font-sans font-medium text-sm text-charcoal">7+ Years Online Teaching</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="font-sans font-medium text-sm text-charcoal">Personalized Methodology</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="font-sans font-medium text-sm text-charcoal">Concept-Based Learning</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-white p-8 rounded-3xl border border-forest/5 shadow-inner text-left flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-gold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-forest">Qualifications</h4>
              <p className="text-charcoal/70 text-xs font-sans leading-relaxed">
                B.Sc. in Mathematics & MBA (Marketing & Finance). Expert in conceptual logic.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-forest/5 shadow-inner text-left flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-gold">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-forest">Philosophy</h4>
              <p className="text-charcoal/70 text-xs font-sans leading-relaxed">
                "Create a friendly, supportive learning environment where students can develop strong conceptual understanding and confidence in Mathematics."
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. STATISTICS SECTION */}
      <StatisticsSection />

      {/* 4. COURSE CATEGORIES */}
      <section id="courses" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
          <span className="px-3.5 py-1 text-xs font-sans font-semibold uppercase tracking-wider text-forest bg-forest/5 rounded-full border border-forest/10">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mt-4 mb-6">
            Pick Your Target Goal
          </h2>
          <p className="max-w-2xl mx-auto text-charcoal/80 text-base leading-relaxed font-sans">
            Choose from five meticulously structured mathematical divisions, loaded with concept lectures, shortcut playlists, worksheets, and mock tests.
          </p>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <CourseCard
            title="Class 11 Mathematics"
            path="/class-11"
            description="Master basic algebra, coordinate systems, trigonometry, and combinatorial structures to establish a bulletproof base."
            badge="School & Foundation"
          />
          <CourseCard
            title="Class 12 Mathematics"
            path="/class-12"
            description="Deep dive into matrices, determinants, vector mathematics, 3D systems, and complex board exam calculus."
            badge="Board Examinations"
          />
          <CourseCard
            title="IIT-JEE Mathematics"
            path="/jee"
            description="Highly rigorous, advanced, and comprehensive playlists to crack JEE Mains and JEE Advanced math section."
            badge="Elite Engineering"
          />
          <CourseCard
            title="NDA Mathematics"
            path="/nda"
            description="Learn high-speed mental math, visual deduction shortcuts, and previous year problems tailored for national defence."
            badge="Defence Careers"
          />
          <CourseCard
            title="IPMAT Mathematics"
            path="/ipmat"
            description="Build competitive logical aptitude, data parsing capability, and quantitative aptitude for the top IIMs."
            badge="Management Aptitude"
          />
          <CourseCard
            title="Free Mathematics Resources"
            path="/free-resources"
            description="Download high-quality formula sheets, quick revision notes, and mathematics reference guides curated by Somesh Jain Sir."
            badge="Free Materials"
          />
        </motion.div>
      </section>

      {/* 5. INSTITUTE GALLERY */}
      <GallerySection />

      {/* 6. STUDENT TESTIMONIALS */}
      <TestimonialCard />

      {/* 6.5 FREE MATHEMATICS RESOURCES */}
      <FreeResourcesSection />

      {/* 7. CONTACT ACTION / CTA INQUIRY FORM PREVIEW */}
      <section className="py-24 bg-cream relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 bg-forest text-cream rounded-3xl p-12 lg:p-16 border border-gold/20 shadow-2xl relative overflow-hidden text-center flex flex-col items-center gap-6">
          {/* Decorative rings */}
          <div className="absolute -top-16 -right-16 w-40 h-40 border-4 border-gold/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 border-4 border-gold/10 rounded-full pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cream max-w-2xl leading-tight">
            Ready to Transform Your Mathematical Journey?
          </h2>
          <p className="text-cream/80 text-base sm:text-lg max-w-xl font-sans">
            Connect with Somesh Jain Sir directly. Book your diagnostic test, attend a live class, or clear your career path doubts.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-gold hover:bg-gold-light text-on-gold font-sans font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5 mt-4"
          >
            Get in Touch Instantly
          </Link>
        </div>
      </section>

    </div>
  );
}
