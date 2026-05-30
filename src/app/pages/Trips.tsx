import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import svgPaths from "../../imports/Home/svg-1h660y2p13";
import imgImage5 from "../../imports/Home/d6358b5e87f7c86d5cd1340331fa39e61ace9f91.png";
import imgBatchDsc03961 from "../../imports/Home/4a2dc3b3f50786cbda4280945d9fe973a8f2d163.png";
import imgUnsplashK1XjZeLq3No from "../../imports/Home/4914b8c0b2e259256dde8955cfe8c3fc7a161eef.png";
import imgImage6 from "../../imports/Home/83799e7562cc4910d4ad3192857b9bf354ef34c8.png";
import imgImage7 from "../../imports/Home/67c4cb5ae7ce4bc936905659a319c25e339b77bc.png";
import imgImage8 from "../../imports/Home/bd8c0bbfcc2f64ea0b30617fe3bd8430ff1d503f.png";

const allTrips = [
  { id: "nile-cruise", title: "4-Night Nile Cruise", location: "Luxor to Aswan", duration: "4 Days", price: 340, rating: 4.9, reviews: 360, category: "Luxury", tags: ["Luxury", "Historical"], image: imgImage5 },
  { id: "super-safari", title: "Desert Super Safari", location: "Hurghada", duration: "1 Day", price: 25, rating: 4.8, reviews: 133, category: "Adventure", tags: ["Adventure", "Family"], image: imgBatchDsc03961 },
  { id: "hot-air-balloon", title: "Hot Air Balloon Ride", location: "Luxor", duration: "3 Hours", price: 100, rating: 4.4, reviews: 80, category: "Adventure", tags: ["Adventure", "Luxury"], image: imgUnsplashK1XjZeLq3No },
  { id: "hula-hula", title: "Hula Hula Island Trip", location: "Hurghada", duration: "8 Hours", price: 20, rating: 5.0, reviews: 537, category: "Family", tags: ["Family", "Beach"], image: imgImage6 },
  { id: "diving", title: "Red Sea Diving", location: "Hurghada", duration: "6 Hours", price: 46, rating: 4.3, reviews: 145, category: "Adventure", tags: ["Adventure", "Diving"], image: imgImage7 },
  { id: "snorkeling", title: "Coral Reef Snorkeling", location: "Sharm El Sheikh", duration: "4 Hours", price: 35, rating: 4.7, reviews: 289, category: "Family", tags: ["Family", "Beach"], image: imgImage8 },
  { id: "pyramids-tour", title: "Pyramids & Sphinx Tour", location: "Cairo", duration: "6 Hours", price: 55, rating: 4.9, reviews: 642, category: "Historical", tags: ["Historical", "Family"], image: "https://images.unsplash.com/photo-1541769740-098e80269166?q=80&w=800" },
  { id: "luxor-temples", title: "Luxor Temples Day Tour", location: "Luxor", duration: "8 Hours", price: 65, rating: 4.8, reviews: 428, category: "Historical", tags: ["Historical", "Luxury"], image: "https://images.unsplash.com/photo-1762945527140-4f45fcbf3c64?q=80&w=800" },
  { id: "white-desert-camp", title: "White Desert Camping", location: "Bahariya Oasis", duration: "2 Days", price: 180, rating: 5.0, reviews: 156, category: "Adventure", tags: ["Adventure", "Luxury"], image: "https://images.unsplash.com/photo-1771236584637-c5033ae67fdd?q=80&w=800" },
  { id: "abu-simbel", title: "Abu Simbel Temples", location: "Aswan", duration: "1 Day", price: 95, rating: 4.9, reviews: 298, category: "Historical", tags: ["Historical"], image: "https://images.unsplash.com/photo-1711098288782-f97d609288a8?q=80&w=800" },
  { id: "diving-advanced", title: "Advanced Diving Course", location: "Dahab", duration: "3 Days", price: 280, rating: 4.8, reviews: 187, category: "Adventure", tags: ["Adventure", "Diving"], image: "https://images.unsplash.com/photo-1682687981907-170c006e3744?q=80&w=800" },
  { id: "alexandria-day", title: "Alexandria Day Trip", location: "Alexandria", duration: "10 Hours", price: 70, rating: 4.6, reviews: 215, category: "Historical", tags: ["Historical", "Family"], image: "https://images.unsplash.com/photo-1708711973477-1373f8eb65db?q=80&w=800" }
];

