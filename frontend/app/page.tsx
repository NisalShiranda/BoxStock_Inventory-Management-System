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
        <Image className='pt-1 w-[80%]'
          src="/hero1.png"
          width={100000}
          height={10000}
          alt="Picture of the author"
        />
        </div>

      </div>

    </div>

    <div className="mx-5 py-5 md:mx-36">
      <p className="text-4xl text-center font-semibold">Enjoy managing and running your business with ease.</p>
      <p className="text-center pt-3">BoxStock is an inventory management software that saves businesses time, money, and hassle. Here’s how it works:</p>
    </div>

    {/* Step 01 Section */}
    <div className="mx-5 py-5 md:mx-36 lg:flex lg:flex-row">
      {/* step 01 word section */}

      <div className="flex justify-center items-center lg:w-[50%]">
      <Image className='pt-1 w-[60%]'
          src="/step1.png"
          width={1000}
          height={1000}
          alt="Picture of the author"
        />
      </div>

      {/* step 01 image section */}
      <div className="lg:w-[50%] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div>
          <p className="text-center text-xl font-semibold pt-5">Step 01</p>
          </div>
        <div>
          <p className="text-center text-3xl font-semibold pt-5 lg:text-right">Configure <span className="text-[#FCA311]">BoxStock</span> for your business.</p>
          <p className="text-center pt-3 lg:text-right">Easily import your existing inventory and track all the item details that matter to you to create a full visual inventory system—with just a few clicks.</p>
        </div>
      </div>
    </div>

  {/* Step 02 Section */}
  <div className="mx-5 py-5 md:mx-36 lg:flex lg:flex-row">
      {/* step 02 word section */}
      <div className="lg:w-[50%] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div>
          <p className="text-center text-xl font-semibold pt-5">Step 02</p>
          </div>
        <div>
          <p className="text-center text-3xl font-semibold pt-5 lg:text-left">Manage Your <span className="text-[#FCA311]">Business’s</span> Inventory, Assets, Parts, and more.</p>
          <p className="text-center pt-3 lg:text-left">Add new items, update locations and quantities and set low stock alerts to remind you to re-order.</p>
        </div>
      </div>

      {/* step 02 image section */}
      <div className="flex justify-center items-center lg:w-[50%]">
      <Image className='pt-1 w-[80%]'
          src="/step1.png"
          width={10000}
          height={10000}
          alt="Picture of the author"
        />
      </div>
      
    </div>

    {/* Step 03 Section */}
    <div className="mx-5 py-5 md:mx-36 lg:flex lg:flex-row">
      {/* step 01 word section */}

      <div className="flex justify-center items-center lg:w-[50%]">
        <img className="w-[50%]"src="hero1.png"></img>
      </div>

      {/* step 01 image section */}
      <div className="lg:w-[50%] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div>
          <p className="text-center text-xl font-semibold pt-5">Step 03</p>
          </div>
        <div>
          <p className="text-center text-3xl font-semibold pt-5 lg:text-right">Collaborate <span className="text-[#FCA311]">With Your</span> Team.</p>
          <p className="text-center pt-3 lg:text-right">Thanks to cloud-based automatic syncing, your team can make inventory updates from any device—in the office, in the field, anywhere. Advanced user permissions allow you to control who has access to what.
          </p>
        </div>
      </div>
    </div>

    {/* Step 04 Section */}

    <div className="mx-5 py-5 md:mx-36 lg:flex lg:flex-row">
      {/* step 02 word section */}
      <div className="lg:w-[50%] lg:flex lg:flex-col lg:justify-center lg:items-center">
        <div>
          <p className="text-center text-xl font-semibold pt-5">Step 04</p>
          </div>
        <div>
          <p className="text-center text-3xl font-semibold pt-5 lg:text-left">Gather <span className="text-[#FCA311]">powerful</span> reporting insights.</p>
          <p className="text-center pt-3 lg:text-left">Generate, export, and print inventory reports in BoxStock to help you re-order stock, monitor transactions, and better understand your business.</p>
        </div>
      </div>

      {/* step 02 image section */}
      <div className="flex justify-center items-center lg:w-[50%]">
        <img className="w-[50%]"src="hero1.png"></img>
      </div>
      
    </div>

    {/* end of step section */}

    {/* start feature section */}

    <div className="bg-[#EEEBEB]">
      <div className="mx-5 py-10 md:mx-36">
        <div>
          <p className="text-center text-4xl font-semibold">BoxStock Features</p>
        </div>
      </div>

      <div className=" mx-5 py-5 md:mx-36 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 ">

        <div>
          <div className="bg-[#FCA311] rounded-full w-20 h-20 flex justify-center items-center text-center">
            <img src="/file4.png"></img>
            </div>
        </div>
        <div className="bg-blue-500">2</div>
        <div className="bg-blue-500">3</div>
        <div className="bg-blue-500">4</div>
        <div className="bg-blue-500">5</div>
        <div className="bg-blue-500">6</div>
        <div className="bg-blue-500">7</div>
        <div className="bg-blue-500">8</div>
        



      </div>


    </div>



  
    
  
    
    
    
    </>
  );
}
