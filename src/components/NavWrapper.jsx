
import { useEffect, useState } from 'react';
import { User, Folder, Mail, FileText, Settings } from 'lucide-react';

const NavbarWrapper = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const navItems = [
    { 
      label: "About",
      href: "#about",
      icon: <User className="w-5 h-5" /> 
    },
    { 
      label: "Projects",
      href: "#projects",
      icon: <Folder className="w-5 h-5" /> 
    },
    {
      label: "Skills",
      href: "#skills",
      icon: <Settings className="w-5 h-5" />,
    },
    { 
      label: "Contact",
      href: "#contact",
      icon: <Mail className="w-5 h-5" /> 
    },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1Y3cq0ELhwI2lHwbmKOfjgWk3VHhRbygY/view?usp=sharing",
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  const handleNavClick = (e, href, index) => {
    e.preventDefault();
    setActiveIndex(index);
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.history.pushState(null, null, href);
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = navItems
            .filter(item => item.href.startsWith('#'))
            .map(item => ({
              id: item.href.substring(1),
              element: document.getElementById(item.href.substring(1))
            }));
          
          const scrollPosition = lastScrollY + 100;
          
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section.element && scrollPosition >= section.element.offsetTop) {
              setActiveIndex(i);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden sm:block py-3">
            <div className="flex justify-center">
              <nav className="flex items-center gap-1">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`px-4 py-2 rounded-full transition-colors duration-200 flex items-center gap-2 ${
                      activeIndex === index
                        ? 'bg-white text-black'
                        : 'text-white hover:bg-white/20'
                    }`}
                    onClick={(e) => handleNavClick(e, item.href, index)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Mobile Navigation (Icons only) */}
          <div className="sm:hidden flex justify-center py-3">
            <div className="flex gap-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`p-3 rounded-full transition-colors duration-200 ${
                    activeIndex === index 
                      ? 'bg-white text-black' 
                      : 'text-white hover:bg-white/20'
                  }`}
                  aria-label={item.label}
                  onClick={(e) => handleNavClick(e, item.href, index)}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default NavbarWrapper;