import Image from "next/image";
import slogan from "../public/Slogan.png"
import Navbar from "./(components)/navbar";


export default function Home() {
  return (
    <>
    <div><Navbar /></div>
  
    <div className=" bg-[#EEEBEB] ">
      <div className="py-5 mx-6 md:flex flex-row md:justify-center md:items-center md:mx-[200px]">
        <div className="">
          <div className="md:flex justify-center items-center">
            <p className="text-center text-4xl font-semibold md:text-left md:text-6xl">A <span className="text-[#FCA311] ">Smarter </span>Way To Manage Your Inventory</p>
          </div>
          <div>
            <p className="text-center pt-3 text-sm md:text-left">The best inventory software for small businesses to manage 
            inventory, supplies, and everything else.</p>
          </div>
          <div className="pt-3 flex flex-col md:flex md:flex-row ">
            <div className="flex justify-center">
              <button className="bg-[#14213D]  text-white p-2 rounded-lg hover:bg-[#FCA311] hover:text-[#14213D] text-sm">Try It Free</button>
            </div>
            <div className="flex justify-center pt-2 text">
              <p className="text-sm underline decoration-solid md:ml-5">See All Plans</p>
            </div>
            
          </div>
        </div>
        <div className="flex justify-center ">
          <img className="w-[1000px] "src="/hero1.png"></img>
        
        
        

        </div>
      </div>
      

    </div>
    
    
    
    
    
    </>
  );
}
