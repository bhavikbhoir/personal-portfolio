import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { StaggerContainer, StaggerItem } from './motion';
import TGWLogo from '../assets/TGW_logo.png';
import TPALogo from '../assets/pokedex-logo.png';
import covid from '../assets/covid.png';
import FBBA from '../assets/FBBA.png';
import FT from '../assets/FT.png';
import TGWScreen from '../assets/Screens/TGW.png';
import FBBScreen from '../assets/Screens/FBB.png';
import CovidScreen from '../assets/Screens/Covid.png';
import FootyTabsScreen from '../assets/FootyTabs.png';
import PokedexScreen from '../assets/pokedex.png';

const PROJECTS = [
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
    desc: 'Live standings for Premier League, La Liga, Serie A, Bundesliga, Ligue 1, and Eredivisie plus Champions League updates.',
    tags: ['React 18', 'Vite', 'Bootstrap 5', 'Sass', 'Firebase'],
    github: 'https://github.com/bhavikbhoir/FootBBall-App',
    live: 'https://the-footbball-app.web.app/',
  },
  {
    logo: FT, featured: true, preview: FootyTabsScreen,
    title: 'FootyTabs',
    desc: 'Chrome new-tab extension — real-time clock, weather, Premier League standings, fixtures, and multi-engine search bar.',
    tags: ['React 18', 'Bootstrap 5', 'SCSS', 'Firebase', 'Dark Mode'],
    github: 'https://github.com/bhavikbhoir/FootyTabs',
    live: 'https://footy-tabs.web.app/',
  },
  {
    logo: TPALogo, featured: true, preview: PokedexScreen,
    title: 'The Pokedex App',
    desc: 'Feature-rich Pokédex — search, compare Pokémon, evolution chains, type effectiveness, move details, shiny sprites, and sound playback.',
    tags: ['React', 'React Hooks', 'Bootstrap', 'PokéAPI', 'Firebase', 'Accessibility'],
    github: 'https://github.com/bhavikbhoir/The-Pokedex-App',
    live: 'https://the-pokedex-app.web.app/',
  },
  {
    logo: covid, preview: CovidScreen,
    title: 'Covid Tracker',
    desc: 'Track global COVID-19 pandemic statistics with live data.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'Firebase'],
    github: 'https://github.com/bhavikbhoir/Covid-Tracker',
    live: 'https://covid19-pandemic-tracker.web.app/',
  },
  {
    title: 'React Signature Pad',
    desc: 'DocuSign-style draw-your-signature component for React apps.',
    tags: ['React', 'JavaScript', 'Netlify'],
    github: 'https://github.com/bhavikbhoir/React-Signature-Pad',
    live: 'https://csb-ygdnb.netlify.app/',
  },
  {
    title: 'Custom React Searchbar',
    desc: 'Search bar component letting users pick their favourite search engine.',
    tags: ['React', 'SCSS', 'Netlify'],
    github: 'https://github.com/bhavikbhoir/Custom_React_Searchbar',
    live: 'https://csb-hrmkl.netlify.app/',
  },
  {
    title: 'Narutoverse Jutsu',
    desc: 'Rasengan vs Sharingan — info on jutsus from the Naruto universe.',
    tags: ['React', 'SCSS', 'Netlify'],
    github: 'https://github.com/bhavikbhoir/Narutoverse-Jutsu',
    live: 'https://csb-oxp2u.netlify.app/',
  },
];

export function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <StaggerContainer className="proj-grid">
        {PROJECTS.map(p => (
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
              <a className="proj-link" href={p.live} target="_blank" rel="noreferrer noopener"><FaExternalLinkAlt /> Live</a>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
