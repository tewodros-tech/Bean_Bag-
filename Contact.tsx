import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, Coffee } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const offices = [
    {
      title: "Ethiopia (Headquarters)",
      address: "Kera Workers Promise Bldg, Addis Ababa, Ethiopia",
      phone: "+251 912 345 678",
      email: "info@beantobagcoffee.com",
    },
    {
      title: "United States",
      address: "Sterling, VA 20164, USA",
      phone: "+1 703-555-0123",
      email: "info@beantobagcoffee.com",
    },
    {
      title: "Middle East",
      address: "Dubai, UAE",
      phone: "+971 50 123 4567",
      email: "info@beantobagcoffee.com",
    },
  ];

  return (
    <div className="bg-coffee-50">
      {/* HERO */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cafe-interior.jpg')" }}
        />
        <div className="absolute inset-0 bg-coffee-950/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-10 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-coffee-300 font-medium animate-fade-in">
            Get in Touch
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-coffee-50 mt-4 mb-8 leading-tight animate-fade-in-up">
            Contact
            <span className="italic text-coffee-300"> Bean to Bag</span>
          </h1>
          <p className="text-lg text-coffee-100/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Have questions about our coffee, wholesale inquiries, or want to
            visit our café? We're here to help.
          </p>
        </div>
      </section>

      {/* OFFICES */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">
              Our Locations
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 mt-4">
              Find Us Worldwide
            </h2>
            <p className="text-coffee-700/80 max-w-2xl mx-auto mt-5">
              We have offices across three continents, bringing Ethiopian coffee
              excellence to coffee lovers around the globe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((o) => (
              <div
                key={o.title}
                className="p-8 bg-white rounded-2xl border border-coffee-200/50 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-coffee-100 flex items-center justify-center mb-5">
                  <MapPin className="w-7 h-7 text-coffee-700" />
                </div>
                <h3 className="font-serif text-xl text-coffee-900 mb-4">{o.title}</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-coffee-500 mt-0.5 shrink-0" />
                    <span className="text-coffee-700/80">{o.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-coffee-500 shrink-0" />
                    <a
                      href={`tel:${o.phone.replace(/\s/g, "")}`}
                      className="text-coffee-800 hover:text-coffee-700"
                    >
                      {o.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-coffee-500 shrink-0" />
                    <a
                      href={`mailto:${o.email}`}
                      className="text-coffee-800 hover:text-coffee-700 break-all"
                    >
                      {o.email}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-28 bg-coffee-100">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">
                Send a Message
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 mt-4 mb-8 leading-tight">
                Let's Connect
              </h2>
              <p className="text-coffee-800/80 mb-10">
                Whether you're a coffee lover, a wholesale buyer, or simply
                curious about our story — we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-coffee-200/50">
                  <div className="w-14 h-14 rounded-2xl bg-coffee-700 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-coffee-50" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-coffee-500">
                      Email
                    </div>
                    <a
                      href="mailto:info@beantobagcoffee.com"
                      className="text-lg font-medium text-coffee-900 hover:text-coffee-700"
                    >
                      info@beantobagcoffee.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-coffee-200/50">
                  <div className="w-14 h-14 rounded-2xl bg-coffee-700 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-coffee-50" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-coffee-500">
                      Call
                    </div>
                    <a
                      href="tel:+251912345678"
                      className="text-lg font-medium text-coffee-900 hover:text-coffee-700"
                    >
                      +251 912 345 678
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-10 rounded-3xl border border-coffee-200/50 shadow-lg"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-coffee-900 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-coffee-50 border border-coffee-200 focus:outline-none focus:border-coffee-500 text-coffee-900"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-coffee-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-coffee-50 border border-coffee-200 focus:outline-none focus:border-coffee-500 text-coffee-900"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-coffee-50 border border-coffee-200 focus:outline-none focus:border-coffee-500 text-coffee-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-coffee-50 border border-coffee-200 focus:outline-none focus:border-coffee-500 text-coffee-900"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-coffee-900 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-coffee-50 border border-coffee-200 focus:outline-none focus:border-coffee-500 text-coffee-900 resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-coffee-700 hover:bg-coffee-600 text-coffee-50 font-semibold rounded-full transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  {submitted ? (
                    <>Message Sent!</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {submitted && (
                  <p className="text-center text-coffee-600 font-medium">
                    Thank you! We'll respond within 24 hours.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CAFÉ VISIT */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="bg-white rounded-3xl border border-coffee-200/50 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12">
                <Coffee className="w-12 h-12 text-coffee-600 mb-5" />
                <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">
                  Visit Our Café
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-coffee-900 mt-4 mb-6 leading-tight">
                  Experience Coffee Culture
                </h2>
                <p className="text-coffee-700/80 mb-6">
                  Drop by our cozy café in Addis Ababa for a freshly brewed cup
                  and meet our team of baristas. We can't wait to welcome you.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-coffee-500 mt-0.5 shrink-0" />
                    <span className="text-coffee-800">
                      Kera Workers Promise Bldg, Addis Ababa, Ethiopia
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-coffee-500 shrink-0" />
                    <span className="text-coffee-800">+251 912 345 678</span>
                  </div>
                </div>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-coffee-700 hover:bg-coffee-600 text-coffee-50 font-medium rounded-full transition-colors"
                >
                  Get Directions
                </Link>
              </div>
              <div className="aspect-[16/9] lg:aspect-auto lg:h-auto">
                <img
                  src="/images/cafe-interior.jpg"
                  alt="Bean to Bag Café"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}