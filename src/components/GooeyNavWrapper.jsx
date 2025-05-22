
import GooeyNav from "../comps/GooeyNav/GooeyNav";
import { User, Folder, Mail,FileText,Settings } from 'lucide-react';
import { useState } from 'react';

const GooeyNavWrapper = () => {
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
      label:"Resume",
      href: "https://drive.google.com/file/d/1HyutxhvZoYusTKHF6YgMgVFZxtoJolmu/view?usp=drive_link",
      icon: <FileText className="w-5 h-5" />,
    },

  ];

  const handleMobileClick = (index) => {
    setActiveIndex(index);
    // Add any additional click logic here
  };

  return (
    <>
      {/* Sticky Navbar with proper spacing */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation (Centered Icons + Text) */}
          <div className="hidden sm:block py-3">
            <div className="flex justify-center">
              <GooeyNav 
                items={navItems.map((item, index) => ({
                  ...item,
                  label: (
                    <span className="flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </span>
                  )
                }))}
                animationTime={600}
                particleCount={15}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              />
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
                  onClick={() => handleMobileClick(index)}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent content overlap */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default GooeyNavWrapper;