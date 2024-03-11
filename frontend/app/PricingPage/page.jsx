import Image from "next/image";
import Navbar from "../(components)/navbar";
import Footer from "../(components)/footer";
import res1 from '../paperplane.png';

import Link from "next/link";
export default function page() {
  return (
    <>
    <div>
    <div><Navbar/></div>
            <div className="mt-10 text-center px-3 ">
                <p className="items-center  font-semibold text-3xl lg:text-5xl md:text-5xl ">Start Your 30-Day  <span className="text-orange-400 underline">Free Trial</span> Today.</p>
            </div>
            <div className="mt-3 mb-4 px-3 text-center text-gray-600 text-semibold">
                <p>Transform how your business does inventory with our powerful, easy-to-use solution. Find the right Sortly plan for you.
</p>
            </div>
<div className="text-xl font-semibold w-6/12 h-12 mx-auto min-w-70 bg-blue-900 flex max-w-80 rounded-3xl md:w-4/12 tablet:1/5 md:max-w-80">
<div className="w-1/2 grid place-items-center text-white hover:border-2 hover:rounded-3xl hover:border-blue-400"><button className="">Monthly</button></div>
<div className="w-1/2 bg-gray-300 rounded-3xl grid place-items-center hover:border-2 hover:rounded-3xl hover:border-blue-400"><button>Yearly</button></div>
</div>
<div className="  mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4 px-0">
  <div className="grid bg-gray-300 rounded-3xl px-0 max-w-96 min-w-60">
  
          <div className="justify-self-center"><Image className=''
                                src={res1}
                                width={140}
                                height={135}
                                alt="Picture"
                                    />
          </div>
    <span className="text-3xl justify-self-center mt-3 font-semibold">Free</span>
    <span className="justify-self-center text-xl mt-2 text-center">Best for personal use </span>
    <span className="justify-self-center text-6xl font-semibold mt-8">$0</span>
    <span className="justify-self-center font-semibold mt-1">USD/mo*</span>
    
    </div>


   
</div>



    <div> <Footer/> </div>
    </div>
    </>
  )
}
