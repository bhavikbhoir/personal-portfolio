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
      'Build and ship high-impact UI features and performance improvements on a high-traffic financial platform using React, TypeScript, Hooks, and modern frontend architecture patterns.',
      'Design RESTful and GraphQL services using Node.js, Express, PostgreSQL, and MongoDB.',
      'Architect and implement event-driven workflows using Kafka, decoupling core services and improving system resilience.',
      'Manage AWS infrastructure (EC2, S3, Lambda, SNS, SQS, CloudWatch, IAM) across multiple environments.',
      'Monitor production health and debug live issues using Datadog — triaging alerts and tracing root causes across distributed services.',
      'Piloted GitHub Copilot and AWS Bedrock-based tooling across the team — evaluated models, shipped internal PoCs, and drove adoption that reduced boilerplate writing and code review turnaround.',
      'Enforce engineering quality through automated testing (Jest, RTL, Mocha) and SonarQube — integrated into CI/CD pipelines.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Kafka', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Jest', 'SonarQube', 'Datadog', 'GitHub Actions'],
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
