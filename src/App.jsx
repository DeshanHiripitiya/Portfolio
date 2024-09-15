import React from 'react';
import Navbar, { NavbarSimple } from './component/layout/Navbar';
import Top from './component/pages/Top';
import AboutMe from './component/pages/AboutMe';
import Projects from './component/pages/Projects';
import Services from './component/pages/Services';
import Skill from './component/pages/Skill';
import Contact from './component/pages/Contact';
import Footer from './component/pages/Footer';


// border border-solid border-black


function App() {
  return (
    <>
        <NavbarSimple />
        <Top />
        <AboutMe />
        <Projects />
        <Services />
        <Skill />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
