import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, GraduationCap, Phone, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("wisdom-classes-theme");
      if (savedTheme) return savedTheme;
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return systemDark ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("wisdom-classes-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

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
          ? "py-2 bg-cream/85 backdrop-blur-md shadow-md border-b border-gold/15"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 xl:px-8 flex items-center justify-between gap-3">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img 
            src="/wisdom-logo.jpg" 
            alt="Wisdom Classes Logo" 
            className="h-[38px] sm:h-[44px] lg:h-[50px] w-auto object-contain rounded-full border border-gold/20 shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0"
          />
          <div className="flex flex-col justify-center text-left">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-charcoal-light leading-none tracking-tight group-hover:text-gold transition-colors duration-300">
              Wisdom Classes
            </h1>
            <p className="text-[9px] uppercase font-sans font-bold tracking-[0.18em] text-gold mt-1 leading-none">
              By Somesh Jain
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-cream-light/60 backdrop-blur-sm p-1 rounded-full border border-gold/15 shadow-inner">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-2.5 xl:px-4 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-sans font-semibold transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "text-on-gold bg-gold shadow-sm"
                    : "text-charcoal hover:text-gold hover:bg-gold/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-gold/25 hover:border-gold bg-cream-light/60 hover:bg-cream-light text-gold transition-all duration-300 shadow-sm cursor-pointer inline-flex items-center justify-center shrink-0"
            aria-label="Toggle Theme"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "dark" ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </motion.div>
          </button>

          <Link
            to="/contact"
            className="px-6 py-2.5 bg-gold hover:bg-gold-light text-on-gold rounded-full font-sans font-bold text-xs xl:text-sm transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-1.5 hover:-translate-y-0.5"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Actions Menu */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-gold/20 text-gold hover:bg-gold/5 transition-colors duration-300 cursor-pointer inline-flex items-center justify-center w-10 h-10 shrink-0"
            aria-label="Toggle Theme"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.div>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-gold hover:bg-gold/5 transition-colors duration-300 cursor-pointer"
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
            className="lg:hidden w-full bg-cream-light border-b border-gold/15 shadow-xl overflow-hidden"
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
                          ? "bg-gold text-on-gold shadow-md"
                          : "text-charcoal hover:bg-gold/5 hover:text-gold"
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
                className="pt-2 border-t border-gold/15"
              >
                <Link
                  to="/contact"
                  className="w-full justify-center px-6 py-3 bg-gold text-on-gold rounded-xl font-sans font-bold text-center shadow-md transition-all duration-300 inline-flex items-center gap-2"
                >
                  Enquire Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
