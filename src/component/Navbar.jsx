const Link = import.meta.env.VITE_RESUME_LINK

const Navbar = () => {
    
  return (
    <>
        <div className="nav nav-top">
            <a href={Link}>
                <h2>Resume</h2>
            </a>
            <a href="mailto:saileshsivaraj@gmail.com">
                <h2>Say Hi..</h2>
            </a>
        </div>
        <div className="nav nav-right">
            <a href="/About">
                <h2>About</h2>
            </a>
        </div>
        <div className="nav nav-bottom">
            <a href="/Career-Journey">
                <h2>Career Journey</h2>
            </a>
            <a href="My-Skills">
                <h2>My Skills</h2>
            </a>

        </div>
        <div className="nav nav-left">            
            <a href="/Projects">
                <h2>Projects</h2>
            </a>
        </div>
    </>
  )
}

export default Navbar