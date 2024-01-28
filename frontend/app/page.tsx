import Image from "next/image";
import slogan from "../public/Slogan.png"
import Navbar from "./(components)/navbar";



export default function Home() {
  return (
    <>
    <div><Navbar /></div>

    {/* Hero Section */}

    <div className="bg-[#EEEBEB]">
      <div className="mx-5 py-20 flex flex-col  md:flex-row md:mx-36  ">
        {/* Hero word */}
        <div className="md:w-[50%] md:flex md:flex-col justify-center md:items-center ">
          <div className="">
            <p className="text-center text-5xl font-semibold md:text-left lg:text-7xl">A <span className="text-[#FCA311]">smarter</span> way to Manage Your Inventory.</p>
            <p className="text-center text-lg pt-3 md:text-left">The best inventory software for small businesses to manage inventory, supplies, and everything else.</p>
          </div>

          {/* Hero word part two */}
          <div className="flex flex-col justify-center items-center pt- md:flex md:flex-row md:justify-items-start md:pt-3" >
            <div className="md:flex">
              <button className="bg-[#14213D]  text-white p-2 rounded-lg hover:bg-[#FCA311] hover:text-[#14213D] ">Try It Free</button>
            </div>
            <div>
              <p className="text-lg pt-2 md:ml-3">See All Plans</p>
            </div>

          </div>
        </div>
        {/* Hero Picture */}
        <div className="flex justify-center items-center md:flex md:justify-center md:items-center md:w-[50%]" >
          <img src="/hero1.png"></img>
        </div>

      </div>

    </div>

    <div className="mx-5 py-5 md:mx-36">
      <p className="text-4xl text-center font-semibold">Enjoy managing and running your business with ease.</p>
      <p className="text-center pt-3">BoxStock is an inventory management software that saves businesses time, money, and hassle. Here’s how it works:</p>
    </div>

    {/* Step 01 Section */}
    <div className="mx-5 py-5 md:mx-36">
      {/* step 01 word section */}
      <div>
        <div><p className="text-center text-xl font-semibold">Step 01</p></div>
        <div>
          <p className="text-center text-3xl font-semibold pt-5">Configure <span className="text-[#FCA311]">BoxStock</span> for your business.</p>
          <p className="text-center pt-3">Easily import your existing inventory and track all the item details that matter to you to create a full visual inventory system—with just a few clicks.</p>


        </div>


      </div>




      {/* step 01 image section */}
      <div>
        <img src="/step1.png" alt="step1" width="50%"></img>
      </div>

    </div>
  
    
  
    
    
    
    </>
  );
}
