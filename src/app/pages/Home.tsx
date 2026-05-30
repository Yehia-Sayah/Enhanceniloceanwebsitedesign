import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
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
import imgPhEmad from "../../imports/Home/647afe4856e73ee76d8015509931310a1e5ebb3e.png";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1665643956022-ee053e925743?q=80&w=1920",
    title: "Discover Hurghada",
    subtitle: "Crystal Blue Waters & Coral Reefs"
  },
  {
    url: "https://images.unsplash.com/photo-1762945527140-4f45fcbf3c64?q=80&w=1920",
    title: "Explore Luxor",
    subtitle: "Ancient Karnak Temple at Golden Hour"
  },
  {
    url: "https://images.unsplash.com/photo-1716639154156-db53b75a22ad?q=80&w=1920",
    title: "Sail in Aswan",
    subtitle: "Nile Cruise at Sunset"
  },
  {
    url: "https://images.unsplash.com/photo-1541769740-098e80269166?q=80&w=1920",
    title: "Visit Cairo",
    subtitle: "The Great Pyramids of Giza"
  },
  {
    url: "https://images.unsplash.com/photo-1758720979620-26130f99de40?q=80&w=1920",
    title: "Escape to Siwa",
    subtitle: "Desert Oasis Paradise"
  }
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stats, setStats] = useState({ destinations: 0, travelers: 0, rating: 0 });
  const [activeCategory, setActiveCategory] = useState("Timeless History");

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Animated counter
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setStats(prev => ({
          destinations: Math.min(prev.destinations + 2, 50),
          travelers: Math.min(prev.travelers + 400, 12000),
          rating: Math.min(prev.rating + 0.1, 4.8)
        }));
      }, 30);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { name: "Adventure", icon: svgPaths.p3dbcd700 },
    { name: "Timeless History", icon: svgPaths.p7dc400 },
    { name: "Red Sea", icon: svgPaths.p3b766700 },
    { name: "Stays", icon: svgPaths.p33dbcee0 },
    { name: "Nile Cruises", icon: null }
  ];

  const destinations = [
    { id: "hurghada", name: "Hurghada", img: "https://images.unsplash.com/photo-1665643956022-ee053e925743?q=80&w=800", trips: 45 },
    { id: "luxor", name: "Luxor", img: "https://images.unsplash.com/photo-1762945527140-4f45fcbf3c64?q=80&w=800", trips: 38 },
    { id: "aswan", name: "Aswan", img: "https://images.unsplash.com/photo-1716639154156-db53b75a22ad?q=80&w=800", trips: 32 },
    { id: "cairo", name: "Cairo", img: "https://images.unsplash.com/photo-1541769740-098e80269166?q=80&w=800", trips: 56 }
  ];

  const seasonalHighlights = [
    {
      id: "nile-cruise",
      title: "Nile Cruise",
      description: "A relaxing Nile cruise from Luxor to Aswan offering stunning river views, temples, and unforgettable 4-night journeys",
      image: imgImage5,
      price: 340,
      rating: 4.9,
      reviews: 360
    },
    {
      id: "super-safari",
      title: "Super Safari",
      description: "A thrilling super safari in Hurghada offering 4x4 rides, quad biking, Bedouin vibes, and unforgettable desert sunset",
      image: imgBatchDsc03961,
      price: 25,
      rating: 4.8,
      reviews: 133
    },
    {
      id: "hot-air-balloon",
      title: "Hot Air Balloon",
      description: "A magical hot air balloon ride in Luxor offering breathtaking sunrise views over the Nile and ancient temples",
      image: imgUnsplashK1XjZeLq3No,
      price: 100,
      rating: 4.4,
      reviews: 80
    }
  ];

  const topRated = [
    {
      id: "hula-hula",
      title: "Hula Hula Island",
      description: "A fun Hula Hula island trip in Hurghada offering crystal waters, snorkeling, beach vibes, and unforgettable Red Sea moments",
      image: imgImage6,
      price: 20,
      rating: 5.0,
      reviews: 537
    },
    {
      id: "diving",
      title: "Diving Trip",
      description: "A thrilling diving trip in Hurghada offering vibrant reefs, marine life, clear waters, and unforgettable underwater Red Sea",
      image: imgImage7,
      price: 46,
      rating: 4.3,
      reviews: 145
    },
    {
      id: "snorkeling",
      title: "Snorkeling",
      description: "Experience the vibrant underwater world of the Red Sea with colorful coral reefs and exotic marine life",
      image: imgImage8,
      price: 35,
      rating: 4.7,
      reviews: 289
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United States",
      text: "Amazing experience! The Nile cruise exceeded all my expectations. The guides were knowledgeable and the service was impeccable.",
      rating: 5,
      avatar: imgPhEmad
    },
    {
      name: "Ahmed Hassan",
      location: "Egypt",
      text: "Professional service and great value for money. Highly recommend Nilocean Tours for anyone visiting Egypt!",
      rating: 5,
      avatar: imgPhEmad
    },
    {
      name: "Emma Wilson",
      location: "United Kingdom",
      text: "The best tour company in Egypt! Every detail was perfect and the experiences were unforgettable.",
      rating: 5,
      avatar: imgPhEmad
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navbar />

      {/* Hero Section with Slider */}
      <section className="relative h-screen mt-[80px] md:mt-[97px] overflow-hidden">
        <AnimatePresence mode="wait">
          {heroImages.map((slide, index) => index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.url})`,
                  animation: "kenBurns 6s ease-out forwards"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8 md:gap-[100px] px-4">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-4 md:gap-8"
          >
            <h1 className="text-[32px] md:text-[50px] lg:text-[60px] font-bold text-white text-center max-w-[90%] md:max-w-[714px] leading-tight">
              {heroImages[currentSlide].title}
            </h1>
            <p className="text-[18px] md:text-[24px] text-white/90 text-center">
              {heroImages[currentSlide].subtitle}
            </p>

            {/* Glassmorphism Stats */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-[66px] mt-8">
              {[
                { label: "Destinations", value: `${stats.destinations}+` },
                { label: "Happy Travels", value: `${Math.floor(stats.travelers / 1000)}K+` },
                { label: "Rating", value: stats.rating.toFixed(1) }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 min-w-[140px] md:min-w-[161px] px-6 md:px-[30px] py-3 md:py-[16px] rounded-[10.365px] shadow-xl"
                >
                  <div className="flex flex-col gap-2 items-center">
                    <p className="text-[18px] md:text-[20px] font-bold text-[#F5A623]">{stat.value}</p>
                    <p className="text-[12px] md:text-[14px] font-normal text-white">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 md:gap-[38px]"
          >
            {categories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-2 h-[34px] px-3 md:px-[10px] rounded-[33px] transition-all text-[10px] md:text-[11.43px] font-medium ${
                  activeCategory === category.name
                    ? "bg-white/35 backdrop-blur-md text-white border border-white/40"
                    : "bg-white/15 backdrop-blur-md text-white/80"
                }`}
              >
                {category.icon && (
                  <svg className="w-[16px] md:w-[20px] h-[16px] md:h-[20px]" fill="none" viewBox="0 0 20 20">
                    <path d={category.icon} fill={activeCategory === category.name ? "#ffffff" : "#E9E9E9"} />
                  </svg>
                )}
                {category.name === "Nile Cruises" && (
                  <svg className="w-[20px] md:w-[23.484px] h-[20px] md:h-[23.484px]" fill="none" viewBox="0 0 23.4844 23.4844">
                    <path d={svgPaths.p1ae5e500} stroke="#E9E9E9" strokeMiterlimit="10" strokeWidth="1.46777" />
                    <path d={svgPaths.p3c734900} fill="#E9E9E9" />
                    <path d={svgPaths.p39e1f100} stroke="#E9E9E9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46777" />
                  </svg>
                )}
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-[#F5A623] w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Top Destinations */}
      <AnimatedSection>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[100px] py-12 md:py-[50px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[43px] font-semibold text-[#1A3A5C] mb-8 md:mb-12"
          >
            Popular Destinations
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <DestinationCard key={dest.id} destination={dest} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Seasonal Highlights */}
      <AnimatedSection>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[50px] py-8 md:py-[20px]">
          <div className="bg-white rounded-[10px] shadow-lg border-l-4 border-[#1A3A5C] p-6 md:p-[50px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 md:mb-[50px]"
            >
              <h2 className="text-[28px] md:text-[43px] font-semibold text-[#1A3A5C]">Seasonal Highlights</h2>
              <p className="text-[18px] md:text-[25px] font-normal text-[#1A3A5C]">Best in Winter ❄️</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seasonalHighlights.map((item, index) => (
                <TourCard key={item.id} tour={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Top Rated */}
      <AnimatedSection>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[50px] py-8 md:py-[20px]">
          <div className="bg-white rounded-[10px] shadow-lg border-l-4 border-[#1A3A5C] p-6 md:p-[50px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 md:mb-[50px]"
            >
              <h2 className="text-[28px] md:text-[43px] font-semibold text-[#1A3A5C]">Top Rated</h2>
              <p className="text-[18px] md:text-[25px] font-normal text-[#1A3A5C]">Best rated by travelers</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topRated.map((item, index) => (
                <TourCard key={item.id} tour={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[100px] py-12 md:py-[80px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[43px] font-semibold text-[#1A3A5C] text-center mb-8 md:mb-[50px]"
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Footer />

      {/* Ken Burns Animation CSS */}
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.1) translate(-2%, -2%); }
        }
      `}</style>
    </div>
  );
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function DestinationCard({ destination, index }: { destination: any; index: number }) {
  return (
    <Link to={`/destinations`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -10 }}
        className="relative rounded-[15px] overflow-hidden shadow-lg cursor-pointer group"
      >
        <div className="relative h-[200px] md:h-[250px]">
          <img src={destination.img} alt={destination.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A5C]/90 via-[#1A3A5C]/40 to-transparent group-hover:from-[#F5A623]/80 transition-all duration-300" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <h3 className="text-white text-[20px] md:text-[24px] font-semibold mb-1">{destination.name}</h3>
          <p className="text-white/90 text-[14px]">{destination.trips} trips available</p>
        </div>
      </motion.div>
    </Link>
  );
}

function TourCard({ tour, index }: { tour: any; index: number }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link to={`/product/${tour.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.03, y: -5 }}
        className="bg-gradient-to-r from-[#1A3A5C] to-[#2E86AB] rounded-[15px] p-[10px] shadow-xl cursor-pointer"
      >
        <div className="relative">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={tour.image}
            alt={tour.title}
            className="w-full h-[180px] md:h-[202.667px] rounded-[10px] object-cover"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-[12px] right-[12px] bg-white/80 backdrop-blur-sm w-[25px] h-[21px] rounded-[5px] flex items-center justify-center"
          >
            <svg className="w-[14.167px] h-[12.998px]" fill={isFavorite ? "#FF6B6B" : "#F6F6F6"} viewBox="0 0 14.1672 12.9984">
              <path d={isFavorite ? svgPaths.p21f8ba00 : svgPaths.pf16fe00} />
            </svg>
          </motion.button>
        </div>

        <p className="text-[#dedede] text-[13px] md:text-[14px] mt-4 h-[63px] line-clamp-3">{tour.description}</p>

        <div className="flex gap-2 mt-4 flex-wrap">
          {["Hurghada", "Adventure", "Trip", "Super Safari"].map((tag, i) => (
            <span
              key={tag}
              className={`text-[8px] px-2 py-1 rounded-[5.638px] ${
                i === 3 ? "bg-[#b1c3d0] text-[#262626]" : "bg-[#1A3A5C] text-[#dedede]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="h-[1px] bg-[#B1C3D0] my-4" />

        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-[#dedede] text-[14px]">From</p>
            <p className="text-[#e9e9e9] text-[17px] font-semibold">$ {tour.price}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-1 justify-center">
              <svg className="w-[8.667px] h-[8.245px]" fill="#F5A623" viewBox="0 0 8.66667 8.24484">
                <path d={svgPaths.p3c58f100} />
              </svg>
              <span className="text-[#dedede] text-[12px] font-medium">{tour.rating}</span>
            </div>
            <p className="text-[#c5c5c5] text-[12px] font-extralight">({tour.reviews})</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(245, 166, 35, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => e.preventDefault()}
          className="w-full bg-[#F5A623] text-white text-[14px] font-medium py-3 rounded-[10px] mt-4"
        >
          View Details
        </motion.button>
      </motion.div>
    </Link>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-gradient-to-br from-[#1A3A5C] to-[#2E86AB] rounded-[15px] p-6 shadow-xl"
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-[60px] h-[60px] rounded-full object-cover" />
        <div>
          <h4 className="text-white text-[18px] font-semibold">{testimonial.name}</h4>
          <p className="text-[#dedede] text-[14px]">{testimonial.location}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-[16px] h-[16px]" fill="#F5A623" viewBox="0 0 8.66667 8.24484">
            <path d={svgPaths.p3c58f100} />
          </svg>
        ))}
      </div>

      <p className="text-[#f6f6f6] text-[14px] italic">"{testimonial.text}"</p>
    </motion.div>
  );
}
