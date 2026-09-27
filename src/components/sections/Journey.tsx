import React from 'react';
import { motion } from 'framer-motion';
import { journeyData } from '../../data/journey.ts';
import { SectionHeading } from '../ui/SectionHeading.tsx';
import { Badge } from '../ui/Badge.tsx';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="section" aria-labelledby="journey-heading">
      <div className="container">
        <SectionHeading
          id="journey-heading"
          eyebrow="Timeline"
          title="Academic & Learning Journey"
          subtitle="A chronological overview of university milestones, core subject mastery, and continuous skill progression."
        />

        <ol className="journey-timeline" aria-label="Chronological academic milestones">
          {journeyData.map((item, index) => (
            <motion.li
              key={item.id}
              className="journey-item"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
            >
              <span className="journey-node-dot" aria-hidden="true" />

              <article className="journey-card">
                <div className="journey-period">{item.period}</div>
                <h3 className="journey-title">{item.title}</h3>
                <p className="journey-context">{item.institutionOrContext}</p>
                <p className="journey-desc">{item.description}</p>

                {item.tags && item.tags.length > 0 && (
                  <div className="journey-tags" aria-label="Key topics">
                    {item.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                )}
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};
