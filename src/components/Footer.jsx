import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream pt-16 pb-8 border-t-2 border-gold/30 text-left">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Branding Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center text-forest shadow-md">
              <span className="font-serif font-bold text-xl">W</span>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold tracking-tight text-cream">
                Wisdom Classes
              </h3>
              <p className="text-[10px] uppercase font-sans font-semibold tracking-[0.2em] text-gold/80">
                By Somesh Jain
              </p>
            </div>
          </div>
          <p className="text-cream/75 text-sm leading-relaxed mt-2 font-sans">
            Providing premium mathematical guidance for Class 11, Class 12, JEE, NDA, and IPMAT aspirants. Empowering students to visualize math, think logically, and achieve top ranks.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-gold hover:text-forest transition-colors duration-300"
              aria-label="YouTube Channel"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-gold mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-gold">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3.5 text-sm text-cream/85">
            <li>
              <Link to="/" className="hover:text-gold transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold transition-colors duration-300">Contact & Inquiries</Link>
            </li>
            <li>
              <a href="#about" className="hover:text-gold transition-colors duration-300">About Somesh Sir</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-gold transition-colors duration-300">Student Success stories</a>
            </li>
          </ul>
        </div>

        {/* Courses Column */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-gold mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-gold">
            Our Courses
          </h4>
          <ul className="flex flex-col gap-3.5 text-sm text-cream/85">
            <li>
              <Link to="/class-11" className="hover:text-gold transition-colors duration-300">Class 11 Mathematics</Link>
            </li>
            <li>
              <Link to="/class-12" className="hover:text-gold transition-colors duration-300">Class 12 Mathematics</Link>
            </li>
            <li>
              <Link to="/jee" className="hover:text-gold transition-colors duration-300">IIT-JEE Mathematics</Link>
            </li>
            <li>
              <Link to="/nda" className="hover:text-gold transition-colors duration-300">NDA Mathematics</Link>
            </li>
            <li>
              <Link to="/ipmat" className="hover:text-gold transition-colors duration-300">IPMAT Mathematics</Link>
            </li>
          </ul>
        </div>

        {/* Contact info column */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-gold mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-gold">
            Get In Touch
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-cream/85">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <span>Gate No. 3, Garden House Colony, 165/C, Near MPGS, Sector 6, Shastri Nagar, Meerut, Uttar Pradesh 250002</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <a href="tel:+919634108610" className="hover:text-gold transition-colors duration-300">+91 96341 08610</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gold shrink-0" />
              <a href="mailto:info@someshjainmaths.com" className="hover:text-gold transition-colors duration-300">info@someshjainmaths.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom copyrights section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-cream/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
        <p>&copy; {currentYear} Wisdom Classes by Somesh Jain. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Designed with <Heart className="w-3.5 h-3.5 text-gold fill-gold" /> for Academic Excellence.
        </p>
      </div>
    </footer>
  );
}
