import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../../data/profile.ts';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          &copy; {currentYear} {profileData.name}. All rights reserved.
        </p>

        <div className="footer-links">
          <a
            href={profileData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub Profile (opens in a new tab)"
          >
            GitHub
          </a>
          <a
            href={profileData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn Profile (opens in a new tab)"
          >
            LinkedIn
          </a>
          <a href="#hero" className="footer-link" aria-label="Back to top of page">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)' }}>
              Back to Top <ArrowUp size={13} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
