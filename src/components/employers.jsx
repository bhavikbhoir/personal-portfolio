import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Reveal } from './motion';

const JOBS = [
  {
    initials: 'IX', color: '#f59e0b',
    company: 'Idexcel Inc', role: 'Full Stack Developer — Module Lead',
    location: 'Herndon, VA', period: 'Sep 2020 – Present', current: true,
    bullets: [
      'Own React UI development on a high-traffic financial lending platform — leading usability and performance improvements that reduce time-to-task for loan-processing users.',
      'Architect Node.js/GraphQL backend services and event-driven Kafka, SNS, and SQS pipelines across the lending lifecycle, decoupling core services and improving async processing throughput.',
      'Lead a 40+ live third-party vendor integration program across the entire loan origination lifecycle (credit reporting, KYC/KYB identity verification, document generation, collateral evaluation) and Outlook/Microsoft Teams CRM integration — driving architecture and integration design directly with product, design, and business stakeholders.',
      'Supported production on-call and incident response for 8 services; built CloudWatch/Datadog alarms and dashboards.',
      'Serve as Module Lead for a cross-functional team of 14 (6 engineers, 2 BAs, 2 UI/UX, 4 QA) — own sprint delivery end-to-end and drive architecture decisions across multiple product modules.',
      'Co-architected a 20+ agent platform on AWS Bedrock AgentCore — autonomous, multi-step agents (MCP Gateway, RAG on pgvector, LLM-as-judge evaluation) driving loan-processing and document-analysis workflows, cutting review from hours to minutes.',
      'Shipped separate, direct-LLM-powered features across CRM workflows — automated campaign content generation with compliance validation (regulatory and client-specific policy checks via a live filter registry) and built-in A/B testing, cutting recurring campaign creation to under a minute; plus AI-generated meeting prep and summarization, cutting prep and documentation to under 5 minutes.',
      'Built an AI-driven bulk document import pipeline — replacing manual, service-request-based bulk data loads with self-service upload and automated extraction/analysis — turning a multi-person, multi-hour process into a single-user task completed in minutes.',
    ],
    tags: ['React', 'Node.js', 'GraphQL', 'Kafka', 'PostgreSQL', 'pgvector', 'DynamoDB', 'AWS Bedrock', 'Bedrock AgentCore', 'MCP', 'Textract', 'Microsoft Teams', 'Outlook/Graph', 'SonarQube', 'Datadog'],
  },
  {
    initials: 'TB', color: '#6366f1',
    company: 'Thought Byte, Inc.', role: 'Frontend Developer',
    location: 'Nutley, NJ', period: 'Apr 2020 – Sep 2020',
    bullets: [
      'Built responsive, pixel-perfect UIs in React and Bootstrap, including a custom CAPTCHA using image-processing techniques for authentication workflows.',
      'Integrated RESTful APIs on Node.js, Express, and SQL to drive dynamic data across the frontend.',
    ],
    tags: ['React', 'JavaScript', 'Bootstrap', 'Node.js', 'Express', 'SQL'],
  },
  {
    initials: 'FK', color: '#0ea5e9',
    company: 'Forkaia', role: 'Web Developer',
    location: 'Irvine, CA', period: 'Aug 2019 – Apr 2020',
    bullets: [
      'Built responsive single-page applications from scratch with React, Redux, Angular 8/9, and TypeScript — translating Figma/Photoshop wireframes into accessible, WCAG-compliant layouts.',
      'Designed secure login/registration with an authenticated user database on PHP and MySQL; deployed to Heroku and AWS. Recognised with a Distinguished Performer award.',
    ],
    tags: ['React', 'Redux', 'Angular', 'TypeScript', 'PHP', 'MySQL', 'Heroku', 'AWS'],
  },
  {
    initials: 'BG', color: '#ef4444',
    company: 'Buttonwood Gaming', role: 'Game Design & Development Intern',
    period: 'Sep 2018 – Dec 2018',
    bullets: [
      'Accelerated prototype development by designing game screens in Unity using C# and JavaScript, maintaining code across networking, graphics, and gameplay mechanics.',
    ],
    tags: ['Unity', 'C#', 'JavaScript'],
  },
  {
    initials: 'TK', color: '#8b5cf6',
    company: 'Texas A&M University-Kingsville', role: 'Graduate Teaching Assistant',
    location: 'Kingsville, TX', period: 'Oct 2018 – Nov 2018',
    bullets: [
      'Prepared and assisted in Digital Signal Processing coursework alongside the M.S. programme.',
    ],
    tags: ['DSP', 'MATLAB'],
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
