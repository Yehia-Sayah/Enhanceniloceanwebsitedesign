import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import svgPaths from "../../imports/Home/svg-1h660y2p13";

const allStays = [
  { id: "hurghada-resort", name: "Steigenberger Aqua Magic", location: "Hurghada", stars: 5, price: 120, rating: 4.8, reviews: 1250, amenities: ["WiFi", "Pool", "Spa", "Beach"], image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800" },
  { id: "luxor-winter", name: "Sofitel Winter Palace", location: "Luxor", stars: 5, price: 150, rating: 4.9, reviews: 890, amenities: ["WiFi", "Pool", "Restaurant", "Historic"], image: "https://images.unsplash.com/photo-1627482582643-fb5147b99743?q=80&w=800" },
  { id: "cairo-marriott", name: "Cairo Marriott Hotel & Casino", location: "Cairo", stars: 5, price: 135, rating: 4.7, reviews: 2150, amenities: ["WiFi", "Pool", "Casino", "Spa"], image: "https://images.unsplash.com/photo-1642012609270-71e97d38e602?q=80&w=800" },
  { id: "aswan-old-cataract", name: "Sofitel Legend Old Cataract", location: "Aswan", stars: 5, price: 180, rating: 4.9, reviews: 765, amenities: ["WiFi", "Pool", "Spa", "Historic"], image: "https://images.unsplash.com/photo-1648660998646-dfc098d81e47?q=80&w=800" },
  { id: "sharm-four-seasons", name: "Four Seasons Resort", location: "Sharm El Sheikh", stars: 5, price: 250, rating: 4.9, reviews: 1580, amenities: ["WiFi", "Pool", "Spa", "Beach", "Diving"], image: "https://images.unsplash.com/photo-1665643956022-ee053e925743?q=80&w=800" },
  { id: "cairo-fairmont", name: "Fairmont Nile City", location: "Cairo", stars: 5, price: 140, rating: 4.8, reviews: 1820, amenities: ["WiFi", "Pool", "Spa", "Gym"], image: "https://images.unsplash.com/photo-1690548116237-c014e5b534a8?q=80&w=800" },
  { id: "dahab-boutique", name: "Bedouin Moon Hotel", location: "Dahab", stars: 3, price: 45, rating: 4.6, reviews: 425, amenities: ["WiFi", "Beach", "Restaurant"], image: "https://images.unsplash.com/photo-1649103156470-7a818c99c744?q=80&w=800" },
  { id: "alexandria-hilton", name: "Hilton Alexandria Corniche", location: "Alexandria", stars: 5, price: 95, rating: 4.5, reviews: 980, amenities: ["WiFi", "Pool", "Beach", "Restaurant"], image: "https://images.unsplash.com/photo-1708711973477-1373f8eb65db?q=80&w=800" },
  { id: "hurghada-grand", name: "Grand Resort Hurghada", location: "Hurghada", stars: 4, price: 80, rating: 4.4, reviews: 1120, amenities: ["WiFi", "Pool", "Beach", "All-Inclusive"], image: "https://images.unsplash.com/photo-1738935457539-936fdb320c51?q=80&w=800" },
  { id: "marsa-alam-boutique", name: "Marsa Shagra Eco-Village", location: "Marsa Alam", stars: 3, price: 60, rating: 4.7, reviews: 380, amenities: ["Beach", "Diving", "Eco-Friendly"], image: "https://images.unsplash.com/photo-1682687982468-4584ff11f88a?q=80&w=800" },
  { id: "siwa-lodge", name: "Adrere Amellal", location: "Siwa Oasis", stars: 4, price: 200, rating: 5.0, reviews: 156, amenities: ["Restaurant", "Spa", "Desert", "Eco-Friendly"], image: "https://images.unsplash.com/photo-1758720979620-26130f99de40?q=80&w=800" },
  { id: "luxor-sonesta", name: "Sonesta St. George Hotel", location: "Luxor", stars: 5, price: 110, rating: 4.6, reviews: 720, amenities: ["WiFi", "Pool", "Restaurant", "Nile View"], image: "https://images.unsplash.com/photo-1762858341012-3664a9b434c4?q=80&w=800" }
];

export function Stays() {
  const [starsFilter, setStarsFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [amenityFilter, setAmenityFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  const starOptions = ["All", "5 Stars", "4 Stars", "3 Stars"];
  const locations = ["All", "Hurghada", "Cairo", "Luxor", "Aswan", "Sharm El Sheikh", "Other"];
  const priceRanges = ["All", "Under $100", "$100-$150", "Over $150"];
  const amenities = ["All", "WiFi", "Pool", "Spa", "Beach", "Restaurant"];

  let filteredStays = [...allStays];

  // Apply stars filter
  if (starsFilter !== "All") {
    const stars = parseInt(starsFilter);
    filteredStays = filteredStays.filter(stay => stay.stars === stars);
  }

  // Apply location filter
  if (locationFilter !== "All") {
    if (locationFilter === "Other") {
      filteredStays = filteredStays.filter(stay => !["Hurghada", "Cairo", "Luxor", "Aswan", "Sharm El Sheikh"].includes(stay.location));
    } else {
      filteredStays = filteredStays.filter(stay => stay.location === locationFilter);
    }
  }

  // Apply price filter
  if (priceRange !== "All") {
    if (priceRange === "Under $100") {
      filteredStays = filteredStays.filter(stay => stay.price < 100);
    } else if (priceRange === "$100-$150") {
      filteredStays = filteredStays.filter(stay => stay.price >= 100 && stay.price <= 150);
    } else if (priceRange === "Over $150") {
      filteredStays = filteredStays.filter(stay => stay.price > 150);
    }
  }

  // Apply amenity filter
  if (amenityFilter !== "All") {
    filteredStays = filteredStays.filter(stay => stay.amenities.includes(amenityFilter));
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] mt-[80px] md:mt-[97px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1920)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A5C]/80 to-[#2E86AB]/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[36px] md:text-[56px] font-bold text-white text-center mb-4"
          >
            Luxury Stays in Egypt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[16px] md:text-[20px] text-white/90 text-center max-w-2xl"
          >
            Find the perfect accommodation for your Egyptian adventure
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[100px] py-8 md:py-12">
        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <h2 className="text-[24px] font-semibold text-[#1A3A5C]">{filteredStays.length} Hotels Found</h2>
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-all ${
                viewMode === "grid" ? "bg-white text-[#1A3A5C] shadow" : "text-gray-600"
              }`}
            >
              Grid View
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode("map")}
              className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-all ${
                viewMode === "map" ? "bg-white text-[#1A3A5C] shadow" : "text-gray-600"
              }`}
            >
              Map View
            </motion.button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <div>
            <label className="text-[14px] font-medium text-[#1A3A5C] mb-2 block">Stars</label>
            <select
              value={starsFilter}
              onChange={(e) => setStarsFilter(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#F5A623] focus:outline-none"
            >
              {starOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[14px] font-medium text-[#1A3A5C] mb-2 block">Location</label>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#F5A623] focus:outline-none"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[14px] font-medium text-[#1A3A5C] mb-2 block">Price Range</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#F5A623] focus:outline-none"
            >
              {priceRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[14px] font-medium text-[#1A3A5C] mb-2 block">Amenities</label>
            <select
              value={amenityFilter}
              onChange={(e) => setAmenityFilter(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#F5A623] focus:outline-none"
            >
              {amenities.map((amenity) => (
                <option key={amenity} value={amenity}>{amenity}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredStays.map((stay, index) => (
              <motion.div
                key={stay.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/product/${stay.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    className="bg-white rounded-[15px] overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                  >
                    <div className="relative h-[200px] overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        src={stay.image}
                        alt={stay.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-1">
                        {[...Array(stay.stars)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="#F5A623" viewBox="0 0 8.66667 8.24484">
                            <path d={svgPaths.p3c58f100} />
                          </svg>
                        ))}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                        <svg className="w-4 h-4" fill="#F5A623" viewBox="0 0 8.66667 8.24484">
                          <path d={svgPaths.p3c58f100} />
                        </svg>
                        <span className="text-[14px] font-semibold text-[#1A3A5C]">{stay.rating}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-[18px] font-semibold text-[#1A3A5C] mb-2 line-clamp-1">{stay.name}</h3>
                      <p className="text-[14px] text-[#2E86AB] mb-3 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {stay.location}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {stay.amenities.slice(0, 4).map((amenity) => (
                          <span key={amenity} className="text-[12px] px-2 py-1 bg-gray-100 text-gray-600 rounded">
                            {amenity}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div>
                          <p className="text-[12px] text-gray-500">Per Night</p>
                          <p className="text-[24px] font-bold text-[#1A3A5C]">${stay.price}</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-[#F5A623] text-white px-5 py-2 rounded-lg font-medium text-[14px]"
                        >
                          Book
                        </motion.button>
                      </div>
                      <p className="text-[12px] text-gray-500 mt-2">({stay.reviews} reviews)</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Map View */}
        {viewMode === "map" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-200 rounded-[15px] h-[600px] flex items-center justify-center"
          >
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-gray-500 text-[18px]">Map view - Interactive map would be integrated here</p>
              <p className="text-gray-400 text-[14px] mt-2">Showing {filteredStays.length} hotels on map</p>
            </div>
          </motion.div>
        )}

        {/* No Results */}
        {filteredStays.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[20px] text-gray-500 mb-4">No stays found matching your criteria</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setStarsFilter("All");
                setLocationFilter("All");
                setPriceRange("All");
                setAmenityFilter("All");
              }}
              className="bg-[#F5A623] text-white px-8 py-3 rounded-lg font-medium"
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
