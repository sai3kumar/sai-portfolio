import { FaProjectDiagram } from "react-icons/fa";

function Projects() {
    return (
        <section id="projects">
            <h2>📦 Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>Order Processing System</h3>
                    <p>
                        Built a fault-tolerant order pipeline handling retries,
                        failures, and idempotency.
                    </p>
                    <div class="project-meta">
                        Java · Spring Boot · PostgreSQL
                    </div>
                    <div class="project-links">
                        <a href="#">🔗 GitHub</a>
                        <a href="#">🧩 Architecture</a>
                    </div>
                </div>

                <div class="project-card">
                    <h3>Notification Service</h3>
                    <p>
                        Designed extensible notification channels with clean abstractions.
                    </p>
                    <div class="project-meta">
                        Spring Boot · Kafka
                    </div>
                    <div class="project-links">
                        <a href="#">🔗 GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
