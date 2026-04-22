import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Reveal } from './motion';

const JOBS = [
  {
    initials: 'IX', color: '#f59e0b',
    company: 'Idexcel Inc', role: 'Full Stack Developer — Module Lead',
    location: 'Herndon, VA', period: 'Sep 2020 – Present', current: true,
    bullets: [
      'Serve as Module Lead on a large-scale financial platform — coordinating cross-module dependencies, mentoring engineers, and owning sprint delivery end-to-end using Agile (JIRA, Confluence).',
      'Drive architecture and solution design discussions with product, design, and business stakeholders — translating complex requirements into scalable technical solutions.',
      'Lead integrations across the full LOS lifecycle — credit reporting, KYB/KYC identity verification, document generation, collateral and vehicle evaluation services.',
      'Deliver CRM campaign features end-to-end — building SNS/SQS-driven messaging pipelines, webhook integrations, and email workflows.',
      'Build and ship high-impact UI features and performance improvements on a high-traffic financial application using React, Hooks, and modern frontend architecture patterns.',
      'Design RESTful and GraphQL services using Node.js, Express, PostgreSQL, and MongoDB.',
      'Architect and implement event-driven workflows using Kafka, decoupling core services and improving system resilience.',
      'Manage AWS infrastructure (EC2, S3, Lambda, SNS, SQS, CloudWatch, IAM) across multiple environments.',
      'Monitor production health and debug live issues using Datadog — triaging alerts and tracing root causes across distributed services.',
      'Champion AI and LLM-powered development tooling across the team, accelerating feature delivery and improving code review cycles.',
      'Enforce engineering quality through automated testing (Jest, RTL, Mocha) and SonarQube — integrated into CI/CD pipelines.',
    ],
    tags: ['React','TypeScript','Node.js','GraphQL','Kafka','PostgreSQL','MongoDB','AWS','Docker','Jest','SonarQube','Datadog','GitHub Actions'],
  },
  {
    initials: 'OT', color: '#06b6d4',
    company: 'OpenTabs', role: 'Web Developer',
    location: 'Remote', period: '',
    bullets: [
      'Rebuilt website and browser extension using React, Node.js, Express, and MongoDB with JWT-based REST API authentication.',
      'Increased user base by 200% through quality improvements, A/B testing via Google Analytics and Chrome Lighthouse.',
      'Performed unit testing using Jest, Enzyme, and React Testing Library; optimized asset loading.',
      'Maintained cross-browser compatibility across Chrome, Safari, and Firefox.',
    ],
    tags: ['React','Node.js','Express','MongoDB','TypeScript','Jest','Webpack','Figma'],
  },
  {
    initials: 'FK', color: '#8b5cf6',
    company: 'Forkaia', role: 'Web Developer',
    location: 'Irvine, CA', period: '',
    bullets: [
      'Developed PWAs and SPAs from scratch using React and Angular; increased performance by 50%.',
      'Created mockups, wireframes, and user flows using Figma, InVision, and Photoshop.',
      'Deployed apps on Heroku, Firebase, and AWS; designed login/registration flows with SQL and PHP.',
    ],
    tags: ['React','Angular','TypeScript','SCSS','Figma','AWS','Firebase','PHP'],
  },
  {
    initials: 'BG', color: '#10b981',
    company: 'Buttonwood Gaming', role: 'Game Design & Development Intern',
    location: 'Cambridge, MA', period: '',
    bullets: [
      'Designed game screens in Unity using C#/JavaScript with agile prototyping; led a UI design team of 6.',
      'Created pixel-perfect graphic elements including icons, animations, and buttons.',
    ],
    tags: ['C#','.NET','Unity','JavaScript','Jira'],
  },
];

function Avatar({ initials, color }) {
  return (
    <div className="company-avatar" style={{ background: `${color}22`, border: `1px solid ${color}44`, color }}>
      {initials}
    </div>
  );
}

export function Employers() {
  return (
    <div className="employers">
      <h2>Work Experience</h2>
      {JOBS.map((job, i) => (
        <Reveal key={job.company} delay={i * 0.1}>
          <div className="exp-card">
            <div className="exp-header">
              <Avatar initials={job.initials} color={job.color} />
              <div className="exp-meta">
                <h5>
                  {job.company}
                  {job.current && <span className="badge-current">Current</span>}
                </h5>
                <div className="exp-role">{job.role}</div>
                <div className="exp-details">
                  {job.location && <span><FaMapMarkerAlt aria-hidden="true" /> {job.location}</span>}
                  {job.period   && <span><FaCalendarAlt aria-hidden="true" /> {job.period}</span>}
                </div>
              </div>
            </div>
            <ul>
              {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="tag-row">
              {job.tags.map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
