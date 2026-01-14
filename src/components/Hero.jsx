export default function Hero() {
    return (
        <section className="hero">
            <div className="page-container section-with-spine hero-inner">
            <div className="layout hero-inner">
                <h1 className="hero-name">Sai Kumar Nuthalapati</h1>

                <h2 className="hero-role">Software Engineer</h2>

                <p className="hero-tagline">
                       I engineer the core logic, ensuring performance, security, and scalability for applications, one efficient line of code at a time
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
                        Resume
                    </a>

                    <a href="#recruiter" className="hero-link hero-link-primary">
                        My Tech Blog
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
}
