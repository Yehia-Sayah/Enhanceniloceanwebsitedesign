import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import svgPaths from "../../imports/Home/svg-1h660y2p13";
import imgImage5 from "../../imports/Home/d6358b5e87f7c86d5cd1340331fa39e61ace9f91.png";
import imgBatchDsc03961 from "../../imports/Home/4a2dc3b3f50786cbda4280945d9fe973a8f2d163.png";
import imgUnsplashK1XjZeLq3No from "../../imports/Home/4914b8c0b2e259256dde8955cfe8c3fc7a161eef.png";
import imgImage6 from "../../imports/Home/83799e7562cc4910d4ad3192857b9bf354ef34c8.png";
import imgImage7 from "../../imports/Home/67c4cb5ae7ce4bc936905659a319c25e339b77bc.png";
import imgPhEmad from "../../imports/Home/647afe4856e73ee76d8015509931310a1e5ebb3e.png";

const productData: any = {
  "nile-cruise": {
    title: "4-Night Nile Cruise",
    location: "Luxor to Aswan",
    rating: 4.9,
    reviews: 360,
    price: 340,
    images: [imgImage5, "https://images.unsplash.com/photo-1716639154156-db53b75a22ad?q=80&w=1920", "https://images.unsplash.com/photo-1762945527140-4f45fcbf3c64?q=80&w=1920"],
    description: "Experience the magic of ancient Egypt on this luxurious 4-night Nile cruise from Luxor to Aswan. Visit iconic temples, enjoy world-class hospitality, and sail through breathtaking landscapes.",
    duration: "4 Days / 5 Nights",
    maxGuests: 20,
    itinerary: [
      { day: 1, title: "Luxor - Embarkation", description: "Board your cruise ship in Luxor. Visit Karnak Temple and Luxor Temple. Overnight in Luxor." },
      { day: 2, title: "Valley of the Kings", description: "Explore the Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon. Sail to Edfu." },
      { day: 3, title: "Edfu & Kom Ombo", description: "Visit the Temple of Horus in Edfu and the dual temple of Kom Ombo. Sail to Aswan." },
      { day: 4, title: "Aswan Highlights", description: "Tour the High Dam, Unfinished Obelisk, and Philae Temple. Optional trip to Abu Simbel." }
    ],
    included: ["4-night cruise accommodation", "All meals onboard", "Expert Egyptologist guide", "All entrance fees to sites", "Airport transfers"],
    excluded: ["International flights", "Personal expenses", "Optional Abu Simbel trip ($95)", "Gratuities"]
  },
  "super-safari": {
    title: "Desert Super Safari",
    location: "Hurghada",
    rating: 4.8,
    reviews: 133,
    price: 25,
    images: [imgBatchDsc03961, "https://images.unsplash.com/photo-1771236584637-c5033ae67fdd?q=80&w=1920", "https://images.unsplash.com/photo-1758720979620-26130f99de40?q=80&w=1920"],
    description: "Embark on an adrenaline-pumping adventure through the Egyptian desert. Experience quad biking, 4x4 rides, Bedouin culture, and unforgettable sunset views.",
    duration: "1 Day (6 hours)",
    maxGuests: 15,
    itinerary: [
      { day: 1, title: "Desert Adventure", description: "Hotel pickup, 4x4 desert drive, quad biking experience, Bedouin village visit, traditional tea, sunset viewing, and return to hotel." }
    ],
    included: ["Hotel pickup & drop-off", "4x4 desert vehicle", "Quad bike rental", "Bedouin tea & snacks", "Professional guide"],
    excluded: ["Personal expenses", "Photos & videos", "Scarves & goggles (available for purchase)"]
  },
  default: {
    title: "Egyptian Adventure",
    location: "Egypt",
    rating: 4.7,
    reviews: 100,
    price: 99,
    images: ["https://images.unsplash.com/photo-1541769740-098e80269166?q=80&w=1920", "https://images.unsplash.com/photo-1762945527140-4f45fcbf3c64?q=80&w=1920"],
    description: "Discover the wonders of ancient Egypt with this immersive tour experience.",
    duration: "Varies",
    maxGuests: 20,
    itinerary: [{ day: 1, title: "Tour Day", description: "Full day tour of incredible Egyptian sites." }],
    included: ["Guide", "Entrance fees", "Transportation"],
    excluded: ["Meals", "Personal expenses"]
  }
};

const reviews = [
  { name: "Sarah Johnson", avatar: imgPhEmad, rating: 5, date: "2 weeks ago", text: "Absolutely amazing experience! The cruise was luxurious, the food was excellent, and our guide was incredibly knowledgeable. Highly recommend!" },
  { name: "Michael Chen", avatar: imgPhEmad, rating: 5, date: "1 month ago", text: "Best decision we made for our Egypt trip. The temples were breathtaking and the cruise staff went above and beyond." },
  { name: "Emma Williams", avatar: imgPhEmad, rating: 4, date: "2 months ago", text: "Great trip overall. The only minor issue was the timing of some excursions, but everything else was perfect!" },
  { name: "Ahmed Hassan", avatar: imgPhEmad, rating: 5, date: "3 months ago", text: "As an Egyptian, I was proud to show my foreign friends this experience. They absolutely loved it!" }
];

