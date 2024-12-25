import MousePointer from "./MousePointer"
import Switch from "./Switch.jsx"
import { useEffect,useState, useRef } from "react"
import {GiHamburgerMenu} from "react-icons/gi"

export default function Navbar({theme,setTheme}) {
    const [isMenuopen,setIsMenuOpen]=useState(false)
    const [isMobile,setIsMobile]=useState(false)
    const menuRef=useRef(null)
    const hamburgerRef=useRef(null)
    useEffect(()=>{
        const resize=()=>{
            if(window.innerWidth<=768){
                setIsMobile(true)
                setIsMenuOpen(false)
            }else{
                setIsMobile(false)
            }
        }

        const clickOutside=(e)=>{
            if(menuRef.current && !menuRef.current.contains(e.target)
                && !hamburgerRef.current.contains(e.target)){
                setIsMenuOpen(false)
            }
        }

        resize();
        window.addEventListener("resize",resize)

        document.addEventListener("mousedown", clickOutside)
        return ()=>{
            window.removeEventListener("resize",resize)
            document.removeEventListener("mousedown",clickOutside)
        }
    },[])

    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuopen)
    }
    return(
        <>
            <div className='navbar'>
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <MousePointer/>
                    </div>
                    {
                        isMobile&&(
                            <div className="hamburger-menu" onClick={toggleMenu} ref={hamburgerRef}>
                                <GiHamburgerMenu/>
                            </div>
                        )}
                            <div className={`navbar-links ${isMenuopen?"open":""}`}
                                style={{display:isMobile&&!isMenuopen?"none":""}}
                                ref={menuRef}
                            >
                                <a href="#about" className="navbar-link">About</a>
                                <a href="#projects" className="navbar-link">Projects</a>
                                <a href="#skills" className="navbar-link">Skills</a>
                                <a href="#contact" className="navbar-link">Contact</a>
                                <Switch theme={theme} setTheme={setTheme}/>
                            </div>
                        
                </div>
            </div>
        </>
    )
}