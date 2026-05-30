function App() {
  const projects = [
    {
      title: "NetCapRisk",
      description:
        "Python CLI tool that models network throughput, detects bottlenecks, and flags low-headroom risk points as traffic scales.",
      tech: ["Python", "Networking", "CLI"],
      github: "https://github.com/Utopias187/NetCapRisk",
      demo: "",
    },
    {
      title: "PII Redaction - Redactify",
      description:
        "Local PII redaction tool using regex, NLP, PDF processing, Streamlit, and FastAPI.",
      tech: ["Python", "FastAPI", "Streamlit", "NLP"],
      github: "https://github.com/Utopias187/PII-Redaction-Redactify",
      demo: "",
    },
    {
      title: "File Hash Scanner",
      description:
        "Cybersecurity CLI tool that scans files, computes hashes, and checks them against known signatures.",
      tech: ["Rust", "Cybersecurity", "Hashing"],
      github: "https://github.com/Utopias187/File_hash_scanner",
      demo: "",
    },
    {
      title: "E-commerce Website",
      description:
        "Full-stack e-commerce platform with authentication, product management, checkout, and admin features.",
      tech: ["React", "Node", "Express", "MongoDB"],
      github: "https://github.com/Utopias187/E-commerce-Website-project",
      demo: "",
    },
    {
      title: "Task Management System",
      description:
        "C-based command line task manager with modular CLI handling, task logic, and file storage.",
      tech: ["C", "CLI", "File Storage"],
      github: "https://github.com/Utopias187/task-management-system",
      demo: "",
    },
  ]

  const skills = [
    "Python",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "FastAPI",
    "MongoDB",
    "SQL",
    "C",
    "C++",
    "Rust",
    "Git",
    "GitHub",
  ]

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-lg font-bold">
          Francisco Jaimes
        </a>

        <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#education" className="hover:text-white">
            Education
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
          Software Engineer
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Building practical software across AI, cybersecurity, and full-stack
          development.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          I&apos;m Francisco Jaimes, a Computer Science graduate from Texas Tech
          University with a minor in Mathematics. I enjoy building tools that
          solve real problems, from cybersecurity scanners to full-stack web
          applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-blue-500 px-5 py-3 font-medium text-white hover:bg-blue-600"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Utopias187"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-3 font-medium text-zinc-200 hover:bg-zinc-900"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/francisco-jaimes-56431a238/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-3 font-medium text-zinc-200 hover:bg-zinc-900"
          >
            LinkedIn
          </a>

          <a
            href="/Francisco_Jaimes_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-3 font-medium text-zinc-200 hover:bg-zinc-900"
          >
            Resume
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Work
            </p>
            <h2 className="mt-3 text-3xl font-bold">Featured Projects</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-blue-500"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-blue-400 hover:text-blue-300"
                >
                  GitHub →
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Toolkit
        </p>

        <h2 className="mt-3 text-3xl font-bold">Skills</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Background
        </p>

        <h2 className="mt-3 text-3xl font-bold">Education & Experience</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">Texas Tech University</h3>
            <p className="mt-2 text-zinc-400">
              B.S. in Computer Science, Minor in Mathematics
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-xl font-semibold">
              Undergraduate Teaching Assistant
            </h3>
            <p className="mt-2 text-zinc-400">
              Supported students in Data Structures through mentoring, office
              hours, exam support, and programming guidance.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold">Let&apos;s connect.</h2>

          <p className="mt-4 max-w-2xl text-zinc-300">
            I&apos;m currently looking for new grad software engineering, AI,
            cybersecurity, and full-stack development opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:itzchoas@gmail.com"
              className="rounded-xl bg-zinc-100 px-5 py-3 font-medium text-zinc-950 hover:bg-white"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Utopias187"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-700 px-5 py-3 font-medium text-zinc-200 hover:bg-zinc-800"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/francisco-jaimes-56431a238/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-700 px-5 py-3 font-medium text-zinc-200 hover:bg-zinc-800"
            >
              LinkedIn
            </a>

            <a
              href="/Francisco_Jaimes_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-700 px-5 py-3 font-medium text-zinc-200 hover:bg-zinc-800"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 Francisco Jaimes. Built with React, Tailwind CSS, and Vite.
      </footer>
    </main>
  )
}

export default App