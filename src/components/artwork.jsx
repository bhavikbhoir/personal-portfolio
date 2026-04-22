import { StaggerContainer, StaggerItem } from './motion';
import atom from '../assets/artwork/atom.jpg';
import bvillains from '../assets/artwork/bvillains.jpg';
import bvs from '../assets/artwork/bvs.jpg';
import cold from '../assets/artwork/cold.jpg';
import deathstroke from '../assets/artwork/deathstroke.jpg';
import Dent from '../assets/artwork/Dent.jpg';
import flashpoint from '../assets/artwork/flashpoint.jpg';
import joker from '../assets/artwork/joker.jpg';
import lantern from '../assets/artwork/lantern.jpg';
import svb from '../assets/artwork/svb.jpg';
import TKJ from '../assets/artwork/TKJ.jpg';
import kakashi from '../assets/artwork/kakashi.jpg';

const PIECES = [
  { img: kakashi,     label: 'Kakashi Hatake of the Sharingan' },
  { img: lantern,     label: 'Hal Jordan — Green Lantern' },
  { img: atom,        label: 'Ray Palmer — The Atom' },
  { img: joker,       label: 'The Joker' },
  { img: bvs,         label: 'Batman vs Superman' },
  { img: deathstroke, label: 'Slade Wilson — Deathstroke' },
  { img: flashpoint,  label: 'Thomas Wayne vs Reverse Flash (Flashpoint Paradox)' },
  { img: Dent,        label: 'Harvey Dent — Two Face' },
  { img: cold,        label: 'Captain Cold vs The Flash' },
  { img: svb,         label: 'Superman vs Batman' },
  { img: TKJ,         label: 'The Killing Joke' },
  { img: bvillains,   label: 'Batman Villains' },
];

export function Artwork() {
  return (
    <div className="artwork">
      <h2>Artwork</h2>
      <p className="artwork-intro">DC Comics & anime fan art — pencil and digital.</p>
      <StaggerContainer className="art-grid">
        {PIECES.map(p => (
          <StaggerItem key={p.label} className="art-card">
            <img src={p.img} alt={p.label} loading="lazy" />
            <div className="art-label">{p.label}</div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
