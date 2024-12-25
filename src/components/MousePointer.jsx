import { useEffect,useRef } from "react";
import {motion} from "framer-motion";
import ReactDOM from "react-dom";
export default function MousePointer() {

    const leftPupilRef = useRef(null);
    const rightPupilRef = useRef(null);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
  
        const xPercent = clientX / innerWidth;
        const yPercent = clientY / innerHeight;
  
        const maxMove = 20; 
        const xMove = (xPercent - 0.5) * maxMove *2;
        const yMove = (yPercent - 0.5) * maxMove *2;
  
        if (leftPupilRef.current) {
          leftPupilRef.current.style.transform = `translate(${xMove}px, ${yMove}px)`;
        }
        if (rightPupilRef.current) {
          rightPupilRef.current.style.transform = `translate(${xMove}px, ${yMove}px)`;
        }
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    return (
      <motion.div className="eyes-container" drag>
        <div className="eye">
          <div className="pupil" ref={leftPupilRef}></div>
        </div>
        <div className="eye">
          <div className="pupil" ref={rightPupilRef}></div>
        </div>
      </motion.div>
    );
}
