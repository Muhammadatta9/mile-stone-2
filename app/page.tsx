export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-24">
        <h1 className="text-4xl font-bold">Welcome To My Website</h1>
        <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-gray-200">
          Learn More
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <h2 className="text-center text-2xl font-bold mb-10">
          We Are a Company of Passionate Designers and Developers
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="text-center max-w-sm">
            <div className="text-4xl mb-2">🎨</div>
            <h3 className="font-bold text-lg">Creative Design</h3>
            <p className="text-gray-600 mt-2">
              Beautiful and modern designs for your projects.
            </p>
          </div>
          {/* Card 2 */}
          <div className="text-center max-w-sm">
            <div className="text-4xl mb-2">💻</div>
            <h3 className="font-bold text-lg">Clean Code</h3>
            <p className="text-gray-600 mt-2">
              Well-structured and clean code for maintainability.
            </p>
          </div>
          {/* Card 3 */}
          <div className="text-center max-w-sm">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="font-bold text-lg">Fast Support</h3>
            <p className="text-gray-600 mt-2">
              24/7 support to resolve any issue quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-500 text-white text-center py-16">
        <h2 className="text-2xl font-bold mb-6">Drop Me a Line</h2>
        <button className="px-6 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-gray-200">
          Contact Me
        </button>
      </section>
    </div>
  );
}
