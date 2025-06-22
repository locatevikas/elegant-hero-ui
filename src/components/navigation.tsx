
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 backdrop-blur-lg border-b border-white/[0.08]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold text-xl tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
              Vikas
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-200",
                  location.pathname === item.path
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-rose-500/20 border border-white/[0.15] rounded-full text-white text-sm font-medium hover:from-indigo-500/30 hover:to-rose-500/30 transition-all duration-200"
            >
              Book Strategy Call
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

export { Navigation };
