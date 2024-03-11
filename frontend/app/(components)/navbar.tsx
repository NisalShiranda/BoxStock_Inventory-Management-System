'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'





function Navbar() {
  return (
    <>
        <div className=" bg-white py-1  min-[860px]:flex min-[860px]:justify-between text-center min-[860px]:items-center md:mx-10 ">
        <div className="flex justify-center">
        <Image className='pt-1'
          src="/Slogan.png"
          width={150}
          height={150}
          alt="Picture of the author"
        />
        </div>
        <div>
            <ul className=" justify-center text-center py-1 cursor-pointer  min-[860px]:flex flex-row md:space-x-5">
                <li className="text-sm py-1 hover:text-[#FCA311] duration-300  "><Link href={"/"}>Product Tour</Link>Tour</li>
                <li className="text-sm py-1 hover:text-[#FCA311] duration-300"><Link href={"/"}>Pricing</Link></li>
                <li className="text-sm py-1 hover:text-[#FCA311] duration-300"><Link href={"/IndustryPage"}>Industries</Link></li>
                <li className="text-sm py-1 hover:text-[#FCA311] duration-300"><Link href={"/ResourcePage"}>Resources</Link></li>
                <li className="text-sm py-1 hover:text-[#FCA311] duration-300"><Link href={"/"}>Home</Link></li>
            </ul>
        </div>

        <div>
            <ul className=" justify-center text-center cursor-pointer min-[860px]:flex flex-row md:space-x-5">
                <li className="text-sm pt-3 flex justify-center hover:text-[#FCA311] duration-300">
                  
                  <Link href="/Login">Log In</Link>

                </li>
                <li className="text-sm py-1 flex justify-center"><button className="bg-[#14213D]  text-white p-2 rounded-lg hover:bg-[#FCA311] hover:text-[#14213D]">
                Try It Free
                </button></li>
            </ul>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Navbar
