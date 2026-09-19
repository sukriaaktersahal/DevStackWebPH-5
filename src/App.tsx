// app component placeholder
// importing navbar component
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* rendering navbar */}
      <Navbar />
      {/* is sticky working properly? */}
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Navbar Test Section</h1>
        <p className="text-gray-600 mb-8">Scroll down to ensure the navbar stays sticky at the top of the page.</p>
        {/* content to ensure sticky is working or not? */}
        <div className="space-y-6 text-gray-700">
          {/* content -1 */}
          <div>
            <h2 className="text-2xl font-bold mb-2">What is DevStack?</h2>
            <p>
              A development stack is the combination of programming languages, frameworks, libraries, databases, and tools that a team uses to
              build and run a software application. Choosing the right stack affects how fast you ship, how easily you scale, and how simple
              your maintenance becomes over time.
            </p>
          </div>

          {/* content -2 */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Frontend Technologies</h2>
            <p>
              Frontend technologies handle everything users see and interact with in the browser. React, Vue, Svelte, and Next.js each offer different
              approaches to building user interfaces. React focuses on components, Vue emphasizes approachability, Svelte removes the virtual DOM, and
              Next.js adds server-side rendering on top of React.
            </p>
          </div>

          {/* content -3 */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Backend Technologies</h2>
            <p>
              Backend technologies power the logic, data handling, and APIs that sit behind your application. Node.js lets you use JavaScript on the
              server, while traditional options like Java and Python remain strong for large-scale, enterprise-grade systems that need reliability and
              strong typing.
            </p>
          </div>

          {/* content -4 */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Databases</h2>
            <p>
              Databases store and organize the data your application depends on. PostgreSQL is a powerful relational database known for correctness
              and reliability. Redis is an in-memory store often used for caching, sessions, and real-time features where speed matters most.
            </p>
          </div>

          {/* content -5 */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Styling and UI</h2>
            <p>
              Styling tools shape how your app looks and feels. Tailwind CSS provides utility classes that let you build custom designs without
              leaving your markup. Other approaches include CSS-in-JS, component libraries, and traditional preprocessors like Sass.
            </p>
          </div>

          {/* content -6 */}
          <div>
            <h2 className="text-2xl font-bold mb-2">DevOps and Deployment</h2>
            <p>
              DevOps tools help you build, test, and ship software consistently. Docker packages applications into containers so they run the same
              way on every machine. Combined with CI/CD pipelines, teams can deploy multiple times a day with confidence.
            </p>
          </div>

          {/* content -7 */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Choosing the Right Stack</h2>
            <p>
              There is no single best stack. The right choice depends on your project size, your team's experience, your performance requirements,
              and how quickly you need to move. Start with tools you understand, then evolve your stack as your product grows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;