import { useState } from "react";
import { ShoppingBag, Plus, Minus } from "lucide-react";

type Product = {
  name: string;
  type: string;
  roast: string;
  notes: string[];
  grind: string[];
  packaging: string;
  sizes: string[];
  price: { size: string; price: string }[];
  img: string;
  description: string;
  details: string[];
};

const products: Product[] = [
  {
    name: "Caskara",
    type: "Dried Coffee Cherry",
    roast: "Unroasted",
    notes: ["Fruity", "Sweet", "Floral"],
    grind: [],
    packaging: "Orange matte",
    sizes: ["250g", "500g"],
    price: [
      { size: "250g", price: "ETB 120" },
      { size: "500g", price: "ETB 220" },
    ],
    img: "/images/product-1.jpg",
    description:
      "Caskara is made from the dried skin of coffee cherries. It produces a naturally sweet and fruity beverage with delicate floral notes.",
    details: [
      "Made from dried coffee cherry skins",
      "Naturally sweet and fruity",
      "Delicate floral notes",
      "Perfect for herbal tea enthusiasts",
    ],
  },
  {
    name: "Qalid's Choice",
    type: "House Blend - Ground Coffee",
    roast: "Medium-Dark",
    notes: ["Balanced", "Smooth", "Chocolate"],
    grind: ["Jebena", "French press", "Espresso"],
    packaging: "Warm brown kraft",
    sizes: ["250g", "500g", "1kg"],
    price: [
      { size: "250g", price: "ETB 180" },
      { size: "500g", price: "ETB 340" },
      { size: "1kg", price: "ETB 620" },
    ],
    img: "/images/product-2.jpg",
    description:
      "Qalid's Choice is our signature house blend designed for everyday coffee enjoyment. The medium-dark roast creates a balanced cup with smooth body and chocolate notes.",
    details: [
      "Our best-selling house blend",
      "Perfect for daily consumption",
      "Versatile for all brewing methods",
      "Medium-dark roast profile",
    ],
  },
  {
    name: "Chemina",
    type: "Whole Bean Coffee",
    roast: "Medium-Dark",
    notes: ["Bold", "Cocoa", "Roasted"],
    grind: [],
    packaging: "Black matte",
    sizes: ["250g", "500g", "1kg"],
    price: [
      { size: "250g", price: "ETB 200" },
      { size: "500g", price: "ETB 380" },
      { size: "1kg", price: "ETB 700" },
    ],
    img: "/images/product-3.jpg",
    description:
      "Chemina offers a bold coffee experience with a rich body and deep cocoa notes. The medium-dark roast is ideal for espresso and milk-based coffee drinks.",
    details: [
      "Bold and full-bodied",
      "Deep cocoa and chocolate notes",
      "Ideal for espresso drinks",
      "Perfect for milk-based beverages",
    ],
  },
  {
    name: "Origin Green",
    type: "Raw Green Coffee Beans",
    roast: "Unroasted",
    notes: [],
    grind: [],
    packaging: "Natural kraft",
    sizes: ["500g", "1kg", "5kg"],
    price: [
      { size: "500g", price: "ETB 150" },
      { size: "1kg", price: "ETB 280" },
      { size: "5kg", price: "ETB 1,200" },
    ],
    img: "/images/product-1.jpg",
    description:
      "Origin Green is raw, unroasted coffee beans for home roasters and cafés. Experience the pure origin flavor before roasting.",
    details: [
      "Premium Arabica green beans",
      "For home roasters",
      "Commercial café supply",
      "Maximum flavor control",
    ],
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>(products[0].sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);

  const product = products[selectedProduct];

  return (
    <div className="bg-coffee-50">
      {/* HERO */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/roasting.jpg')" }}
        />
        <div className="absolute inset-0 bg-coffee-950/80" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-10 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-coffee-300 font-medium animate-fade-in">
            Our Collection
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-coffee-50 mt-4 mb-8 leading-tight animate-fade-in-up">
            Bean to Bag
            <br />
            <span className="italic text-coffee-300">Coffee Products</span>
          </h1>
          <p className="text-lg text-coffee-100/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            From carefully sourced Ethiopian green beans to freshly roasted and
            professionally packaged coffee delivered to your door.
          </p>
        </div>
      </section>

      {/* PRODUCT DISPLAY */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16">
            {/* Sidebar */}
            <div>
              <h3 className="font-serif text-2xl text-coffee-900 mb-6">All Products</h3>
              <div className="space-y-3">
                {products.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedProduct(i);
                      setSelectedSize(p.sizes[0]);
                      setQuantity(1);
                    }}
                    className={`w-full text-left p-5 rounded-xl transition-all ${
                      selectedProduct === i
                        ? "bg-coffee-700 text-coffee-50 shadow-lg"
                        : "bg-white hover:bg-coffee-100 text-coffee-800 border border-coffee-200/50"
                    }`}
                  >
                    <div className="font-serif text-lg mb-1">{p.name}</div>
                    <div
                      className={`text-xs uppercase tracking-wider ${
                        selectedProduct === i ? "text-coffee-200" : "text-coffee-500"
                      }`}
                    >
                      {p.type} • {p.roast}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Detail */}
            <div>
              <div className="bg-white rounded-3xl border border-coffee-200/50 overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="aspect-square bg-coffee-100">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-serif text-3xl text-coffee-900">
                          {product.name}
                        </h3>
                        <span className="text-xs px-3 py-1 bg-coffee-100 text-coffee-700 rounded-full">
                          {product.type}
                        </span>
                      </div>
                      <p className="text-coffee-600 text-sm mb-5">{product.roast}</p>
                      <p className="text-coffee-700/85 leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {product.notes.length > 0 && (
                        <div className="mb-5">
                          <div className="text-xs uppercase tracking-wider text-coffee-500 mb-2">
                            Flavor Notes
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {product.notes.map((n) => (
                              <span
                                key={n}
                                className="text-xs px-3 py-1 bg-coffee-100 text-coffee-700 rounded-full"
                              >
                                {n}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {product.grind.length > 0 && (
                        <div className="mb-5">
                          <div className="text-xs uppercase tracking-wider text-coffee-500 mb-2">
                            Available Grind Options
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {product.grind.map((g) => (
                              <span
                                key={g}
                                className="text-xs px-3 py-1 bg-coffee-100 text-coffee-700 rounded-full"
                              >
                                {g}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mb-5">
                        <div className="text-xs uppercase tracking-wider text-coffee-500 mb-2">
                          Packaging
                        </div>
                        <div className="text-coffee-800 font-medium">
                          {product.packaging}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs uppercase tracking-wider text-coffee-500">
                          Details
                        </div>
                        <ul className="text-sm text-coffee-700/80 space-y-1">
                          {product.details.map((d) => (
                            <li key={d} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-coffee-500 rounded-full"></span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="border-t border-coffee-200 pt-6 mt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-xs uppercase tracking-wider text-coffee-500 mb-1">
                            Size
                          </div>
                          <div className="font-serif text-2xl text-coffee-700">
                            {product.price.find((p) => p.size === selectedSize)?.price || product.price[0].price}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-8 h-8 rounded-full bg-coffee-100 flex items-center justify-center"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center">{quantity}</span>
                          <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-8 h-8 rounded-full bg-coffee-100 flex items-center justify-center"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-6">
                        {product.sizes.map((s) => (
                          <button
                            key={s}
                            onClick={() => setSelectedSize(s)}
                            className={`flex-1 py-2 text-sm rounded-full border transition-all ${
                              selectedSize === s
                                ? "bg-coffee-700 text-coffee-50 border-coffee-700"
                                : "bg-white text-coffee-700 border-coffee-200 hover:border-coffee-400"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>

                      <button className="w-full py-4 bg-coffee-700 hover:bg-coffee-600 text-coffee-50 font-semibold rounded-full transition-colors flex items-center justify-center gap-2 text-lg">
                        <ShoppingBag className="w-5 h-5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHIPPING INFO */}
      <section className="py-20 bg-coffee-100">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Fresh Roasted",
                desc: "Roasted to order within 48 hours of shipping.",
              },
              {
                title: "Free Shipping",
                desc: "Available on orders over ETB 500.",
              },
              {
                title: "100% Guarantee",
                desc: "Love it or return it for a full refund.",
              },
            ].map((s) => (
              <div key={s.title} className="p-6 bg-white rounded-2xl border border-coffee-200/50">
                <div className="font-serif text-xl text-coffee-900 mb-2">{s.title}</div>
                <div className="text-coffee-700/80">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}