import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projects.ts';
import type { Project, ProjectCategory } from '../../types/index.ts';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { ProjectCard } from '../ui/ProjectCard.tsx';
import { ProjectDetailModal } from '../ui/ProjectDetailModal.tsx';

const categories: ProjectCategory[] = [
  'All',
  'AI / ML',
  'Data Science',
  'Software Development',
  'Web Development',
  'Embedded Systems / IoT'
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <SectionHeading
          id="projects-heading"
          eyebrow="Portfolio"
          title="Featured Projects & Implementations"
          subtitle="Selected projects demonstrating problem-solving in machine learning, analytics, and software development. Click any project card to view full technical details."
        />

        {/* Filter Bar */}
        <div className="projects-filter-bar" role="tablist" aria-label="Project categories">
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeFilter === category}
              className={`tab-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectDetailModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
