import { FaGithub, FaLinkedin } from "react-icons/fa"
import logo from "../assets/jordanlogo.png"
const Navbar = () => {
    
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" width={50} height={33} alt="Logo" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/jordan-lim-zi-rui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn">
                    <FaLinkedin />
            </a>
            <a href="https://github.com/jorized"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub">
                    <FaGithub />
            </a>
        </div>
    </nav>
  )
}

export default Navbar