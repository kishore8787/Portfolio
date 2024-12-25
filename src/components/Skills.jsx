import {DiCss3, DiHtml5, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiMysql, DiGit,DiJava, DiPython, DiDocker} from 'react-icons/di';
import { SiFlutter } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import {motion} from 'framer-motion';
import { SiArduino } from "react-icons/si";
import { useState } from 'react';

export default function Skills() {

    const [animationStart,setAnimationStart] = useState(false);
    const skills = [
        {name: "HTML", icon: <DiHtml5 size={40}/>},
        {name: "CSS", icon: <DiCss3 size={40}/>},
        {name: "JavaScript", icon: <DiJavascript1 size={40}/>},
        {name: "React", icon: <DiReact size={40}/>},
        {name: "Node.js", icon: <DiNodejsSmall size={40}/>},
        {name: "MongoDB", icon: <DiMongodb size={40}/>},
        {name: "MySQL", icon: <DiMysql size={40}/>},
        {name: "Git", icon: <DiGit size={40}/>},
        {name: "Java", icon: <DiJava size={40}/>},
        {name: "Python", icon: <DiPython size={40}/>},
        {name: "Flutter", icon: <SiFlutter size={40}/>},
        {name: "Docker", icon: <DiDocker size={40}/>},
        {name: "AWS", icon: <FaAws size={40}/>},
        {name: "GraphQL", icon: <GrGraphQl size={40}/>},
        {name: "Firebase", icon: <RiFirebaseFill size={40}/>},
        {name: "Arduino", icon: <SiArduino size={40}/>},
    ]

    return(
        <>
            <motion.div className='skills-section poppins-medium' 
                initial={{opacity:0,x:-100}}
                whileInView={{opacity:1,x:0}}
                transition={{type:"tween",duration:0.5}}
                viewport={{once:true,amount:0.1}}
                onAnimationComplete={()=>setAnimationStart(true)}
                id='skills'
                >
                <h1>Skills</h1>
                <div className='skills-container'>
                    {skills.map((skill)=>(
                        <motion.div key={skill.name} className='skill'
                        initial={{ opacity: 0, y: 30 }} 
                        animate={animationStart?{ opacity: 1, y: 0 }:{}}  
                        transition={{type:"tween"}}
                        >
                            {skill.icon}
                            <p>{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    )
}