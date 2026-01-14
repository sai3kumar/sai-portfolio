import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
