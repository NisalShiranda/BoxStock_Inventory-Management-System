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
                <p className="items-center  font-semibold text-3xl lg:text-5xl md:text-5xl ">Inventory Management <span className="text-orange-400 underline">That Fits </span><br/>Your Business</p>
            </div>
            <div className="mt-3 px-3 text-center text-gray-600 text-semibold">
                <p>BoxStock provides inventory management for any industry.</p><p>Explore relevant features for your business needs.</p>
            </div>

<div className="w-9/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
<div>
    <Link href="/" >
    <div  className="m-auto w-60 h-60 grid place-items-center rounded-3xl bg-image1 hover:border-2 hover:border-blue-500">
        <p className="text-2xl text-semibold text-white hover:border-2 hover:border-blue-500 hover:rounded-3xl hover:p-1">Wholesale</p>
    </div> 
    </Link>
</div>

<div>
    <Link href="/">
    <div className="m-auto w-60 h-60 bg-blue-200 grid place-items-center rounded-3xl  bg-image2 hover:border-2 hover:border-blue-500">
        <p className="text-2xl text-semibold text-white hover:border-2 hover:border-blue-500 hover:rounded-3xl hover:px-3">Retail</p>
    </div>
    </Link>
</div>

<div>
    <Link href="/">
    <div className="m-auto w-60 h-60 bg-blue-200 grid place-items-center rounded-3xl bg-image3 hover:border-2 hover:border-blue-500">
        <p className="text-2xl text-semibold text-white hover:border-2 hover:border-blue-500 hover:rounded-3xl hover:p-1">Manufacturing</p>
    </div>
    </Link>
</div>

<div>
<Link href="/">
    <div className="m-auto w-60 h-60 bg-blue-200 grid place-items-center rounded-3xl bg-image4 hover:border-2 hover:border-blue-500">
        <p className="text-2xl text-semibold text-white hover:border-2 hover:border-blue-500 hover:rounded-3xl hover:p-1">Warehouse</p>
    </div>
</Link>
</div>

<div>
<Link href="/">
    <div className="m-auto w-60 h-60 bg-blue-200 grid place-items-center rounded-3xl bg-image5 hover:border-2 hover:border-blue-500">
        <p className="text-2xl text-semibold text-white hover:border-2 hover:border-blue-500 hover:rounded-3xl hover:p-1">Fashion</p>
    </div>
</Link>
</div>

<div>
<Link href="/">
    <div className="m-auto w-60 h-60 bg-blue-200 grid place-items-center rounded-3xl bg-image6 hover:border-2 hover:border-blue-500"  >
        <p className="text-2xl text-semibold text-white hover:border-2 hover:border-blue-500 hover:rounded-3xl hover:px-6">F&B</p>
    </div>
</Link>

</div>

<div>
<Link href="/">
    <div className="m-auto w-60 h-60 bg-blue-200 grid place-items-center rounded-3xl bg-image7 hover:border-2 hover:border-blue-500">
        <p className="text-2xl text-semibold text-white hover:border-2 hover:border-blue-500 hover:rounded-3xl hover:p-1">Construction</p>
    </div>
</Link>
</div>

<div>
<Link href="/">
    <div className="m-auto w-60 h-60 bg-blue-200 grid place-items-center rounded-3xl bg-image8 hover:border-2 hover:border-blue-500">
        <p className="text-2xl text-semibold text-white hover:border-2 hover:border-blue-500 hover:rounded-3xl hover:p-1">Medical</p>
    </div>
</Link>
</div>

<div>
<Link href="/">
    <div className="m-auto w-60 h-60 bg-gradient-to-r from-gray-600 to-gray-400 border-2 border-gray-200 grid place-items-center rounded-3xl hover:border-2 hover:border-blue-500">
        <p className="text-2xl text-semibold text-white hover:border-2 hover:border-blue-500 hover:rounded-3xl hover:p-1">Many More<span className="text-white text-bold">...</span></p>
    </div>
</Link>
</div>

</div>

    <div> <Footer/> </div>
    </div>
    </>
  )
}
