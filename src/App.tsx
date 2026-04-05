import { useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Nav } from './components/Nav/Nav';
import { PageTransition } from './components/PageTransition/PageTransition';
import { ActiveSectionContext } from './hooks/useActiveSection';
import { Work } from './pages/Work';
import { GodIsIndifferent } from './pages/GodIsIndifferent';
import { TheWorldContinued } from './pages/TheWorldContinued';
import { DearFellowMember } from './pages/DearFellowMember';
import { About } from './pages/About/About';

export function App() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const onSectionChange = useCallback((section: string | null) => setActiveSection(section), []);

  return (
    <ActiveSectionContext.Provider value={activeSection}>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Work onSectionChange={onSectionChange} /></PageTransition>} />
          <Route path="/god-is-indifferent" element={<PageTransition><GodIsIndifferent /></PageTransition>} />
          <Route path="/the-world-continued" element={<PageTransition><TheWorldContinued /></PageTransition>} />
          <Route path="/dear-fellow-member" element={<PageTransition><DearFellowMember /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </ActiveSectionContext.Provider>
  );
}
