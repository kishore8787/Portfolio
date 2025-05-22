// Smooth scroll utility function
const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Enhanced Navigation Component
const SmoothNavigation = () => {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 right-6 z-50 bg-black/80 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => smoothScrollTo(item.id)}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                activeSection === item.id
                  ? 'text-cyan-300 bg-cyan-300/10'
                  : 'text-white hover:text-cyan-300 hover:bg-white/5'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <div className="absolute inset-0 rounded-full border border-cyan-300/30 animate-pulse" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};