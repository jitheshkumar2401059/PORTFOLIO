import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { skillCategories, skillDetails } from '../../data/skills.ts';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Badge } from '../ui/Badge.tsx';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const categories = [{ id: 'all', title: 'All Disciplines' }, ...skillCategories];

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill((prev) => (prev === skillName ? null : skillName));
  };

  const handleCloseDetail = useCallback(() => {
    setSelectedSkill(null);
  }, []);

  // Keyboard accessibility: Escape key dismisses the skill detail panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedSkill) {
        handleCloseDetail();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSkill, handleCloseDetail]);

  const activeDetail = selectedSkill ? skillDetails[selectedSkill] : null;

  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading
          id="skills-heading"
          eyebrow="Technical Stack"
          title="Tools, languages, and frameworks."
          subtitle="A categorized inventory of technologies I actively utilize across data science, machine learning, and software engineering. Click any skill badge to explore its role."
        />

        {/* Category Tabs */}
        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              className={`tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Interactive Skill Detail Panel / Popover */}
        <AnimatePresence mode="wait">
          {activeDetail && (
            <motion.div
              className="skill-detail-panel"
              role="region"
              aria-live="polite"
              aria-label={`Details for ${activeDetail.name}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="skill-detail-header">
                <div className="skill-detail-meta">
                  <Badge variant="accent">{activeDetail.category}</Badge>
                  <h4 className="skill-detail-title">{activeDetail.name}</h4>
                </div>
                <button
                  type="button"
                  className="skill-detail-close-btn"
                  onClick={handleCloseDetail}
                  aria-label="Close skill details"
                  title="Close (Esc)"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>
              <p className="skill-detail-description">{activeDetail.description}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills Cards Grid */}
        <motion.div
          className="skills-grid"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {displayedCategories.map((cat) => (
            <article key={cat.id} className="skill-category-card">
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-chips" role="group" aria-label={`${cat.title} skills`}>
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    interactive
                    selected={selectedSkill === skill}
                    onClick={() => handleSkillClick(skill)}
                    title={`Click to view details for ${skill}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

