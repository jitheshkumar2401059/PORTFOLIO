import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  id
}) => {
  return (
    <div
      className="section-heading-wrap"
      style={centered ? { textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' } : undefined}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 id={id} className="section-title">{title}</h2>
      {subtitle && (
        <p
          className="section-subtitle"
          style={centered ? { marginLeft: 'auto', marginRight: 'auto' } : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
