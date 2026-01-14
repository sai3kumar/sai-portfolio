import { useState } from "react";

export default function Resume() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="resume-section" id="resume">
      <div className="page-container">
        <h2 className="section-title">Resume</h2>

        <p className="resume-description">
          One-page backend engineering resume. Preview it here or download it
          in PDF or DOCX format.
        </p>

        <div className="resume-actions">
          <button
            className="btn secondary"
            onClick={() => setIsOpen(true)}
          >
            Preview
          </button>

          <a
            href="/assets/Sai_Resume.pdf"
            download
            className="btn primary"
          >
            Download PDF
          </a>

          <a
            href="/assets/Sai_Resume.docx"
            download
            className="btn secondary"
          >
            Download DOCX
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="resume-modal" onClick={() => setIsOpen(false)}>
          <div
            className="resume-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            <img
              src="/assets/resume-preview.jpg"
              alt="Resume preview"
              className="resume-modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
}
