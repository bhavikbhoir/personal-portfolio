import { StaggerContainer, StaggerItem } from './motion';
import Tensorflow from '../assets/certificates/Tensorflow.jpg';
import aws1 from '../assets/certificates/aws1.jpg';
import aws2 from '../assets/certificates/aws2.jpg';
import aws3 from '../assets/certificates/aws3.png';
import aws4 from '../assets/certificates/aws4.png';
import Web from '../assets/certificates/Web.jpg';
import Python from '../assets/certificates/Python.jpg';
import SQL from '../assets/certificates/SQL.jpg';
import Matlab from '../assets/certificates/Matlab.jpg';
import Unity from '../assets/certificates/Unity.jpg';
import C from '../assets/certificates/C.jpg';
import Cpp from '../assets/certificates/C++.jpg';
import LabView from '../assets/certificates/LabVIEW.jpg';

// Ordered by relevance to the Full-Stack / Gen AI pitch, most first.
const CERT_GROUPS = [
  {
    heading: 'Cloud & AI',
    certs: [
      { img: aws2, w: 1517, h: 1046, label: 'AWS Solutions Training: Machine Learning on AWS — ML Practitioners' },
      { img: aws3, w: 1156, h: 794,  label: 'Containers on AWS — Technical' },
      { img: aws4, w: 1049, h: 725,  label: 'Data Analytics on AWS — Technical' },
      { img: aws1, w: 1522, h: 1039, label: 'AWS Solutions Training: Migrating to AWS — Technical' },
      { img: Tensorflow, w: 1600, h: 1194, label: 'TensorFlow for Deep Learning with Python' },
    ],
  },
  {
    heading: 'Web Development',
    certs: [
      { img: Web,    w: 1600, h: 1194, label: 'The Web Developer Bootcamp' },
      { img: Python, w: 1600, h: 1194, label: 'Python Bootcamp' },
      { img: SQL,    w: 1600, h: 1194, label: 'The Complete SQL Bootcamp' },
    ],
  },
  {
    heading: 'Additional',
    certs: [
      { img: Matlab,  w: 1600, h: 1194, label: 'MATLAB — Image Processing' },
      { img: Unity,   w: 1600, h: 1194, label: 'Game Development with Unity' },
      { img: C,       w: 1600, h: 1194, label: 'C Programming' },
      { img: Cpp,     w: 1600, h: 1194, label: 'C++: From Beginner to Expert' },
      { img: LabView, w: 1600, h: 1194, label: 'LabVIEW — Computer Vision & Image Processing' },
    ],
  },
];

// Text-based groups (no scanned image available) — icon-badge cards.
// Substantive Anthropic courses first, intro/101-level ones after.
const TEXT_CERT_GROUPS = [
  {
    heading: 'Anthropic Learning Academy', icon: 'A',
    courses: [
      'Building with the Claude API',
      'Introduction to Model Context Protocol',
      'AI Fluency: Framework & Foundations',
      'Claude Code in Action',
      'Claude 101',
      'Claude Code 101',
      'Introduction to Claude Cowork',
    ],
  },
  {
    heading: 'LinkedIn Learning', icon: 'L',
    courses: [
      'Designing RESTful APIs',
      'Programming Foundations: APIs and Web Services',
      'React: Testing and Debugging',
    ],
  },
];

export function Certificates() {
  return (
    <div className="certificates">
      <h2>Certifications</h2>

      {TEXT_CERT_GROUPS.map(group => (
        <div key={group.heading} className="cert-group">
          <h4 className="cert-group-heading">{group.heading}</h4>
          <StaggerContainer className="cert-grid cert-grid-text">
            {group.courses.map(course => (
              <StaggerItem key={course} className="cert-card cert-card-text">
                <div className="cert-card-text-icon">{group.icon}</div>
                <div className="cert-label">{course}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      ))}

      {CERT_GROUPS.map(group => (
        <div key={group.heading} className="cert-group">
          <h4 className="cert-group-heading">{group.heading}</h4>
          <StaggerContainer className="cert-grid">
            {group.certs.map(c => (
              <StaggerItem key={c.label} className="cert-card">
                <div className="cert-thumb" style={{ paddingBottom: `${(c.h / c.w) * 100}%` }}>
                  <img src={c.img} alt={c.label} loading="lazy" />
                </div>
                <div className="cert-label">{c.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      ))}
    </div>
  );
}
