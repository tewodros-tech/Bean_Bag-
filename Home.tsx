import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Leaf, MapPin, Mail, Phone, Sparkles, Star, Award, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-coffee-50">
      {/* HERO WITH VIDEO BACKGROUND */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-coffee.jpg')" }}
        />
        <div className="absolute inset-0 bg-coffee-950/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-10 text-center pt-32 pb-28">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-coffee-700/50 border border-coffee-400/40 backdrop-blur-sm mb-10 animate-fade-in">
            <Sparkles className="w-4 h-4 text-coffee-200" />
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-100 font-medium">
              Premium Ethiopian Coffee • Direct Trade
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-coffee-50 leading-[1.05] mb-8 animate-fade-in-up">
            From Highland Farms
            <br />
            <span className="italic text-coffee-300">To Your Table</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-coffee-100/90 leading-relaxed mb-12 animate-fade-in-up animation-delay-200">
            Experience the soul of Ethiopia in every cup. Our 100% Arabica beans
            are grown at 1,900–2,200m in the highlands, then roasted fresh in
            small batches to deliver unparalleled flavor and aroma.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up animation-delay-400">
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-coffee-500 hover:bg-coffee-400 text-coffee-50 font-semibold text-lg rounded-full transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1"
            >
              Shop Premium Coffee
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/origin"
              className="inline-flex items-center gap-2 px-8 py-5 bg-transparent border-2 border-coffee-100/40 hover:bg-coffee-50/20 text-coffee-50 font-medium rounded-full backdrop-blur-sm transition-all duration-300"
            >
              Explore Origins
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-14 border-2 border-coffee-100/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-coffee-100/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-8 bg-coffee-800/20">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Award, value: "100%", label: "Ethiopian Arabica" },
              { icon: Star, value: "4.9/5", label: "Customer Rating" },
              { icon: Truck, value: "2-5", label: "Days Delivery" },
              { icon: Leaf, value: "100%", label: "Women-Sourced" },
            ].map((b, i) => (
              <div key={i} className="p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                <b.icon className="w-7 h-7 text-coffee-700 mx-auto mb-2" />
                <div className="font-serif text-2xl font-bold text-coffee-900">{b.value}</div>
                <div className="text-xs uppercase tracking-wider text-coffee-600">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-28 bg-coffee-50">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-coffee.jpg"
                  alt="Ethiopian coffee farmers"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-coffee-500 text-coffee-50 p-8 rounded-3xl shadow-xl max-w-[220px]">
                <div className="font-serif text-4xl font-bold mb-1">5+</div>
                <div className="text-sm text-coffee-50/90">
                  Premium Coffee Origins
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">
                Our Mission
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 leading-tight">
                Premium Coffee
                <br />
                <span className="italic text-coffee-600">From Bean to Bag</span>
              </h2>
              <p className="text-coffee-800/85 leading-relaxed text-lg">
                At Bean to Bag Coffee, we are dedicated to delivering high-quality
                Ethiopian coffee from origin to cup. Every step — from sourcing
                green beans to roasting and packaging — is carefully handled to
                ensure freshness and quality.
              </p>
              <p className="text-coffee-700/80 leading-relaxed">
                Our coffee is grown by small-scale farmers in traditional garden
                farms across Ethiopia's highlands. We believe in supporting these
                farmers with fair prices while delivering exceptional coffee to
                our customers worldwide.
              </p>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-coffee-700 hover:text-coffee-900 font-semibold transition-colors"
                >
                  Discover Our Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COFFEE QUALITY SHOWCASE */}
      <section className="py-28 bg-coffee-900 text-coffee-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-400 font-medium">
              Premium Quality
            </span>
            <h2 className="font-serif text-4xl md:text-6xl mt-4 mb-6">
              The Bean to Bag Difference
            </h2>
            <p className="text-coffee-200/80 max-w-2xl mx-auto text-lg">
              Every cup tells a story of excellence, from our highland farms to
              your final brew.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Coffee,
                title: "100% Arabica",
                desc: "Premium Arabica beans from Ethiopian highlands, grown at 1,900–2,200m elevation.",
              },
              {
                icon: Leaf,
                title: "Small Batch Roasted",
                desc: "Freshly roasted in small batches to preserve origin flavors and aromas.",
              },
              {
                icon: Award,
                title: "Medium-Dark Roast",
                desc: "Balanced acidity with rich chocolate and cocoa notes for perfect extraction.",
              },
              {
                icon: Truck,
                title: "Direct Delivery",
                desc: "Packaged and shipped directly from our roastery to your doorstep.",
              },
            ].map((q, i) => (
              <div
                key={i}
                className="p-8 bg-coffee-800/40 rounded-2xl border border-coffee-700/50 hover:bg-coffee-800/60 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-coffee-600/50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <q.icon className="w-7 h-7 text-coffee-300" />
                </div>
                <h3 className="font-serif text-xl mb-3">{q.title}</h3>
                <p className="text-coffee-200/80 text-sm leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-28 bg-coffee-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">
              Customer Favorites
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 mt-4">
              Best Selling Coffee
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Caskara",
                tag: "Dried Cherry",
                notes: ["Fruity", "Sweet", "Floral"],
                price: "ETB 120 / 250g",
                img: "/images/product-1.jpg",
              },
              {
                name: "Qalid's Choice",
                tag: "House Blend",
                notes: ["Balanced", "Chocolate", "Smooth"],
                price: "ETB 180 / 250g",
                img: "/images/product-2.jpg",
              },
              {
                name: "Chemina",
                tag: "Whole Bean",
                notes: ["Bold", "Cocoa", "Rich"],
                price: "ETB 200 / 250g",
                img: "/images/product-3.jpg",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square bg-coffee-200">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-2xl text-coffee-900">{p.name}</h3>
                    <span className="text-xs px-3 py-1 bg-coffee-100 text-coffee-700 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.notes.map((n) => (
                      <span
                        key={n}
                        className="text-xs px-2 py-0.5 bg-coffee-100 text-coffee-700 rounded-full"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                  <div className="text-lg font-serif text-coffee-700 mb-5">{p.price}</div>
                  <Link
                    to="/products"
                    className="block text-center w-full py-3 bg-coffee-900 hover:bg-coffee-700 text-coffee-50 font-medium rounded-full transition-colors"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROASTING PROCESS */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">
                The Craft
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 leading-tight">
                Our Roasting
                <br />
                <span className="italic text-coffee-600">Process</span>
              </h2>
              <p className="text-coffee-800/85 leading-relaxed">
                We roast our coffee in small batches at our roastery in Addis
                Ababa, ensuring each cup is fresh and delicious. The process
                follows traditional Ethiopian methods while incorporating modern
                precision.
              </p>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Green Bean Selection", desc: "Hand-picked premium Arabica beans" },
                  { step: "2", title: "Roasting", desc: "Medium-dark roast for balanced flavor" },
                  { step: "3", title: "Cooling", desc: "Quick cooling to lock in aromatics" },
                  { step: "4", title: "Packaging", desc: "One-way valve bags for freshness" },
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-coffee-700 text-coffee-50 flex items-center justify-center font-bold shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <div className="font-serif text-lg text-coffee-900">{s.title}</div>
                      <div className="text-coffee-700/80">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/roasting.jpg"
                  alt="Coffee roasting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8">
                <img
                  src="/images/cafe-interior.jpg"
                  alt="Café interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAFÉ & LOCATIONS */}
      <section className="py-28 bg-coffee-900 text-coffee-50">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-400 font-medium">
              Visit Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">
              Our Café in Addis Ababa
            </h2>
            <p className="text-coffee-200/80 max-w-2xl mx-auto mt-5">
              Experience authentic Ethiopian coffee culture in our cozy café.
              Meet our team of baristas and savor premium single-origin brews.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/cafe-interior.jpg"
                alt="Bean to Bag Café"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-coffee-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-coffee-300">Address</div>
                    <div className="text-coffee-100/80">
                      Kera Workers Promise Bldg, Addis Ababa, Ethiopia
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-coffee-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-coffee-300">Phone</div>
                    <div className="text-coffee-100/80">+251 912 345 678</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-coffee-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-coffee-300">Email</div>
                    <div className="text-coffee-100/80">info@beantobagcoffee.com</div>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-coffee-500 hover:bg-coffee-400 text-coffee-50 font-medium rounded-full transition-colors"
              >
                Get Directions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-28 bg-coffee-50">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-coffee-200/50">
            <Coffee className="w-12 h-12 text-coffee-600 mx-auto mb-5" />
            <h3 className="font-serif text-3xl md:text-4xl text-coffee-900 mb-5">
              Join the Bean to Bag Family
            </h3>
            <p className="text-coffee-700/80 mb-8 max-w-md mx-auto">
              Subscribe for fresh roasts, brewing tips, and stories from our
              farmers. Get 10% off your first order.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-4 rounded-full bg-coffee-50 border border-coffee-200 text-coffee-900 placeholder:text-coffee-400 focus:outline-none focus:border-coffee-500"
              />
              <button className="px-8 py-4 bg-coffee-700 hover:bg-coffee-600 text-coffee-50 font-medium rounded-full transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}