export function Trips() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [durationFilter, setDurationFilter] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [sortBy, setSortBy] = useState("Popularity");

  const categories = ["All", "Adventure", "Historical", "Luxury", "Family"];
  const durations = ["All", "Half Day", "Full Day", "Multi-Day"];
  const priceRanges = ["All", "Under $50", "$50-$150", "Over $150"];
  const sortOptions = ["Popularity", "Price: Low to High", "Price: High to Low", "Rating"];

  let filteredTrips = [...allTrips];

  // Apply category filter
  if (categoryFilter !== "All") {
    filteredTrips = filteredTrips.filter(trip => trip.category === categoryFilter);
  }

  // Apply duration filter
  if (durationFilter !== "All") {
    if (durationFilter === "Half Day") {
      filteredTrips = filteredTrips.filter(trip => trip.duration.includes("Hour") && parseInt(trip.duration) <= 6);
    } else if (durationFilter === "Full Day") {
      filteredTrips = filteredTrips.filter(trip => trip.duration.includes("Hour") && parseInt(trip.duration) > 6 || trip.duration === "1 Day");
    } else if (durationFilter === "Multi-Day") {
      filteredTrips = filteredTrips.filter(trip => trip.duration.includes("Day") && parseInt(trip.duration) > 1);
    }
  }

  // Apply price filter
  if (priceRange !== "All") {
    if (priceRange === "Under $50") {
      filteredTrips = filteredTrips.filter(trip => trip.price < 50);
    } else if (priceRange === "$50-$150") {
      filteredTrips = filteredTrips.filter(trip => trip.price >= 50 && trip.price <= 150);
    } else if (priceRange === "Over $150") {
      filteredTrips = filteredTrips.filter(trip => trip.price > 150);
    }
  }

  // Apply sorting
  if (sortBy === "Price: Low to High") {
    filteredTrips.sort((a, b) => a.price - b.price);
  } else if (sortBy === "Price: High to Low") {
    filteredTrips.sort((a, b) => b.price - a.price);
  } else if (sortBy === "Rating") {
    filteredTrips.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "Popularity") {
    filteredTrips.sort((a, b) => b.reviews - a.reviews);
  }

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] mt-[80px] md:mt-[97px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1682687981907-170c006e3744?q=80&w=1920)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A5C]/80 to-[#2E86AB]/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[36px] md:text-[56px] font-bold text-white text-center mb-4"
          >
            Discover Amazing Trips
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[16px] md:text-[20px] text-white/90 text-center max-w-2xl"
          >
            From adventure to relaxation, find your perfect Egyptian experience
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[100px] py-8 md:py-12">
        {/* Filters & Sort */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 space-y-6"
        >
          {/* Category Filter */}
          <div>
            <h3 className="text-[14px] font-medium text-[#1A3A5C] mb-3">Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-4 md:px-6 py-2 rounded-full text-[14px] font-medium transition-all ${
                    categoryFilter === cat
                      ? "bg-[#F5A623] text-white"
                      : "bg-gray-100 text-[#1A3A5C] hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Duration & Price & Sort */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-[14px] font-medium text-[#1A3A5C] mb-2 block">Duration</label>
              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#F5A623] focus:outline-none"
              >
                {durations.map((dur) => (
                  <option key={dur} value={dur}>{dur}</option>
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
              <label className="text-[14px] font-medium text-[#1A3A5C] mb-2 block">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#F5A623] focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[14px] text-gray-600 mb-6"
        >
          Showing {filteredTrips.length} trips
        </motion.p>

        {/* Trips Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTrips.map((trip, index) => (
            <motion.div
              key={trip.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link to={`/product/${trip.id}`}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-[15px] overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                >
                  <div className="relative h-[220px] overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <svg className="w-4 h-4" fill="#F5A623" viewBox="0 0 8.66667 8.24484">
                        <path d={svgPaths.p3c58f100} />
                      </svg>
                      <span className="text-[14px] font-semibold text-[#1A3A5C]">{trip.rating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-[20px] font-semibold mb-1">{trip.title}</h3>
                      <p className="text-white/90 text-[14px] flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {trip.location}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[14px] text-[#2E86AB] font-medium">{trip.duration}</span>
                      <span className="text-[12px] text-gray-500">({trip.reviews} reviews)</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {trip.tags.map((tag) => (
                        <span key={tag} className="text-[12px] px-3 py-1 bg-[#F5A623]/10 text-[#F5A623] rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-[12px] text-gray-500">From</p>
                        <p className="text-[24px] font-bold text-[#1A3A5C]">${trip.price}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#F5A623] text-white px-6 py-2 rounded-lg font-medium text-[14px]"
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredTrips.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[20px] text-gray-500 mb-4">No trips found matching your criteria</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCategoryFilter("All");
                setDurationFilter("All");
                setPriceRange("All");
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
