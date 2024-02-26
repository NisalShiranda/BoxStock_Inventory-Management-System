import Image from 'next/image';
import logo from '../BoxStock.png';
import line from '../Line 1.png'
import google from '../google.png'
import ios from '../ios.png'
import Link from 'next/link';

const page = () => {
  return (
    <div className='loginForm'>
      <form action=''>

        <Image className=' flex justify-center items-center'
          src={logo}
          width={250}
          height={250}
          alt="Picture"
        />


        <div className="text-2xl">
           <p> Access and manage your instances from this BoxStock account.</p>
        </div>


        <div className="signDetails grid">
            
            <div className="input-box grid">
                <label className='label'>Email</label>
                <input type="text" placeholder='Email' required/>
          
                <label className='label'>Password</label>
                <input type="password" placeholder='Password' required/>
            </div>



        </div>


        
        
        <div className="">
        <Image className='pt-1'
          src={line}
          width={50}
          height={50}
          alt="Line icon"
        />
        </div>
        <h3>Easy Sign In</h3>

        <div className="flex justify-center">
          <Image className='pt-1'
            src={google}
            width={80}
            height={80}
            alt="Google icon"
          />

          <Image className=''import Image from 'next/image';
import logo from '../BoxStock.png';
import bg from './bg.png';
import show from './show.png'
import line from '../Line 1.png'
import google from '../google.png'
import ios from '../ios.png'
import Link from 'next/link';




const Login = () => {
  return (
    <div className="flex  flex-col w-full h-[100vh] bg-red-200">
      
      
          
              <div className="flex justify-center items-center ">
                <div className="items-center justify-center flex flex-col m-[80px] w-[500px] pl-2 border-[2px] border-red-100 border-solid rounded-[25px] bg-[#ECECEC]">
                  <form action='' className="p-8 pl-0 leading-normal " >
                 
                 
                    <div className="flex justify-center">
                      <Image className=' flex flex-col  items-center pl-[50px]'
                        src={logo}
                        width={250}
                        height={250}
                        alt="Picture"
                      />
                    
                 

                    </div>

                  

                  <div className="flex flex-col items-center pl-5 m-3">
                    <div className="w-[400px] flex border border-black rounded-[15px] bg-white pl-4">
                      <p className="text-[14px]  text-black p-1 m-3"> Access and manage your instances from this BoxStock account.</p>
                    </div>
                  </div>
                  


                  <div className="w-[500px] flex flex-col p-4 m-4 relative ">
                      
                      <div className="flex flex-col">
                          <label className="font-bold text-xl text-[#14213D] ml-8">Email</label>
                          <input type="text" placeholder='Email' required className="rounded-[10px] mt-3 ml-8 border border-[#FCA311] p-5 text-sm "/>
                    
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
                       <button className="flex bg-[#14213D] p-3 ml-5 rounded-lg w-[600px] text-2xl text-[#FCA311] items-center justify-center font-extrabold">SIGN IN</button>
                      </div>



                  </div>

                


                  
                  
                  <div className="ml-[70px] items-center justify-center">
                  <Image className='mt-2 leading-3'
                    src={line}
                    width={400}
                    height={100}
                    alt="Line icon"
                  />
                  </div>
                  <h3 className=" flex text-black text-sm justify-center items-center leading-9">Easy Sign In</h3>

                  <div className="flex justify-center">
                    <Image className="text-center justify-center flex text-2xl"
                      src={google}
                      width={80}
                      height={80}
                      alt="Google icon"
                    />

                    <Image className=''
                      src={ios}
                      width={80}
                      height={80}
                      alt="IOS icon"
                    />
                  </div>

                  <div className="flex items-center justify-center flex-row gap-5">
                      <h3>First time on BoxStock?</h3>
                      <Link href="/SignUp">Sign Up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
 
  )
}
    
    

export default Login


            src={ios}
            width={80}
            height={80}
            alt="IOS icon"
          />
        </div>

        <div className="bottom flex">
            <h3>First time on BoxStock?</h3>
            <Link href="/SignUp">Sign Up</Link>
        </div>
      </form>
    </div>
  )
}



export default page
