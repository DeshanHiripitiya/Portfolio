import React from 'react';
import Navbar, { ButtonDefault, NavbarSimple, NavbarWithMegaMenu } from './component/layout/Navbar';
import { Button } from '@material-tailwind/react';
import Top from './component/pages/Top';
import AboutMe from './component/pages/AboutMe';
import Projects from './component/pages/Projects';
import Services from './component/pages/Services';
import Skill from './component/pages/Skill';
import Contact from './component/pages/Contact';


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
    </>
  );
}

export default App;
