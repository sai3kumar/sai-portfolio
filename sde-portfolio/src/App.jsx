import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Recruiter from "./components/Recruiter";
import Resume from "./components/Resume";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Resume />
            <Contact />
            <Recruiter />
            
        </>
    );
}

export default App;
