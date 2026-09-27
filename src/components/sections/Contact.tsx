import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { profileData } from '../../data/profile.ts';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Button } from '../ui/Button.tsx';
import { GithubIcon, LinkedinIcon } from '../ui/Icons.tsx';

export const Contact: React.FC = () => {
  const emailAddress = profileData.socialLinks.email.replace(/^mailto:/, '');

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeading
          id="contact-heading"
          eyebrow="Get In Touch"
          title="Let's connect and discuss technology."
          subtitle="Whether you have an interesting project idea, learning collaboration, or technical question, feel free to reach out."
          centered
        />

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="contact-note">
            I am currently open to project discussions, hackathons, and discussions about software engineering and machine learning.
          </p>

          <div className="contact-actions">
            <Button
              href={profileData.socialLinks.email}
              variant="primary"
              icon={<Mail size={16} aria-hidden="true" />}
            >
              Send an Email
            </Button>

            <Button
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<GithubIcon size={16} />}
              aria-label="GitHub Profile (opens in a new tab)"
            >
              GitHub Profile
            </Button>

            <Button
              href={profileData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<LinkedinIcon size={16} />}
              aria-label="LinkedIn Profile (opens in a new tab)"
            >
              LinkedIn Profile
            </Button>
          </div>

          <div className="contact-email-wrapper">
            <span>Direct email:</span>
            <a
              href={profileData.socialLinks.email}
              className="contact-email-address"
              title="Click to send email or copy address"
            >
              {emailAddress}
            </a>
          </div>

          <div className="contact-location">
            <MapPin size={16} aria-hidden="true" />
            <span>Currently based in {profileData.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
