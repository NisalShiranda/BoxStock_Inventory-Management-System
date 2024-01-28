'use client'
import React from 'react'
import Image from 'next/image'


function Footer() {
  return (
    <>
    <div className="bg-[#EEEBEB]">
      <div className="mx-5 py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 justify-items-center">
          <div>
            <div className="flex justify-center items-center">
            <Image className='w-20 flex justify-center items-center'
              src= "/BoxStock.png"
              width={1000}
              height={1000}
              alt="Picture"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 pt-10">
              <div className="flex justify-center items-center"><Image className='w-10 flex justify-center items-center'
              src= "/fb.png"
              width={1000}
              height={1000}
              alt="Picture"
              /></div>
              <div className="flex justify-center items-center"><Image className='w-10 flex justify-center items-center'
              src= "/in.png"
              width={1000}
              height={1000}
              alt="Picture"
              /></div>
              <div className="flex justify-center items-center"><Image className='w-10 flex justify-center items-center'
              src= "/yt.png"
              width={1000}
              height={1000}
              alt="Picture"
              /></div>
              <div className="flex justify-center items-center"><Image className='w-10 flex justify-center items-center'
              src= "/tw.png"
              width={1000}
              height={1000}
              alt="Picture"
              /></div>
            </div>
          </div>

          <div className="">
            <p className="text-center font-bold">Pricing</p>
            <div className="pt-5 text-center text-sm">
              <p className="pt-2">Free</p>
              <p className="pt-2">Advanced</p>
              <p className="pt-2">Ultra</p>
              <p className="pt-2">Customize</p>
            </div>
          </div>

          <div>
          <p className="text-center font-bold">Industries</p>
            <div className="pt-5 text-center text-sm">
              <p className="pt-2">Construction</p>
              <p className="pt-2">Medical</p>
              <p className="pt-2">Warehouse</p>
              <p className="pt-2">Other...</p>
            </div>
          </div>


          <div>
          <p className="text-center font-bold">Resources</p>
            <div className="pt-5 text-center text-sm">
              <p className="pt-2">Blogs</p>
              <p className="pt-2">About Us</p>
              <p className="pt-2">Contact Us</p>
              
            </div>

          </div>
        </div>
        <p className="pt-10 text-center text-sm font-mono">©2024 BoxStock Inc. All rights reserved. All other logos and trademarks are the property of their respective owners.</p>
      </div>
      
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Footer