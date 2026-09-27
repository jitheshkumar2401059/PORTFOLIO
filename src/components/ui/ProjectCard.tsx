import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../types/index.ts';
import { Badge } from './Badge.tsx';
import { GithubIcon } from './Icons.tsx';

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isSelectable = Boolean(onSelect);

  return (
    <motion.article
      className={`project-card ${isSelectable ? 'project-card-interactive' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      tabIndex={isSelectable ? 0 : undefined}
      role={isSelectable ? 'button' : undefined}
      aria-haspopup={isSelectable ? 'dialog' : undefined}
      aria-label={isSelectable ? `View details for ${project.title}` : undefined}
      onClick={() => onSelect?.(project)}
      onKeyDown={(e) => {
        if (isSelectable && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelect?.(project);
        }
      }}
    >
      <div>
        <div className="project-card-header">
          <div className="project-category-badge">
            <Badge variant="accent">{project.category}</Badge>
          </div>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-summary">{project.summary}</p>
        </div>

        {project.keyHighlights.length > 0 && (
          <ul className="project-highlights-list" aria-label="Key highlights">
            {project.keyHighlights.map((highlight, index) => (
              <li key={index} className="project-highlight-item">
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <div className="project-tech-stack" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="project-card-footer">
          <div className="project-links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-item"
                aria-label={`View source code for ${project.title} on GitHub`}
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-item"
                aria-label={`View live demo for ${project.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} aria-hidden="true" />
                <span>Live Demo</span>
              </a>
            )}

            {isSelectable && (
              <span className="project-view-details-btn" aria-hidden="true">
                View Details →
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
