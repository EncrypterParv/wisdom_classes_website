import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle, Award, Target, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import StatisticsSection from "../components/StatisticsSection";
import GallerySection from "../components/GallerySection";
import TestimonialCard from "../components/TestimonialCard";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  // Mathematical floating formulas for hero animation
  const mathFormulas = [
    { text: "e^{i\\pi} + 1 = 0", x: "10%", y: "20%", delay: 0 },
    { text: "\\int_a^b f(x)dx", x: "85%", y: "15%", delay: 1 },
    { text: "x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}", x: "15%", y: "75%", delay: 2 },
    { text: "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1", x: "75%", y: "70%", delay: 3 },
    { text: "\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}", x: "50%", y: "85%", delay: 1.5 }
  ];

  return (
    <div className="relative overflow-hidden pt-24 bg-cream">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center py-20 px-6 lg:px-8 max-w-7xl mx-auto z-10">
        
        {/* Floating Mathematical Background Formulas */}
        <div className="absolute inset-0 select-none pointer-events-none z-0">
          {mathFormulas.map((formula, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: [0.03, 0.08, 0.03], 
                y: [0, -15, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                delay: formula.delay,
                ease: "easeInOut" 
              }}
              style={{ top: formula.y, left: formula.x }}
              className="absolute font-mono text-sm sm:text-base md:text-lg text-forest font-semibold"
            >
              {formula.text}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative">
          
          {/* Hero Content Column */}
          <div className="lg:col-span-7 text-left flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-4 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider text-forest bg-forest/5 border border-forest/10 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                Admissions Open for 2026-27
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-forest leading-[1.15]"
            >
              Master Mathematics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-gold font-serif">
                with Somesh Jain Sir
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-charcoal/85 text-base sm:text-lg md:text-xl font-sans leading-relaxed max-w-xl"
            >
              20+ Years of Excellence in Mathematics Education
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-forest hover:bg-forest-light text-cream rounded-2xl font-sans font-medium shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5"
              >
                <span>Book a Free Demo Class</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </Link>
              <a
                href="#courses"
                className="px-8 py-4 bg-white hover:bg-cream-dark/30 text-forest border border-forest/15 rounded-2xl font-sans font-medium transition-all duration-300 inline-flex items-center justify-center"
              >
                Browse Playlists
              </a>
            </motion.div>
          </div>

          {/* Hero Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-80 h-96 sm:w-96 sm:h-[450px] rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl z-10 group bg-white">
              {/* Subtle bottom overlay for name text */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent z-10" />
              <img
                src="/somesh-jain.jpg"
                alt="Somesh Jain Sir — Mathematics Educator"
                className="w-full h-full object-cover object-top transition-all duration-700 ease-out"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-cream text-left">
                <h3 className="text-2xl font-serif font-bold text-cream mb-1">
                  Somesh Jain
                </h3>
                <p className="text-xs uppercase font-sans font-semibold tracking-widest text-gold">
                  Mathematics Educator · 20+ Years
                </p>
              </div>
            </div>

            {/* Decorative Golden Ring behind photo frame */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[410px] sm:w-[410px] sm:h-[500px] border border-gold/30 rounded-3xl -rotate-6 pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[410px] sm:w-[410px] sm:h-[500px] border border-forest/10 rounded-3xl rotate-3 pointer-events-none z-0" />
          </motion.div>

        </div>
      </section>

      {/* 2. ABOUT SOMESH SIR SECTION */}
      <section id="about" className="py-24 bg-white relative">
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
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-cream-light p-8 rounded-3xl border border-forest/5 shadow-inner text-left flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-gold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-lg text-forest">Qualifications</h4>
              <p className="text-charcoal/70 text-xs font-sans leading-relaxed">
                B.Sc. in Mathematics & MBA (Marketing & Finance). Expert in conceptual logic.
              </p>
            </div>

            <div className="bg-cream-light p-8 rounded-3xl border border-forest/5 shadow-inner text-left flex flex-col gap-4">
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
      <section id="courses" className="py-24 bg-white">
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
          variants={containerVariants}
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
        </motion.div>
      </section>

      {/* 5. INSTITUTE GALLERY */}
      <GallerySection />

      {/* 6. STUDENT TESTIMONIALS */}
      <TestimonialCard />

      {/* 7. CONTACT ACTION / CTA INQUIRY FORM PREVIEW */}
      <section className="py-24 bg-white relative">
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
            className="px-8 py-4 bg-gold hover:bg-gold-light text-forest font-sans font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5 mt-4"
          >
            Get in Touch Instantly
          </Link>
        </div>
      </section>

    </div>
  );
}
