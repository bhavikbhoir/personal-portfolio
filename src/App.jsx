import { useState, useEffect, useRef } from 'react';
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
  FaBars, FaTimes, FaSun, FaMoon
} from 'react-icons/fa';

const NAV = [
  { id: 'home',         label: 'Home',          icon: <FaHome /> },
  { id: 'experience',   label: 'Experience',     icon: <FaBriefcase /> },
  { id: 'education',    label: 'Education',      icon: <FaBook /> },
  { id: 'projects',     label: 'Projects',       icon: <FaLightbulb /> },
  { id: 'skills',       label: 'Skills',         icon: <FaStar /> },
  { id: 'certificates', label: 'Certifications', icon: <FaCertificate /> },
  { id: 'artwork',      label: 'Artwork',        icon: <FaPencilAlt /> },
];

const SOCIALS = [
  { href: 'https://www.linkedin.com/in/bhavikbhoir/', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://github.com/bhavikbhoir',           icon: <FaGithub />,   label: 'GitHub' },
  { href: 'https://medium.com/@bhvkbhoir95',          icon: <FaMedium />,   label: 'Medium' },
];

const SECTIONS = {
  home:         (nav) => <Introduction navigate={nav} />,
  experience:   () => <Employers />,
  education:    () => <Degrees />,
  projects:     () => <Projects />,
  skills:       () => <TSkills />,
  certificates: () => <Certificates />,
  artwork:      () => <Artwork />,
};

const panelVariants = {
  enter:  { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0 },
  exit:   { opacity: 0, y: -12 },
};

export default function App() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'dark');
  const mainRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : '');
    localStorage.setItem('theme', theme);
  }, [theme]);

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
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <div className="app">
      <div className="bg-blob" /><div className="bg-blob bg-blob-2" /><div className="bg-blob bg-blob-3" />

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
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <><FaSun /> Light</> : <><FaMoon /> Dark</>}
            </button>
          </div>
        </nav>

        <main className="main-content spotlight" ref={mainRef}>
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
        </main>
      </div>
    </div>
  );
}
