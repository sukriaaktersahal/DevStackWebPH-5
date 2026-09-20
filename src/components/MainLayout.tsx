// Main Layout
// importing technology, techlist, sidebar
import type { Technology } from "../types";
import TechList from "./TechList";
import Sidebar from "./Sidebar";

// Main layout props interface
interface MainLayoutProps{
  technologies: Technology[];
  stack: Technology[];
  handleAddToStack: (tech: Technology)=> void;
  handleRemoveFromStack: (id: string)=> void;
  handleRemoveAll:() => void;
}

const MainLayout =({technologies, stack, handleAddToStack, handleRemoveFromStack, handleRemoveAll,}: MainLayoutProps) =>{
  return(
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Explore the <span className="text-brand-gradient">Technologies</span></h2>
      <p className="text-gray-600 mb-8">Pick one technology per category to build your ideal stack.</p>

      {/* techlist with sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow"><TechList technologies={technologies} stack={stack} handleAddToStack={handleAddToStack}/></div>
        <div className="lg:w-80">
          <Sidebar stack={stack} handleRemoveFromStack={handleRemoveFromStack} handleRemoveAll={handleRemoveAll}/>
        </div>
      </div>
    </section>
  );
};

export default MainLayout;