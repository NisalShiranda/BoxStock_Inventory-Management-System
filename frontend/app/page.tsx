import Image from "next/image";
import slogan from "../public/Slogan.png"

export default function Home() {
  return (
    <>
    <div className=" bg-white py-3  min-[860px]:flex min-[860px]:justify-between text-center min-[860px]:items-center md:mx-10 ">
        <div className="flex justify-center">
        <Image
          src={slogan}
          width={150}
          height={150}
          alt="Picture of the author"
        />
        </div>
        <div>
            <ul className=" justify-center text-center py-3 cursor-pointer  min-[860px]:flex flex-row md:space-x-5">
                <li className="text-md py-3 hover:text-[#FCA311] duration-300 ">Product Tour</li>
                <li className="text-md py-3 hover:text-[#FCA311] duration-300">Pricing</li>
                <li className="text-md py-3 hover:text-[#FCA311] duration-300">Industries</li>
                <li className="text-md py-3 hover:text-[#FCA311] duration-300">Resources</li>
                <li className="text-md py-3 hover:text-[#FCA311] duration-300">Home</li>
            </ul>
        </div>

        <div>
            <ul className=" justify-center text-center cursor-pointer min-[860px]:flex flex-row md:space-x-5">
                <li className="text-md py-3 hover:text-[#FCA311] duration-300">Log In</li>
                <li className="text-md py-1 flex justify-center"><button className="bg-[#14213D]  text-white p-2 rounded-lg hover:bg-[#FCA311] hover:text-[#14213D]">Try It Free</button></li>
            </ul>
        </div>
    </div>
    
    
    
    </>
  );
}
