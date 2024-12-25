import { useEffect, useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Badges from './components/Badges';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  const [isMenuopen,setIsMenuOpen]=useState(false)
  const [isMobile,setIsMobile]=useState(false)
  const [theme,setTheme]=useState("light")
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme",theme)
  },[theme])
  return (
    <>
      <div className='poppins-bold' data-theme={theme}>
        <Navbar theme={theme} setTheme={setTheme} menu={isMenuopen} setMenu={setIsMenuOpen} mobile={isMobile} setMobile={setIsMobile}/>
        <About/>
        <Projects/>
        <Skills/>
        {/* <Badges/> */}
        <Calendar theme={theme}/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
