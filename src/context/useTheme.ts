import { useContext } from 'react';
import { ThemeContext } from './themeContextInstance.ts';
import type { ThemeContextType } from './themeContextInstance.ts';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
