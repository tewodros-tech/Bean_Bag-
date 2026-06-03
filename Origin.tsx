import { Link } from "react-router-dom";
import { Mountain, Sun, Droplets, TreePine, Coffee, MapPin, ArrowRight } from "lucide-react";

export default function Origin() {
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
            Coffee Origin
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-coffee-50 mt-4 mb-8 leading-tight animate-fade-in-up">
            Ethiopian
            <br />
            <span className="italic text-coffee-300">Highlands</span>
          </h1>
          <p className="text-lg text-coffee-100/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            The birthplace of coffee. Discover the terroir that makes our beans
            exceptional.
          </p>
        </div>
      </section>

      {/* TERRITORY MAP */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">
                  Growing Region
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 mt-4 mb-8 leading-tight">
                  Ethiopia's Coffee Highlands
                </h2>
              </div>
              <p className="text-coffee-800/85 leading-relaxed text-lg">
                Our coffee is cultivated by small-scale farmers in traditional
                garden farms located at 1,900–2,200 meters above sea level in
                Ethiopia's highland regions.
              </p>
              <p className="text-coffee-700/80 leading-relaxed">
                The cool highland climate, natural shade trees, fertile soil, and
                balanced seasonal rainfall allow the coffee cherries to ripen
                slowly, developing refined and complex flavors.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-5 bg-white rounded-xl border border-coffee-200/50">
                  <div className="font-serif text-3xl text-coffee-700 mb-1">1,900m</div>
                  <div className="text-xs uppercase tracking-wider text-coffee-500">
                    Min Elevation
                  </div>
                </div>
                <div className="p-5 bg-white rounded-xl border border-coffee-200/50">
                  <div className="font-serif text-3xl text-coffee-700 mb-1">2,200m</div>
                  <div className="text-xs uppercase tracking-wider text-coffee-500">
                    Max Elevation
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/ethiopia-coffee.jpg"
                  alt="Ethiopian highlands"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8">
                <img
                  src="/images/ceremony.jpg"
                  alt="Coffee ceremony"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROWING CONDITIONS */}
      <section className="py-28 bg-coffee-900 text-coffee-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-400 font-medium">
              Growing Conditions
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
              Perfect Terroir
            </h2>
            <p className="text-coffee-200/80 max-w-2xl mx-auto">
              The unique combination of altitude, climate, and soil creates
              exceptional coffee with distinctive flavor profiles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mountain,
                title: "Altitude",
                value: "1,900–2,200m",
                desc: "High altitude slows ripening, concentrating flavors.",
              },
              {
                icon: Sun,
                title: "Climate",
                value: "Cool Highlands",
                desc: "Morning sun, afternoon mist for balanced development.",
              },
              {
                icon: Droplets,
                title: "Rainfall",
                value: "Balanced Seasonal",
                desc: "Distinct wet/dry seasons for optimal cherry maturity.",
              },
              {
                icon: TreePine,
                title: "Soil",
                value: "Volcanic Fertile",
                desc: "Rich volcanic soil adds minerals and complexity.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="p-6 bg-coffee-800/40 rounded-2xl border border-coffee-700/50 text-center hover:bg-coffee-800/60 transition-colors"
              >
                <c.icon className="w-10 h-10 text-coffee-300 mx-auto mb-4" />
                <div className="font-serif text-2xl text-coffee-200 mb-1">{c.value}</div>
                <div className="text-xs uppercase tracking-wider text-coffee-400 mb-3">{c.title}</div>
                <p className="text-coffee-200/80 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUP PROFILE */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">
              Tasting Experience
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 mt-4">
              Cup Profile
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Floral Aroma",
                desc: "Elegant jasmine and rose notes from slow fermentation.",
              },
              {
                title: "Bright Acidity",
                desc: "Lively and refreshing acidity that awakens the palate.",
              },
              {
                title: "Citrus & Fruit",
                desc: "Natural sweetness with hints of orange and berry.",
              },
              {
                title: "Smooth Finish",
                desc: "Clean, lingering aftertaste without bitterness.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="p-8 bg-white rounded-2xl border border-coffee-200/50 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-coffee-100 flex items-center justify-center mx-auto mb-5">
                  <Coffee className="w-7 h-7 text-coffee-700" />
                </div>
                <h3 className="font-serif text-xl text-coffee-900 mb-3">{p.title}</h3>
                <p className="text-coffee-700/80">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FARMER STORIES */}
      <section className="py-28 bg-coffee-100">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-coffee.jpg"
                  alt="Coffee farmer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-xs tracking-[0.3em] uppercase text-coffee-500 font-medium">
                Our Partners
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-coffee-900 leading-tight">
                Supporting Smallholder
                <br />
                <span className="italic text-coffee-600">Farmers</span>
              </h2>
              <p className="text-coffee-800/85 leading-relaxed">
                We work directly with small-scale farmers across Ethiopia's
                coffee-growing regions. These dedicated growers have cultivated
                coffee in traditional garden systems for generations.
              </p>
              <p className="text-coffee-700/80 leading-relaxed">
                By partnering directly with farmers, we ensure fair prices that
                support their families and communities while preserving Ethiopia's
                unique coffee heritage.
              </p>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-coffee-700 hover:text-coffee-900 font-semibold transition-colors"
                >
                  Learn more about our mission
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-coffee-900 text-coffee-50">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <MapPin className="w-12 h-12 text-coffee-400 mx-auto mb-5" />
          <h3 className="font-serif text-3xl md:text-4xl mb-5">
            Experience Ethiopian Terroir
          </h3>
          <p className="text-coffee-200/80 mb-8 max-w-xl mx-auto">
            Discover the unique flavors that only Ethiopian highland coffee can
            deliver.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-10 py-5 bg-coffee-500 hover:bg-coffee-400 text-coffee-50 font-semibold rounded-full transition-colors"
          >
            Shop Our Coffee
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}