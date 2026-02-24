"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "/research", label: "Projects & Team" },
  { href: "#news", label: "News & Insights" },
  { href: "#talks", label: "Conferences" },
  { href: "/teaching", label: "Teaching" },
  { href: "#apply", label: "Apply" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  function resolveHref(href: string) {
    if (href.startsWith("#")) return isHome ? href : `/${href}`;
    return href;
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur bg-cream/90 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href={isHome ? "#" : "/"}
          className={`font-serif text-xl font-bold transition-colors ${
            scrolled ? "text-indigo-deep hover:text-amber" : "text-white hover:text-amber-light"
          }`}
        >
          SGR
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              className={`link-underline text-sm font-medium transition-colors ${
                scrolled
                  ? "text-indigo-deep/70 hover:text-indigo-deep"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 transition-transform ${scrolled ? "bg-indigo-deep" : "bg-white"} ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 ${scrolled ? "bg-indigo-deep" : "bg-white"} transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 transition-transform ${scrolled ? "bg-indigo-deep" : "bg-white"} ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden nav-blur bg-cream/95 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={resolveHref(link.href)}
                  className="text-base font-medium text-indigo-deep/80 hover:text-amber transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
