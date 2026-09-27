import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import type { Project } from '../../types/index.ts';
import { Badge } from './Badge.tsx';
import { Button } from './Button.tsx';
import { GithubIcon } from './Icons.tsx';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose
}) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    // Cache the triggering element to return focus on modal close
    previousActiveElement.current = document.activeElement as HTMLElement | null;

    // Prevent body scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the close button for instant keyboard accessibility
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const modalElement = document.querySelector('.project-modal-content');
        if (!modalElement) return;

        const focusableElements = modalElement.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      // Return focus to previously active element
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus();
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-summary"
        className="project-modal-content"
        initial={{ opacity: 0, scale: 0.95, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 14 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="project-modal-header">
          <div className="project-modal-title-group">
            <div>
              <Badge variant="accent">{project.category}</Badge>
            </div>
            <h3 id="project-modal-title" className="project-modal-title">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            ref={closeBtnRef}
            className="project-modal-close-btn"
            onClick={onClose}
            aria-label="Close project details"
            title="Close (Esc)"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Summary */}
        <p id="project-modal-summary" className="project-modal-summary">
          {project.summary}
        </p>

        {/* Full Description */}
        <div className="project-modal-section">
          <h4 className="project-modal-section-title">Overview & Architecture</h4>
          <p className="project-modal-description">{project.description}</p>
        </div>

        {/* Key Highlights */}
        {project.keyHighlights.length > 0 && (
          <div className="project-modal-section">
            <h4 className="project-modal-section-title">Key Highlights</h4>
            <ul className="project-highlights-list" aria-label="Key highlights">
              {project.keyHighlights.map((highlight, index) => (
                <li key={index} className="project-highlight-item">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Used */}
        <div className="project-modal-section">
          <h4 className="project-modal-section-title">Technologies Used</h4>
          <div className="project-tech-stack" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        {/* Actions / Links: only shown if githubUrl or liveUrl exists */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="project-modal-actions">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                icon={<GithubIcon size={16} />}
                aria-label={`View source code for ${project.title} on GitHub`}
              >
                Source Code
              </Button>
            )}

            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                icon={<ExternalLink size={16} />}
                aria-label={`View live demo for ${project.title}`}
              >
                Live Demo
              </Button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};
