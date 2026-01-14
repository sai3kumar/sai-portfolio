export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="page-container">
        {/* ================= Header ================= */}
        <header className="projects-header">
          <h2>Projects</h2>
          <p>
            Selected projects focused on building scalable, accessible, and
            performance-driven web experiences.
          </p>
        </header>

        {/* ================= Flagship Project ================= */}
        <article className="flagship-card">
          <header className="flagship-header">
            <h3>Private Social Feed Platform</h3>
            <p>
              A privacy-first social feed enabling family and friends to share
              content with consistent performance at scale.
            </p>
            <span className="focus-tag">
              UI Architecture &amp; State Management
            </span>
          </header>

          <div className="project-visual">
            Visual Preview
          </div>

          <section className="project-details">
            <div>
              <h4>What I Built</h4>
              <ul>
                <li>
                  Designed a feed experience supporting media-heavy posts with
                  consistent interaction patterns.
                </li>
                <li>
                  Built a role-aware UI layer to control content visibility
                  without duplicating rendering logic.
                </li>
                <li>
                  Implemented predictable data fetching and caching for
                  responsive feed interactions.
                </li>
              </ul>
            </div>

            <div>
              <h4>Engineering Decisions</h4>
              <ul>
                <li>
                  Separated UI state from server state to avoid over-coupling
                  rendering with network latency.
                </li>
                <li>
                  Normalized client-side data structures to prevent unnecessary
                  re-renders during incremental updates.
                </li>
                <li>
                  Optimized render boundaries around interactive components to
                  reduce cascading updates.
                </li>
              </ul>
            </div>

            <div>
              <h4>Outcome</h4>
              <ul>
                <li>
                  Consistent feed interaction latency as post volume increased.
                </li>
                <li>
                  Reduced unnecessary re-renders during scrolling and
                  engagement.
                </li>
                <li>
                  Established a reusable feed architecture for future feature
                  growth.
                </li>
              </ul>
            </div>
          </section>

          <footer className="project-actions">
            <a href="#">Documentation</a>
            <a href="#">Live</a>
            <a href="#">GitHub</a>
          </footer>
        </article>

        {/* ================= Supporting Projects ================= */}
        <div className="supporting-projects">
          <article className="supporting-card">
            <h3>Real-Time Notifications UI</h3>
            <span className="focus-tag">Performance Optimization</span>
            <p>
              Designed a real-time notification surface with predictable
              rendering behavior under frequent updates.
            </p>
            <ul>
              <li>
                Minimized re-renders by isolating live update boundaries.
              </li>
            </ul>
            <footer className="project-actions">
            <a href="#">Live</a>
            <a href="#">GitHub</a>
          </footer>
          </article>

          <article className="supporting-card">
            <h3>Admin Dashboard System</h3>
            <span className="focus-tag">Complex State Management</span>
            <p>
              Built a role-aware dashboard system supporting multiple data
              views with shared interaction patterns.
            </p>
            <ul>
              <li>
                Centralized state logic to reduce UI duplication.
              </li>
            </ul>
            <footer className="project-actions">
            <a href="#">Live</a>
            <a href="#">GitHub</a>
          </footer>
          </article>
        </div>
      </div>
      
    </section>
  );
}
