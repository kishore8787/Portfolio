
import {motion} from 'framer-motion';
export default function Projects() {

    const projects = [
        {
            name: "Blogging Website",
            description: "A blogging platform created using MERN stack that also has social media features like following, liking, commenting, etc. It also has a JWT based authentication system.",
            link: "https://github.com/Lonewolf230/BlogList",
        },
        {
            name: "Library Management System",
            description: "A library management system created using JavaFX and JDBC that allows users to add, delete, and issue books. It also has a feature to calculate the fine for late returns.",
            link: "https://github.com/Lonewolf230/LibraryManagement",
        },
        {
            name: "Noise Measurement",
            description: "A Flutter app that measures noise levels in the surrounding using the mobile phone's microphone",
            link: "https://github.com/Lonewolf230/NoiseMeasurement",
        },
        {
            name: "Van Purchase App",
            description: "A small van rental page created using React Router",
            link: "https://github.com/Lonewolf230/Routing"
        },

    ]

    return(
        <>
            <h1 className="poppins-bold" style={{textAlign:'center'}}>Projects</h1>
            <div className="projects-container" id="projects">
                
                {projects.map((project,index)=>(
                    <a href={project.link} key={index}>
                        <motion.div className="project" key={index}
                            whileHover={{translateY:-10}}
                        >
                            <h2>{project.name}</h2>
                            <p style={{fontSize:"0.8rem"}}>{project.description}</p>
                        </motion.div>
                    </a>
                ))}
            </div>
        </>
    )
}