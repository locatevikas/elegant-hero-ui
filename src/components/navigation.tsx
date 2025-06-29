
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { MobileNavigation } from "./mobile-navigation";
import { ThemeToggle } from "./theme-toggle";

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
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 dark:bg-[#030303]/80 backdrop-blur-xl border-b border-white/[0.05] dark:border-white/[0.05]"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-foreground font-bold text-2xl tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300 dark:from-indigo-300 dark:to-rose-300">
                Vikas
              </span>
            </Link>
            <ThemeToggle />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-300 hover:text-foreground",
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Link
                to="/contact"
                className="px-6 py-3 bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 rounded-full text-foreground text-sm font-medium hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300"
              >
                Book Call
              </Link>
            </motion.div>
            
            <MobileNavigation />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export { Navigation };
