export default function Experience() {
    return (
        <section className="experience-section" id="experience">
            <div className="page-container">
                <h2 className="experience-title">Experience</h2>

                <ExperienceItem
                    company="Tata Consultancy Services"
                    role="Software Engineer · Backend"
                    duration="Oct 2024 – Present"
                    location="Bengaluru, India"
                    points={[
                        "Developed and maintained backend services using Java and Spring Boot",
                        "Collaborated with cross-functional teams to deliver high-quality features",
                        "Optimized database queries and indexing strategies for performance",
                        "Implemented REST APIs following clean architecture principles"
                    ]}
                    website="https://www.tcs.com"
                />
            </div>
        </section>
    );
}


function ExperienceItem({
    company,
    role,
    duration,
    location,
    points,
    website,
}) {
    return (
        <div className="experience-item">
            <div className="experience-header">
                <img
                    src="/logos/tcs-logo-hd.png"
                    alt="Tata Consultancy Services logo"
                    className="experience-logo"
                />

                <div className="experience-content">
                    <div className="experience-company">{company}</div>
                    <div className="experience-role">{role}</div>
                </div>
            </div>

            <div className="experience-meta">
                {duration} · {location}
            </div>

            <ul className="experience-points">
                {points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

            {website && (
                <a
                    href={website}
                    className="experience-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Company website →
                </a>
            )}
        </div>

    );
}
