import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../CSS/Navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef(null);

  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;
    const forceMobileMenu = window.innerWidth <= 1024;
    const linksOverflow = linksRef.current.scrollWidth > navRef.current.offsetWidth - 260;
    setShowButton(forceMobileMenu || linksOverflow);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <>
      <nav ref={navRef} className="nav">
        <NavLink to="/" className="nav-left" onClick={() => setIsOpen(false)}>
          <motion.div
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            KD
          </motion.div>
          <div className="nav-name">
            <h1>Karansinh Desai</h1>
            <div className="nav-tagline">
              Full Stack Developer • AI/ML • Software Engineer
            </div>
          </div>
        </NavLink>

        <div
          ref={linksRef}
          className="nav-links"
          style={{ display: showButton ? "none" : "flex" }}
        >
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end className="nav-link">
              {({ isActive }) => (
                <motion.span
                  className={isActive ? "nav-link-content active" : "nav-link-content"}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.22 }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="underline"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.22 }}
                    />
                  )}
                </motion.span>
              )}
            </NavLink>
          ))}
        </div>

        {showButton && (
          <button
            className="mobile-menu-button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </nav>

      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            className="mobile-dropdown"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.22 }}
          >
            <button
              className="mobile-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>

            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => (isActive ? "mobile-link active" : "mobile-link")}
                end
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
