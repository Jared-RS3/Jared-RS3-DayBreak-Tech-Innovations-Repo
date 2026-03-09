import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "process", label: "Process" },
    { id: "about", label: "About" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={600}
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <Code2 className="w-8 h-8 text-pink-500" />
            </motion.div>
            <span className="text-[17px] font-bold text-white tracking-tight">
              DayBreak<span className="text-pink-500 font-bold"> Tech-Innovations</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy
                smooth
                duration={600}
                offset={-64}
                className="px-3.5 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-150 cursor-pointer font-medium"
                activeClass="!text-white bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <RouterLink
              to="/careers"
              className="px-3.5 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-150 font-medium"
            >
              Careers
            </RouterLink>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-64}
              className="hidden md:inline-flex btn-primary text-sm px-5 py-2 cursor-pointer"
            >
              Book a Call
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-navy-900/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  spy
                  smooth
                  duration={600}
                  offset={-64}
                  className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-pointer font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <RouterLink
                to="/careers"
                className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </RouterLink>
              <div className="pt-2">
                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-64}
                  className="block cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="btn-primary w-full flex justify-center text-sm py-2.5">
                    Book a Call
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


