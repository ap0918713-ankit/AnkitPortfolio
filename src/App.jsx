
import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MySQL",
    "Java",
    "Android Development",
    "Git & GitHub"
  ];

  const projects = [
    {
      number: "01",
      name: "WorkHub",
      type: "Full Stack Web Application",
      description:
        "A task management application with user authentication, task creation, editing, deletion, priority management and analytics.",
      tech: ["React", "Node.js", "Express.js", "MySQL"],
      github: "https://github.com/ap0918713-ankit/WorkHub"
    },
    {
      number: "02",
      name: "Smart Crop Recommendation System",
      type: "Web Development",
      description:
        "A website designed to recommend suitable crops based on soil conditions, rainfall and season.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ap0918713-ankit"
    },
    {
      number: "03",
      name: "Multi-purpose Android App",
      type: "Android Development",
      description:
        "An Android application project exploring useful features such as calculators, camera and speech-to-text.",
      tech: ["Java", "XML", "SQLite"],
      github: "https://github.com/ap0918713-ankit"
    }
  ];

  const services = [
    {
      icon: "✦",
      title: "Website Development",
      description:
        "Responsive and user-friendly websites for businesses and individuals."
    },
    {
      icon: "⌘",
      title: "Frontend Development",
      description:
        "Modern website interfaces using HTML, CSS, JavaScript and React."
    },
    {
      icon: "⚙",
      title: "Backend & Database",
      description:
        "Basic backend APIs and database integration using Node.js and MySQL."
    }
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">AP</span>
          Ankit Pandey<span className="brand-dot">.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          {["Home", "About", "Skills", "Projects", "Services", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            )
          )}

          <a className="nav-hire" href="#contact" onClick={closeMenu}>
            Hire Me ↗
          </a>
        </div>
      </nav>

      <main>

        {/* HOME SECTION */}
        <section id="home" className="hero section">
          <div className="hero-content">

            <div className="availability">
              <span className="green-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="hello">Hello, I'm</p>

            <h1>
              Ankit <span>Pandey</span>
            </h1>

            <h2>
              Full Stack Developer
              <span className="separator"> | </span>
              Fresher
            </h2>

            <p className="hero-description">
              I build modern, responsive and user-friendly web applications.
              I enjoy turning ideas into practical digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">
                Explore My Work ↗
              </a>

              <a href="#contact" className="btn secondary-btn">
                Let's Talk
              </a>

              <a
                href="/Ankit-Pandey-Resume.pdf"
                download
                className="btn secondary-btn"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/ap0918713-ankit"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a href="mailto:ap0918713@gmail.com">
                Email ↗
              </a>

              <a
                href="https://www.linkedin.com/in/ankit-pandey-a7bb922b3"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="profile-card">
              <div className="profile-top">
                <span>DEVELOPER PROFILE</span>
                <span className="profile-status">● ONLINE</span>
              </div>

              <div className="avatar">AP</div>

              <h3>Ankit Pandey</h3>
              <p>Full Stack Developer</p>

              <div className="profile-line"></div>

              <div className="profile-info">
                <span>Based in</span>
                <strong>India</strong>
              </div>

              <div className="profile-info">
                <span>Education</span>
                <strong>B.Tech CSE · 2026</strong>
              </div>

              <div className="profile-info">
                <span>Focus</span>
                <strong>Web Development</strong>
              </div>

              <div className="code-symbol">{"</>"}</div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section">
          <div className="section-heading">
            <span className="eyebrow">GET TO KNOW ME</span>
            <h2>
              About <span>Me</span>
            </h2>
            <p>
              A little introduction about my journey and background.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <span className="about-number">01 / INTRODUCTION</span>

              <h3>Building my journey in technology.</h3>

              <p>
                I'm Ankit Pandey, a Computer Science Engineering graduate
                passionate about web development and technology. I enjoy
                learning new tools, building projects and solving practical
                problems through code.
              </p>

              <p>
                I am currently looking for opportunities where I can improve
                my skills, contribute to real projects and grow as a developer.
              </p>

              <a href="#contact" className="text-link">
                Let's work together ↗
              </a>
            </div>

            <div className="education-card">
              <span className="about-number">02 / EDUCATION</span>

              <h3>Education</h3>

              <div className="education-item">
                <span className="timeline-dot"></span>
                <div>
                  <h4>Bachelor of Technology – CSE</h4>
                  <p>Ambalika Institute of Management & Technology</p>
                  <small>2022 – 2026</small>
                </div>
              </div>

              <div className="education-item">
                <span className="timeline-dot"></span>
                <div>
                  <h4>Intermediate</h4>
                  <p>79% marks</p>
                </div>
              </div>

              <div className="education-item">
                <span className="timeline-dot"></span>
                <div>
                  <h4>High School</h4>
                  <p>71% marks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section dark-section">
          <div className="section-heading">
            <span className="eyebrow">MY TECHNICAL TOOLKIT</span>
            <h2>
              Skills & <span>Technologies</span>
            </h2>
            <p>Technologies and tools I have worked with.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <div className="section-heading">
            <span className="eyebrow">SELECTED WORK</span>
            <h2>
              Featured <span>Projects</span>
            </h2>
            <p>
              Some projects that demonstrate my learning and development skills.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / PROJECT</span>
                  <span className="project-icon">↗</span>
                </div>

                <div className="project-art">{"</>"}</div>

                <span className="project-type">{project.type}</span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  View on GitHub ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="section dark-section">
          <div className="section-heading">
            <span className="eyebrow">WHAT I CAN DO</span>
            <h2>
              My <span>Services</span>
            </h2>
            <p>Development services I can help you with.</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact">Discuss a project ↗</a>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>

            <h2>
              Let's build something <span>great.</span>
            </h2>

            <p>
              Looking for a developer or want to discuss a project?
              Feel free to contact me.
            </p>

            <div className="contact-buttons">
              <a
                className="btn primary-btn"
                href="mailto:ap0918713@gmail.com"
              >
                Send an Email ↗
              </a>

              <a
                className="btn secondary-btn"
                href="https://wa.me/919129376606"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp ↗
              </a>
            </div>

            <div className="contact-details">
              <div>
                <small>EMAIL</small>
                <a href="mailto:ap0918713@gmail.com">
                  ap0918713@gmail.com
                </a>
              </div>

              <div>
                <small>GITHUB</small>
                <a
                  href="https://github.com/ap0918713-ankit"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/ap0918713-ankit
                </a>
              </div>

              <div>
                <small>LINKEDIN</small>
                <a
                  href="https://www.linkedin.com/in/ankit-pandey-a7bb922b3"
                  target="_blank"
                  rel="noreferrer"
                >
                  View LinkedIn Profile ↗
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-icon">AP</span>
          Ankit Pandey<span className="brand-dot">.</span>
        </a>

        <p>
          Designed & built by Ankit Pandey · © {new Date().getFullYear()}
        </p>

        <a href="#home">Back to top ↑</a>
      </footer>

    </div>
  );
}

export default App;
