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
import {
  FiZap,
  FiClipboard,
  FiCpu,
  FiCode,
  FiSearch,
  FiCheckCircle,
  FiBookOpen,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiBriefcase,
} from "react-icons/fi"

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-red-400">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-zinc-400">{description}</p>
      )}
    </div>
  )
}

function App() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("foundations")

  const navItems = [
    ["Projects", "#projects"],
    ["Expertise", "#expertise"],
    ["Skills", "#skills"],
    ["Persona", "#about"],
    ["Experience", "#education"],
    ["Contact", "#contact"],
  ]

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

  const stats = [
    { value: "13+", label: "GitHub Repositories" },
    { value: "5+", label: "Featured Projects" },
    { value: "4+", label: "Core Focus Areas" },
    { value: "TTU", label: "Computer Science" },
  ]

  const education = [
    {
      year: "2022 – 2026",
      school: "Texas Tech University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      detail: "Minor in Mathematics",
      location: "Lubbock, Texas",
      image: "/ttu-campus.jpg",
    },
  ]

  const work = [
    {
      date: "Jun 2024 – Jul 2024",
      role: "Marketing & Content Creation Intern",
      company: "LokaLingo",
      location: "Tokyo, Japan",
      description:
        "Created and curated social media content, assisted with content strategy, blog posts, newsletters, and audience research.",
      tags: ["Content Strategy", "Marketing", "Research", "Communication"],
    },
    {
      date: "Oct 2023 – Feb 2024",
      role: "Student Services",
      company: "Texas Tech Hospitality",
      location: "Lubbock, Texas",
      description:
        "Delivered customer service in a fast-paced environment while resolving guest issues, maintaining service quality, and supporting health and safety procedures.",
      tags: ["Customer Service", "Operations", "Communication", "Teamwork"],
    },
  ]

  const workflow = [
    {
      label: "Idea",
      icon: FiZap,
      color: "text-yellow-400",
      border: "border-yellow-500/40",
      bg: "bg-yellow-500/10",
    },
    {
      label: "Plan",
      icon: FiClipboard,
      color: "text-orange-400",
      border: "border-orange-500/40",
      bg: "bg-orange-500/10",
    },
    {
      label: "AI Help",
      icon: FiCpu,
      color: "text-purple-400",
      border: "border-purple-500/40",
      bg: "bg-purple-500/10",
    },
    {
      label: "Code",
      icon: FiCode,
      color: "text-cyan-400",
      border: "border-cyan-500/40",
      bg: "bg-cyan-500/10",
    },
    {
      label: "Review",
      icon: FiSearch,
      color: "text-pink-400",
      border: "border-pink-500/40",
      bg: "bg-pink-500/10",
    },
    {
      label: "Test",
      icon: FiCheckCircle,
      color: "text-red-400",
      border: "border-red-500/40",
      bg: "bg-red-500/10",
    },
    {
      label: "Learn",
      icon: FiBookOpen,
      color: "text-zinc-300",
      border: "border-zinc-600/60",
      bg: "bg-zinc-800/40",
    },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(127,29,29,0.2),transparent_35%)] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[length:42px_42px] opacity-20" />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 mx-auto max-w-6xl px-6 py-5">
          <nav className="flex items-center justify-between rounded-3xl border border-zinc-800/80 bg-zinc-950/70 px-5 py-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <a
              href="#"
              className="text-lg font-bold tracking-tight text-red-400 transition hover:text-red-300"
            >
              francisco.dev
            </a>

            <div className="hidden items-center gap-2 text-sm text-zinc-300 md:flex">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-full px-4 py-2 transition hover:bg-red-500/10 hover:text-red-300"
                >
                  {label}
                </a>
              ))}
            </div>

            <a
              href="/Francisco_Jaimes_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-red-500/60 px-4 py-2 text-sm font-medium text-red-300 transition hover:bg-red-500/10 hover:shadow-[0_0_20px_rgba(220,38,38,0.35)]"
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
              Building security-minded software across AI, cybersecurity, and
              full-stack development.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              I&apos;m Francisco Jaimes, a Computer Science graduate from Texas
              Tech University with a minor in Mathematics. I build practical
              tools that solve real problems, from network risk analyzers and
              file scanners to full-stack web applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-red-600 px-5 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-[0_0_25px_rgba(220,38,38,0.35)]"
              >
                View Projects
              </a>

              <a
                href="https://github.com/Utopias187"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-700 px-5 py-3 font-medium text-zinc-200 transition hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/francisco-jaimes-56431a238/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-zinc-700 px-5 py-3 font-medium text-zinc-200 transition hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:shadow-[0_0_35px_rgba(220,38,38,0.16)]">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Focus
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              Security-minded builder
            </h2>

            <p className="mt-4 leading-7 text-zinc-300">
              I like building projects that combine clean interfaces, useful
              backend logic, and practical problem solving.
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
                className="rounded-full border border-zinc-800 bg-zinc-950/90 px-4 py-2 text-sm text-zinc-300 transition hover:-translate-y-1 hover:border-red-500 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section
          id="expertise"
          className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24"
        >
          <SectionHeader
            eyebrow="Expertise"
            title="Technical Expertise"
            description="A visual map of the tools, languages, and systems I use to build practical software."
          />

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
                className={`absolute ${tool.position} rounded-full border bg-zinc-950/85 px-4 py-2 text-sm font-medium shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-900 ${tool.accent}`}
              >
                {tool.name}
              </div>
            ))}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-zinc-600">
              Core tools and technologies I use to build projects
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="mx-auto max-w-6xl px-6 py-20 scroll-mt-24"
        >
          <SectionHeader
            eyebrow="Toolkit"
            title="Skills"
            description="A categorized view of the foundations, languages, AI concepts, and tools I work with."
          />

          <div className="mt-12 flex flex-wrap gap-3">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveSkillCategory(key)}
                className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  activeSkillCategory === key
                    ? "border-red-500 bg-red-500/10 text-red-300 shadow-[0_0_25px_rgba(220,38,38,0.25)]"
                    : "border-zinc-800 bg-zinc-950/70 text-zinc-400 hover:-translate-y-1 hover:border-red-500/50 hover:text-white"
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
                      className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-2 font-mono text-sm text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:bg-zinc-900 hover:text-white"
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

        <section
          id="projects"
          className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24"
        >
          <SectionHeader
            eyebrow="Portfolio"
            title="Selected Works"
            description="Projects focused on cybersecurity, AI, networking, full-stack development, and practical engineering."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/90 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-red-500/70 hover:shadow-[0_0_35px_rgba(220,38,38,0.18)]"
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
                      <p className="px-6 text-center text-3xl font-bold text-zinc-700">
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
                        className="text-sm font-medium text-zinc-300 transition hover:text-red-300"
                      >
                        Code ↗
                      </a>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-zinc-300 transition hover:text-red-300"
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

        <section
          id="about"
          className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24"
        >
          <SectionHeader
            eyebrow="Who I Am"
            title="About Me"
            description="A quick snapshot of my background, interests, and the kind of software I like building."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-red-500/60">
              <h3 className="text-2xl font-bold">Hi, I&apos;m Francisco</h3>

              <p className="mt-5 leading-8 text-zinc-300">
                I&apos;m a Computer Science graduate from Texas Tech University
                with a minor in Mathematics. I build at the intersection of
                software engineering, cybersecurity, AI, and full-stack
                development.
              </p>

              <p className="mt-4 leading-8 text-zinc-400">
                My current focus is building practical tools that solve real
                problems: network risk analyzers, file integrity scanners, PII
                redaction systems, and full-stack web applications. I care about
                clean interfaces, useful backend logic, and projects that are
                easy to explain in an interview.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Houston, Texas",
                  "Texas Tech University",
                  "Software Engineering",
                  "AI · Cybersecurity · Full-Stack",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 bg-zinc-950/80 px-4 py-2 text-sm text-zinc-300 transition hover:-translate-y-1 hover:border-red-500 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-[0_0_25px_rgba(220,38,38,0.16)]"
                >
                  <p className="text-4xl font-bold text-red-400">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-zinc-500">
            Education & Work
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Experience
          </h2>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              {education.map((item) => (
                <div key={item.school}>
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <span className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_18px_rgba(248,113,113,0.9)]" />
                      <span className="mt-2 h-24 w-px bg-zinc-800" />
                    </div>

                    <div>
                      <p className="font-mono text-sm font-semibold tracking-[0.2em] text-red-400">
                        {item.year}
                      </p>

                      <h3 className="mt-4 text-2xl font-bold">
                        {item.degree}
                      </h3>

                      <p className="mt-2 text-zinc-300">{item.field}</p>

                      <p className="mt-1 text-sm text-zinc-500">
                        {item.school} · {item.location}
                      </p>

                      <p className="mt-1 text-sm text-zinc-400">
                        {item.detail}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:shadow-[0_0_35px_rgba(220,38,38,0.16)]">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={`${item.school} campus`}
                        className="h-44 w-full object-cover opacity-60 grayscale transition duration-500 hover:scale-105 hover:opacity-80"
                      />
                    ) : (
                      <div className="flex h-44 items-center justify-center bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.24),transparent_45%)]">
                        <p className="text-3xl font-bold text-zinc-700">
                          Texas Tech University
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {work.map((job) => (
                <article
                  key={`${job.company}-${job.role}`}
                  className="rounded-3xl border border-red-500/30 bg-zinc-900/80 p-7 shadow-2xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-red-500/70 hover:shadow-[0_0_35px_rgba(220,38,38,0.18)]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-sm uppercase tracking-[0.2em] text-red-400">
                        {job.date}
                      </p>

                      <h3 className="mt-4 text-2xl font-bold">{job.role}</h3>

                      <p className="mt-3 font-semibold text-red-300">
                        {job.company}
                      </p>

                      <p className="mt-1 text-sm text-zinc-500">
                        {job.location}
                      </p>
                    </div>

                    <div className="hidden h-12 w-12 items-center justify-center rounded-xl border border-red-500/40 bg-red-500/10 text-red-300 md:flex">
                      <FiBriefcase className="text-xl" />
                    </div>
                  </div>

                  <p className="mt-6 leading-7 text-zinc-300">
                    {job.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 font-mono text-xs text-red-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-zinc-500">
            Skills · Workflow · Identity
          </p>

          <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Reach Out
          </h2>

          <div className="mt-14 rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl backdrop-blur transition-all duration-300 hover:border-red-500/60 md:p-10">
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-zinc-500">
              Workflow
            </p>

            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {workflow.map((step, index) => {
                const Icon = step.icon

                return (
                  <div
                    key={step.label}
                    className="flex flex-1 items-center gap-4 md:block"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border ${step.border} ${step.bg} ${step.color} shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(220,38,38,0.18)]`}
                      >
                        <Icon className="text-xl" />
                      </div>

                      <p className="mt-3 text-center text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        {step.label}
                      </p>
                    </div>

                    {index < workflow.length - 1 && (
                      <div className="hidden h-px flex-1 bg-gradient-to-r from-zinc-800 via-red-500/30 to-zinc-800 md:block" />
                    )}
                  </div>
                )
              })}
            </div>

            <div className="my-8 h-px bg-zinc-800" />

            <p className="font-mono text-sm uppercase tracking-[0.35em] text-zinc-500">
              Hit Me Up
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:itzchoas@gmail.com"
                className="flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-5 py-3 text-sm font-medium text-red-300 transition hover:-translate-y-1 hover:bg-red-500/20 hover:shadow-[0_0_25px_rgba(220,38,38,0.25)]"
              >
                <FiMail />
                Mail
              </a>

              <a
                href="https://github.com/Utopias187"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/60 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:-translate-y-1 hover:border-zinc-500 hover:text-white"
              >
                <FiGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/francisco-jaimes-56431a238/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-3 text-sm font-medium text-blue-300 transition hover:-translate-y-1 hover:bg-blue-500/20"
              >
                <FiLinkedin />
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