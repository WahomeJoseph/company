export default function BlogPage() {
    return (
      <main className="min-h-screen px-4 py-20 bg-white text-gray-800">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-emerald-600 text-center mb-10">Tech Blog</h1>
          <div className="space-y-8">
            <article className="border-b pb-6">
              <h2 className="text-2xl font-semibold mb-2">5 Emerging Web Development Trends in 2025</h2>
              <p className="text-gray-600">
                Stay ahead of the curve with these cutting-edge technologies that are reshaping the web...
              </p>
            </article>
            <article className="border-b pb-6">
              <h2 className="text-2xl font-semibold mb-2">Why We Chose Next.js for Our Latest Product</h2>
              <p className="text-gray-600">
                Learn how the App Router, server-side rendering, and Vercel integration helped us ship faster...
              </p>
            </article>
          </div>
        </section>
      </main>
    );
  }
  