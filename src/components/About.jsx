import {motion} from "framer-motion"

export default function About() {

    const animation={
        hover:{
            translateY:-10,
        },
        
    }
    return(
        <>
            <div className="about" id="about">
                <div className="about-text">
                <h1>
                    Hello I am{" "}
                    <motion.strong
                        variants={animation}
                        whileHover="hover"
                        className="imp"
                        style={{ display: "inline-block",fontWeight:"900",fontSize:"3rem" }} // Required for animation
                    >
                        Manish
                    </motion.strong>
                </h1>
                <p>
          I am a passionate{" "}
          <motion.strong
            variants={animation}
            whileHover="hover"
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              display: "inline-block", // Required for animation
            }}
          >
            Flutter
          </motion.strong>{" "}
          and{" "}
          <motion.strong
            variants={animation}
            whileHover="hover"
            style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              display: "inline-block", // Required for animation
            }}
          >
            Backend
          </motion.strong>{" "}
          developer eager to learn and explore new tech. I am pursuing my B.Tech
          in Computer Science and Engineering from VIT Vellore. I also have a
          keen interest in exploring the field of Machine learning and Deep
          learning. Hit me up if you have any interesting projects or ideas.
        </p>

                </div>
                <div className="resume">
                <a href="https://drive.google.com/file/d/1HyutxhvZoYusTKHF6YgMgVFZxtoJolmu/view?usp=sharing">
                        <motion.div className="resume-box"
                            
                            whileHover={{translateY:-10}}
                            transition={{type:"tween",duration:0.3}}>
                        <hr /><hr /><hr /><hr /><hr />
                        
                            <p style={{textAlign:"center"}}>My resume
                            </p>
                        
                        <hr />
                        <hr />
                        <hr /> 
                        <hr />
                        <hr />
                        </motion.div>
                </a>
                </div>
            </div>
        </>
    )
}