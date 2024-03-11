import Image from "next/image";
import Navbar from "../(components)/navbar";
import Footer from "../(components)/footer";
import res3 from '../res3.png';
import Link from "next/link";
export default function page1() {
  return (
 <>
<div className= "">
        <div><Navbar/></div>
    
  <div className="mt-20 text-center grid ">
    <p className="items-center text-5xl font-semibold">How to Calculate Raw  <span className="text-orange-300 underline">Materials Inventory</span></p>
  </div>
    <div className='grid  mt-10'>
    
              <Image className='justify-self-center px-10'
                                src={res3}
                                width={750}
                                height={450}
                                alt="Picture"
              />
               
  <div className='w-9/12 justify-self-center text-lg text-justify grid gap-y-2 mt-5'>
        <p className="">If your business uses raw materials to manufacture finished goods, then chances are it’s already developed a <Link href="https://www.sortly.com/solutions/supplies-and-consumables-software/raw-materials/" className="underline text-gray-500 text-semibold text-decoration-underline">Raw Materials Inventory Management </Link>strategy to keep track of this particular type of inventory. That’s because raw materials are essential to many businesses’ production schedules and because these products are often expensive, difficult to store, and kept across multiple locations or job sites.  </p>
        <p> In this article, we’ll walk you through how to calculate raw materials inventory, providing key formulas for both beginning raw materials and ending raw materials inventory. </p>
        <p className='font-semibold'>What are raw materials?</p>
        <p>Raw materials are products your business has in stock that have not been used to manufacture either works-in-process or finished, sellable goods. Types of raw materials include products like steel, glass, copper, and wood. 
        Many businesses agree that raw materials can be particularly difficult to store, manage, and track. From <Link href="https://www.sortly.com/solutions/supplies-and-consumables-software/raw-materials/" className="underline text-gray-500 text-semibold text-decoration-underline">Construction Companies</Link> 
        to<Link href="https://www.sortly.com/solutions/supplies-and-consumables-software/raw-materials/" className="underline text-gray-500 text-semibold text-decoration-underline"> Manufacturing Plants,</Link> learning to <Link href="https://www.sortly.com/solutions/supplies-and-consumables-software/raw-materials/" className="underline text-gray-500 text-semibold text-decoration-underline">Properly Store and Account</Link> for raw materials can help your business save time, money, and stress at once. </p>
        <p>On the same note, sitting down and accounting for the value of your raw materials at the beginning and end of each financial period can help your business practice better inventory control, prepare more accurate balance sheets, and forecast demand for the future. </p>
        <p className='font-semibold'>How to calculate raw materials inventory</p>
        <p>Want to calculate raw materials used? You’ll need the following information:</p>
        <ul className="list-disc ml-6">
            <li className="pb-1">Your company’s beginning raw materials inventory—in other words, the amount of inventory at the opening of a given period</li>
            <li className="pb-1">Purchased raw materials—raw materials your business has purchased since the opening of that same period</li>
            <li className="pb-1"><Link href="" className="text-gray-600 ">Costs of Goods Sold (COGS)</Link>—the direct costs of the raw materials associated with producing the inventory you’ve sold</li>
        </ul>

 <div className="grid gap-y-4">



 <div>
      <p className="font-semibold pb-2">Beginning raw materials inventory</p>
      <p>Keep in mind that your beginning raw materials inventory for the next period is simply your ending raw materials inventory for the previous one. You can calculate it using the beginning inventory formula for only your raw materials. </p>
      <p>Beginning Raw Materials Inventory = (COGS + Ending Raw Materials Inventory) – Raw Materials Inventory PurchasesFor example, imagine a manufacturer produces lanterns using iron. Iron costs $50 a unit, and the business ended the last accounting 
        period with 1,000 units in stock. Over the last period, the manufacturer also sold 200 lanterns and purchased an additional 250 units of iron. </p>
 <ul className="list-disc ml-6">
    <li pb-1>Ending Raw Materials Inventory = 1,000 units at $50/unit ($50,000)</li>
    <li pb-1>Purchased New Materials = 250 units at $50/unit ($12,500)</li>
    <li pb-1>COGS = 200 units at $50/unit ($10,000)</li>
   <ul className="list-none">
     <li pb-1>→ Beginning Raw Materials Inventory = ($10,000 + $50,000) – $12,500</li>
     <li pb-1>→ Beginning Raw Materials Inventory = $47,500</li>
     </ul>
 </ul>
 <p>The lantern manufacturer’s beginning raw materials inventory for the first day of its new accounting period is valued at $47,500. As noted, this is also the business’s ending raw materials inventory for the previous accounting period. </p>
 </div>


 <div>
      <p className="font-semibold pb-2">Ending raw materials inventory</p>
      <p>Wondering how to calculate ending raw materials inventory? The official formula for calculating ending raw materials inventory is as follows:</p>
      <p>Ending Raw Materials Inventory = (Raw Materials Inventory Purchases + Beginning Raw Materials Inventory) – COGS</p>
      <p>Say a lightbulb manufacturer begins a new accounting period with 1,000 units of glass on hand. During that accounting period, they purchase another 200 units of glass and sell 700 lightbulbs, all for $.50 per unit.</p>
 <ul className="list-disc ml-6">
    <li pb-1>Beginning Raw Materials Inventory = 1,000 units at $.50/unit ($500)</li>
    <li pb-1>Purchased New Materials = 200 units at $.50/unit ($100)</li>
    <li pb-1>COGS = 700 units at $.50/unit ($350)</li>
   <ul className="list-none">
     <li pb-1>→ Ending Raw Materials Inventory = ($100 + $500) – $350</li>
     <li pb-1>→ Ending Raw Materials Inventory = $250</li>
     </ul>
 </ul>
 <p>The lightbulb manufacturer ends its current accounting period with $250 worth of raw materials inventory. Remember that this will become the business’s beginning inventory for the next accounting period. </p>
 </div>







 </div>
 <div className="text-right my-7 text-gray-500 hover:text-orange-500 hover:font-semibold"><Link href='/ResourcePage'>Previous Page</Link></div>
  </div>
  </div>
        <div> <Footer/> </div>
  </div>
</> 
 )
}
