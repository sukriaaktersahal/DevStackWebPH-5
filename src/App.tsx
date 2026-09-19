// app component placeholder
// importing Navbar
// importing Hero

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* navbar for all pages */}
      <Navbar />
      {/* hero banner */}
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <p className="text-gray-500 text-sm">Technologies section coming soon.</p>
      </div>
    </div>
  );
}

export default App;