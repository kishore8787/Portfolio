import { useState, useEffect } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt, 
  FaDocker, 
  FaAws ,
  FaJava,
  
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiMysql,
  SiFlutter, 
  SiTensorflow, 
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiSupabase
} from 'react-icons/si';

const skills = [
  { icon: FaReact, name: 'React', color: '#61DAFB' },
  { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
  { icon: FaJava, name: 'Java', color: '#007396' },
  { icon: SiExpress, name: 'Express', color: '#000000' },
  { icon: FaPython, name: 'Python', color: '#3776AB' },
  { icon: FaJsSquare, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiFlutter, name: 'Flutter', color: '#02569B' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiMysql, name: 'MySQL', color: '#336791' },
  { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: FaDocker, name: 'Docker', color: '#2496ED' },
  { icon: FaAws, name: 'AWS', color: '#FF9900' },
  { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
  { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E' },
  { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' }
];

export default function SkillsDisplay() {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    skills.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSkills(prev => [...prev, index]);
      }, index * 100);
    });
  }, []);

  return (
    <div className="mt-12 sm:mt-16 md:mt-20 w-full">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-white font-bold text-center" style={{fontSize: "clamp(2rem, 5vw, 4rem)"}}>
          My Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-300 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          const isVisible = visibleSkills.includes(index);
          const isHovered = hoveredSkill === index;
          
          return (
            <div
              key={skill.name}
              className={`
                relative group cursor-pointer
                transform transition-all duration-500 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                hover:scale-110 hover:-translate-y-2
              `}
              style={{
                transitionDelay: isVisible ? '0ms' : `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="
                relative bg-white/10 backdrop-blur-sm border border-white/20 
                rounded-xl p-4 sm:p-6 md:p-8 
                transition-all duration-300 ease-out
                hover:bg-white/20 hover:border-white/30
                hover:shadow-2xl hover:shadow-cyan-500/20
                min-h-[80px] sm:min-h-[100px] md:min-h-[120px]
                flex flex-col items-center justify-center
              ">
                <div 
                  className={`
                    absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
                    ${isHovered ? 'opacity-20' : 'opacity-0'}
                  `}
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}40, transparent 70%)`
                  }}
                />
                
                <div className="relative z-10 mb-2 sm:mb-3">
                  <IconComponent 
                    className={`
                      text-3xl sm:text-4xl md:text-5xl transition-all duration-300
                      ${isHovered ? 'scale-125 rotate-12' : 'scale-100 rotate-0'}
                    `}
                    style={{ 
                      color: isHovered ? skill.color : '#ffffff',
                      filter: isHovered ? `drop-shadow(0 0 10px ${skill.color}50)` : 'none'
                    }}
                  />
                </div>
                
                <span className={`
                  text-white text-xs sm:text-sm md:text-base font-medium text-center
                  transition-all duration-300 relative z-10
                  ${isHovered ? 'text-cyan-300 scale-105' : 'text-white/80'}
                `}>
                  {skill.name}
                </span>

                {isHovered && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-ping"
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 100}ms`,
                          animationDuration: '1s'
                        }}
                      />
                    ))}
                  </>
                )}
              </div>

              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                <div className={`
                  w-8 h-0.5 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-full
                  transition-all duration-500 ease-out
                  ${isHovered ? 'w-12 opacity-100' : 'w-6 opacity-60'}
                `} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 sm:mt-16 flex justify-center">
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`
                w-2 h-2 bg-cyan-300 rounded-full animate-pulse
                transition-all duration-300
              `}
              style={{
                animationDelay: `${i * 200}ms`,
                opacity: 0.6 + (i * 0.1)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}