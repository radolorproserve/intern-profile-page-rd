export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 font-sans">
      <main className="max-w-3xl mx-auto py-16 px-6">

        {/* Hero / Personal Info */}
        <section className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-indigo-500 flex items-center justify-center text-white text-3xl font-bold shrink-0">
              RD
            </div>
            <div>
              <h1 className="text-3xl font-bold text-zinc-800 dark:text-white">
                Ronel Dylan Joshua A. Dolor
              </h1>
              <p className="text-indigo-500 font-medium mt-1">Software Developer Intern</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
                📍 Philippines &nbsp;|&nbsp; 📧 roneldylan@email.com
              </p>
            </div>
          </div>
          <p className="mt-6 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Hey there! I&apos;m Ronel — a passionate developer who loves building cool things on the web.
            When I&apos;m not coding, you&apos;ll probably find me hanging out with my{" "}
            <span className="font-semibold text-indigo-500">6 dogs</span> 🐶🐶🐶🐶🐶🐶 — yes, six!
            They&apos;re my biggest stress relievers and my favorite debugging companions.
          </p>
        </section>

        {/* Hobbies */}
        <section className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-xl font-bold text-zinc-800 dark:text-white mb-4">Hobbies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { emoji: "🐕", label: "Taking care of my 6 dogs" },
              { emoji: "🎮", label: "Gaming" },
              { emoji: "🎵", label: "Listening to music" },
              { emoji: "🏃", label: "Jogging" },
              { emoji: "📸", label: "Photography" },
              { emoji: "🍳", label: "Cooking" },
            ].map(({ emoji, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-indigo-50 dark:bg-zinc-700 rounded-xl px-4 py-3 text-sm text-zinc-700 dark:text-zinc-200"
              >
                <span className="text-xl">{emoji}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-xl font-bold text-zinc-800 dark:text-white mb-4">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Web Development",
              "UI/UX Design",
              "Open Source",
              "Machine Learning",
              "Mobile Apps",
              "Dog Training",
              "Tech Gadgets",
              "Anime",
              "Basketball",
              "Cybersecurity",
            ].map((interest) => (
              <span
                key={interest}
                className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 text-sm font-medium px-3 py-1 rounded-full"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* Fun Facts */}
        <section className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-bold text-zinc-800 dark:text-white mb-4">Fun Facts</h2>
          <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
            <li>🐾 I own <strong>6 dogs</strong> — each one has a unique personality</li>
            <li>☕ I run on coffee and late-night coding sessions</li>
            <li>🌙 I&apos;m most productive after midnight</li>
            <li>🎯 I can spend hours perfecting a single pixel</li>
            <li>🚀 My goal is to build products that actually help people</li>
          </ul>
        </section>

      </main>
    </div>
  );
}
