import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Download, Eye, X, ZoomIn, ZoomOut, Maximize2, Sparkles, BookOpen } from "lucide-react";

const resourcesData = [
  {
    id: "algebra",
    title: "Algebra Formula Sheet",
    category: "Algebra",
    description: "Important algebraic identities, expansions, factorization formulas, and shortcut equations.",
    image: "/algebra-formulas.jpg"
  },
  {
    id: "differentiation",
    title: "Differentiation Formula Sheet",
    category: "Calculus",
    description: "Essential derivative formulas and differentiation rules for quick revision.",
    image: "/differentiation-formulas.jpg"
  },
  {
    id: "integration",
    title: "Integration Formula Sheet",
    category: "Calculus",
    description: "Important indefinite integration formulas and calculus shortcuts.",
    image: "/integration-formulas.jpg"
  },
  {
    id: "inverse-trig",
    title: "Inverse Trigonometry Formula Sheet",
    category: "Trigonometry",
    description: "Important identities and inverse trigonometric relations.",
    image: "/inverse-trig-formulas.jpg"
  },
  {
    id: "logarithm",
    title: "Logarithm Formula Sheet",
    category: "Algebra",
    description: "Complete logarithmic properties and transformations.",
    image: "/logarithm-formulas.jpg"
  },
  {
    id: "mensuration",
    title: "Mensuration Formula Sheet",
    category: "Geometry",
    description: "Areas, volumes, surface areas and geometry formulas.",
    image: "/mensuration-formulas.jpg"
  },
  {
    id: "trigonometry",
    title: "Trigonometry Formula Sheet",
    category: "Trigonometry",
    description: "Core trigonometric identities and equations.",
    image: "/trigonometry-formulas.jpg"
  }
];

