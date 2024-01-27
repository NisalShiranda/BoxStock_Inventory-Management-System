import Image from "next/image";
import slogan from "../public/Slogan.png"
import Navbar from "./(components)/navbar";


export default function Home() {
  return (
    <>
    <div><Navbar /></div>
  
    <div className=" bg-[#EEEBEB]  ">
      <div className="md:flex md:flex-row mx-[200px] py-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-6xl font-semibold ">A Smarter Way To Manage Your Inventory.</div>
          <div className="pt-2">The best inventory software for small businesses to manage 
                inventory, supplies, and everything else.
          </div>
        </div>
        <div>
        <Image className=''
          src="/hero1.png"
          width={800}
          height={800}
          alt="Picture of the author"
        />
        </div>

      </div>

    </div>
    
    
    
    
    
    </>
  );
}
