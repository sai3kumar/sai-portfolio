export default function Contact() {
  return (
    <section id="contact" className="contact-section">
        <div className="page-container">
        {/* ===== Identity / Intent ===== */}
        <header className="contact-header">
          <h2 className="contact-title">Let’s talk engineering</h2>
        </header>

        {/* ===== Perspective / Human signal ===== */}
        <div className="contact-intro">
          <p>
            I enjoy working on backend systems where design decisions matter —
            thinking through trade-offs, scalability, and learning from real
            production problems. If you’re interested in meaningful engineering
            conversations or collaboration, I’m always open to connect.
          </p>
        </div>

        {/* ===== Intentional action paths ===== */}
        <div className="contact-actions">
          <div className="contact-action contact-action--primary">
            <span className="contact-action-label">
              For hiring or professional conversations
            </span>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="contact-action">
            <span className="contact-action-label">
              For collaboration or technical discussions
            </span>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="contact-action">
            <span className="contact-action-label">
              For a direct conversation
            </span>
            <a href="mailto:you@email.com">
              Email
            </a>
          </div>
        </div>
        </div>
    </section>
  );
}
