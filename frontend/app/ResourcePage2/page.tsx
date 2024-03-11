import Image from "next/image";
import Navbar from "../(components)/navbar";
import Footer from "../(components)/footer";
import res2 from '../unsplash.jpg';
import Link from "next/link";
export default function page1() {
  return (
 <>
<div className= "">
        <div><Navbar/></div>
    
  <div className="mt-20 text-center grid ">
    <p className="items-center text-5xl font-semibold">How to Keep Track of <span className="text-orange-300 underline">Equipment <br/> Maintenance</span></p>
  </div>
    <div className='grid  mt-10'>
    
              <Image className='justify-self-center px-10'
                                src={res2}
                                width={750}
                                height={450}
                                alt="Picture"
              />
               
  <div className='w-9/12 justify-self-center text-lg text-justify grid gap-y-2 mt-5'>
        <p className="">If your business maintains equipment inventory, it understands the importance of tracking maintenance on these assets. From scheduling preventive maintenance to recording emergency repairs, keeping records of the service performed on your assets is essential. By adequately tracking equipment maintenance, your business will better understand its assets’ 
                         lifecycles and extend each piece of equipment’s useful life by keeping better tabs on key maintenance dates.  </p>
        <p> This article will reveal how to keep track of equipment maintenance in three general steps. We’ll also provide a free, downloadable equipment maintenance log that’s yours to customize. This log can be used to track equipment maintenance right away but is best used in conjunction with software that provides a digital record of past service—and reminds you when key dates are around the corner, too.</p>
        
     <div>
      <p className="font-semibold pb-2">Create a legally binding contract</p>
      <p>As we’ve mentioned, a PO is an official contract enforceable by law. This matters because most buyers do not pay on receipt and instead rely on more favorable, delayed invoice payment terms. </p>
      <p>Fortunately for sellers, a PO creates real protection since the document ensures they’ll be paid per the terms listed on the purchase order. And if for some reason payment to the seller is withheld, the PO provides grounds for legal action. </p>
     </div>



 
 <div className="text-right my-7 text-gray-500 hover:text-orange-500 hover:font-semibold"><Link href='/ResourcePage'>Previous Page</Link></div>
  </div>
  </div>
        <div> <Footer/> </div>
  </div>
</> 
 )
}
