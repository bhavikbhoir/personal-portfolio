import { StaggerContainer, StaggerItem } from './motion';

const CATEGORIES = [
  { title: 'Frontend',          tags: ['React','TypeScript','JavaScript','HTML5','CSS3/SCSS','Bootstrap','Redux','Angular','React Hooks','Context API'] },
  { title: 'Backend',           tags: ['Node.js','Express','REST APIs','GraphQL','Microservices','JWT','Kafka'] },
  { title: 'Databases',         tags: ['PostgreSQL','MongoDB','MySQL','T-SQL'] },
  { title: 'Cloud / AWS',       tags: ['EC2','S3','Lambda','SNS','SQS','CloudWatch','IAM','AWS CodePipeline'] },
  { title: 'AI / GenAI',        tags: ['GitHub Copilot','LLM Tooling','Prompt Engineering','AWS ML Training'] },
  { title: 'Testing & Quality', tags: ['Jest','React Testing Library','Mocha','Enzyme','SonarQube','Datadog'] },
  { title: 'DevOps & Tooling',  tags: ['Docker','Git/GitHub','GitHub Actions','Webpack','Babel','CI/CD'] },
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
