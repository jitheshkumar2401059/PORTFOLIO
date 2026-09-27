import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/useTheme.ts';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn-icon theme-toggle-btn"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <span key={theme} className="theme-toggle-icon" aria-hidden="true">
        {theme === 'dark' ? (
          <Sun size={18} />
        ) : (
          <Moon size={18} />
        )}
      </span>
    </button>
  );
};
