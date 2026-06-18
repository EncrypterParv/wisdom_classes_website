import { Star } from "lucide-react";

const row1 = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Class 12 Student",
    text: "Somesh Sir helped me improve my mathematics score significantly. His focus on step-by-step logical derivation completely changed how I tackle complex calculus questions.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Class 11 Foundation",
    text: "I gained a much better conceptual understanding of coordinate geometry here. Instead of formula cramming, we learn how to visualize math geometrically.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Rohan Malhotra",
    role: "IIT-JEE Ranker",
    text: "Excellent JEE preparation guidance. The mock tests, advanced mathematics problem sets, and shortcut techniques were instrumental in my rank selection.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Diya Iyer",
    role: "IPMAT Aspirant",
    text: "Somesh Sir is a highly supportive and motivating mentor. He is always there to guide us, boost our exam confidence, and keep us focused on our goals.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

const row2 = [
  {
    id: 5,
    name: "Kabir Verma",
    role: "JEE Main Aspirant",
    text: "The personalized doubt-solving sessions resolved all my bottlenecks. Sir takes time out for every student to clear their concepts individually.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Ananya Sen",
    role: "Class 12 Board Topper",
    text: "My score improved significantly from a 70 to a perfect 98 in boards. The revision classes and concept sheets are extremely well-structured.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Vikram Rathore",
    role: "NDA Cadet",
    text: "Superb NDA prep. The speed math and visual calculation tricks taught by Somesh Sir saved me valuable time in the actual examination.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Sneha Mehta",
    role: "IPMAT Selected Student",
    text: "The concept-based teaching methodology here is unmatched. It gave me a strong foundation in modern algebra and logical quantitative reasoning.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
  }
];

function Card({ item }) {
  return (
    <div className="w-[350px] md:w-[400px] shrink-0 bg-white p-8 rounded-3xl border border-forest/5 shadow-[0_10px_35px_rgba(27,62,43,0.02)] flex flex-col justify-between gap-6 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
      <div>
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
          ))}
        </div>
        <p className="text-charcoal/85 text-sm md:text-base leading-relaxed italic font-sans">
          "{item.text}"
        </p>
      </div>
      <div className="flex items-center gap-4 pt-4 border-t border-forest/5">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gold/40 shadow-sm"
          loading="lazy"
        />
        <div>
          <h4 className="font-serif font-bold text-forest text-base leading-none">
            {item.name}
          </h4>
          <p className="text-xs font-sans text-gold font-semibold mt-1">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialCard() {
  return (
    <section id="testimonials" className="py-24 bg-cream-dark/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <span className="px-3.5 py-1 text-xs font-sans font-semibold uppercase tracking-wider text-forest bg-forest/5 rounded-full border border-forest/10">
          Student Voices
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest mt-4 mb-6">
          Loved by Thousands of Achievers
        </h2>
        <p className="max-w-2xl mx-auto text-charcoal/80 text-base leading-relaxed font-sans">
          Hear directly from students and parents who cracked JEE, secured admission in premium IIMs, entered defence academies, and excelled in board examinations.
        </p>
      </div>

      {/* Testimonials Wall container with infinite horizontal scroll */}
      <div className="flex flex-col gap-8 w-full overflow-hidden relative py-4 mask-gradient">
        {/* Row 1: Left scrolling */}
        <div className="flex w-max gap-8 animate-infinite-scroll">
          {row1.map((item) => (
            <Card key={item.id} item={item} />
          ))}
          {/* Duplicate for infinite effect */}
          {row1.map((item) => (
            <Card key={`dup1-${item.id}`} item={item} />
          ))}
        </div>

        {/* Row 2: Right scrolling (by reversing/offsetting slightly, or standard left with reverse CSS) */}
        <div className="flex w-max gap-8 animate-infinite-scroll [animation-direction:reverse]">
          {row2.map((item) => (
            <Card key={item.id} item={item} />
          ))}
          {/* Duplicate for infinite effect */}
          {row2.map((item) => (
            <Card key={`dup2-${item.id}`} item={item} />
          ))}
        </div>
      </div>

      {/* Decorative gradient masks at left/right edges */}
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-cream to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-cream to-transparent pointer-events-none z-10" />
    </section>
  );
}
