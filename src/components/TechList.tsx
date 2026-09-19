// techlist component
// import technology
// import techcard component
import type { Technology } from "../types";
import TechCard from "./TechCard";

// props interface
interface TechListProps{
  technologies: Technology[];
  stack: Technology[];
  handleAddToStack:(tech: Technology)=> void;
}

// grid container
const TechList =({technologies, stack, handleAddToStack}: TechListProps)=> {
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* converting technology to techcard */}
        {technologies.map((tech)=> (<TechCard key={tech.id} tech={tech} stack={stack} handleAddToStack={handleAddToStack}/>))}
    </div>
  );
};

export default TechList;