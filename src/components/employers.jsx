import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Reveal } from './motion';

const JOBS = [
  {
    initials: 'IX', color: '#f59e0b',
    company: 'Idexcel Inc', role: 'Full Stack Developer — Module Lead',
    location: 'Herndon, VA', period: 'Sep 2020 – Present', current: true,
    bullets: [
      'Led the platform\'s third-party integration programme from scratch — grew from 0 to 40+ live vendor connections, owning the full lifecycle: vendor outreach, technical and commercial discussions, API analysis, development, QA, and hands-on client onboarding for every rollout.',
      'Lead as Module Lead across multiple product modules — managing a cross-functional team of 14 (6 engineers, 2 BAs, 2 UI/UX, 4 QA), owning sprint delivery end-to-end, and driving architecture and solution design with product and business stakeholders.',
      'Contributing to an AI agents platform on AWS Bedrock AgentCore — 20+ domain agents across loan processing, campaigns, and document OCR; building an MCP Gateway and Node.js desktop extension on the official MCP SDK; shipped an LLM-as-judge eval Lambda and RAG pipeline using pgvector and Titan embeddings.',
      'Shipped a production anti-hallucination guardrail for AI-generated campaign drafts — every model-proposed audience filter is validated against the live filter registry before a draft is created; unrecognised filters drop silently rather than hallucinate into output.',
      'Build and ship React + TypeScript frontends and Node.js/GraphQL APIs; architect event-driven pipelines on Kafka, SNS, and SQS across the lending lifecycle including identity verification, credit reporting, and document processing.',
      'Drive engineering quality via Jest, RTL, SonarQube, and Datadog in CI/CD — shipped prompt eval harnesses alongside standard test suites to cover both code correctness and AI output reliability.',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Python', 'GraphQL', 'Kafka', 'PostgreSQL', 'pgvector', 'DynamoDB', 'AWS Bedrock', 'Bedrock AgentCore', 'MCP', 'Textract', 'SonarQube', 'Datadog'],
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
