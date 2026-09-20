// navbar component
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar =() =>{
    // mobile menu open or not?
  const [isOpen, setIsOpen] = useState(false);

  return(
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        {/* content on center */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* left logo, brand name */}
          <div className="flex items-center gap-2">
            <div className="brand-gradient text-white font-bold w-9 h-9 rounded-lg flex items-center justify-center">DS</div>
                 <span className="font-bold text-xl">Dev<span className="text-brand-gradient">Stack</span></span>
          </div>

          {/* nav link -- only for desktop */}
          <div className="hidden md:flex gap-8 text-gray-700">
            <a href="#" className="hover:text-pink-600 font-medium">Home</a>
            <a href="#" className="hover:text-pink-600 font-medium">Technologies</a>
            <a href="#" className="hover:text-pink-600 font-medium">Projects</a>
            <a href="#" className="hover:text-pink-600 font-medium">About</a>
            <a href="#" className="hover:text-pink-600 font-medium">Contact</a>
          </div>

          {/* right button for desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-700 font-medium hover:text-pink-600">Sign In</button>
            <button className="brand-gradient text-white px-5 py-2 rounded-full font-medium">Sign Up</button>
          </div>

          {/* humberger icon --- only for mobile */}
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {/* if isOpen true */}
            {isOpen? <FiX /> :<FiMenu />}
          </button>
        </div>

        {/* mobile menu (when isOpen true) */}
        {isOpen &&(
          <div className="md:hidden py-4 flex flex-col gap-3 border-t">
            <a href="#" className="py-2">Home</a>
            <a href="#" className="py-2">Technologies</a>
            <a href="#" className="py-2">Projects</a>
            <a href="#" className="py-2">About</a>
            <a href="#" className="py-2">Contact</a>
            <div className="flex gap-3 pt-3">
                {/* button for sign in /sign up */}
              <button className="flex-1 border rounded-full py-2">Sign In</button>
              <button className="flex-1 brand-gradient text-white rounded-full py-2">Sign Up</button>
            </div>
          </div>
        )
        }
      </div>
    </nav>
  );
};

export default Navbar;