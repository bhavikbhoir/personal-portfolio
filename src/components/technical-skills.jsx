import { StaggerContainer, StaggerItem } from './motion';

const CATEGORIES = [
  { title: 'Frontend',          tags: ['React','JavaScript','TypeScript','HTML5','CSS3/SCSS','Bootstrap','React Hooks','Context API','Vite','Framer Motion'] },
  { title: 'Backend',           tags: ['Node.js','Python','Express','FastAPI','REST APIs','GraphQL','Microservices','JWT','OAuth 2.1 / PKCE','Kafka','Serverless Framework'] },
  { title: 'Databases',         tags: ['PostgreSQL','pgvector','MongoDB','MySQL','DynamoDB'] },
  { title: 'Cloud / AWS',       tags: ['Lambda','API Gateway','S3','SNS','SQS','CloudWatch','IAM','Textract','Cognito','Secrets Manager','EventBridge','SSM Parameter Store'] },
  { title: 'AI / GenAI',        tags: ['AWS Bedrock','Bedrock Agent Core','MCP (Model Context Protocol)','Claude Sonnet 4.6','Claude Haiku','Prompt Engineering','LLM Evaluation / LLM-as-Judge','RAG / pgvector','Tool Use / Function Calling','Anti-hallucination Guardrails','AI Agent Orchestration','OpenAPI Schema Design','GitHub Copilot'] },
  { title: 'Testing & Quality', tags: ['Jest','React Testing Library','Mocha','Vitest','SonarQube','Datadog','Prompt Eval Harness'] },
  { title: 'DevOps & Tooling',  tags: ['Docker','Git/GitHub','GitHub Actions','Firebase','CI/CD','Vite','ESBuild'] },
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
