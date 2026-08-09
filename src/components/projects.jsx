import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { StaggerContainer, StaggerItem } from './motion';
import TGWLogo from '../assets/TGW_logo.png';
import TPALogo from '../assets/pokedex-logo.png';
import FBBA from '../assets/FBBA.png';
import FT from '../assets/FT.png';
import DayLensLogo from '../assets/day-lens-logo.svg';
import ManifestLogo from '../assets/manifest-logo.svg';
import TGWScreen from '../assets/Screens/TGW.png';
import FBBScreen from '../assets/Screens/FBB.png';
import ManifestScreen from '../assets/Screens/MANIFEST.png';
import FootyTabsScreen from '../assets/FootyTabs.png';
import PokedexScreen from '../assets/pokedex.png';

const PROJECTS = [
  {
    logo: ManifestLogo, featured: true, preview: ManifestScreen,
    title: 'MANIFEST',
    desc: 'Full-stack collaborative trip planner — Claude Sonnet 4.6 generates real-data-grounded itineraries (OpenStreetMap opening hours, OSRM driving times), the group suggests changes and approves the plan, then tracks events on the day and settles shared costs. React SPA + 30+ Lambda functions, DynamoDB single-table design, Cognito JWT auth, Leaflet maps, forced Bedrock tool-use for guaranteed structured output.',
    tags: ['React 18', 'Vite', 'Framer Motion', 'Node.js', 'AWS Lambda', 'DynamoDB', 'AWS Cognito', 'AWS Bedrock', 'Claude Sonnet 4.6', 'Leaflet', 'Serverless Framework', 'Firebase', 'SCSS'],
    github: 'https://github.com/bhavikbhoir/trip-planner',
    live: 'https://trip-planner-manifest.web.app/',
  },
  {
    logo: TGWLogo, featured: true, preview: TGWScreen,
    title: 'The Gooners World',
    desc: 'Full-stack Arsenal F.C. fan platform with live scores, AI predictions, post-match summaries, and a multi-turn chat agent — all powered by Claude Sonnet 4.6 via AWS Bedrock and Bedrock Agent Core. React SPA backed by serverless Node.js on AWS Lambda + API Gateway with GitHub Actions CI/CD.',
    tags: ['React 18', 'Vite', 'Node.js', 'AWS Lambda', 'API Gateway', 'AWS Bedrock', 'Claude Sonnet 4.6', 'Bedrock Agent Core', 'Serverless Framework', 'Firebase', 'SCSS'],
    github: 'https://github.com/bhavikbhoir/the-gooners-world',
    live: 'https://the-gooners-world.web.app/',
  },
  {
    logo: FBBA, preview: FBBScreen,
    title: "The Foot'BB'all App",
    desc: 'Multi-league football stats app covering Premier League, La Liga, Serie A, Bundesliga, Ligue 1, and Eredivisie — plus Champions League updates. Shares the same AWS Lambda + API Gateway backend as The Gooners World.',
    tags: ['React 18', 'Vite', 'Bootstrap 5', 'Sass', 'Firebase', 'GitHub Actions'],
    github: 'https://github.com/bhavikbhoir/FootBBall-App',
    live: 'https://the-footbball-app.web.app/',
  },
  {
    logo: FT, featured: true, preview: FootyTabsScreen,
    title: 'FootyTabs',
    desc: 'Chrome new-tab extension replacing the default new-tab page with a real-time football dashboard — Premier League standings, upcoming fixtures, weather, clock, and a multi-engine search bar. Built as a Chrome Manifest V3 extension.',
    tags: ['React 18', 'Chrome Extension (MV3)', 'Bootstrap 5', 'SCSS', 'Firebase', 'Dark Mode'],
    github: 'https://github.com/bhavikbhoir/FootyTabs',
    live: 'https://footy-tabs.web.app/',
  },
  {
    logo: TPALogo, featured: true, preview: PokedexScreen,
    title: 'The Pokédex App',
    desc: 'Feature-rich Pokédex SPA — search and compare Pokémon, evolution chains, type effectiveness, move details, shiny sprites, and sound playback via the PokéAPI.',
    tags: ['React', 'React Hooks', 'Bootstrap', 'PokéAPI', 'Firebase', 'Accessibility'],
    github: 'https://github.com/bhavikbhoir/The-Pokedex-App',
    live: 'https://the-pokedex-app.web.app/',
  },
];

const ACTIVE_DEV = [
  {
    logo: DayLensLogo,
    title: 'Day Lens',
    desc: 'AI-powered personal finance and daily planning SPA. Budget tracking with income/expense categorisation, CSV and PDF bank statement import, spending analysis with charts, and AI-suggested categories via AWS Bedrock. AWS Cognito authentication backed by a serverless Lambda + DynamoDB API. Recruiter demo mode in progress.',
    tags: ['React 18', 'Vite', 'AWS Cognito', 'DynamoDB', 'Lambda', 'API Gateway', 'AWS Bedrock', 'SCSS', 'Firebase'],
    github: 'https://github.com/bhavikbhoir/personal-planner',
    live: 'https://day-lens.web.app/',
  },
];

function ProjectCard({ p }) {
  return (
    <StaggerItem key={p.title} className={`proj-card ${p.featured ? 'proj-featured' : ''}`}>
      {p.preview && (
        <div className="proj-preview">
          <img src={p.preview} alt={`${p.title} preview`} loading="lazy" />
        </div>
      )}
      <div className="proj-header">
        {p.logo
          ? <img className="proj-logo" src={p.logo} alt={p.title} loading="lazy" />
          : <div className="proj-logo proj-logo-placeholder" aria-hidden="true">{'</>'}</div>
        }
        <span className="proj-title">
          {p.title}
          {p.featured && <span className="badge-featured">Featured</span>}
        </span>
      </div>
      <p className="proj-desc">{p.desc}</p>
      <div className="proj-tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
      <div className="proj-links">
        <a className="proj-link" href={p.github} target="_blank" rel="noreferrer noopener"><FaGithub /> Code</a>
        {p.live && <a className="proj-link" href={p.live} target="_blank" rel="noreferrer noopener"><FaExternalLinkAlt /> Live</a>}
      </div>
    </StaggerItem>
  );
}

function ActiveCard({ p }) {
  return (
    <StaggerItem className="proj-card proj-card-wip">
      <div className="proj-header">
        {p.logo
          ? <img className="proj-logo" src={p.logo} alt={p.title} loading="lazy" />
          : <div className="proj-logo proj-logo-placeholder" aria-hidden="true">{'</>'}</div>
        }
        <span className="proj-title">
          {p.title}
          <span className="badge-building">Building</span>
        </span>
      </div>
      <p className="proj-desc">{p.desc}</p>
      <div className="proj-tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
      <div className="proj-links">
        <a className="proj-link" href={p.github} target="_blank" rel="noreferrer noopener"><FaGithub /> Code</a>
        {p.live && <a className="proj-link" href={p.live} target="_blank" rel="noreferrer noopener"><FaExternalLinkAlt /> Live</a>}
      </div>
    </StaggerItem>
  );
}

export function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="active-dev-section">
        <h4 className="active-dev-heading">
          <span className="pulse-dot" aria-hidden="true" />
          Currently Building
        </h4>
        <StaggerContainer className="proj-grid">
          {ACTIVE_DEV.map(p => <ActiveCard key={p.title} p={p} />)}
        </StaggerContainer>
      </div>

      <h4 className="proj-section-heading">Shipped</h4>
      <StaggerContainer className="proj-grid">
        {PROJECTS.map(p => <ProjectCard key={p.title} p={p} />)}
      </StaggerContainer>
    </div>
  );
}
