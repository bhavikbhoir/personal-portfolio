import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Introduction } from './components/introduction';
import { Employers } from './components/employers';
import { Degrees } from './components/degrees';
import { TSkills } from './components/technical-skills';
import { Certificates } from './components/certificates';
import { Artwork } from './components/artwork';
import { Projects } from './components/projects';
import {
  FaHome, FaBriefcase, FaBook, FaLightbulb,
  FaStar, FaCertificate, FaPencilAlt,
  FaLinkedin, FaGithub, FaMedium,
  FaBars, FaTimes, FaSun, FaMoon, FaDownload
} from 'react-icons/fa';

const NAV = [
  { id: 'home',         label: 'Home',          icon: <FaHome /> },
  { id: 'experience',   label: 'Experience',     icon: <FaBriefcase /> },
  { id: 'projects',     label: 'Projects',       icon: <FaLightbulb /> },
  { id: 'skills',       label: 'Skills',         icon: <FaStar /> },
  { id: 'certificates', label: 'Certifications', icon: <FaCertificate /> },
  { id: 'education',    label: 'Education',      icon: <FaBook /> },
  // Artwork hidden for now — re-add the line below to restore it in the sidebar:
  // { id: 'artwork', label: 'Artwork', icon: <FaPencilAlt /> },
];

const SOCIALS = [
  { href: 'https://www.linkedin.com/in/bhavikbhoir/', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://github.com/bhavikbhoir',           icon: <FaGithub />,   label: 'GitHub' },
  { href: 'https://medium.com/@bhvkbhoir95',          icon: <FaMedium />,   label: 'Medium' },
];

// "shell" pages center their content vertically in the viewport instead of
// pinning it to the top — that's what fixed the dead-space problem on short
// pages. "narrow" caps width for single-card content. "flow" (Projects,
// Artwork) opts out deliberately: they're already long enough to scroll on
// their own and don't need centering.
const SECTIONS = {
  home:         (nav) => <div className="page-shell"><Introduction navigate={nav} /></div>,
  experience:   () => <div className="page-shell page-shell-narrow"><Employers /></div>,
  education:    () => <div className="page-shell page-shell-narrow"><Degrees /></div>,
  projects:     () => <div className="page-flow"><Projects /></div>,
  skills:       () => <div className="page-shell"><TSkills /></div>,
  certificates: () => <div className="page-shell"><Certificates /></div>,
  artwork:      () => <div className="page-flow"><Artwork /></div>,
};

const panelVariants = {
  enter:  { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0 },
  exit:   { opacity: 0, y: -12 },
};

const VALID_SECTIONS = new Set(NAV.map(n => n.id).concat(['artwork']));

function hashToSection(hash) {
  const id = hash.replace(/^#\/?/, '');
  return VALID_SECTIONS.has(id) ? id : 'home';
}

export default function App() {
  const [active, setActive] = useState(() => hashToSection(window.location.hash));
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'dark');
  const mainRef = useRef(null);

  // Layout effect (runs before paint), not a regular effect — a regular
  // effect fires after the browser has already painted the previous theme,
  // which is what made toggling look like a flash/flicker instead of an
  // instant swap.
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync browser back/forward to active section
  useEffect(() => {
    const onPop = () => setActive(hashToSection(window.location.hash));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Signals the build-time prerenderer (vite.config.js) that the initial
  // content is in the DOM and ready to be captured as static HTML — content
  // is present as soon as this fires regardless of Framer Motion's
  // entrance-animation state (opacity/transform only, never conditional
  // rendering), so there's no need to wait for animations to settle.
  useEffect(() => {
    document.dispatchEvent(new Event('render-event'));
  }, []);

  // Cursor spotlight
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const onMove = (e) => {
      el.style.setProperty('--mx', `${e.clientX}px`);
      el.style.setProperty('--my', `${e.clientY}px`);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  const navigate = (id) => {
    setActive(id);
    setMenuOpen(false);
    window.history.pushState({}, '', `#${id}`);
    // Pages are content-height now (not a fixed internal-scroll box), so the
    // page itself scrolls — reset the window, not the old main-content ref.
    // Instant, not smooth: the page is about to change height/content anyway,
    // so animating a scroll through soon-to-be-replaced content just looks odd.
    window.scrollTo(0, 0);
  };

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <div className="app">
      <div className="mobile-bar">
        <span className="mobile-title">Bhavik Bhoir</span>
        <button className="menu-btn" onClick={() => setMenuOpen(o => !o)} aria-label="menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="layout">
        <nav className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`} aria-label="Main navigation">
          <div className="sidebar-name">BB</div>
          <ul className="nav-list">
            {NAV.map(n => (
              <li key={n.id}>
                <button
                  className={`nav-btn ${active === n.id ? 'nav-btn-active' : ''}`}
                  onClick={() => navigate(n.id)}
                  aria-current={active === n.id ? 'page' : undefined}
                >
                  <span className="nav-icon" aria-hidden="true">{n.icon}</span>
                  <span className="nav-label">{n.label}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="sidebar-footer">
            <div className="sidebar-socials">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer noopener" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              className="theme-toggle"
              href="/Bhavik_Bhoir_Resume.pdf"
              download
              aria-label="Download Resume"
            >
              <FaDownload /> Resume
            </a>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <><FaSun /> Light</> : <><FaMoon /> Dark</>}
            </button>
          </div>
        </nav>

        <main className="main-content spotlight" ref={mainRef}>
          <div className="bg-grid" aria-hidden="true" />

          {/* "wait" — old panel fully exits before the new one mounts. Pages
              are different heights now, so having both in the DOM at once
              (mode="sync") stacked them on top of each other mid-transition. */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={panelVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {SECTIONS[active](navigate)}
            </motion.div>
          </AnimatePresence>

          <div className="floor-bar">
            <a href="mailto:bhvkbhoir95@gmail.com">bhvkbhoir95@gmail.com</a>
            <span className="floor-sep">·</span>
            <a href="https://linkedin.com/in/bhavikbhoir" target="_blank" rel="noreferrer noopener">linkedin.com/in/bhavikbhoir</a>
            <span className="floor-sep">·</span>
            <a href="https://github.com/bhavikbhoir" target="_blank" rel="noreferrer noopener">github.com/bhavikbhoir</a>
          </div>
        </main>
      </div>
    </div>
  );
}
