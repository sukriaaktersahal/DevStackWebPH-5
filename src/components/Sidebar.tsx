/*sidebar component*/
/*importing technology type*/
import type { Technology } from "../types";

// Props Interface
interface SidebarProps{
  stack: Technology[];
  handleRemoveFromStack:(id: string) => void;
  handleRemoveAll: () => void;
}

const Sidebar = ({stack, handleRemoveFromStack, handleRemoveAll,}: SidebarProps)=> {
  return(
    <div className="border border-gray-200 rounded-2xl p-5 bg-white h-fit lg:sticky lg:top-24">
        {/* Heading */}
        <h2 className="text-xl font-bold mb-1">Your Stack</h2>
        {/* text length */}
        <p className="text-sm text-gray-500 mb-4">
            {stack.length === 0? "No technologies selected yet.": `${stack.length} Technology Selected`}
        </p>

        {stack.length === 0?(
        <div className="border-2 border-dashed border-gray-200 rounded-xl py-10 text-center text-gray-400 text-sm">
          Your stack is empty.</div>
        ):(
        
            // removing item
            <>
             {/* items container */}
             <div className="flex flex-col gap-3">{stack.map((item)=> (
              <div key={item.id} className="flex items-center gap-3 border border-gray-100 rounded-lg p-3">
               <img src={item.icon} alt={`${item.name} logo`} className="w-8 h-8"/>

                    {/* text container */}
                    <div className="flex-grow">
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.category}</p>
                    </div>

                    {/* removing button */}
                    <button onClick={() => handleRemoveFromStack(item.id)}
                     className="text-gray-400 hover:text-red-500 text-lg transition" aria-label={`Remove ${item.name}`}>
                    ✕
                    </button>
                </div>
                ))}
            </div>

            {/* removing all button */}
            <button onClick={handleRemoveAll}
                className="w-full mt-4 py-2.5 border border-red-300 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition">
                Remove All</button>
            </>
        )}
    </div>
  );
};

export default Sidebar;