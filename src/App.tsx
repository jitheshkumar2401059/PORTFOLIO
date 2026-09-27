import React from 'react';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Navbar } from './components/layout/Navbar.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { Hero } from './components/sections/Hero.tsx';
import { About } from './components/sections/About.tsx';
import { Skills } from './components/sections/Skills.tsx';
import { Projects } from './components/sections/Projects.tsx';
import { Journey } from './components/sections/Journey.tsx';
import { Contact } from './components/sections/Contact.tsx';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        {/* Accessibility Skip Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Contact />
        </main>

        <Footer />
      </MotionConfig>
    </ThemeProvider>
  );
};

export default App;
