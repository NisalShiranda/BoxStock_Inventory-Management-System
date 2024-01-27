import React from 'react'

function navbar() {
  return (
    <>
    <div className=" bg-white py-3  md:flex md:justify-between md:text-center md:items-center md:mx-10 ">
        <div className="flex justify-center">
            <img className="w-40" src="../images/Slogan.png"></img>
        </div>
        <div>
            <ul className=" justify-center text-center py-3 cursor-pointer  md:flex flex-row md:space-x-5">
                <li className="text-md py-3 hover:text-[#FCA311] duration-300 ">Product Tour</li>
                <li className="text-md py-3 hover:text-[#FCA311] duration-300">Pricing</li>
                <li className="text-md py-3 hover:text-[#FCA311] duration-300">Industries</li>
                <li className="text-md py-3 hover:text-[#FCA311] duration-300">Resources</li>
                <li className="text-md py-3 hover:text-[#FCA311] duration-300">Home</li>
            </ul>
        </div>

        <div>
            <ul className=" justify-center text-center cursor-pointer md:flex flex-row md:space-x-5">
                <li className="text-md py-3 hover:text-[#FCA311] duration-300">Log In</li>
                <li className="text-md py-1 flex justify-center"><button className="bg-[#14213D]  text-white p-2 rounded-lg hover:bg-[#FCA311] hover:text-[#14213D]">Try It Free</button></li>
            </ul>
        </div>
    </div>
    
    
    
    
    </>
  )
}

export default navbar
