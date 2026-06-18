import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export default function CourseCard({ title, path, description, badge, iconColor = "bg-forest" }) {
  // 3D Tilt Effect using Framer Motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map motion values to rotation angles
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full bg-white rounded-3xl p-8 border border-forest/5 shadow-[0_10px_30px_rgba(27,62,43,0.03)] hover:shadow-[0_20px_50px_rgba(27,62,43,0.08)] flex flex-col justify-between group relative overflow-hidden cursor-pointer"
    >
      {/* Absolute Decorative Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full transform translate-x-6 -translate-y-6 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
      
      <div style={{ transform: "translateZ(30px)" }}>
        {/* Badge & Icon */}
        <div className="flex items-center justify-between mb-8">
          <span className="px-3.5 py-1 text-xs font-sans font-semibold uppercase tracking-wider text-forest bg-forest/5 rounded-full border border-forest/10">
            {badge}
          </span>
          <div className={`w-12 h-12 rounded-2xl ${iconColor} text-cream flex items-center justify-center shadow-md`}>
            <BookOpen className="w-5 h-5 text-gold" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-serif font-bold text-forest mb-4 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-charcoal/80 text-sm leading-relaxed mb-8 font-sans">
          {description}
        </p>
      </div>

      {/* Action CTA */}
      <div style={{ transform: "translateZ(20px)" }} className="mt-auto">
        <Link
          to={path}
          className="w-full py-3.5 px-6 rounded-2xl bg-cream hover:bg-forest hover:text-cream text-forest border border-forest/10 font-sans font-medium text-sm flex items-center justify-between transition-all duration-300 shadow-sm"
        >
          <span>Explore Chapter Playlists</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}
