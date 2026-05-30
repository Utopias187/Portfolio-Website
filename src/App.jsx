import { useState } from "react"
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiR,
  SiMysql,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVercel,
  SiRust,
  SiStreamlit,
} from "react-icons/si"

function App() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("foundations")

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
    "GitHub",
  ]

  const skillCategories = {
    foundations: {
      label: "Foundations",
      title: "Programming Foundations",
      description:
        "Core concepts that underpin everything — applied across problem-solving, development, and system design.",
      skills: [
        "Object-Oriented Programming",
        "Data Structures",
        "Algorithms",
        "Complexity Analysis",
        "Linear Algebra",
        "Probability & Statistics",
        "Numerical Methods",
        "Computer Organization",
      ],
    },
    languages: {
      label: "Languages",
      title: "Languages & Frameworks",
      description:
        "Languages and frameworks used across data work, backend logic, and frontend interfaces.",
      skills: [
        { name: "Python", icon: SiPython, color: "text-blue-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "C++", icon: SiCplusplus, color: "text-blue-400" },
        { name: "R", icon: SiR, color: "text-sky-400" },
        { name: "SQL", icon: SiMysql, color: "text-cyan-300" },
        { name: "HTML / CSS", icon: SiHtml5, color: "text-orange-400" },
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
        { name: "Express.js", icon: SiExpress, color: "text-zinc-300" },
        { name: "FastAPI", icon: SiFastapi, color: "text-emerald-400" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "Prisma ORM", icon: SiPrisma, color: "text-zinc-200" },
      ],
    },
    ai: {
      label: "AI / ML",
      title: "AI & Machine Learning",
      description:
        "Tools and concepts I use for AI-focused projects, data processing, and intelligent applications.",
      skills: [
        "Machine Learning",
        "NLP",
        "FastAPI",
        "Streamlit",
        "Data Processing",
        "Model Evaluation",
        "Prompt Engineering",
        "AI Tooling",
      ],
    },
    tools: {
      label: "Tools",
      title: "Developer Tools",
      description:
        "Tools and frameworks I use to design, build, test, deploy, and maintain software projects.",
      skills: [
        { name: "Git", icon: SiGit, color: "text-orange-500" },
        { name: "GitHub", icon: SiGithub, color: "text-zinc-200" },
        { name: "Vercel", icon: SiVercel, color: "text-white" },
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
        { name: "Express", icon: SiExpress, color: "text-zinc-300" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
        { name: "FastAPI", icon: SiFastapi, color: "text-emerald-400" },
        { name: "Streamlit", icon: SiStreamlit, color: "text-red-400" },
        { name: "Rust", icon: SiRust, color: "text-orange-400" },
      ],
    },
  }

  const expertiseTools = [
    {
      name: "React",
      position: "right-[8%] bottom-[12%]",
      accent: "border-cyan-500/50 text-cyan-300",
    },
    {
      name: "Python",
      position: "right-[26%] bottom-[18%]",
      accent: "border-blue-500/50 text-blue-300",
    },
    {
      name: "Git",
      position: "left-[8%] bottom-[18%]",
      accent: "border-orange-500/50 text-orange-300",
    },
    {
      name: "MongoDB",
      position: "left-[4%] top-[42%]",
      accent: "border-green-500/50 text-green-300",
    },
    {
      name: "FastAPI",
      position: "left-[12%] top-[25%]",
      accent: "border-emerald-500/50 text-emerald-300",
    },
    {
      name: "GitHub",
      position: "right-[12%] top-[32%]",
      accent: "border-zinc-500/50 text-zinc-200",
    },
    {
      name: "Node.js",
      position: "right-[8%] top-[48%]",
      accent: "border-green-500/50 text-green-300",
    },
    {
      name: "Express",
      position: "left-[30%] top-[48%]",
      accent: "border-zinc-500/50 text-zinc-300",
    },
    {
      name: "JavaScript",
      position: "left-[32%] bottom-[28%]",
      accent: "border-yellow-500/50 text-yellow-300",
    },
    {
      name: "Rust",
      position: "right-[32%] top-[28%]",
      accent: "border-orange-500/50 text-orange-300",
    },
    {
      name: "Tailwind",
      position: "right-[25%] top-[42%]",
      accent: "border-cyan-500/50 text-cyan-300",
    },
    {
      name: "Vercel",
      position: "left-[24%] top-[12%]",
      accent: "border-zinc-500/50 text-zinc-300",
    },
    {
      name: "SQL",
      position: "left-[28%] top-[56%]",
      accent: "border-blue-500/50 text-blue-300",
    },
    {
      name: "C / C++",
      position: "left-[18%] bottom-[34%]",
      accent: "border-indigo-500/50 text-indigo-300",
    },
    {
      name: "AI Tools",
      position: "right-[34%] bottom-[30%]",
      accent: "border-red-500/50 text-red-300",
    },
  ]

  const projects = [
    {
      title: "NetCapRisk",
      description:
        "Python CLI tool that models network throughput, detects bottlenecks, and flags low-headroom risk points as traffic scales.",
      scope:
        "Built to help identify capacity issues, traffic limits, and infrastructure risk points through command-line analysis.",
      tech: ["Python", "Networking", "CLI"],
      github: "https://github.com/Utopias187/NetCapRisk",
      demo: "",
      image: "",
    },
    {
      title: "PII Redaction - Redactify",
      description:
        "Local PII redaction tool using regex, NLP, PDF processing, Streamlit, and FastAPI.",
      scope:
        "Designed to detect and redact sensitive information from documents while keeping processing local and privacy-focused.",
      tech: ["Python", "FastAPI", "Streamlit", "NLP"],
      github: "https://github.com/Utopias187/PII-Redaction-Redactify",
      demo: "",
      image: "",
    },
    {
      title: "File Hash Scanner",
      description:
        "Cybersecurity CLI tool that scans files, computes hashes, and checks them against known signatures.",
      scope:
        "Focused on file integrity, hash verification, and basic security scanning through a lightweight CLI workflow.",
      tech: ["Rust", "Cybersecurity", "Hashing"],
      github: "https://github.com/Utopias187/File_hash_scanner",
      demo: "",
      image: "",
    },
    {
      title: "E-commerce Website",
      description:
        "Full-stack e-commerce platform with authentication, product management, checkout, and admin features.",
      scope:
        "Created as a full-stack shopping platform with user flows, backend routes, database storage, and admin features.",
      tech: ["React", "Node", "Express", "MongoDB"],
      github: "https://github.com/Utopias187/E-commerce-Website-project",
      demo: "",
      image: "",
    },
  ]

  const workflow = ["Idea", "Plan", "Build", "Test", "Review", "Improve"]

  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(127,29,29,0.2),transparent_35%)] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[length:42px_42px] opacity-20" />

      <div className="relative z-10">
        <header className="mx-auto max-w-6xl px-6 py-6">
          <nav className="flex items-center justify-between rounded-3xl border border-zinc-800 bg-zinc-900/80 px-5 py-4 shadow-2xl backdrop-blur">
            <a href="#" className="text-lg font-bold text-red-400">
              francisco.dev
            </a>

            <div className="hidden items-center gap-2 text-sm text-zinc-300 md:flex">
              <a
                href="#projects"
                className="rounded-full bg-red-600 px-4 py-2 font-medium text-white"
              >
                Projects
              </a>

              <a
                href="#expertise"
                className="rounded-full px-4 py-2 hover:bg-zinc-800 hover:text-white"
              >
                Expertise
              </a>

              <a
                href="#skills"
                className="rounded-full px-4 py-2 hover:bg-zinc-800 hover:text-white"
              >
                Skills
              </a>

              <a
                href="#experience"
                className="rounded-full px-4 py-2 hover:bg-zinc-800 hover:text-white"
              >
                Credentials
              </a>

              <a
                href="#about"
                className="rounded-full px-4 py-2 hover:bg-zinc-800 hover:text-white"
              >
                Persona
              </a>

              <a
                href="#contact"
                className="rounded-full px-4 py-2 hover:bg-zinc-800 hover:text-white"
              >
                Contact
              </a>
            </div>

            <a
              href="/Francisco_Jaimes_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-red-500/60 px-4 py-2 text-sm font-medium text-red-300 hover:bg-red-500/10"
            >
              Resume
            </a>
          </nav>
        </header>

        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-400">
              Software Engineer
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Building practical software across AI, cybersecurity, and
              full-stack development.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              I&apos;m Francisco Jaimes, a Computer Science graduate from Texas
              Tech University with a minor in Mathematics. I enjoy building
              tools that solve real problems, from cybersecurity scanners to
              full-stack web applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700"
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
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Focus
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Security-minded builder
            </h2>

            <p className="mt-4 leading-7 text-zinc-300">
              I like projects that combine clean interfaces, useful backend
              logic, and practical problem solving.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4">
                <p className="text-sm text-zinc-500">Main interests</p>
                <p className="mt-1 font-medium">
                  AI · Cybersecurity · Full-Stack
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4">
                <p className="text-sm text-zinc-500">Currently seeking</p>
                <p className="mt-1 font-medium">
                  New grad software engineering roles
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pt-4">
          <div className="flex flex-wrap gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 backdrop-blur">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-800 bg-zinc-950/90 px-4 py-2 text-sm text-zinc-300 transition hover:border-red-500 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="expertise" className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-red-400">
              Expertise
            </p>

            <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              Technical Expertise
            </h2>
          </div>

          <div className="relative mx-auto mt-16 h-[620px] max-w-5xl overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-950/40">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[length:36px_36px] opacity-20" />

            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/25 shadow-[0_0_80px_rgba(220,38,38,0.18)] md:h-[520px] md:w-[520px]">
              <div className="absolute inset-8 rounded-full border border-red-500/20" />
              <div className="absolute inset-20 rounded-full border border-red-500/15" />

              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-red-500/20" />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-red-500/20" />

              <div className="absolute left-1/2 top-1/2 h-[90%] w-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/20" />
              <div className="absolute left-1/2 top-1/2 h-[90%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/20" />

              <div className="absolute left-1/2 top-1/2 h-[35%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/20" />
              <div className="absolute left-1/2 top-1/2 h-[65%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/15" />

              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400 shadow-[0_0_30px_rgba(248,113,113,0.9)]" />
            </div>

            {expertiseTools.map((tool) => (
              <div
                key={tool.name}
                className={`absolute ${tool.position} rounded-full border bg-zinc-950/85 px-4 py-2 text-sm font-medium shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-zinc-900 ${tool.accent}`}
              >
                {tool.name}
              </div>
            ))}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-zinc-600">
              Core tools and technologies I use to build projects
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap gap-3">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveSkillCategory(key)}
                className={`rounded-full border px-5 py-3 text-sm font-medium transition ${
                  activeSkillCategory === key
                    ? "border-red-500 bg-red-500/10 text-red-300 shadow-[0_0_25px_rgba(220,38,38,0.25)]"
                    : "border-zinc-800 bg-zinc-950/70 text-zinc-400 hover:border-red-500/50 hover:text-white"
                }`}
              >
                <span className="mr-2">•</span>
                {category.label}
              </button>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-red-500/30 bg-zinc-900/80 shadow-[0_0_45px_rgba(220,38,38,0.16)] backdrop-blur">
            <div className="border-b border-zinc-800 p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_18px_rgba(248,113,113,0.9)]" />

                    <h2 className="text-2xl font-bold">
                      {skillCategories[activeSkillCategory].title}
                    </h2>
                  </div>

                  <p className="mt-3 max-w-3xl font-mono text-sm leading-6 text-zinc-400">
                    {skillCategories[activeSkillCategory].description}
                  </p>
                </div>

                <span className="rounded-full border border-red-500/50 bg-red-500/10 px-4 py-2 text-xs font-semibold text-red-300">
                  {skillCategories[activeSkillCategory].skills.length} skills
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-3">
                {skillCategories[activeSkillCategory].skills.map((skill) => {
                  const Icon = skill.icon

                  return (
                    <span
                      key={skill.name || skill}
                      className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-2 font-mono text-sm text-zinc-300 transition hover:border-red-500/60 hover:bg-zinc-900 hover:text-white"
                    >
                      {Icon ? (
                        <Icon className={`text-base ${skill.color}`} />
                      ) : (
                        <span className="text-zinc-600">•</span>
                      )}

                      {skill.name || skill}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-red-400">
              Portfolio
            </p>

            <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              Selected Works
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/90 shadow-2xl transition hover:-translate-y-1 hover:border-red-500/70"
              >
                <div className="relative h-56 overflow-hidden bg-zinc-950 md:h-64">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.28),transparent_40%)]">
                      <p className="text-3xl font-bold text-zinc-700">
                        {project.title}
                      </p>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <p className="mt-3 leading-7 text-zinc-300">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-red-600 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      Scope
                    </span>

                    <span className="rounded-full bg-zinc-800 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-300">
                      Tech
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {project.scope}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-zinc-800 pt-5">
                    <div className="flex flex-wrap gap-5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-zinc-300 hover:text-red-300"
                      >
                        Code ↗
                      </a>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-zinc-300 hover:text-red-300"
                        >
                          Live ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400">
            Persona
          </p>

          <h2 className="mt-3 text-3xl font-bold">About Me</h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6">
              <p className="leading-7 text-zinc-300">
                I&apos;m interested in building software that feels useful,
                clean, and practical. My work includes cybersecurity tools,
                networking utilities, command-line applications, and full-stack
                web projects.
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
            Forge
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
      </div>
    </main>
  )
}

export default App