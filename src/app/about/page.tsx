export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 font-sans">
      <main className="max-w-3xl mx-auto py-16 px-6">

        {/* Intro */}
        <section className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-zinc-800 dark:text-white mb-2">About Me</h1>
          <p className="text-indigo-500 font-medium mb-4">Software Developer Intern</p>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            I&apos;m Ronel Dylan Joshua A. Dolor, a Computer Science student from the Philippines with a deep
            passion for building meaningful software. I thrive in full-stack web development and love
            turning ideas into real, working products. I believe great code is not just functional —
            it&apos;s readable, maintainable, and crafted with care.
          </p>
        </section>

        {/* Education */}
        <section className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-xl font-bold text-zinc-800 dark:text-white mb-4">Education</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-400 pl-4">
              <p className="font-semibold text-zinc-800 dark:text-white">Bachelor of Science in Computer Science</p>
              <p className="text-indigo-500 text-sm">University of the Philippines &mdash; 2022 &ndash; Present</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
                Focused on software engineering, data structures, algorithms, and web technologies.
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <p className="font-semibold text-zinc-800 dark:text-white">Senior High School — STEM Strand</p>
              <p className="text-purple-500 text-sm">2020 &ndash; 2022</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-xl font-bold text-zinc-800 dark:text-white mb-4">Technical Skills</h2>
          <div className="space-y-3">
            {[
              { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
              { category: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"] },
              { category: "Tools", skills: ["Git", "GitHub", "VS Code", "Figma", "Linux"] },
            ].map(({ category, skills }) => (
              <div key={category}>
                <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-2">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-indigo-50 dark:bg-zinc-700 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-bold text-zinc-800 dark:text-white mb-4">Experience</h2>
          <div className="border-l-4 border-indigo-400 pl-4">
            <p className="font-semibold text-zinc-800 dark:text-white">Software Developer Intern</p>
            <p className="text-indigo-500 text-sm">Pro Serve CS &mdash; 2025 &ndash; Present</p>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm mt-2 leading-relaxed">
              Working on full-stack web applications, collaborating with senior developers,
              and contributing to real-world projects while continuously learning industry best practices.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
