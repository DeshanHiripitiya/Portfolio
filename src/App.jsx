import React, { useRef } from 'react';
import { NavbarSimple } from './component/layout/Navbar';
import Top from './component/pages/Top';
import AboutMe from './component/pages/AboutMe';
import Projects from './component/pages/Projects';
import Services from './component/pages/Services';
import Skill from './component/pages/Skill';
import Contact from './component/pages/Contact';
import Footer from './component/pages/Footer';

// border border-solid border-black

function App() {
  const projectsRef = useRef(null); // Create refs for sections
  const contactRef = useRef(null);

  return (
    <>
      <NavbarSimple />
      <Top projectsRef={projectsRef} contactRef={contactRef} />
      <AboutMe />
      <Projects ref={projectsRef} />
      <Services />
      <Skill />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
