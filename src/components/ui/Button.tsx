import React from 'react';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  ...props
}) => {
  const variantClass = `btn-${variant}`;
  const sizeClass = size === 'sm' ? 'btn-sm' : '';
  const combinedClasses = `btn ${variantClass} ${sizeClass} ${className}`.trim();

  if ('href' in props && props.href) {
    return (
      <a className={combinedClasses} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {icon && <span aria-hidden="true">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon && <span aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
