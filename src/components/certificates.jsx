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

const CERTS = [
  { img: aws2,       label: 'AWS Solutions Training: Machine Learning on AWS — ML Practitioners' },
  { img: aws3,       label: 'Containers on AWS — Technical' },
  { img: aws4,       label: 'Data Analytics on AWS — Technical' },
  { img: aws1,       label: 'AWS Solutions Training: Migrating to AWS — Technical' },
  { img: Web,        label: 'The Web Developer Bootcamp' },
  { img: Python,     label: 'Python Bootcamp' },
  { img: SQL,        label: 'The Complete SQL Bootcamp' },
  { img: Tensorflow, label: 'TensorFlow for Deep Learning with Python' },
  { img: Matlab,     label: 'MATLAB — Image Processing' },
  { img: Unity,      label: 'Game Development with Unity' },
  { img: C,          label: 'C Programming' },
  { img: Cpp,        label: 'C++: From Beginner to Expert' },
  { img: LabView,    label: 'LabVIEW — Computer Vision & Image Processing' },
];

export function Certificates() {
  return (
    <div className="certificates">
      <h2>Certifications</h2>
      <StaggerContainer className="cert-grid">
        {CERTS.map(c => (
          <StaggerItem key={c.label} className="cert-card">
            <img src={c.img} alt={c.label} loading="lazy" width="100%" />
            <div className="cert-label">{c.label}</div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
