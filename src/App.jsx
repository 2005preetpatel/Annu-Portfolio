import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { HeroSection as CarouselHero } from '@/components/ui/feature-carousel';

// --- Inline Icons ---
const Play = ({ size = 24, color = "currentColor", fill = "none", style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);
const XIcon = ({ size = 24, color = "currentColor", style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const ArrowRight = ({ size = 24, color = "currentColor", style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
const ArrowDown = ({ size = 24, color = "currentColor", style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);
const Star = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);
const Scissors = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
    <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
    <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
  </svg>
);
const Camera = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
    <circle cx="12" cy="13" r="3"></circle>
  </svg>
);
const MapPin = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
const Mail = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const Phone = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
const Instagram = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const Linkedin = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const Whatsapp = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    <path d="M16.2 14.8c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.1.2-.6.7-.7.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.5-.4h-.4c-.1 0-.4 0-.6.2-.2.2-.8.8-.8 2 0 1.2.8 2.3.9 2.5.1.2 1.7 2.6 4.1 3.6 1.8.8 2.3.8 2.8.8.4 0 1.4-.6 1.6-1.1.2-.5.2-.9.1-1-.1-.1-.3-.2-.5-.3z"></path>
  </svg>
);

// --- Images ---
import heroImg from './assets/cinematic_video_editor_hero_1780643984447.png';
import thumb1 from './assets/portfolio_thumbnail_1_1780644002683.png';
import thumb2 from './assets/portfolio_thumbnail_3_1780644035259.png';
import thumb3 from './assets/portfolio_thumbnail_4_1780644053415.png';

// --- Animations ---
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};



// --- Marquee Component ---
const InfiniteMarquee = () => {
  return (
    <div style={{ padding: '3rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex', backgroundColor: '#050505', transform: 'rotate(-2deg) scale(1.05)' }}>
      <motion.div
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}
      >
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="title-lg text-outline" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>COLOR GRADING</span>
            <Star color="var(--accent-color)" />
            <span className="title-lg" style={{ color: 'var(--text-primary)' }}>VFX</span>
            <Star color="var(--accent-color)" />
            <span className="title-lg text-outline" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>CINEMATIC EDITING</span>
            <Star color="var(--accent-color)" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

// --- Dynamic Media Component (Lazy loaded to prevent stuttering) ---
const DynamicMedia = ({ src, alt, className }) => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (!src) return null;

  if (src.includes('youtube.com') || src.includes('youtu.be')) {
    const videoId = src.match(/(?:v=|youtu\.be\/)([^&]+)/)?.[1];
    return (
      <div ref={ref} style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
        {isVisible && (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&vq=hd1080&hd=1&quality=hd1080`}
              className={className}
              allow="autoplay; encrypted-media"
              loading="lazy"
              style={{ 
                border: 'none', 
                pointerEvents: 'none', 
                width: '100%', 
                height: '100%', 
                transform: 'scale(1.5)',
              }}
              title={alt}
            />
            {/* Transparent overlay to permanently block all YouTube UI controls */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              zIndex: 10,
              background: 'transparent',
              pointerEvents: 'all'
            }} />
          </>
        )}
      </div>
    );
  } else if (src.match(/\.(mp4|webm|ogg)$/i) || src.includes('drive.google.com')) {
    return (
      <video
        ref={ref}
        src={isVisible ? src : undefined}
        autoPlay
        muted
        loop
        playsInline
        className={className}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    );
  } else {
    return <img ref={ref} src={src} alt={alt} className={className} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
  }
};

export default function App() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacityHero = useTransform(scrollY, [0, 800], [1, 0.2]);

  const [activeVideo, setActiveVideo] = React.useState(null);
  const [showAllVideos, setShowAllVideos] = React.useState(false);

  // ✅ Actual YouTube Videos - Hardcoded (Vercel pe bhi perfectly chalega)
  const [carouselImages, setCarouselImages] = React.useState([
    {
      src: 'https://www.youtube.com/watch?v=kKDSj70UhwU',
      alt: 'Portfolio Video 1',
    },
    {
      src: 'https://www.youtube.com/watch?v=Rw4Nay3fHok',
      alt: 'Portfolio Video 2',
    },
    {
      src: 'https://www.youtube.com/watch?v=iCmrUfu5WME',
      alt: 'Portfolio Video 3',
    },
    {
      src: 'https://www.youtube.com/watch?v=Y4A_L8RFFyk',
      alt: 'Portfolio Video 4',
    },
    {
      src: 'https://www.youtube.com/watch?v=7b1COwUOOZs',
      alt: 'Portfolio Video 5',
    },
  ]);

  // Google Sheets se dynamic fetch (agar sheet publicly accessible ho)
  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        const SHEET_ID = '1xU1nf6PF_tupF0A41MWd1aEw0VIL54ZC0ljUVZxEUaA';
        const GID = '961212848';
        // CSV format use karo - JSON format Vercel pe CORS issue karta hai
        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${GID}`;

        const res = await fetch(url, { mode: 'cors' });
        if (res.ok) {
          const text = await res.text();
          const lines = text.trim().split('\n');
          const sheetImages = [];

          lines.forEach(line => {
            // CSV ki har cell check karo
            const cells = line.split(',').map(c => c.replace(/"/g, '').trim());
            cells.forEach(val => {
              if (val && val.startsWith('http')) {
                sheetImages.push({ src: val, alt: 'Portfolio Media' });
              }
            });
          });

          console.log('Sheet se mile URLs:', sheetImages.map(i => i.src));

          if (sheetImages.length > 0) {
            setCarouselImages(sheetImages);
          }
        } else {
          console.warn('Google Sheet fetch failed, status:', res.status);
        }
      } catch (error) {
        console.error("Google Sheet fetch error:", error.message);
        // Fallback: hardcoded URLs use honge
      }
    };

    fetchImages();
  }, []);


  const carouselTitle = (
    <>
      <span className="text-gold" style={{ fontFamily: 'var(--font-serif)' }}>NY.</span> Edit Your Photos on the Go
    </>
  );

  return (
    <>
      <div className="film-grain"></div>

      {/* Navigation */}
      <nav className="glass-nav" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, padding: '1.5rem 0', background: 'linear-gradient(to bottom, rgba(3,3,3,0.9) 0%, rgba(3,3,3,0) 100%)', backdropFilter: 'blur(10px)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Creative Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', cursor: 'pointer' }}
            className="group"
          >
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', fontStyle: 'italic', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1 }}>
              Ananya
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-primary)' }}>
              Sharma
            </span>
            <span className="text-gold transition-opacity duration-500 opacity-50 group-hover:opacity-100" style={{ fontSize: '1.2rem', marginLeft: '0.2rem', fontWeight: 300 }}>
              /
            </span>
          </motion.div>

          {/* Navigation Links */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            <a href="#work" className="subtitle transition-colors duration-300 hover:text-white" style={{ fontSize: '0.75rem', fontWeight: 500 }}>Works</a>
            <a href="#about" className="subtitle transition-colors duration-300 hover:text-white" style={{ fontSize: '0.75rem', fontWeight: 500 }}>Studio</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '0.75rem', background: 'var(--accent-color)', color: '#000', border: 'none', borderRadius: '100px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Let's Talk
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', padding: 0 }}>
        <motion.div
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '120%', y: yHero, opacity: opacityHero, zIndex: -1 }}
        >
          <img src={heroImg} alt="Studio" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35) contrast(1.1)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, #030303 100%)' }}></div>
        </motion.div>

        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full pt-20">
            {/* Left Column: Text */}
            <motion.div initial="hidden" animate="visible" variants={staggerChildren} style={{ display: 'flex', flexDirection: 'column' }}>
              <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-color)' }}></div>
                <span className="subtitle" style={{ color: 'var(--accent-color)', letterSpacing: '0.25em' }}>CRAFTING STORIES FRAME BY FRAME</span>
              </motion.div>

              <div style={{ overflow: 'hidden' }}>
                <motion.h1 variants={fadeUp} className="title-xl" style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.9 }}>
                  <span style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.02em', color: '#fff' }}>FRAME</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-secondary)', marginLeft: '4rem' }}>FORGE</span>
                </motion.h1>
              </div>

              {/* Subheading with triangle */}
              <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginTop: '3rem', marginLeft: '5vw' }}>
                <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', marginTop: '0.5rem' }}></div>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                  <Play size={12} fill="var(--accent-color)" color="var(--accent-color)" style={{ marginTop: '0.2rem' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff' }}>TRANSFORMING IDEAS INTO</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-color)' }}>CINEMATIC REALITIES</span>
                  </div>
                </div>
              </motion.div>

              {/* Buttons and Scroll Indicator */}
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginTop: '4rem', marginLeft: '5vw' }}>
                <button 
                  className="btn hover-target" 
                  style={{ borderRadius: '100px', border: '1px solid rgba(255,255,255,0.2)', padding: '1rem 2rem', gap: '1rem', background: 'transparent', cursor: 'pointer' }}
                  onClick={() => setActiveVideo(carouselImages[0]?.src)}
                >
                  <Play size={14} fill="var(--accent-color)" color="var(--accent-color)" />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff' }}>WATCH SHOWREEL</span>
                </button>
                <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                  SCROLL TO EXPLORE <ArrowDown size={14} color="var(--accent-color)" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Carousel */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}>
              <CarouselHero images={carouselImages} onMediaClick={setActiveVideo} />
            </motion.div>
          </div>
        </div>
      </section>



      {/* Marquee Section */}
      <InfiniteMarquee />

      {/* Selected Works - Masonry-ish Layout */}
      <section id="work" style={{ backgroundColor: 'var(--bg-color)', position: 'relative', zIndex: 5 }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}
          >
            <div>
              <h2 className="subtitle" style={{ marginBottom: '1rem' }}>Selected Archive</h2>
              <h3 className="title-lg">Featured Works<span className="text-gold">.</span></h3>
            </div>
            <div 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--text-primary)', cursor: 'pointer' }}
              onClick={() => setShowAllVideos(!showAllVideos)}
            >
              {showAllVideos ? 'Show Less' : 'Explore All'} <ArrowRight size={16} style={{ transform: showAllVideos ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
            </div>
          </motion.div>

          {/* Dynamic Grid for Portrait Videos */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }}>
            {(showAllVideos ? carouselImages : carouselImages.slice(0, 4)).map((media, index) => (
              <motion.div
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                className="hover-target"
              >
                <div 
                  className="reveal-wrapper" 
                  style={{ 
                    aspectRatio: '9/16', 
                    width: '100%', 
                    marginBottom: '1.5rem', 
                    overflow: 'hidden', 
                    position: 'relative', 
                    borderRadius: '1rem', 
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                  }}
                  onClick={() => setActiveVideo(media.src)}
                >
                  <DynamicMedia src={media.src} alt={media.alt || `Portfolio ${index + 1}`} className="reveal-image" />
                </div>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section id="about" style={{ backgroundColor: '#060606', padding: '15rem 0', position: 'relative', overflow: 'hidden' }}>
        {/* Cinematic Film Burn/Gradient Background */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(243, 208, 118, 0.03) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }}></div>

        {/* Video Editor Timecode UI Overlays */}
        <div style={{ position: 'absolute', top: '3rem', left: '3rem', fontFamily: 'monospace', color: 'var(--text-secondary)', letterSpacing: '4px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '8px', height: '8px', backgroundColor: '#ff3333', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
          REC [ 01 : 24 : 12 : 08 ]
        </div>
        <div style={{ position: 'absolute', top: '3rem', right: '3rem', fontFamily: 'monospace', color: 'var(--text-secondary)', letterSpacing: '4px', fontSize: '0.75rem' }}>
          1920x1080 • 24FPS
        </div>
        <div style={{ position: 'absolute', bottom: '3rem', right: '3rem', fontFamily: 'monospace', color: 'var(--text-secondary)', letterSpacing: '4px', fontSize: '0.75rem' }}>
          SCENE 04 / TAKE 01
        </div>

        {/* Frame Brackets (Video Editor Crop Marks) */}
        <div style={{ position: 'absolute', top: '2rem', left: '2rem', width: '40px', height: '40px', borderTop: '1px solid rgba(255,255,255,0.2)', borderLeft: '1px solid rgba(255,255,255,0.2)' }}></div>
        <div style={{ position: 'absolute', top: '2rem', right: '2rem', width: '40px', height: '40px', borderTop: '1px solid rgba(255,255,255,0.2)', borderRight: '1px solid rgba(255,255,255,0.2)' }}></div>
        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', width: '40px', height: '40px', borderBottom: '1px solid rgba(255,255,255,0.2)', borderLeft: '1px solid rgba(255,255,255,0.2)' }}></div>
        <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', width: '40px', height: '40px', borderBottom: '1px solid rgba(255,255,255,0.2)', borderRight: '1px solid rgba(255,255,255,0.2)' }}></div>

        {/* Playhead Center Line */}
        <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ duration: 1.5, ease: 'easeInOut' }} viewport={{ once: true }} style={{ position: 'absolute', top: 0, left: '50%', width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.05)', zIndex: 0 }} />

        <div className="container" style={{ textAlign: 'center', maxWidth: '1100px', position: 'relative', zIndex: 10 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
            <motion.div variants={fadeUp}>
              <Scissors color="var(--accent-color)" size={32} style={{ margin: '0 auto 4rem auto', display: 'block', opacity: 0.8 }} />
            </motion.div>

            {/* Massive Timeline Typography Layout */}
            <div style={{ position: 'relative', margin: '0 auto 6rem auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.8rem, 2vw, 1.2rem)', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                We don't just cut frames.
              </motion.div>

              {/* Visual Timeline Element Overlay */}
              <motion.div initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }} viewport={{ once: true }} style={{ width: '100%', maxWidth: '800px', height: '60px', display: 'flex', gap: '4px', margin: '0 auto', zIndex: 0 }}>
                {[...Array(40)].map((_, i) => (
                  <div key={i} style={{ flex: 1, backgroundColor: i % 8 === 0 ? 'var(--accent-color)' : 'rgba(255,255,255,0.08)', opacity: i % 8 === 0 ? 0.9 : Math.random() * 0.5 + 0.1, height: `${Math.random() * 60 + 40}%`, alignSelf: 'center', borderRadius: '1px' }}></div>
                ))}
              </motion.div>

              <motion.div initial={{ y: 40, opacity: 0, rotateX: 20 }} whileInView={{ y: 0, opacity: 1, rotateX: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.165, 0.84, 0.44, 1] }} viewport={{ once: true }} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 10vw, 8.5rem)', fontStyle: 'italic', lineHeight: 1, color: '#fff', transformOrigin: 'bottom', marginTop: '-1.5rem', zIndex: 10, position: 'relative', textShadow: '0 10px 40px rgba(0,0,0,0.8)' }}>
                We sculpt emotion
              </motion.div>

              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }} viewport={{ once: true }} style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem, 3vw, 1.5rem)', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-color)', marginTop: '2.5rem' }}>
                Out Of Time.
              </motion.div>

            </div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 1 }} viewport={{ once: true }}>
              <button className="btn hover-target" style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)', padding: '1rem 3rem', background: 'rgba(255,255,255,0.03)' }}>
                Read The Philosophy
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ padding: '6rem 0 2rem', backgroundColor: '#0A0B10', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="subtitle" style={{ marginBottom: '1rem', color: 'var(--text-secondary)', letterSpacing: '0.2em', fontSize: '0.75rem', textTransform: 'uppercase' }}>OPEN FOR COMMISSIONS</h2>
            <h3 className="title-huge" style={{ marginBottom: '4rem', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1, color: '#fff', fontWeight: 500 }}>
              Let's Create<br />Magic Together.
            </h3>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '4rem 0', width: '100%' }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', textAlign: 'left', flexWrap: 'wrap', gap: '2rem' }}>

              {/* Left Column */}
              {/* Left Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Camera size={28} color="#fff" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', fontWeight: 400, color: '#fff', margin: 0, letterSpacing: '0.02em' }}>Ananya Sharma</h4>
                    <p style={{ color: 'var(--text-secondary)', margin: '0.25rem 0 0 0', fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Video Editor</p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
                  <div className="hover-target" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}>
                    <MapPin size={20} />
                    <span style={{ fontSize: '1.1rem', letterSpacing: '0.05em' }}>INDIA</span>
                  </div>
                  <div className="hover-target" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}>
                    <Mail size={20} />
                    <span style={{ fontSize: '1.1rem' }}>sharmaananya1210@gmail.com</span>
                  </div>
                  <div className="hover-target" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}>
                    <Phone size={20} />
                    <span style={{ fontSize: '1.1rem', letterSpacing: '0.05em' }}>+91 76930 76360</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem' }}>
                <h4 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', fontWeight: 400, color: '#fff', margin: 0, letterSpacing: '0.05em' }}>Follow Along</h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://www.instagram.com/annu_ananya__/" target="_blank" rel="noopener noreferrer" className="social-icon-btn instagram hover-target" style={{ width: '55px', height: '55px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', textDecoration: 'none' }}>
                    <Instagram size={22} />
                  </a>
                  <a href="https://www.linkedin.com/in/ananya-sharma-600702330" target="_blank" rel="noopener noreferrer" className="social-icon-btn linkedin hover-target" style={{ width: '55px', height: '55px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', textDecoration: 'none' }}>
                    <Linkedin size={22} />
                  </a>
                  <a href="https://wa.me/917693076360" target="_blank" rel="noopener noreferrer" className="social-icon-btn whatsapp hover-target" style={{ width: '55px', height: '55px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', textDecoration: 'none' }}>
                    <Whatsapp size={22} />
                  </a>
                </div>
              </div>

            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2.5rem', marginTop: '5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, letterSpacing: '0.05em' }}>© 2026 Ananya Sharma. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '2.5rem' }}>
                <a href="https://ananyasharmaacting.netlify.app/" target="_blank" rel="noopener noreferrer" className="glitch-link hover-target" style={{ textDecoration: 'none' }}>Acting Portfolio</a>
                <a href="#" className="hover-target" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.3s ease' }}>Privacy Policy</a>
                <a href="#" className="hover-target" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.3s ease' }}>Terms of Service</a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Fullscreen Video Modal */}
      {activeVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.95)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}
        >
          <button 
            onClick={() => setActiveVideo(null)}
            className="hover-target"
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              zIndex: 10000,
              padding: '1rem'
            }}
          >
            <XIcon size={32} />
          </button>
          
          <div style={{ width: '90%', height: '90%', maxWidth: '1600px', position: 'relative', overflow: 'hidden', borderRadius: '1rem' }}>
            {activeVideo.includes('youtube.com') || activeVideo.includes('youtu.be') ? (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.match(/(?:v=|youtu\.be\/)([^&]+)/)?.[1]}?autoplay=1&mute=0&controls=0&rel=0&showinfo=0&modestbranding=1&vq=hd1080&playsinline=1`}
                allow="autoplay; fullscreen; encrypted-media"
                allowFullScreen
                style={{ 
                  border: 'none', 
                  width: '100%', 
                  height: '100%', 
                  pointerEvents: 'none',
                  transform: 'scale(1.25) translateY(-4%)'
                }}
              />
            ) : activeVideo.match(/\.(mp4|webm|ogg)$/i) || activeVideo.includes('drive.google.com') ? (
              <video
                src={activeVideo}
                autoPlay
                controls
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '1rem' }}
              />
            ) : (
              <img src={activeVideo} alt="Media" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}
