import Image from "next/image";
import Navbar from "../(components)/navbar";
import Footer from "../(components)/footer";
import res1 from '../R1.png';
import res2 from '../R2.png';
import res3 from '../R3.png';
import res4 from '../R4.png';
import Link from "next/link";
export default function page() {
  return (
    <>
    <div>
    <div><Navbar/></div>
            <div className="mt-10 text-center px-3 ">
                <p className="items-center  font-semibold text-3xl lg:text-5xl md:text-5xl ">Our  <span className="text-orange-400 underline">Inventory Management </span><br/>Resource Center</p>
            </div>
<br /> <br/>

    
    
    <div className=" w-9/12 justify-items-center mx-auto my-8 grid grid-cols-1 lg:grid-cols-2   place-content-center gap-y-10">
       
        <div className="rounded-t-3xl rounded-b-3xl justify-self-center">
                <div><Image className=''
                                src={res1}
                                width={350}
                                height={250}
                                alt="Picture"
                                    />
                </div>
        <div className="my-3 font-semibold text-xl lg:text-2xl hover:underline decoration-blue-400 "><Link href="/ResourcePage1"><p className="max-w-96 " >How to Create a Purchase Order</p></Link></div>
        <div className="mb-2"><button className="bg-blue-900 rounded-2xl px-5 py-2 text-white font-semibold hover:border-2 hover:border-blue-300  hover:underline ">New</button></div>
        <div className="text-gray-500 text-sm items-center">
        
            January 24,2024 . 5 Min Read
        </div>
        
        
        </div>

        

        <div className="rounded-t-3xl rounded-b-3xl  justify-self-center">
                <div><Image className=''
                                src={res2}
                                width={350}
                                height={250}
                                alt="Picture"
                                    />
                </div>
            <div className="my-3 font-semibold text-xl lg:text-2xl hover:underline decoration-blue-400 "><Link href="/ResourcePage2"><p className="max-w-96 " >How to Keep Track of Equipment Maintenance</p></Link></div>
            <div className="mb-2"><button className="bg-blue-900 rounded-2xl px-5 py-2 text-white font-semibold hover:border-2 hover:border-blue-300  hover:underline ">New</button></div>
             <div className="text-gray-500 text-sm items-center">
        
                January 24,2024 . 5 Min Read
            </div>       
        
        </div>


            <div className="rounded-t-3xl rounded-b-3xl justify-self-center">
                <div><Image className=''
                                src={res3}
                                width={350}
                                height={250}
                                alt="Picture"
                                    />
                </div>
            <div className="my-3 font-semibold text-xl lg:text-2xl hover:underline decoration-blue-400 "><Link href="/ResourcePage3"><p className="max-w-96 " >How to Calculate Raw Materials Inventory</p></Link></div>
            <div className="mb-2"><button className="bg-blue-900 rounded-2xl px-5 py-2 text-white font-semibold hover:border-2 hover:border-blue-300 hover:underline ">New</button></div>
            <div className="text-gray-500 text-sm items-center">
                 January 24,2024 . 5 Min Read
           </div>       
        
         </div>
        <div className="rounded-t-3xl rounded-b-3xl ">
                <div><Image className=''
                                src={res4}
                                width={350}
                                height={250}
                                alt="Picture"
                                    />
                </div>

    
            <div className="my-3 font-semibold text-xl lg:text-2xl  hover:underline decoration-blue-400 "><Link href="/ResourcePage4"><p className="max-w-96 " >How To Liquidate Excess Inventory</p></Link></div>
            <div className="mb-2"><button className="bg-blue-900 rounded-2xl px-5 py-2 text-white font-semibold hover:border-2 hover:border-blue-300  hover:underline ">New</button></div>
            <div className="text-gray-500 text-sm items-center">
        
                     January 24,2024 . 5 Min Read
             </div>       
       
        </div>



    </div>
    <div> <Footer/> </div>
    </div>
    </>
  )
}
