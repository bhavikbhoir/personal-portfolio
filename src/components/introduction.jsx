import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaDownload, FaArrowRight } from 'react-icons/fa';

const STACK = ['React', 'Node.js', 'TypeScript', 'AWS', 'GraphQL', 'PostgreSQL', 'Docker', 'Serverless'];
const ROLES = ['Full Stack Developer', 'Module Lead', 'Integration Lead'];

function Typewriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    const speed = deleting ? 40 : 80;

    if (!deleting && text === target) {
      const pause = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(pause);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(deleting ? target.slice(0, text.length - 1) : target.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  return <span className="typewriter">{text}<span className="cursor">|</span></span>;
}

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.3 + i * 0.04, duration: 0.4, ease: 'easeOut' },
  }),
};

export function Introduction({ navigate }) {
  const name = "Bhavik Bhoir";

  return (
    <div className="intro">
      <div className="intro-text">
        <motion.span className="role-badge" {...fadeUp(0.1)}>
          <Typewriter />
        </motion.span>

        <h1>
          <motion.span {...fadeUp(0.15)} style={{ display: 'inline-block', marginRight: '0.5rem' }}>
            Hey, I'm
          </motion.span>
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              className="hero-letter"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          <motion.span {...fadeUp(0.8)} style={{ display: 'inline-block' }}> 👋</motion.span>
        </h1>

        <motion.p className="tagline" {...fadeUp(0.6)}>
          Full-Stack Developer with 5+ years building production-grade platforms in financial services.
          I own end-to-end delivery — from React frontends and Node.js microservices to AWS serverless
          infrastructure, third-party integrations, and event-driven systems.
          <br /><br />
          Currently serving as Module Lead at Idexcel, driving cross-module integrations across the full
          LOS lifecycle and championing AI-powered tooling to accelerate engineering quality and delivery.
        </motion.p>

        <motion.div className="intro-actions" {...fadeUp(0.75)}>
          <button className="btn-primary" onClick={() => navigate('projects')}>
            View My Work <FaArrowRight />
          </button>
          <a className="btn-secondary" href="/Bhavik_Bhoir_Resume.pdf" download>
            <FaDownload /> Resume
          </a>
        </motion.div>

        <motion.ul className="contact-links" {...fadeUp(0.85)}>
          <li><a href="mailto:bhvkbhoir95@gmail.com"><FaEnvelope /> bhvkbhoir95@gmail.com</a></li>
          <li><a href="https://linkedin.com/in/bhavikbhoir" target="_blank" rel="noreferrer noopener"><FaLinkedin /> LinkedIn</a></li>
          <li><a href="https://github.com/bhavikbhoir" target="_blank" rel="noreferrer noopener"><FaGithub /> GitHub</a></li>
          <li><span className="contact-plain"><FaMapMarkerAlt /> Herndon, VA</span></li>
        </motion.ul>

        <motion.div className="stack-pills" {...fadeUp(0.95)}>
          {STACK.map((s, i) => (
            <motion.span
              key={s}
              className="pill"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.06, duration: 0.3 }}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="intro-photo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        <div className="avatar-initials">BB</div>
      </motion.div>
    </div>
  );
}
