import { FaLinkedin,FaGithub,FaInstagramSquare,FaArrowUp } from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import './button.css'
export default function Contact() {

    const icons=[
        {icon:<FaLinkedin size={40}/>,link:"https://www.linkedin.com/in/manish-r-2934132b8/"},
        {icon:<FaGithub size={40}/>,link:"https://github.com/Lonewolf230"},
        {icon:<FaInstagramSquare size={40}/>,link:"https://www.instagram.com/manish2306j/profilecard/?igsh=MXNlMDh3NXI2MTR5cw=="},
        {icon:<SiGmail size={40}/>,link:"mailto:manish2306j@gmail.com"}
    ]
    
    const handleMouseMove=(e)=>{
        window.scroll({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }

    return(
        <>  
            <button className="upButton" onClick={(e)=>handleMouseMove(e)}><FaArrowUp/></button>

            <div className='contact-section poppins-medium' id="contact">
                <h2>Contact Me</h2>
                <div className="contact-container active">
                    {icons.map((icon,index)=>(
                        <a href={icon.link} target="_blank" rel="noreferrer" key={index}>
                            <div className='contact-icon'>
                                {icon.icon}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <footer style={{textAlign:"center",marginTop:"auto"}}>&copy; {new Date().getFullYear()} Manish R. All Rights Reserved.</footer>
        </>
    )
}