export default function Hero() {
    return (
        <section className="hero">
            <div className="layout hero-inner">
                <h1 className="hero-name">Sai Kumar Nuthalapati</h1>

                <h2 className="hero-role">Software Engineer</h2>

                <p className="hero-tagline">
                    I build reliable backend systems with a focus on
                    clarity, scalability, and real-world trade-offs.
                </p>

                <div className="hero-actions">
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        className="hero-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href="#contact" className="hero-link">
                        Contact
                    </a>

                    <a href="#recruiter" className="hero-link hero-link-primary">
                        Recruiter Access
                    </a>
                </div>
            </div>
        </section>
    );
}
