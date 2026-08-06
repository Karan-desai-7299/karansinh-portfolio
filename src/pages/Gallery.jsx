import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "../CSS/Gallery.css";

const IMAGES = {
  personal: [

    {
      id: 1,
      caption: "Finding peace in nature and taking a moment to recharge before the next challenge.",
      photos: ["/dist/gallery/personal1.jpg"],
    },
            {
      id: 2,
      caption: "The beginning of an unforgettable college journey filled with friendships and learning.",
      photos: ["/dist/gallery/personal4.jpg"],
    },
    {
      id: 3,
      caption: "Celebrating traditions while embracing new opportunities and experiences.",
      photos: ["/dist/gallery/personal2.jpg"],
    },
                {
      id: 4,
      caption: "Every presentation is an opportunity to learn, improve, and transform ideas into reality.",
      photos: ["/dist/gallery/IMG-20250915-WA0040.jpg"],
    },

    {
      id: 5,
      caption: "Great memories are created with great people who make every moment worthwhile.",
      photos: ["/dist/gallery/IMG-20260719-WA0111.jpg", "/dist/gallery/IMG-20260719-WA0087.jpg", "/dist/gallery/IMG_20250621_082854.jpg", "/dist/gallery/personal8.jpg"],
    },
        {
      id: 6,
      caption: "Every game is a lesson in patience, focus, and making the right move at the right time.",
      photos: ["/dist/gallery/personal5.jpg"],
    },
        {
      id: 7,
      caption: "A memorable day of strategic thinking, learning, and friendly competition. with mentoring and watching every move closely.",
      photos: ["/dist/gallery/personal3.jpg"],
    },


            {
      id: 8,
      caption: "Some of the best college memories aren't made in classrooms—they're created during the journeys together.",
      photos: ["/dist/gallery/IMG-20260719-WA0133.jpg"],
    },
    {
      id: 9,
      caption: "Exploring new places, sharing laughter, and creating memories beyond the classroom",
      photos: ["/dist/gallery/personal7.jpg"],
    },

  ],

  projects: [
    {
      id: 1,
      title: "SnapClass",
      caption: "AI-powered attendance system with face recognition, voice attendance, and separate student/teacher portals.",
      photos: [
        "/dist/gallery/project1.jpg",
        "/dist/gallery/project1.1.jpg",
        "/dist/gallery/project1.2 (1).png",
        "/dist/gallery/project1.2 (2).png",
        "/dist/gallery/project1.2 (3).png",
        "/dist/gallery/project1.2 (4).png",
      ],
    },
    {
      id: 2,
      title: "RentConnect",
      caption: "A broker-free rental marketplace connecting tenants directly with verified property owners.",
      photos: [
        "/dist/gallery/Screenshot 2026-06-30 134918.png",
        "/dist/gallery/project 2 (1).png",
        "/dist/gallery/project 2 (2).png",
        "/dist/gallery/project 2 (3).png",
        "/dist/gallery/Screenshot 2026-06-30 122633.png",
        "/dist/gallery/Screenshot 2026-06-30 133428.png",
      ],
    },
    {
      id: 3,
      title: "Uber Clone",
      caption: "Real-time ride-booking clone with live maps and a rider/captain sign-in flow.",
      photos: [
        "/dist/gallery/project 3 (1).png",
        "/dist/gallery/project 3 (2).png",
        "/dist/gallery/project 3 (3).png",
        "dist/gallery/Screenshot 2026-06-23 093158.png",
        "dist/gallery/Screenshot 2026-06-23 093256.png",
        "dist/gallery/Screenshot 2026-06-23 154641.png",
      ],
    },
    {
      id: 4,
      title: "Symphony",
      caption: "A glassmorphic music-streaming concept with playlists and smart recommendations.",
      photos: [
        "/dist/gallery/project 4 (1).png",
        "/dist/gallery/project 4 (2).png",
        "/dist/gallery/project 4 (3).png",
        "/dist/gallery/Screenshot 2026-07-27 105354.png"
      ],
    },
    {
      id: 5,
      title: "PixelWave",
      caption: "A social photo-sharing concept with an animated feed and a built-in post creator.",
      photos: [
        "/dist/gallery/project 5 (1).png",
        "/dist/gallery/project 5 (2).png",
        "/dist/gallery/project 5 (3).png",
        "/dist/gallery/Screenshot 2026-07-27 105740.png"
      ],
    },
  ],

  achievements: [
    {
      id: 1,
      caption: "The reward haul from completing Google Cloud Arcade challenges — swag, mug, and all.",
      photos: ["/dist/gallery/achivmnet1.jpg", "/dist/gallery/achivmnet2.jpg", "/dist/gallery/Screenshot 2026-07-27 190135.png", "/dist/gallery/1763224684694.jpg"],
    },
    {
      id: 2,
      caption: "Representing at the IndiaSkills 2025 Maharashtra State Competition, certificate in hand.",
      photos: ["/dist/gallery/achivmnet3.jpg", "/dist/gallery/achivmnet4.jpg", "/dist/gallery/achivmnet6.jpg", "/dist/gallery/IMG_20260105_145942.png"],
    },
            {
      id: 6,
      caption: "Earned the LeetCode 50, 100, and 200 Days Badges in 2026 through consistent daily coding and problem-solving.",
      photos: ["/dist/gallery/download (3).png","/dist/gallery/download (2).png","/dist/gallery/download (1).png"],
    },
    {
      id: 3,
      caption: "On stage at AMGOI's Freshers' event alongside faculty and fellow students.",
      photos: ["/dist/gallery/achivmnet5.jpg"],
    },
    {
      id: 4,
      caption: "Receiving recognition on stage during a college prize distribution ceremony.",
      photos: ["/dist/gallery/achivmnet7.jpg"],
    },
    {
      id: 5,
      caption: "At AMGOI's \"The Deccan Dialogue\" — an international summit on cooperation and innovation.",
      photos: ["/dist/gallery/achivmnet8.jpg"],
    },

    
  ],
};

