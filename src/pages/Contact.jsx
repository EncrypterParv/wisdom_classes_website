import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Class 11",
    message: "",
  });

  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = ["Class 11", "Class 12", "IIT-JEE", "NDA", "IPMAT"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Basic Validation
    if (!form.name || !form.email || !form.phone || !form.message) {
      setTimeout(() => {
        setIsSubmitting(false);
        setStatus("error");
      }, 800);
      return;
    }

    // Mock API Submit
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        course: "Class 11",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="pt-32 pb-24 bg-cream min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="mb-16">
          <span className="px-3.5 py-1 text-xs font-sans font-semibold uppercase tracking-wider text-forest bg-forest/5 rounded-full border border-forest/10">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-forest mt-4 mb-6">
            Inquire & Book a Demo
          </h1>
          <p className="max-w-2xl text-charcoal/80 text-base leading-relaxed font-sans">
            Have questions about admission batches, class schedule, doubt-clearing methods, or fees? Drop us a message or visit our campus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              
              {/* Phone Card */}
              <div className="bg-white p-6 rounded-3xl border border-forest/5 shadow-[0_10px_30px_rgba(27,62,43,0.02)] flex gap-5 items-center">
                <div className="w-12 h-12 rounded-2xl bg-forest text-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-forest">Call Us Direct</h4>
                  <a href="tel:+919634108610" className="font-sans text-sm text-charcoal/80 hover:text-gold transition-colors duration-300 mt-1 block">
                    +91 96341 08610
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white p-6 rounded-3xl border border-forest/5 shadow-[0_10px_30px_rgba(27,62,43,0.02)] flex gap-5 items-center">
                <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.65-4.223l.379.225c1.515.897 3.3 1.371 5.133 1.372 5.617 0 10.187-4.57 10.19-10.19.002-2.722-1.053-5.281-2.971-7.202-1.92-1.919-4.475-2.974-7.198-2.975-5.621 0-10.192 4.572-10.196 10.193-.001 1.895.493 3.748 1.43 5.378l.25.432-1.002 3.66 3.738-.98c1.472.804 3.125 1.228 4.816 1.228h-.005zm9.722-7.143c-.266-.134-1.57-.775-1.814-.863-.242-.089-.418-.134-.593.133-.176.268-.68.863-.834 1.042-.153.178-.308.201-.573.067-.266-.134-1.122-.414-2.138-1.321-.791-.705-1.325-1.576-1.48-1.843-.155-.267-.016-.411.118-.544.121-.119.266-.308.4-.462.133-.155.178-.263.266-.442.089-.178.045-.333-.023-.467-.067-.134-.593-1.428-.813-1.958-.214-.515-.45-.444-.619-.453-.16-.008-.343-.01-.527-.01-.184 0-.484.069-.738.347-.253.278-.968.947-.968 2.31 0 1.363.992 2.68 1.133 2.868.14.188 1.952 2.98 4.73 4.178.66.284 1.176.453 1.578.581.663.21 1.267.18 1.744.109.532-.08 1.57-.642 1.792-1.262.223-.62.223-1.152.156-1.262-.067-.109-.244-.177-.51-.312z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-forest">WhatsApp Chat</h4>
                  <a
                    href="https://wa.me/919634108610"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-green-600 hover:text-green-700 transition-colors duration-300 mt-1 block font-semibold"
                  >
                    +91 96341 08610
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-6 rounded-3xl border border-forest/5 shadow-[0_10px_30px_rgba(27,62,43,0.02)] flex gap-5 items-center">
                <div className="w-12 h-12 rounded-2xl bg-forest text-gold flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-forest">Email Inquiries</h4>
                  <a href="mailto:info@someshjainmaths.com" className="font-sans text-sm text-charcoal/80 hover:text-gold transition-colors duration-300 mt-1 block">
                    info@someshjainmaths.com
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white p-6 rounded-3xl border border-forest/5 shadow-[0_10px_30px_rgba(27,62,43,0.02)] flex flex-col gap-4">
                <div className="flex gap-5 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-forest text-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-forest">Our Campus</h4>
                    <p className="font-sans text-sm text-charcoal/80 mt-1 leading-relaxed">
                      Gate No. 3, Garden House Colony, 165/C, Near MPGS, Sector 6, Shastri Nagar, Meerut, Uttar Pradesh 250002
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 pt-2 border-t border-forest/5">
                  <a
                    href="https://maps.google.com/?q=Wisdom+Classes+of+Mathematics+Shastri+Nagar+Meerut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-forest hover:bg-forest-light text-cream font-sans font-medium text-xs rounded-xl shadow-md hover:shadow-lg text-center transition-all duration-300"
                  >
                    Open in Google Maps
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Wisdom+Classes+of+Mathematics+Shastri+Nagar+Meerut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-white hover:bg-cream-dark/30 text-forest border border-forest/15 font-sans font-medium text-xs rounded-xl text-center transition-all duration-300"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

            </div>

            {/* Google Map Container */}
            <div className="h-64 rounded-3xl overflow-hidden border border-forest/10 shadow-lg relative bg-white flex-grow">
              <iframe
                title="Somesh Jain Mathematics Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.415053073999!2d77.72750717596162!3d28.975005875480746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6444eb1c4639%3A0xe5dbdc1c448bb95b!2sShastri%20Nagar%2C%20Meerut%2C%20Uttar%20Pradesh%20250004!5e0!3m2!1sen!2sin!4v1718712345678!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-80"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-forest/5 shadow-[0_15px_40px_rgba(27,62,43,0.03)] flex flex-col justify-between">
            <h3 className="font-serif font-bold text-2xl text-forest mb-6">Send an Inquiry Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans font-semibold text-xs text-charcoal/70 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="px-4 py-3 rounded-xl bg-cream-light border border-forest/10 focus:border-forest outline-none transition-colors duration-300 font-sans text-sm text-charcoal"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans font-semibold text-xs text-charcoal/70 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-xl bg-cream-light border border-forest/10 focus:border-forest outline-none transition-colors duration-300 font-sans text-sm text-charcoal"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-sans font-semibold text-xs text-charcoal/70 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit mobile number"
                    className="px-4 py-3 rounded-xl bg-cream-light border border-forest/10 focus:border-forest outline-none transition-colors duration-300 font-sans text-sm text-charcoal"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="course" className="font-sans font-semibold text-xs text-charcoal/70 uppercase tracking-wider">
                    Select Target Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={form.course}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-xl bg-cream-light border border-forest/10 focus:border-forest outline-none transition-colors duration-300 font-sans text-sm text-charcoal cursor-pointer"
                  >
                    {courses.map((c) => (
                      <option key={c} value={c}>
                        {c} Mathematics
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Text Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-sans font-semibold text-xs text-charcoal/70 uppercase tracking-wider">
                  Inquiry Details / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you? Let us know if you want to book a demo."
                  className="px-4 py-3 rounded-xl bg-cream-light border border-forest/10 focus:border-forest outline-none transition-colors duration-300 font-sans text-sm text-charcoal resize-none"
                />
              </div>

              {/* Submit Feedback Notification Banner */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-green-50 text-green-800 border border-green-200 rounded-xl flex items-center gap-3 font-sans text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <span>Inquiry submitted successfully! We will contact you back in 24 hours.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-red-50 text-red-800 border border-red-200 rounded-xl flex items-center gap-3 font-sans text-sm"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span>Please fill in all the required input fields before sending.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-forest hover:bg-forest-light text-cream rounded-xl font-sans font-bold flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-gold fill-gold" />
                    <span>Submit Inquiry Form</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
