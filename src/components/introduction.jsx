import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaDownload, FaArrowRight } from 'react-icons/fa';
import headshotImg from '../assets/headshot.jpg';

const STACK = ['React', 'TypeScript', 'Node.js', 'AWS Bedrock', 'MCP', 'DynamoDB', 'pgvector', 'Kafka', 'Gen AI'];
const ROLES = ['Full Stack Developer', 'Gen AI Developer'];
const MAX_CYCLES = 2;

function Typewriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [cycles, setCycles] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const target = ROLES[roleIdx];
    const speed = deleting ? 40 : 80;

    if (!deleting && text === target) {
      const isLastRole = roleIdx === ROLES.length - 1;
      if (isLastRole && cycles + 1 >= MAX_CYCLES) {
        setDone(true);
        return;
      }
      const pause = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(pause);
    }
    if (deleting && text === '') {
      setDeleting(false);
      const nextIdx = (roleIdx + 1) % ROLES.length;
      if (nextIdx === 0) setCycles(c => c + 1);
      setRoleIdx(nextIdx);
      return;
    }

    const timer = setTimeout(() => {
      setText(deleting ? target.slice(0, text.length - 1) : target.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx, cycles, done]);

  return <span className="typewriter">{text}{!done && <span className="cursor">|</span>}</span>;
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
          Full Stack Developer and AI engineer with 5+ years on an enterprise-scale financial lending
          platform — leading multiple product modules, a cross-functional team of 14, and an integration
          programme grown from 0 to 40+ vendor connections. I build end-to-end: React frontends,
          Node.js and Python APIs, event-driven pipelines, LLM eval infrastructure, and production
          AI agents on AWS Bedrock.
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

        <motion.div className="intro-stats" {...fadeUp(1.1)}>
          {[
            { value: '5+',  label: 'Years Experience' },
            { value: '14',  label: 'Team Members Led' },
            { value: '40+', label: 'Integrations Delivered' },
            { value: '20+', label: 'AI Agents Built' },
          ].map(({ value, label }) => (
            <div key={label} className="stat-card">
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="intro-photo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        <img className="avatar-photo" src={headshotImg} alt="Bhavik Bhoir" />
      </motion.div>
    </div>
  );
}
