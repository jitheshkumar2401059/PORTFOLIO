import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'secondary';
  className?: string;
  interactive?: boolean;
  selected?: boolean;
  onClick?: () => void;
  title?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
  interactive = false,
  selected = false,
  onClick,
  title
}) => {
  const variantClass =
    variant === 'accent'
      ? 'badge-accent'
      : variant === 'secondary'
      ? 'badge-secondary'
      : '';

  const interactiveClass = interactive || onClick ? 'badge-interactive' : '';
  const selectedClass = selected ? 'badge-selected' : '';
  const combinedClasses = `badge ${variantClass} ${interactiveClass} ${selectedClass} ${className}`.trim();

  if (onClick || interactive) {
    return (
      <button
        type="button"
        className={combinedClasses}
        onClick={onClick}
        aria-pressed={selected}
        title={title}
      >
        {children}
      </button>
    );
  }

  return (
    <span className={combinedClasses} title={title}>
      {children}
    </span>
  );
};

