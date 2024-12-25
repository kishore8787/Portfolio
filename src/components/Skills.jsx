import {DiCss3, DiHtml5, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiMysql, DiGit,DiJava, DiPython, DiDocker} from 'react-icons/di';
import { SiFlutter } from "react-icons/si";
import {motion} from 'framer-motion';


export default function Skills() {
    
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
        {name: "Docker", icon: <DiDocker size={40}/>}

    ]

    return(
        <>
            <div className='skills-section poppins-medium'>
                <h1>Skills</h1>
                <div className='skills-container'>
                    {skills.map((skill)=>(
                        <motion.div key={skill.name} className='skill'
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }}  
                        transition={{type:"tween"}}
                        >
                            {skill.icon}
                            <p>{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}