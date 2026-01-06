export default function Skills() {
    return (
        <section className="skills-section" id="skills">
            <div className="page-container">
                <div className="skills-header">
                    <h2 className="skills-title">Core Skills</h2>
                    <a href="#all-skills" className="skills-see-all">
                        See all →
                    </a>
                </div>


                <div className="skills-grid">
                    <SkillCard
                        title="Backend Engineering"
                        tools="Java · Spring Boot · Spring Security · JPA"
                        points={[
                            "Designed clean, layered REST APIs",
                            "Handled transactions and data consistency",
                            "Focused on maintainability and clarity"
                        ]}
                        links={[
                            { label: "Read more", href: "#" },
                            { label: "Projects", href: "#projects" }
                        ]}
                    />

                    <SkillCard
                        title="Data & Persistence"
                        tools="PostgreSQL · Redis"
                        points={[
                            "Designed normalized schemas",
                            "Used indexing for performance",
                            "Worked with transactional boundaries"
                        ]}
                        links={[
                            { label: "Read more", href: "#" }
                        ]}
                    />

                    <SkillCard
                        title="Distributed Systems"
                        tools="Kafka · Async Processing"
                        points={[
                            "Designed retry-safe flows",
                            "Handled idempotency concerns",
                            "Reasoned about failure scenarios"
                        ]}
                        links={[
                            { label: "Read more", href: "#" }
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

function SkillCard({ title, tools, points, links }) {
    return (
        <div className="skill-card">
            <h3 className="skill-card-title">{title}</h3>

            <p className="skill-tools">{tools}</p>

            <ul className="skill-points">
                {points.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>

            <div className="skill-links">
                {links.map((l, i) => (
                    <a key={i} href={l.href}>
                        {l.label}
                    </a>
                ))}
            </div>
        </div>
    );
}
