import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/Home/svg-1h660y2p13";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Trips", path: "/trips" },
    { name: "Stays", path: "/stays" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[100px] py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-end gap-1 cursor-pointer"
          >
            <div className="flex gap-1 items-end">
              <svg className="w-[20px] md:w-[25.575px] h-[15px] md:h-[19.237px]" fill="none" preserveAspectRatio="none" viewBox="0 0 25.5751 19.2368">
                <path clipRule="evenodd" d={svgPaths.p2f14eaf0} fill="#F5A623" fillRule="evenodd" />
              </svg>
              <svg className="w-[28px] md:w-[37.482px] h-[16px] md:h-[21.165px]" fill="none" preserveAspectRatio="none" viewBox="0 0 37.482 21.1653">
                <path clipRule="evenodd" d={svgPaths.p7b6880} fill="#1A3A5C" fillRule="evenodd" />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-black text-[12px] md:text-[15.152px] tracking-[1px] md:tracking-[1.5152px] text-[#1A3A5C]">NILOCEAN</span>
              <span className="font-medium text-[5px] md:text-[6.465px] tracking-[1px] md:tracking-[1.6162px] text-[#1A3A5C]">TOURS</span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <span className={`text-[18px] lg:text-[20px] cursor-pointer font-normal transition-colors ${
                  isActive(link.path) ? "text-[#F5A623] font-medium" : "text-[#1A3A5C]"
                }`}>
                  {link.name}
                </span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F5A623]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-[15px] h-[15px]" fill="none" viewBox="0 0 17 17.0003">
              <path d={svgPaths.p3d74a8e0} stroke="#1A3A5C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p5796f00} stroke="#1A3A5C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span className="text-[17px] text-[#1A3A5C]">EN</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(245, 166, 35, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F5A623] px-6 py-2 rounded-[7px] text-[17px] text-white font-medium"
          >
            Sign in
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-[#1A3A5C]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)}>
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className={`py-2 px-4 rounded-lg ${
                      isActive(link.path) ? "bg-[#F5A623] text-white" : "text-[#1A3A5C]"
                    }`}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#F5A623] text-white py-2 px-4 rounded-lg font-medium"
              >
                Sign in
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
