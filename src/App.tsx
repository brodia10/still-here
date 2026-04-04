import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Nav } from './components/Nav/Nav';
import { PageTransition } from './components/PageTransition/PageTransition';
import { Work } from './pages/Work';
import { GodIsIndifferent } from './pages/GodIsIndifferent';
import { TheWorldContinued } from './pages/TheWorldContinued';
import { DearFellowMember } from './pages/DearFellowMember';
import { WhatTheLightChose } from './pages/WhatTheLightChose';
import { About } from './pages/About/About';

export function App() {
  const location = useLocation();

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Work /></PageTransition>} />
          <Route path="/god-is-indifferent" element={<PageTransition><GodIsIndifferent /></PageTransition>} />
          <Route path="/the-world-continued" element={<PageTransition><TheWorldContinued /></PageTransition>} />
          <Route path="/dear-fellow-member" element={<PageTransition><DearFellowMember /></PageTransition>} />
          <Route path="/what-the-light-chose" element={<PageTransition><WhatTheLightChose /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
