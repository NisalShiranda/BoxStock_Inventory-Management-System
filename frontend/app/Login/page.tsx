import Image from 'next/image';
import logo from '../BoxStock.png';
import line from '../Line 1.png'
import google from '../google.png'
import ios from '../ios.png'
import Link from 'next/link';




const Login = () => {
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

          <Image className=''
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

export default Login

