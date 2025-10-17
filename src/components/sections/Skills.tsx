'use client'

// Placeholder Skills component - will be implemented in later tasks
export default function Skills() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-100 mb-12">
          Skills & Technologies
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Frontend', 'Backend', 'Tools'].map((category) => (
            <div key={category} className="bg-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-neutral-100 mb-4">{category}</h3>
              <p className="text-neutral-400">Skills will be displayed here</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}