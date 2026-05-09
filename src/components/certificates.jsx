import { StaggerContainer, StaggerItem } from './motion';
import C from '../assets/certificates/C.jpg';
import Cpp from '../assets/certificates/C++.jpg';
import LabView from '../assets/certificates/LabVIEW.jpg';
import Matlab from '../assets/certificates/Matlab.jpg';
import Python from '../assets/certificates/Python.jpg';
import SQL from '../assets/certificates/SQL.jpg';
import Tensorflow from '../assets/certificates/Tensorflow.jpg';
import Unity from '../assets/certificates/Unity.jpg';
import Web from '../assets/certificates/Web.jpg';
import aws1 from '../assets/certificates/aws1.jpg';
import aws2 from '../assets/certificates/aws2.jpg';
import aws3 from '../assets/certificates/aws3.png';
import aws4 from '../assets/certificates/aws4.png';

const CERT_GROUPS = [
  {
    heading: 'Cloud & AI',
    certs: [
      { img: aws2, label: 'AWS Solutions Training: Machine Learning on AWS — ML Practitioners' },
      { img: aws3, label: 'Containers on AWS — Technical' },
      { img: aws4, label: 'Data Analytics on AWS — Technical' },
      { img: aws1, label: 'AWS Solutions Training: Migrating to AWS — Technical' },
      { img: Tensorflow, label: 'TensorFlow for Deep Learning with Python' },
    ],
  },
  {
    heading: 'Web Development',
    certs: [
      { img: Web,    label: 'The Web Developer Bootcamp' },
      { img: Python, label: 'Python Bootcamp' },
      { img: SQL,    label: 'The Complete SQL Bootcamp' },
    ],
  },
  {
    heading: 'Additional',
    certs: [
      { img: Matlab,  label: 'MATLAB — Image Processing' },
      { img: Unity,   label: 'Game Development with Unity' },
      { img: C,       label: 'C Programming' },
      { img: Cpp,     label: 'C++: From Beginner to Expert' },
      { img: LabView, label: 'LabVIEW — Computer Vision & Image Processing' },
    ],
  },
];

const ANTHROPIC_COURSES = [
  'Claude 101',
  'Claude Code 101',
  'Introduction to Claude Cowork',
  'Claude Code in Action',
  'AI Fluency: Framework & Foundations',
  'Building with the Claude API',
  'Introduction to Model Context Protocol',
];

export function Certificates() {
  return (
    <div className="certificates">
      <h2>Certifications</h2>

      {CERT_GROUPS.map(group => (
        <div key={group.heading} className="cert-group">
          <h4 className="cert-group-heading">{group.heading}</h4>
          <StaggerContainer className="cert-grid">
            {group.certs.map(c => (
              <StaggerItem key={c.label} className="cert-card">
                <img src={c.img} alt={c.label} loading="lazy" width="100%" />
                <div className="cert-label">{c.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      ))}

      <div className="cert-group">
        <h4 className="cert-group-heading">
          Anthropic Learning Academy
          <span className="badge-inprogress">In Progress — {ANTHROPIC_COURSES.length} / 13 completed</span>
        </h4>
        <StaggerContainer className="cert-grid cert-grid-text">
          {ANTHROPIC_COURSES.map(course => (
            <StaggerItem key={course} className="cert-card cert-card-text">
              <div className="cert-card-text-icon">A</div>
              <div className="cert-label">{course}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