// ✨ Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.15, duration: 0.7, ease: "easeOut" },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.3 } },
};

const TABS = ["personal", "projects", "achievements"];

export default function Gallery() {
  const [tab, setTab] = useState("personal");
  const [zoom, setZoom] = useState({ open: false, post: null, index: 0 });

  const openZoom = (post, index) => setZoom({ open: true, post, index });
  const closeZoom = useCallback(() => setZoom({ open: false, post: null, index: 0 }), []);

  const nextImage = useCallback(() => {
    setZoom((z) => {
      if (!z.post) return z;
      const next = (z.index + 1) % z.post.photos.length;
      return { ...z, index: next };
    });
  }, []);

  const prevImage = useCallback(() => {
    setZoom((z) => {
      if (!z.post) return z;
      const prev = (z.index - 1 + z.post.photos.length) % z.post.photos.length;
      return { ...z, index: prev };
    });
  }, []);

  // Keyboard navigation: Esc to close, arrows to move between photos
  useEffect(() => {
    if (!zoom.open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeZoom();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [zoom.open, closeZoom, nextImage, prevImage]);

  const activeImg = zoom.post?.photos[zoom.index];

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="gallery-title" variants={childVariants}>
        Gallery
      </motion.h2>

      {/* Tabs */}
      <motion.div className="tab-buttons" variants={childVariants}>
        {TABS.map((type) => (
          <motion.button
            key={type}
            className={`tab ${tab === type ? "active" : ""}`}
            onClick={() => setTab(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Posts */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className="post-feed"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {IMAGES[tab].map((post) => (
            <motion.div
              key={post.id}
              className="post-card"
              variants={childVariants}
              whileHover={{ y: -4 }}
            >
              {post.title && <h3 className="post-title">{post.title}</h3>}
              <p className="caption">{post.caption}</p>
              <div className={`photo-grid ${post.photos.length > 1 ? "multi" : "single"}`}>
                {post.photos.map((src, i) => (
                  <motion.div
                    key={i}
                    className="photo-item"
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    onClick={() => openZoom(post, i)}
                  >
                    <img src={src} alt={post.title || post.caption} loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {zoom.open && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.35 }}
            onClick={closeZoom}
          >
            <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={activeImg}
                src={activeImg}
                alt="Zoomed view"
                className="zoom-img"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25 }}
              />

              {zoom.post?.photos.length > 1 && (
                <>
                  <button className="nav-btn left" onClick={prevImage} aria-label="Previous photo">
                    <ChevronLeft size={32} />
                  </button>
                  <button className="nav-btn right" onClick={nextImage} aria-label="Next photo">
                    <ChevronRight size={32} />
                  </button>
                </>
              )}

              <button className="close-btn" onClick={closeZoom} aria-label="Close">
                <X size={28} />
              </button>

              <div className="zoom-footer">
                {zoom.post?.title && <p className="zoom-title">{zoom.post.title}</p>}
                <p className="zoom-caption">{zoom.post?.caption}</p>
                {zoom.post?.photos.length > 1 && (
                  <span className="zoom-counter">
                    {zoom.index + 1} / {zoom.post.photos.length}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}