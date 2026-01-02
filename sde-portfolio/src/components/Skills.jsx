import { FaCogs, FaDatabase, FaTools } from "react-icons/fa";

function Skills() {
    return (
        <section id="skills">
            <h2>⚙️ Skills & Tech Stack</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <h3>🧠 Backend</h3>
                    <p>Java, Spring Boot, Spring Security, JPA</p>
                </div>
                <div class="skill-card">
                    <h3>🗄️ Databases</h3>
                    <p>PostgreSQL, Redis</p>
                </div>
                <div class="skill-card">
                    <h3>🔁 Messaging</h3>
                    <p>Kafka, Async Processing</p>
                </div>
                <div class="skill-card">
                    <h3>🛠️ Tools</h3>
                    <p>Git, Docker, IntelliJ</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;
