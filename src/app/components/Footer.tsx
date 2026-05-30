import { Link } from "react-router-dom";
import { motion } from "motion/react";
import svgPaths from "../../imports/Home/svg-1h660y2p13";

export function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Trips", path: "/trips" },
    { name: "Stays", path: "/stays" }
  ];

  return (
    <footer className="relative bg-gradient-to-r from-[#1A3A5C] to-[#2E86AB] text-white">
      {/* Wave at top */}
      <div className="absolute top-0 w-full -translate-y-full">
        <svg className="w-full h-[60px] md:h-[100px]" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 100">
          <path d={svgPaths.p286ddf00} fill="#1A3A5C" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[100px] py-8 md:py-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-[40px]">
          <div>
            <h3 className="text-[18px] md:text-[20px] font-semibold mb-4">About Nilocean</h3>
            <p className="text-[14px] opacity-90">Your trusted partner for unforgettable Egyptian adventures and Nile experiences.</p>
          </div>
          <div>
            <h3 className="text-[18px] md:text-[20px] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[14px] opacity-90">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-[#F5A623] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[18px] md:text-[20px] font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-[14px] opacity-90">
              <li>📧 info@nilocean.com</li>
              <li>📞 +20 123 456 7890</li>
              <li>📍 Cairo, Egypt</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[18px] md:text-[20px] font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[svgPaths.p193e7080, svgPaths.p18192080, svgPaths.p345d9500].map((icon, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[40px] h-[40px] bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F5A623] transition-colors"
                >
                  <svg className="w-[20px] h-[20px]" fill="white" viewBox="0 0 30 30">
                    <path d={icon} />
                  </svg>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-[14px] opacity-80">
          <p>© 2026 Nilocean Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
