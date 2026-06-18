import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Eye } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop",
      title: "Interactive Classroom Lectures",
      desc: "Where complex mathematics is visualised and simplified."
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
      title: "Premium Study Material",
      desc: "In-depth worksheets, notes and conceptual sheets."
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      title: "One-on-One Doubt Sessions",
      desc: "Clearing bottlenecks for every individual student."
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
      title: "Structured Mock Exams",
      desc: "Testing speed, accuracy, and examination stamina."
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
      title: "Self Study Library",
      desc: "A quiet space designed for focus and dedication."
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      title: "Group Ideation & Discussions",
      desc: "Collaborating with peers on advanced mathematical proofs."
    }
  ];

  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <span className="px-3.5 py-1 text-xs font-sans font-semibold uppercase tracking-wider text-forest bg-forest/5 rounded-full border border-forest/10">
          Our Environment
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mt-4 mb-6">
          Academy Gallery
        </h2>
        <p className="max-w-2xl mx-auto text-charcoal/80 text-base leading-relaxed font-sans">
          Take a virtual tour of our premium study spaces, highly interactive lecture classrooms, and resourceful study labs designed to nurture raw brilliance.
        </p>
      </div>

      {/* Grid of gallery images with hover options */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg shadow-forest/5 border border-forest/5 bg-white"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Elegant overlay screen on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-8">
              <div className="w-10 h-10 rounded-full bg-gold/90 text-forest flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="text-cream font-serif text-xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {img.title}
              </h4>
              <p className="text-cream/80 text-xs font-sans transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                {img.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-forest/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-cream/10 text-cream hover:bg-gold hover:text-forest transition-colors duration-300 z-50"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full bg-white/5 p-3 rounded-3xl border border-cream/10 shadow-2xl flex flex-col gap-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain rounded-2xl"
              />
              <div className="p-4 text-left">
                <h3 className="text-gold font-serif text-2xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-cream/80 text-sm font-sans">
                  {selectedImage.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
