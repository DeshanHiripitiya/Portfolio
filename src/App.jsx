import React from 'react';
import Navbar, { ButtonDefault, NavbarSimple, NavbarWithMegaMenu } from './component/layout/Navbar';
import { Button } from '@material-tailwind/react';
import Top from './component/pages/Top';
import AboutMe from './component/pages/AboutMe';
import Projects from './component/pages/Projects';


// border border-solid border-black


function App() {
  return (
    <>
        <NavbarSimple />
        <Top />
        <AboutMe />
        <Projects />
    </>
  );
}

export default App;
