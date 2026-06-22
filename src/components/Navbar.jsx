import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, GraduationCap, Phone, Info, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || 
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Class 11", path: "/class-11", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Class 12", path: "/class-12", icon: <BookOpen className="w-4 h-4" /> },
    { name: "JEE", path: "/jee", icon: <GraduationCap className="w-4 h-4" /> },
    { name: "NDA", path: "/nda", icon: <GraduationCap className="w-4 h-4" /> },
    { name: "IPMAT", path: "/ipmat", icon: <GraduationCap className="w-4 h-4" /> },
    { name: "Resources", path: "/free-resources", icon: <BookOpen className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-cream/85 backdrop-blur-md shadow-lg border-b border-forest/10"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 xl:px-8 flex items-center justify-between gap-3">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img 
            src="/wisdom-logo.jpg" 
            alt="Wisdom Classes Logo" 
            className="h-[38px] sm:h-[44px] lg:h-[50px] w-auto object-contain rounded-full shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-serif font-black text-forest leading-none tracking-tight">
              Wisdom Classes
            </h1>
            <p className="text-[9px] uppercase font-sans font-bold tracking-[0.18em] text-gold mt-1 leading-none">
              By Somesh Jain
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-white/50 backdrop-blur-sm p-1 rounded-full border border-forest/5 shadow-inner">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-2.5 xl:px-4 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-sans font-semibold transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "text-cream bg-forest shadow-sm"
                    : "text-charcoal hover:text-forest hover:bg-forest/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-forest/5 hover:bg-forest/10 text-forest hover:text-gold transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link
            to="/contact"
            className="px-5 py-2 bg-forest hover:bg-forest-light text-cream rounded-full font-sans font-semibold text-xs xl:text-sm transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-1.5 hover:-translate-y-0.5"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-forest hover:bg-forest/5 transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5.5 h-5.5 text-gold" /> : <Moon className="w-5.5 h-5.5" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-forest hover:bg-forest/5 transition-colors duration-300"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-cream border-b border-forest/10 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-sans font-medium text-base transition-all duration-300 ${
                        isActive
                          ? "bg-forest text-cream shadow-md"
                          : "text-charcoal hover:bg-forest/5 hover:text-forest"
                      }`}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2 border-t border-forest/10"
              >
                <Link
                  to="/contact"
                  className="w-full justify-center px-6 py-3 bg-forest text-cream rounded-xl font-sans font-medium text-center shadow-md transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Enquire Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
