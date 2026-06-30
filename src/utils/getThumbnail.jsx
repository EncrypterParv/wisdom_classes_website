import { useState, useEffect } from "react";

// Curated mathematics-themed default fallbacks matching the branding colors and themes
export const fallbackThumbnails = {
  // Class 11
  "limits": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
  "derivative": "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop",
  "pnc": "https://images.unsplash.com/photo-1453733190148-c44698c26588?q=80&w=600&auto=format&fit=crop",
  "quadratic": "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
  "binomial": "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=600&auto=format&fit=crop",
  "sequence": "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=600&auto=format&fit=crop",
  "lines": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
  "conic": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
  "relations": "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop",
  "complex": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
  "trig": "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop",

  // Class 12
  "probability": "https://images.unsplash.com/photo-1453733190148-c44698c26588?q=80&w=600&auto=format&fit=crop",
  "geometry3d": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
  "vector": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
  "diff-equations": "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=600&auto=format&fit=crop",
  "matrices": "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=600&auto=format&fit=crop",
  "continuity": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
  "inverse-trig": "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop",
  "integration": "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=600&auto=format&fit=crop",
  "differentiation-core": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
  "applications-of-derivatives": "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
  "linear-programming": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",

  // JEE Mathematics
  "jee-calculus": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
  "jee-coordinate": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
  "jee-algebra": "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
  "jee-vector-3d": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
  "jee-probability": "https://images.unsplash.com/photo-1453733190148-c44698c26588?q=80&w=600&auto=format&fit=crop",
  "jee-integration": "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=600&auto=format&fit=crop",
  "jee-differential-equations": "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=600&auto=format&fit=crop",
  "jee-quadratic": "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
  "jee-parabola": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
  "jee-ellipse": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
  "jee-logarithm": "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop",
  "jee-pair-of-lines": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
  "jee-graphs": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
  "pyq-integration": "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=600&auto=format&fit=crop",
  "pyq-differential-equations": "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=600&auto=format&fit=crop",
  "pyq-quadratic": "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
  "pyq-conics": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",

  // NDA Mathematics
  "nda-shortcuts-trig": "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop",
  "nda-algebra": "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
  "nda-calculus": "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=600&auto=format&fit=crop",
  "nda-probability-stats": "https://images.unsplash.com/photo-1453733190148-c44698c26588?q=80&w=600&auto=format&fit=crop",
  "nda-vectors-3d": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",

  // IPMAT Mathematics
  "ipmat-number-system": "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop",
  "ipmat-arithmetic": "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
  "ipmat-algebra": "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=600&auto=format&fit=crop",
  "ipmat-geometry-mensuration": "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=600&auto=format&fit=crop",
  "ipmat-pnc-probability": "https://images.unsplash.com/photo-1453733190148-c44698c26588?q=80&w=600&auto=format&fit=crop",

  // Global Default
  "default": "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop"
};

// Extracts YouTube video ID from a playlist or watch URL
export const extractVideoId = (url) => {
  if (!url) return null;
  
  // Try to find the v= parameter
  const watchRegex = /[?&]v=([^&#]*)/;
  const watchMatch = url.match(watchRegex);
  if (watchMatch && watchMatch[1]) {
    return watchMatch[1];
  }
  
  // Try to find list parameter (playlists)
  const listRegex = /[?&]list=([^&#]*)/;
  const listMatch = url.match(listRegex);
  if (listMatch && listMatch[1]) {
    return listMatch[1];
  }
  
  return null;
};

// Returns YouTube HQ thumbnail URL or falls back to key mapping
export const getThumbnail = (videoIdOrUrl, topicKey) => {
  let videoId = videoIdOrUrl;
  if (videoIdOrUrl && (videoIdOrUrl.includes("http://") || videoIdOrUrl.includes("https://"))) {
    videoId = extractVideoId(videoIdOrUrl);
  }
  
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }
  
  return fallbackThumbnails[topicKey] || fallbackThumbnails["default"];
};

// Reusable React Component for Premium Mathematical Card Thumbnails
export function MathThumbnail({ videoIdOrUrl, topicKey, alt, category, manualThumbnail, className, children }) {
  const videoId = videoIdOrUrl && (videoIdOrUrl.includes('youtube.com') || videoIdOrUrl.includes('youtu.be'))
    ? extractVideoId(videoIdOrUrl)
    : videoIdOrUrl;

  const getInitialSrc = () => {
    if (manualThumbnail) return manualThumbnail;
    if (videoId) return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    return fallbackThumbnails[topicKey] || fallbackThumbnails["default"];
  };

  const [imgSrc, setImgSrc] = useState(getInitialSrc);
  const [fallbackLevel, setFallbackLevel] = useState(0);

  const handleError = () => {
    if (manualThumbnail) return;
    if (fallbackLevel === 0 && videoId) {
      setImgSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
      setFallbackLevel(1);
    } else if (fallbackLevel < 2) {
      setImgSrc(fallbackThumbnails[topicKey] || fallbackThumbnails["default"]);
      setFallbackLevel(2);
    }
  };

  const handleLoad = (e) => {
    if (e.target.naturalWidth === 120) {
      handleError();
    }
  };

  return (
    <div className={`w-full h-48 overflow-hidden rounded-t-3xl bg-forest/5 shrink-0 relative ${className || ''}`}>
      <img
        src={imgSrc}
        alt={alt || "Chapter Thumbnail"}
        onError={handleError}
        onLoad={handleLoad}
        className="w-full h-48 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />
      {children}
    </div>
  );
}
