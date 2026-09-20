// footer component
// importing social icon from react icons
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer =() =>{
  return(
    <footer className="border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="brand-gradient text-white font-bold w-9 h-9 rounded-lg flex items-center justify-center">
                DS</div>
                 <span className="font-bold text-lg"> Dev<span className="text-brand-gradient">Stack</span></span>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

                <div className="flex gap-3 text-gray-600 text-xl">
                    <a href="#" aria-label="GitHub"><FiGithub /></a>
                    <a href="#" aria-label="Twitter"><FiTwitter /></a>
                    <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
                </div>
          </div>

          {/* product column */}
          <div>
            <h4 className="font-bold mb-3 text-sm tracking-wide">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-pink-600">Home</a></li>
              <li><a href="#" className="hover:text-pink-600">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-600">Projects</a></li>
            </ul>
          </div>

          {/* company column */}
          <div>
            <h4 className="font-bold mb-3 text-sm tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-pink-600">About</a></li>
              <li><a href="#" className="hover:text-pink-600">Contact</a></li>
              <li><a href="#" className="hover:text-pink-600">Careers</a></li>
            </ul>
          </div>

          {/* legal column */}
          <div>
            <h4 className="font-bold mb-3 text-sm tracking-wide">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© 2026 DevStack. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-pink-600">Privacy</a>
            <a href="#" className="hover:text-pink-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;