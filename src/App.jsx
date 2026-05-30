function App() {
  const projects = [
    {
      title: "NetCapRisk",
      description:
        "Python CLI tool that models network throughput, detects bottlenecks, and flags risk points as traffic scales.",
      tech: ["Python", "Networking", "CLI"],
      link: "https://github.com/Utopias187/NetCapRisk",
    },
    {
      title: "PII Redaction - Redactify",
      description:
        "Local PII redaction tool using regex, NLP, PDF processing, Streamlit, and FastAPI.",
      tech: ["Python", "FastAPI", "Streamlit", "NLP"],
      link: "https://github.com/Utopias187/PII-Redaction-Redactify",
    },
    {
      title: "File Hash Scanner",
      description:
        "Cybersecurity CLI tool that scans files, computes hashes, and checks them against known signatures.",
      tech: ["Rust", "Cybersecurity", "Hashing"],
      link: "https://github.com/Utopias187/File_hash_scanner",
    },
    {
      title: "E-commerce Website",
      description:
        "Full-stack e-commerce platform with authentication, product management, checkout, and admin features.",
      tech: ["React", "Node", "Express", "MongoDB"],
      link: "https://github.com/Utopias187/E-commerce-Website-project",
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
          Software Engineer
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Francisco Jaimes
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-300">
          Computer Science graduate from Texas Tech University focused on
          software engineering, AI, cybersecurity, and building practical tools
          that solve real problems.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-blue-500 px-5 py-3 font-medium hover:bg-blue-600"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Utopias187"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-3 font-medium hover:bg-zinc-900"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/francisco-jaimes-56431a238/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-3 font-medium hover:bg-zinc-900"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Projects</h2>

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

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                View project →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mt-4 text-zinc-300">
          I&apos;m currently looking for new grad software engineering and AI
          opportunities.
        </p>

        <a
          href="mailto:itzchoas@gmail.com"
          className="mt-6 inline-block rounded-xl bg-zinc-100 px-5 py-3 font-medium text-zinc-950 hover:bg-white"
        >
          Email Me
        </a>
      </section>
    </main>
  )
}

export default App