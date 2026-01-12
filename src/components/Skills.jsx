import React from "react";

export default function Skills() {
  return (
    <section className="skills-section">
        <div class="page-container">
      <div className="skills-header">
        <h2 className="skills-title">Skills</h2>
        <button className="skills-see-all">See all</button>
    </div>


      <div className="skills-track">
        <SkillCard
          title="Spring Boot"
          description="REST APIs, JPA, Security, Transactions"
          level="Advanced"
          experience="3+ yrs"
        />

        <SkillCard
          title="Java"
          description="Core Java, Multithreading, JVM"
          level="Advanced"
          experience="4+ yrs"
        />

        <SkillCard
          title="System Design"
          description="Scalable APIs, Caching, Databases"
          level="Intermediate"
          experience="2+ yrs"
        />
        <SkillCard
          title="System Design"
          description="Scalable APIs, Caching, Databases"
          level="Intermediate"
          experience="2+ yrs"
        />
        <SkillCard
          title="System Design"
          description="Scalable APIs, Caching, Databases"
          level="Intermediate"
          experience="2+ yrs"
        />
        <SkillCard
          title="System Design"
          description="Scalable APIs, Caching, Databases"
          level="Intermediate"
          experience="2+ yrs"
        />
      </div>
      </div>
    </section>
  );
}

export function SkillCard({ title, description, level, experience }) {
  return (
    <article className="skill-card">
      <div className="skill-card__header">
        <span className="skill-card__icon">
          {/* icon goes here */}
        </span>

        <h3 className="skill-card__title">{title}</h3>
      </div>

      <p className="skill-card__desc">{description}</p>

      <div className="skill-card__meta">
        <span className="skill-card__level">{level}</span>
        <span className="skill-card__experience">{experience}</span>
        
      </div>
      
      <div className="skill-card__practice">
        <span>Daily:</span>
            <ul>
            <li>Build small features</li>
            <li>Read production code</li>
            <li>Fix edge cases</li>
            </ul>
        </div>
    </article>
  );
}