const relatedProducts = [
  { id: "hot-air-balloon", title: "Hot Air Balloon Ride", location: "Luxor", price: 100, rating: 4.4, image: imgUnsplashK1XjZeLq3No },
  { id: "hula-hula", title: "Hula Hula Island Trip", location: "Hurghada", price: 20, rating: 5.0, image: imgImage6 },
  { id: "diving", title: "Red Sea Diving", location: "Hurghada", price: 46, rating: 4.3, image: imgImage7 }
];

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "included" | "reviews">("overview");
  const [selectedImage, setSelectedImage] = useState(0);
  const [guests, setGuests] = useState(2);

  const product = id && productData[id] ? productData[id] : productData.default;
  const totalPrice = product.price * guests;

  const tabs = [
    { id: "overview" as const, label: "Overview" },
    { id: "itinerary" as const, label: "Itinerary" },
    { id: "included" as const, label: "What's Included" },
    { id: "reviews" as const, label: `Reviews (${product.reviews})` }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navbar />

      <div className="mt-[80px] md:mt-[97px] max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[100px] py-8 md:py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#1A3A5C] mb-6 hover:text-[#F5A623] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[16px] font-medium">Back</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="relative rounded-[20px] overflow-hidden mb-4">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={product.images[selectedImage]}
                    alt={product.title}
                    className="w-full h-[300px] md:h-[500px] object-cover"
                  />
                </AnimatePresence>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img: string, index: number) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-[#F5A623]" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Title & Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-[28px] md:text-[36px] font-bold text-[#1A3A5C] mb-2">{product.title}</h1>
                  <p className="text-[16px] md:text-[18px] text-[#2E86AB] flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {product.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-[#F5A623] text-white px-4 py-2 rounded-full">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 8.66667 8.24484">
                    <path d={svgPaths.p3c58f100} />
                  </svg>
                  <span className="font-bold">{product.rating}</span>
                  <span className="text-sm">({product.reviews})</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-[14px] text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {product.duration}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Max {product.maxGuests} guests
                </div>
              </div>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="border-b border-gray-200 mb-6">
                <div className="flex gap-6 overflow-x-auto">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      whileHover={{ y: -2 }}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-4 px-2 text-[16px] font-medium whitespace-nowrap transition-colors relative ${
                        activeTab === tab.id ? "text-[#F5A623]" : "text-gray-600 hover:text-[#1A3A5C]"
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F5A623]"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "overview" && (
                    <div className="prose max-w-none">
                      <p className="text-[16px] text-gray-700 leading-relaxed">{product.description}</p>
                    </div>
                  )}

                  {activeTab === "itinerary" && (
                    <div className="space-y-6">
                      {product.itinerary.map((item: any, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex gap-4"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-[#F5A623] text-white rounded-full flex items-center justify-center font-bold">
                            {item.day}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-[18px] font-semibold text-[#1A3A5C] mb-2">{item.title}</h4>
                            <p className="text-[14px] text-gray-600">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === "included" && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-[18px] font-semibold text-[#1A3A5C] mb-4 flex items-center gap-2">
                          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Included
                        </h4>
                        <ul className="space-y-2">
                          {product.included.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-[14px] text-gray-700">
                              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[18px] font-semibold text-[#1A3A5C] mb-4 flex items-center gap-2">
                          <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Not Included
                        </h4>
                        <ul className="space-y-2">
                          {product.excluded.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-[14px] text-gray-700">
                              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === "reviews" && (
                    <div className="space-y-6">
                      {reviews.map((review, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 rounded-lg p-6"
                        >
                          <div className="flex items-center gap-4 mb-3">
                            <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                            <div className="flex-1">
                              <h5 className="font-semibold text-[#1A3A5C]">{review.name}</h5>
                              <p className="text-[12px] text-gray-500">{review.date}</p>
                            </div>
                            <div className="flex gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <svg key={i} className="w-4 h-4" fill="#F5A623" viewBox="0 0 8.66667 8.24484">
                                  <path d={svgPaths.p3c58f100} />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <p className="text-[14px] text-gray-700">{review.text}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 bg-gray-200 rounded-[15px] h-[300px] flex items-center justify-center"
            >
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-500">Interactive Map</p>
              </div>
            </motion.div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-[120px]"
            >
              <div className="bg-white border-2 border-gray-200 rounded-[20px] p-6 shadow-lg">
                <div className="mb-6">
                  <p className="text-[14px] text-gray-600 mb-1">From</p>
                  <p className="text-[36px] font-bold text-[#1A3A5C]">${product.price}</p>
                  <p className="text-[12px] text-gray-500">per person</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-[14px] font-medium text-[#1A3A5C] mb-2">Number of Guests</label>
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </motion.button>
                      <span className="text-[20px] font-semibold text-[#1A3A5C] w-12 text-center">{guests}</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setGuests(Math.min(product.maxGuests, guests + 1))}
                        className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[16px] text-gray-700">${product.price} × {guests} guests</span>
                    <span className="text-[18px] font-semibold text-[#1A3A5C]">${totalPrice}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(245, 166, 35, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#F5A623] text-white py-4 rounded-lg font-semibold text-[16px] mb-3"
                >
                  Book Now
                </motion.button>
                <p className="text-[12px] text-gray-500 text-center">You won't be charged yet</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#1A3A5C] mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((related, index) => (
              <Link key={related.id} to={`/product/${related.id}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white rounded-[15px] overflow-hidden shadow-lg cursor-pointer"
                >
                  <img src={related.image} alt={related.title} className="w-full h-[200px] object-cover" />
                  <div className="p-4">
                    <h3 className="text-[18px] font-semibold text-[#1A3A5C] mb-1">{related.title}</h3>
                    <p className="text-[14px] text-gray-600 mb-3">{related.location}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[20px] font-bold text-[#1A3A5C]">${related.price}</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="#F5A623" viewBox="0 0 8.66667 8.24484">
                          <path d={svgPaths.p3c58f100} />
                        </svg>
                        <span className="text-[14px] font-medium">{related.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
