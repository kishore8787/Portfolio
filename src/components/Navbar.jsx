import MousePointer from "./MousePointer"

export default function Navbar() {

    return(
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <MousePointer/>
                    </div>
                    <div className="navbar-links">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/projects">Projects</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}