export default function FreeResourcesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResource, setSelectedResource] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);

  // Filter based on search query
  const filteredResources = resourcesData.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = (resource) => {
    const link = document.createElement("a");
    link.href = resource.image;
    link.download = `${resource.title.replace(/\s+/g, "_")}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resources" className="py-24 bg-cream relative overflow-hidden">
      {/* Background Math elements */}
      <div className="absolute top-12 left-[-5%] opacity-[0.02] text-forest select-none pointer-events-none font-serif text-[12vw] leading-none">
        ∑ xᵢ = n·x̄
      </div>
      <div className="absolute bottom-12 right-[-5%] opacity-[0.02] text-forest select-none pointer-events-none font-serif text-[12vw] leading-none">
        a² + b² = c²
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3.5 py-1.5 text-xs font-sans font-bold uppercase tracking-wider text-forest bg-forest/5 rounded-full border border-forest/10 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Study Companion Hub
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-black text-forest mt-4 mb-6 leading-tight">
            📚 Free Mathematics Resources
          </h2>
          <p className="max-w-3xl mx-auto text-charcoal/80 text-base md:text-lg leading-relaxed font-sans">
            Download high-quality formula sheets, quick revision notes, and mathematics reference guides curated by Somesh Jain Sir.
          </p>

          {/* Quick Metrics Statistics Row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10 max-w-4xl mx-auto border-y border-forest/5 py-6">
            <div className="flex items-center gap-2">
              <span className="text-lg">📄</span>
              <span className="text-sm font-sans font-semibold text-forest/80">7 Formula Sheets</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🎯</span>
              <span className="text-sm font-sans font-semibold text-forest/80">Quick Revision Resources</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📥</span>
              <span className="text-sm font-sans font-semibold text-forest/80">Free Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">📚</span>
              <span className="text-sm font-sans font-semibold text-forest/80">Mathematics Learning Library</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-md mx-auto text-left">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest/40" />
            <input
              type="text"
              placeholder="Search Formula Sheets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3.5 bg-white border border-forest/10 rounded-full font-sans text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 shadow-sm"
            />
          </div>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(27,62,43,0.1)" }}
                className="bg-white rounded-3xl overflow-hidden border border-forest/5 shadow-[0_10px_30px_rgba(27,62,43,0.02)] flex flex-col h-full group hover:border-gold/40 transition-all duration-500 text-left relative"
              >
                {/* Visual Preview Container */}
                <div className="relative h-[240px] overflow-hidden bg-forest/5 shrink-0 w-full select-none cursor-pointer" onClick={() => setSelectedResource(resource)}>
                  {/* Blurry upper preview of formula sheet */}
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover object-top blur-[5px] group-hover:blur-[2.5px] scale-105 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent opacity-65 group-hover:opacity-85 transition-opacity duration-300" />
                  
                  {/* Centered Preview Badge */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <span className="px-4 py-2 bg-cream/90 backdrop-blur-md rounded-full text-xs font-sans font-bold text-forest border border-gold/30 shadow-md transform group-hover:scale-105 transition-all duration-300 inline-flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-gold" />
                      📖 Preview Available
                    </span>
                  </div>
                </div>

                {/* Card details */}
                <div className="p-6 flex flex-col flex-grow justify-between relative">
                  <div>
                    {/* Category */}
                    <span className="px-2.5 py-1 text-[10px] font-sans font-semibold uppercase tracking-wider text-gold bg-gold/10 rounded-full border border-gold/20 w-fit">
                      {resource.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-serif font-bold text-forest mt-3 mb-2 group-hover:text-gold transition-colors duration-300 leading-snug min-h-[48px] flex items-center">
                      {resource.title}
                    </h3>

                    {/* Description */}
                    <p className="text-charcoal/70 text-xs font-sans leading-relaxed min-h-[48px] line-clamp-3">
                      {resource.description}
                    </p>
                  </div>

                  {/* CTA Actions */}
                  <button
                    onClick={() => setSelectedResource(resource)}
                    className="w-full mt-6 py-3 px-4 bg-forest hover:bg-gold text-on-forest hover:text-forest font-sans font-semibold text-xs rounded-xl shadow-md transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View & Download Sheet</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-3xl border border-forest/5 p-8 max-w-md mx-auto mt-12"
          >
            <p className="text-charcoal/75 font-sans font-medium text-lg">No resource sheets match your search.</p>
            <p className="text-charcoal/50 font-sans text-sm mt-2">Try searching using words like 'algebra', 'calculus', etc.</p>
          </motion.div>
        )}

      </div>

      {/* Resource Lightbox Modal */}
      <AnimatePresence>
        {selectedResource && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white dark:bg-cream-light rounded-[2rem] border border-forest/10 shadow-2xl overflow-hidden w-full max-w-4xl max-h-[85vh] flex flex-col relative text-left"
            >
              {/* Modal Top Header bar */}
              <div className="p-5 border-b border-forest/5 flex items-center justify-between shrink-0 bg-cream/30">
                <div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-forest">
                    {selectedResource.title}
                  </h3>
                  <span className="text-[10px] text-gold uppercase font-sans font-bold tracking-wider">
                    {selectedResource.category} · Premium Resource
                  </span>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => {
                    setSelectedResource(null);
                    setZoomScale(1);
                  }}
                  className="p-2 rounded-full hover:bg-forest/5 text-forest transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable & Zoomable Image viewer */}
              <div className="flex-grow overflow-auto p-6 bg-cream/15 flex items-center justify-center min-h-[350px]">
                <div 
                  className="transition-transform duration-300 max-w-full"
                  style={{ transform: `scale(${zoomScale})` }}
                >
                  <img
                    src={selectedResource.image}
                    alt={selectedResource.title}
                    className="max-h-[50vh] w-auto max-w-full rounded-lg shadow-md border border-forest/5 object-contain select-none pointer-events-none"
                  />
                </div>
              </div>

              {/* Modal Action Footer controls */}
              <div className="p-5 border-t border-forest/5 bg-cream/20 flex flex-wrap gap-4 items-center justify-between shrink-0">
                {/* Zoom tools */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setZoomScale(Math.max(1, zoomScale - 0.25))}
                    disabled={zoomScale <= 1}
                    className="p-2 rounded-lg bg-forest/5 hover:bg-forest/10 text-forest disabled:opacity-40 transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setZoomScale(Math.min(2.5, zoomScale + 0.25))}
                    disabled={zoomScale >= 2.5}
                    className="p-2 rounded-lg bg-forest/5 hover:bg-forest/10 text-forest disabled:opacity-40 transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setZoomScale(1)}
                    className="px-3 py-2 rounded-lg bg-forest/5 hover:bg-forest/10 text-forest text-xs font-semibold font-sans transition-colors"
                    title="Reset Zoom"
                  >
                    Reset
                  </button>
                </div>

                {/* Primary Download trigger */}
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedResource(null);
                      setZoomScale(1);
                    }}
                    className="px-4 py-2.5 rounded-xl border border-forest/10 hover:bg-forest/5 text-forest text-xs font-bold font-sans transition-colors"
                  >
                    Close Preview
                  </button>
                  <button
                    onClick={() => handleDownload(selectedResource)}
                    className="px-6 py-2.5 bg-forest hover:bg-gold text-on-forest hover:text-forest text-xs font-bold font-sans rounded-xl shadow-md transition-colors duration-250 flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF / Image</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
