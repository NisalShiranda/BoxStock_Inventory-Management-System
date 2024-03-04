import Image from 'next/image';
import logo from '../BoxStock.png';
import line from '../Line 1.png'
import google from '../google.png'
import ios from '../ios.png'
import Link from 'next/link';
import show from './show.png'



const Login = () => {
  return (
    <div className="flex  flex-col w-full h-[100vh] bg-red-200 fixed">
      
              <div className="flex justify-center items-center ">
                <div className="items-center justify-center flex flex-col m-[80px] w-[500px] pl-2 border-[2px] border-red-100 border-solid rounded-[25px] bg-[#ECECEC]">
                  <form action='' className="p-1 pl-0 leading-normal " >
                 
                 
                    <div className="flex justify-center">
                      <Image className=' flex flex-col mt-3 items-center pl-[50px]'
                        src={logo}
                        width={250}
                        height={250}
                        alt="Picture"
                      />
                    
                 

                    </div>

                  
                  {/* text box created */}

                  <div className="flex flex-col items-center pl-0 m-4 p-2">
                    <div className="w-[400px] flex border border-black rounded-[15px] bg-white pl-6">
                      <p className="text-[16px]  text-black p-1 m-1"> Access and manage your instances from <br/> <span className="pl-20"> this BoxStock account.</span></p>
                    </div>
                  </div>
                  


                  <div className="w-[500px] flex flex-col pr-6 m-3 relative ">
                      
                      <div className="flex flex-col">
                          <label className="font-bold text-xl text-[#14213D] ml-8">Your Email</label>
                          <input type="text" placeholder='Email' required className="rounded-[10px] mt-2 ml-8 border border-[#FCA311] p-4 text-sm "/>

                          <label className="font-bold text-xl text-[#14213D] ml-8 mt-4">Your Name</label>
                          <input type="text" placeholder='Eg. John Doe' required className="rounded-[10px] mt-2 ml-8 border border-[#FCA311] p-4 text-sm "/>
                    
                          <label  className="font-bold text-xl text-[#14213D] mt-5 ml-8 ">Password</label>
                          <div className="flex ml-8 mt-2 outline-none rounded-[10px] gap-[320px] border border-[#FCA311] bg-white">
                            <input type="password" placeholder='Password' required className="w-[400px] m-1 p-4 text-sm outline-none"/>
                            <Image src={show}
                              width={80}
                              height={30}
                              alt='show logo'
                              className="-ml-[200px]"/>
                            

                          </div>
                          

                      </div>


                      <div className="text-center justify-center flex p-4 mt-5">
                       <button className="flex bg-[#14213D] p-3 ml-6 rounded-lg w-[600px] text-2xl text-[#FCA311] items-center justify-center font-extrabold">SIGN UP</button>
                      </div>



                  </div>

                


                  
                  
                  <div className="ml-[60px] items-center justify-center">
                  <Image className='mt-2 leading-3'
                    src={line}
                    width={400}
                    height={100}
                    alt="Line icon"
                  />
                  </div>


                 

                  <div className="flex items-center justify-center flex-row gap-5 mt-2 pt-4 pb-5">
                      <h3>Already have an account?</h3>
                      <Link href="/Login">Sign In</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
 
  )
}
    
    

export default Login

