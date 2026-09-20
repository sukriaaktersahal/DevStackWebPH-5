// techcard component
// importing technology type
import type { Technology } from "../types";

// techcardprops interface
interface TechCardProps{
  tech: Technology;
  stack: Technology[];
  handleAddToStack:(tech: Technology)=> void;
}

// destructuring techCard
const TechCard =({tech, stack, handleAddToStack }: TechCardProps) =>{
    // is tech in stack?toprevent duplication 
    const isAdded = stack.some((item) => item.id === tech.id);

    // card container
    return(
    <div className="border border-gray-200 rounded-2xl p-5 bg-white hover:shadow-lg transition-shadow flex flex-col h-full">
        {/* here, icon will be on left, batch on right */}
        <div className="flex items-center justify-between mb-4">
        <img src={tech.icon} alt={`${tech.name} logo`} className="w-10 h-10"/>
        <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">{tech.badge}</span>
        </div>

        {/* technology name,description*/}
        <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{tech.description}</p>

        {/* chips, ratings */}
        <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">{tech.category}</span>
            <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">{tech.difficulty}</span>
            <span className="text-xs px-2 py-1 rounded-md text-yellow-600 font-semibold ml-auto"> ★ {tech.rating}</span>
        </div>

        {/* button */}
        <button onClick={() => handleAddToStack(tech)} disabled={isAdded}
            className={`w-full py-2.5 rounded-lg font-semibold transition ${
                isAdded? "bg-green-100 text-green-700 cursor-not-allowed": "bg-gray-900 text-white hover:bg-gray-800"}`}>
        {/* if isAdded true then "Added to Stack" */}
        {isAdded? "Added to Stack" : "Add to Stack"}
        </button>
    </div>
  );
};

export default TechCard;