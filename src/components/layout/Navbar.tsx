import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profileData } from '../../data/profile.ts';
import { navItems } from '../../data/navigation.ts';
import { ThemeToggle } from '../ui/ThemeToggle.tsx';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  React.useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="navbar-brand" onClick={closeMobileMenu}>
          <span>{profileData.name}</span>
        </a>

        {/* Desktop Links */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <ThemeToggle />

          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="nav-mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav id="nav-mobile-menu" className="nav-mobile-menu" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
