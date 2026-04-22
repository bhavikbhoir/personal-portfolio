import { Reveal } from './motion';

const DEGREES = [
  {
    initials: 'TAMUK', color: '#f59e0b',
    degree: 'Master of Science',
    field: 'Electrical & Electronics Engineering',
    uni: 'Texas A&M University-Kingsville',
    years: '2017 – 2019', gpa: 'GPA: 4.00 / 4.00',
    courses: 'Digital Image Processing, Microwave Engineering, Digital Signal Processing, Wireless Networks, Principles of VLSI Design, Rapid Prototyping & ASIC Design.',
  },
  {
    initials: 'MU', color: '#06b6d4',
    degree: 'Bachelor of Engineering',
    field: 'Electronics & Telecommunications Engineering',
    uni: 'University of Mumbai',
    years: '2013 – 2017', gpa: 'GPA: 6.80 / 10.00',
    courses: 'Structured Programming, OOP, Wireless Communication, Mobile Communication, Embedded Systems, Operating Systems, Integrated Circuits, Digital Communication.',
  },
];

export function Degrees() {
  return (
    <div className="degrees">
      <h2>Education</h2>
      <div className="deg-grid">
        {DEGREES.map((d, i) => (
          <Reveal key={d.uni} delay={i * 0.12}>
            <div className="deg-card">
              <div className="deg-avatar" style={{ background: `${d.color}22`, border: `1px solid ${d.color}44`, color: d.color }}>
                {d.initials}
              </div>
              <div className="deg-body">
                <div className="deg-degree">{d.degree}</div>
                <div className="deg-field">{d.field}</div>
                <div className="deg-uni">{d.uni} · {d.years}</div>
                <div className="deg-gpa">{d.gpa}</div>
                <div className="deg-courses"><strong>Coursework:</strong> {d.courses}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
