import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import svgPaths from "../../imports/Home/svg-1h660y2p13";

const allDestinations = [
  { id: "hurghada", name: "Hurghada", category: "Beach", tours: 45, rating: 4.8, description: "Famous for pristine beaches and vibrant coral reefs", image: "https://images.unsplash.com/photo-1665643956022-ee053e925743?q=80&w=800" },
  { id: "luxor", name: "Luxor", category: "Historical", tours: 38, rating: 4.9, description: "Home to ancient temples and Valley of the Kings", image: "https://images.unsplash.com/photo-1762945527140-4f45fcbf3c64?q=80&w=800" },
  { id: "aswan", name: "Aswan", category: "Nile", tours: 32, rating: 4.7, description: "Gateway to Nubian culture and Nile cruises", image: "https://images.unsplash.com/photo-1716639154156-db53b75a22ad?q=80&w=800" },
  { id: "cairo", name: "Cairo", category: "Historical", tours: 56, rating: 4.6, description: "Explore the pyramids and Egyptian Museum", image: "https://images.unsplash.com/photo-1541769740-098e80269166?q=80&w=800" },
  { id: "sharm-el-sheikh", name: "Sharm El Sheikh", category: "Beach", tours: 42, rating: 4.8, description: "Premier Red Sea resort with world-class diving", image: "https://images.unsplash.com/photo-1649103156470-7a818c99c744?q=80&w=800" },
  { id: "alexandria", name: "Alexandria", category: "Historical", tours: 28, rating: 4.5, description: "Mediterranean pearl with ancient library", image: "https://images.unsplash.com/photo-1708711973477-1373f8eb65db?q=80&w=800" },
  { id: "dahab", name: "Dahab", category: "Adventure", tours: 35, rating: 4.7, description: "Laid-back diving paradise and wind sports hub", image: "https://images.unsplash.com/photo-1682687981907-170c006e3744?q=80&w=800" },
  { id: "siwa", name: "Siwa Oasis", category: "Desert", tours: 18, rating: 4.9, description: "Remote desert oasis with unique culture", image: "https://images.unsplash.com/photo-1758720979620-26130f99de40?q=80&w=800" },
  { id: "white-desert", name: "White Desert", category: "Desert", tours: 15, rating: 5.0, description: "Surreal white rock formations and camping", image: "https://images.unsplash.com/photo-1771236584637-c5033ae67fdd?q=80&w=800" },
  { id: "marsa-alam", name: "Marsa Alam", category: "Beach", tours: 25, rating: 4.6, description: "Untouched beaches and pristine diving sites", image: "https://images.unsplash.com/photo-1738935457539-936fdb320c51?q=80&w=800" },
  { id: "abu-simbel", name: "Abu Simbel", category: "Historical", tours: 12, rating: 5.0, description: "Magnificent temples of Ramesses II", image: "https://images.unsplash.com/photo-1711098288782-f97d609288a8?q=80&w=800" },
  { id: "red-sea-riviera", name: "Red Sea Riviera", category: "Adventure", tours: 38, rating: 4.7, description: "Water sports and adventure activities hub", image: "https://images.unsplash.com/photo-1682687982468-4584ff11f88a?q=80&w=800" }
];

export function Destinations() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Beach", "Historical", "Adventure", "Nile", "Desert"];

  const filteredDestinations = activeFilter === "All"
    ? allDestinations
    : allDestinations.filter(dest => dest.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] mt-[80px] md:mt-[97px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1541769740-098e80269166?q=80&w=1920)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A5C]/80 to-[#2E86AB]/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[36px] md:text-[56px] font-bold text-white text-center mb-4"
          >
            Explore Egypt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[16px] md:text-[20px] text-white/90 text-center max-w-2xl"
          >
            Discover the most breathtaking destinations across Egypt
          </motion.p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[100px] py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-[14px] md:text-[16px] font-medium transition-all ${
                activeFilter === filter
                  ? "bg-[#F5A623] text-white shadow-lg"
                  : "bg-white text-[#1A3A5C] border-2 border-gray-200 hover:border-[#F5A623]"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link to={`/product/${destination.id}`}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="bg-white rounded-[15px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-[#F5A623]/60 transition-all duration-300" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <svg className="w-4 h-4" fill="#F5A623" viewBox="0 0 8.66667 8.24484">
                        <path d={svgPaths.p3c58f100} />
                      </svg>
                      <span className="text-[14px] font-semibold text-[#1A3A5C]">{destination.rating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#F5A623] text-white text-[12px] px-3 py-1 rounded-full">
                        {destination.tours} tours
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[20px] font-semibold text-[#1A3A5C] mb-2">{destination.name}</h3>
                    <p className="text-[14px] text-gray-600 mb-3 line-clamp-2">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-[#2E86AB] font-medium">{destination.category}</span>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="text-[#F5A623] text-[14px] font-medium flex items-center gap-1"
                      >
                        Explore
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[20px] text-gray-500">No destinations found in this category</p>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
