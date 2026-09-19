// app component placeholder
// importing Navbar,hero, mainlayout, footer, react hooks,technology.....
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Technology } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";

function App() {
  /*technology*/
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  /*stack*/
  const [stack, setStack] = useState<Technology[]>([]);
  /*loading*/
  const [loading, setLoading] = useState(true);
  /*useeffect to datafetch*/
  useEffect(()=>{
    const loadData = async() =>{
      try {
        const response = await fetch("/data.json");
        /*is responsive or not? */
        if(!response.ok){
          throw new Error("Failed to load data");
        }

        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (error) {
        /*if error happens*/
        console.error("Failed to load data:", error);
        toast.error("Failed to load technologies. Please refresh.");
      } finally {
        /*stop loading*/
        setLoading(false);
      }
    };

    loadData();
  }, 
  []);
  
  /*handling add to stock*/
  const handleAddToStack = (tech: Technology) => {
    /*is there duplicate?*/
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);
    if(isAlreadyAdded){
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    /*not duplicate, thenn add to stack*/
    setStack((prev) => [...prev, tech]);

    /*if sucessfully added*/
    toast.success(`${tech.name} added to your stack!`);
  };

  /*handling remove from stack*/
  const handleRemoveFromStack = (id: string) =>{
    setStack((prev)=> prev.filter((item)=> item.id !== id));
    toast.info("Technology removed from stack!");
  };

  /*handling remove all*/
  const handleRemoveAll =() =>{
    setStack([]);
    toast.error("All technologies removed!");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {loading?(
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
        </div>
      ):(
        /* main layout content*/
        <MainLayout technologies={technologies} stack={stack} handleAddToStack={handleAddToStack}
          handleRemoveFromStack={handleRemoveFromStack} handleRemoveAll={handleRemoveAll}/>
      )}

      {/*footer  */}
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;