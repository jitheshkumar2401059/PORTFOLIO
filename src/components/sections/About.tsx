import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { profileData } from '../../data/profile.ts';
import { SectionHeading } from '../ui/SectionHeading.tsx';

export const About: React.FC = () => {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeading
          id="about-heading"
          eyebrow="About Me"
          title="Engineering curiosity driven by data and software."
          subtitle="A summary of my academic background, areas of curiosity, and software development focus."
        />

        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="about-bio">
            {profileData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <aside className="about-card" aria-label="Education Information">
            <h3 className="about-card-title">Education Overview</h3>

            <div className="education-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                <GraduationCap size={18} color="var(--accent-text)" aria-hidden="true" />
                <span className="education-degree">{profileData.education.degree}</span>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                {profileData.education.field}
              </p>
              <div className="education-meta">
                <p>{profileData.education.institution}</p>
                <p>Status: {profileData.education.status}</p>
                <p>Expected Completion: {profileData.education.expectedGraduation}</p>
              </div>
            </div>

            <div className="about-location-tag">
              <MapPin size={16} aria-hidden="true" />
              <span>Based in {profileData.location}</span>
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
};
