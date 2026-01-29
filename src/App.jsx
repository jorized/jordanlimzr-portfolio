import Contact from "./components/Contact"
import Experiences from "./components/Experiences"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import ScrollToTopButton from "./components/ScrollToTopButton"
import Technologies from "./components/Technologies"

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
            <div className="relative h-full w-full bg-[#1a1a1a]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-[#1a1a1a] via-neutral-800 to-[#1a1a1a] opacity-40"></div>

                <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#1a1a1a)]"></div>
            </div>
        </div>

        <div className="container mx-auto px-8">
            <Navbar />
            <Hero />
            <Technologies />
            <Projects />
            <Experiences />
            <Contact />
            <Footer />
            <ScrollToTopButton />
        </div>
    </div>
  )
}

export default App