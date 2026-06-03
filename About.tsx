import { Link } from "react-router-dom";
import { Coffee, Award, Heart, Leaf, Users, MapPin, Phone, Mail } from "lucide-react";

export default function About() {
  return (
    <div className="bg-coffee-50">
      {/* HERO */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ethiopia-coffee.jpg')" }}
        />
        <div className="absolute inset-0 bg-coffee-950/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-10 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-coffee-300 font-medium animate-fade-in">
            Our Story
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-coffee-50 mt-4 mb-8 leading-tight animate-fade-in-up">
            From Bean to Bag
            <br />
            <span className="italic text-coffee-300">Our Journey</span>
          </h1>
          <p className="text-lg text-coffee-100/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Dedicated to delivering premium Ethiopian coffee from origin to cup,
            with complete transparency and uncompromising quality.
          </p>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-start">
            <div className="space-y-8">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">
                  The Bean to Bag Story
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 mt-4 mb-8 leading-tight">
                  Premium Ethiopian Coffee
                  <br />
                  <span className="italic text-coffee-600">From Farm to You</span>
                </h2>
              </div>
              <div className="space-y-6 text-coffee-800/85 leading-relaxed">
                <p>
                  Bean to Bag Coffee is a specialty coffee roasting brand focused
                  on producing high-quality Ethiopian Arabica coffee. We source
                  premium green coffee beans from Ethiopian highland farmers,
                  roast them in small batches, and package them for sale to
                  consumers and cafés.
                </p>
                <p>
                  The name Bean to Bag represents the full coffee journey: Coffee
                  Bean → Roasting → Packaging → Customer. Every step is carefully
                  managed to ensure the highest quality and traceability from
                  farm to cup.
                </p>
                <p>
                  Our coffee is grown by small-scale farmers in traditional garden
                  farms across Ethiopia's highlands. These farmers cultivate
                  coffee under natural shade at elevations of 1,900–2,200 meters,
                  producing beans with exceptional complexity and terroir.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { num: "100%", label: "Arabica Beans" },
                  { num: "5+", label: "Origin Regions" },
                  { num: "10K+", label: "Happy Customers" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 bg-white rounded-xl border border-coffee-200/50">
                    <div className="font-serif text-3xl font-bold text-coffee-700">{s.num}</div>
                    <div className="text-xs uppercase tracking-wider text-coffee-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/ceremony.jpg"
                  alt="Coffee ceremony"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-6 rounded-2xl border border-coffee-200/50">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-coffee-600" />
                  <div className="font-medium text-coffee-900">Our Team</div>
                </div>
                <p className="text-sm text-coffee-700/80">
                  A dedicated team of coffee enthusiasts passionate about
                  quality and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES & PROCESS */}
      <section className="py-28 bg-coffee-900 text-coffee-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-400 font-medium">
              Our Values
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Why Choose Bean to Bag
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Women Empowerment",
                text: "We partner directly with Ethiopian women farmers, ensuring fair compensation and community support.",
              },
              {
                icon: Award,
                title: "Quality Guarantee",
                text: "Every batch is tested for flavor profile and consistency. 100% satisfaction guaranteed.",
              },
              {
                icon: Leaf,
                title: "Sustainable Craft",
                text: "Eco-friendly packaging and sourcing practices that protect our planet and communities.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="p-8 bg-coffee-800/40 rounded-2xl border border-coffee-700/50 hover:bg-coffee-800/60 transition-colors text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-coffee-700 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-coffee-200" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{v.title}</h3>
                <p className="text-coffee-100/80 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDER */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">
                Leadership
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 mt-4 mb-8 leading-tight">
                Meet Our Founder
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-coffee-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-coffee-700" />
                  </div>
                  <div>
                    <div className="font-medium text-coffee-900">Ethiopian Heritage</div>
                    <div className="text-coffee-700/80 text-sm">
                      Rooted in the traditions of Ethiopian coffee culture.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-coffee-100 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-coffee-700" />
                  </div>
                  <div>
                    <div className="font-medium text-coffee-900">Direct Relationships</div>
                    <div className="text-coffee-700/80 text-sm">
                      Working hand-in-hand with our farmer partners.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-coffee-100 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-coffee-700" />
                  </div>
                  <div>
                    <div className="font-medium text-coffee-900">Global Vision</div>
                    <div className="text-coffee-700/80 text-sm">
                      Bringing Ethiopian excellence to coffee lovers worldwide.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/founder.jpg"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-28 bg-coffee-100">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <Coffee className="w-12 h-12 text-coffee-600 mx-auto mb-5" />
          <h3 className="font-serif text-3xl md:text-4xl text-coffee-900 mb-5">
            Ready to Experience Premium Ethiopian Coffee?
          </h3>
          <p className="text-coffee-700/80 mb-8 max-w-xl mx-auto">
            Discover the true taste of Ethiopia in every cup. Freshly roasted,
            carefully packaged, and delivered directly to you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-coffee-700 hover:bg-coffee-600 text-coffee-50 font-semibold rounded-full transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}