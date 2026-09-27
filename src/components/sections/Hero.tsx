import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import profileImage from '../../assets/profile.jpg';
import { profileData } from '../../data/profile.ts';
import { Button } from '../ui/Button.tsx';
import { Badge } from '../ui/Badge.tsx';

export const Hero: React.FC = () => {
  const profileAlt =
    profileData.name && !profileData.name.startsWith('[')
      ? `Portrait of ${profileData.name}`
      : 'Professional portrait of portfolio developer';

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            {profileData.statusMessage && (
              <div className="hero-status-pill" role="status" aria-label="Current status">
                <span className="status-indicator-dot" aria-hidden="true" />
                <span>{profileData.statusMessage}</span>
              </div>
            )}

            <h1 id="hero-title" className="hero-title">
              Hi, I'm <span className="hero-highlight">{profileData.name}</span>
            </h1>

            <p className="hero-lead">
              {profileData.role} focused on building intelligent data systems, machine learning models, and dependable software applications.
            </p>

            <div className="hero-focus-tags" aria-label="Core focus areas">
              {profileData.focusAreas.map((area) => (
                <Badge key={area} variant="accent">
                  {area}
                </Badge>
              ))}
            </div>

            <div className="hero-ctas">
              <Button href="#projects" variant="primary" icon={<ArrowDown size={16} />}>
                Explore Projects
              </Button>
              <Button href="#contact" variant="secondary" icon={<Mail size={16} />}>
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Column: Profile Image in Rounded-Rectangle Frame */}
          <div className="hero-visual">
            <figure className="hero-image-frame">
              <div className="hero-image-inner">
                <img
                  src={profileImage}
                  alt={profileAlt}
                  className="hero-image"
                  width={380}
                  height={475}
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

