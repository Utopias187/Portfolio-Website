function App() {
  const techStack = [
    "React",
    "Tailwind",
    "JavaScript",
    "Python",
    "Rust",
    "C",
    "Node.js",
    "Express",
    "FastAPI",
    "MongoDB",
    "Git",
  ]

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

  const workflow = ["Idea", "Plan", "Build", "Test", "Review", "Improve"]

  return (
    <main className="min-h-screen bg-zinc-950 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(127,29,29,0.2),transparent_35%)] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-lg font-bold">
          Francisco Jaimes
        </a>

        <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pt-8">
        <div className="flex flex-wrap gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300 transition hover:border-red-500 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-400">
            Software Engineer
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Building practical software across AI, cybersecurity, and full-stack
            development.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            I&apos;m Francisco Jaimes, a Computer Science graduate from Texas
            Tech University with a minor in Mathematics. I enjoy building tools
            that solve real problems, from cybersecurity scanners to full-stack
            web applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700"
            >
              View Projects
            </a>

            <a
              href="/Francisco_Jaimes_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-700 px-5 py-3 font-medium text-zinc-200 hover:bg-zinc-900"
            >
              Resume
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
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400">
            Focus
          </p>

          <h2 className="mt-4 text-2xl font-bold">Security-minded builder</h2>

          <p className="mt-4 leading-7 text-zinc-300">
            I like projects that combine clean interfaces, useful backend logic,
            and practical problem solving.
          </p>

          <div className="mt-6 grid gap-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-sm text-zinc-500">Main interests</p>
              <p className="mt-1 font-medium">
                AI · Cybersecurity · Full-Stack
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-sm text-zinc-500">Currently seeking</p>
              <p className="mt-1 font-medium">
                New grad software engineering roles
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-red-400">
          Featured Work
        </p>

        <h2 className="mt-3 text-3xl font-bold">Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-lg transition hover:-translate-y-1 hover:border-red-500"
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
                  className="text-sm font-medium text-red-400 hover:text-red-300"
                >
                  GitHub →
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-red-400 hover:text-red-300"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-red-400">
          Who I Am
        </p>

        <h2 className="mt-3 text-3xl font-bold">About Me</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6">
            <p className="leading-7 text-zinc-300">
              I&apos;m interested in building software that feels useful, clean,
              and practical. My work includes cybersecurity tools, networking
              utilities, command-line applications, and full-stack web projects.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-5">
              <p className="text-sm uppercase text-red-400">Build</p>
              <p className="mt-2 text-sm text-zinc-300">
                Practical tools with real use cases.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-5">
              <p className="text-sm uppercase text-red-400">Focus</p>
              <p className="mt-2 text-sm text-zinc-300">
                Security, AI, and full-stack systems.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-5">
              <p className="text-sm uppercase text-red-400">Craft</p>
              <p className="mt-2 text-sm text-zinc-300">
                Clean code and simple user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-red-400">
          Credentials
        </p>

        <h2 className="mt-3 text-3xl font-bold">Education & Experience</h2>

        <div className="mt-8 space-y-5">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 transition hover:border-red-500">
            <p className="text-sm text-zinc-500">Texas Tech University</p>
            <h3 className="mt-2 text-xl font-semibold">
              B.S. in Computer Science
            </h3>
            <p className="mt-2 text-zinc-400">Minor in Mathematics</p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 transition hover:border-red-500">
            <p className="text-sm text-zinc-500">Academic Experience</p>
            <h3 className="mt-2 text-xl font-semibold">
              Undergraduate Teaching Assistant
            </h3>
            <p className="mt-2 leading-7 text-zinc-400">
              Supported students in Data Structures through mentoring, office
              hours, exam support, and programming guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-red-400">
          Workflow
        </p>

        <h2 className="mt-3 text-3xl font-bold">How I Build</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {workflow.map((step) => (
            <div
              key={step}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-5 text-center transition hover:border-red-500"
            >
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-8 transition hover:border-red-500 md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400">
            Reach Out
          </p>

          <h2 className="mt-3 text-3xl font-bold">Let&apos;s connect.</h2>

          <p className="mt-4 max-w-2xl text-zinc-300">
            I&apos;m currently looking for new grad software engineering, AI,
            cybersecurity, and full-stack development opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:itzchoas@gmail.com"
              className="rounded-xl bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700"
            >
              Email Me
            </a>

            <a
              href="/Francisco_Jaimes_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-700 px-5 py-3 font-medium text-zinc-200 hover:bg-zinc-800"
            >
              Resume
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