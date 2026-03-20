"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 font-sans">
      <main className="max-w-3xl mx-auto py-16 px-6">

        {/* Header */}
        <section className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-zinc-800 dark:text-white mb-2">Contact Me</h1>
          <p className="text-zinc-600 dark:text-zinc-300">
            Have a question, project idea, or just want to say hi? Feel free to reach out!
          </p>
        </section>

        {/* Contact Info */}
        <section className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-xl font-bold text-zinc-800 dark:text-white mb-4">Get in Touch</h2>
          <div className="space-y-3">
            {[
              { icon: "📧", label: "Email", value: "roneldylan@email.com" },
              { icon: "📍", label: "Location", value: "Philippines" },
              { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/roneldylan" },
              { icon: "🐙", label: "GitHub", value: "github.com/roneldylan" },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                <span className="text-xl w-8">{icon}</span>
                <span className="font-medium text-zinc-800 dark:text-white w-20">{label}:</span>
                <span className="text-sm">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-bold text-zinc-800 dark:text-white mb-6">Send a Message</h2>

          {submitted ? (
            <div className="bg-indigo-50 dark:bg-zinc-700 rounded-xl p-6 text-center">
              <p className="text-2xl mb-2">🎉</p>
              <p className="font-semibold text-indigo-600 dark:text-indigo-300">Message sent!</p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
                Thanks for reaching out, {form.name}. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                className="mt-4 text-sm text-indigo-500 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-700 text-zinc-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-700 text-zinc-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  className="w-full px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-700 text-zinc-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
              >
                Send Message
              </button>
            </form>
          )}
        </section>

      </main>
    </div>
  );
}
