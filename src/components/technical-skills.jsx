import { StaggerContainer, StaggerItem } from './motion';

const CATEGORIES = [
  { title: 'Frontend',          tags: ['React','JavaScript','HTML5','CSS3/SCSS','Bootstrap','React Hooks','Context API','Vite','Framer Motion'] },
  { title: 'Backend',           tags: ['Node.js','Express','REST APIs','GraphQL','Microservices','JWT','Kafka','Serverless Framework'] },
  { title: 'Databases',         tags: ['PostgreSQL','MongoDB','MySQL','DynamoDB','T-SQL'] },
  { title: 'Cloud / AWS',       tags: ['Lambda','API Gateway','S3','EC2','SNS','SQS','CloudWatch','IAM','SSM Parameter Store','AWS CodePipeline'] },
  { title: 'AI / GenAI',        tags: ['AWS Bedrock','Bedrock Agent Core','Claude Sonnet','Prompt Engineering','LLM Integration','Bedrock Guardrails','AI Agent Orchestration','Tool Use / Function Calling','GitHub Copilot'] },
  { title: 'Testing & Quality', tags: ['Jest','React Testing Library','Mocha','Enzyme','SonarQube','Datadog'] },
  { title: 'DevOps & Tooling',  tags: ['Docker','Git/GitHub','GitHub Actions','Firebase','CI/CD','Webpack','Babel'] },
  { title: 'Process & Design',  tags: ['Agile/Scrum','JIRA','Confluence','Figma','System Design','Code Review'] },
];

export function TSkills() {
  return (
    <div className="skills">
      <h2>Technical Skills</h2>
      <StaggerContainer className="skills-grid">
        {CATEGORIES.map(cat => (
          <StaggerItem key={cat.title} className="skill-card">
            <div className="skill-card-title">{cat.title}</div>
            <div className="tag-list">
              {cat.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
