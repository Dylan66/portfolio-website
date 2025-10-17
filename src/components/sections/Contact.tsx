'use client'

// Placeholder Contact component - will be implemented in later tasks
export default function Contact() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-100 mb-12">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-neutral-300 mb-8">
            Interested in working together? Let's connect and discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium transition hover:bg-primary-600">
              Send Email
            </button>
            <button className="px-6 py-3 border border-neutral-600 text-neutral-100 rounded-lg font-medium transition hover:bg-neutral-800">
              View LinkedIn
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}