import { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Award, Users, BookOpen, ThumbsUp } from "lucide-react";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="font-serif text-5xl md:text-6xl font-bold text-forest" />;
}

export default function StatisticsSection() {
  const stats = [
    {
      id: 1,
      name: "Years Teaching Experience",
      value: 20,
      suffix: "+",
      icon: <Award className="w-6 h-6 text-gold" />,
      description: "Over two decades of classroom excellence."
    },
    {
      id: 2,
      name: "Students Mentored",
      value: 2000,
      suffix: "+",
      icon: <Users className="w-6 h-6 text-gold" />,
      description: "Empowering math aspirants offline & online."
    },
    {
      id: 3,
      name: "Online Teaching",
      value: 7,
      suffix: "+ Years",
      icon: <BookOpen className="w-6 h-6 text-gold" />,
      description: "Pioneering interactive virtual learning."
    },
    {
      id: 4,
      name: "Prep Programs",
      value: 5,
      suffix: " Courses",
      icon: <ThumbsUp className="w-6 h-6 text-gold" />,
      description: "Class 11, 12, JEE, NDA & IPMAT preparation."
    }
  ];

  return (
    <section className="py-20 bg-cream-dark/40 relative overflow-hidden">
      {/* Decorative math symbol overlay */}
      <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none font-mono text-xl flex flex-wrap gap-8 justify-around items-center p-8">
        <span>∫ f(x) dx = F(x) + C</span>
        <span>lim (x→0) sin(x)/x = 1</span>
        <span>e^(iπ) + 1 = 0</span>
        <span>d/dx (e^x) = e^x</span>
        <span>a² + b² = c²</span>
        <span>∑ n = n(n+1)/2</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-forest/5 shadow-[0_10px_35px_rgba(27,62,43,0.02)] text-center flex flex-col items-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-forest flex items-center justify-center mb-6 shadow-md shadow-forest/10 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="flex items-baseline justify-center gap-0.5 mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-serif font-bold text-forest mb-2">
                {stat.name}
              </h3>
              <p className="text-charcoal/70 text-sm font-sans leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
