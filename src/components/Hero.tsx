// hero component
// importing image for hero
import heroImg from "../assets/hero.png";

const Hero =() =>{
  return(
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* grid layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* left column ---- text, button */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build Your Ideal 
            <br />
            <span className="text-brand-gradient"> Development Stack </span>
          </h1>

          {/* text */}
          <p className="text-gray-600 mt-6 text-lg max-w-lg">
            Explore frontend, backend, database, and tooling options,compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* button container */}
          <div className="flex gap-4 mt-8">
            <button className="brand-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"> Explore Technologies </button>
            <button className="border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-pink-500 transition"> Learn More </button>
          </div>
        </div>

        {/* right column - here hero image will be kept */}
        <div className="flex justify-center">
          <img src={heroImg} alt="Isometric illustration of a development stack with layered technologies" className="w-full max-w-md"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;