"use client";

import Header from "@/components/Header";
import { useState } from "react";
import { MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", website: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-400 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all duration-200";

  return (
    <div>
      <Header />

    <section className=" py-4 my-4 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-amber-50 px-6 ">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-bold text-[#D4AF37] tracking-tight leading-tight mb-4">
              Contact Us
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-xs">
              We are committed to processing the information in order to contact
              you and talk about your project.
            </p>
          </div>

          <div className="space-y-5 pt-2">
            {[
              { icon: <MdOutlineEmail size={20} />, text: "info@sky-wings-eg.com" },
              {
                icon: <MdOutlineLocationOn size={20} />,
                text: (
                  <>
14 Ministers Square 1177  <br /> Sheraton Airport, Nozha, Cairo                 
                    Lake Leonardchester
                  </>
                ),
              },
              { icon: <MdOutlinePhone size={20} />, text: "+20 1018568892" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mt-0.5 text-orange-400 flex-shrink-0">
                  {item.icon}
                </span>
                <span className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <input
              type="url"
              name="company"
              placeholder="Company Name *"
              value={formData.website}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-xl text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
            style={{
              background: "linear-gradient(90deg, #9b59b6 0%, #e67e22 100%)",
            }}
          >
            {submitted ? "✓ Message Sent!" : "Submit"}
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}