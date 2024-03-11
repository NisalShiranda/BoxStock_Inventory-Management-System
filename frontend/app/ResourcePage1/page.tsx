import Image from 'next/image';
import res1 from '../resource1.png';
import React from 'react'
import Navbar from '../(components)/navbar';
import Footer from '../(components)/footer';
import Link from 'next/link';
export default function page() {
  return (
    <>
<div className= "">
        <div><Navbar/></div>
    
  <div className="mt-20 text-center grid ">
    <p className="items-center text-5xl font-semibold">How  to  Create  a <span className="text-orange-300 underline">Purchase Order</span></p>
  </div>
    <div className='grid  mt-20'>
              <Image className='justify-self-center'
                                src={res1}
                                width={650}
                                height={450}
                                alt="Picture"
                />
  <div className='w-8/12 justify-self-center text-lg text-justify grid gap-y-2 mt-5'>
        <p className="">Purchase orders help small businesses maintain accurate records and clarify order details and pricing agreements with your company’s suppliers, sellers, and service providers.  </p>
        <p> In this article, we’ll clearly define a purchase order (PO) and help you better understand the purpose and benefits of POs. Then, we’ll reveal how to create a purchase order and the differences between work orders, supply orders, and purchase orders.</p>
        <p className='font-semibold'>What is a purchase order?</p>
        <p>A purchase order, or a PO, is an official, legally-binding document that a buyer submits to a seller, vendor, or service provider. This purchase order allows the seller to review the entirety of the buyer’s order—including quantity, price, delivery details, and invoice payment terms</p>
        <p>While a purchase requisition also provides these details, a purchase order is an actual, enforceable contract. Once the buyer submits the PO, they’re agreeing to pay for all the goods and services (and any additional fees) outlined in the document. </p>
        <p className='font-semibold'>What is the purpose of a purchase order?</p>
        <p>A purchase order is important to small businesses for a variety of reasons. Some of the essential factors include clarifying order details, creating a contract for payment, reminding vendors exactly how to invoice you, speeding up accounting audits, and reducing human error. </p>
        <p>Here’s a little bit more about each of these benefits. </p>

 <div className="grid gap-y-4">

 <div className="">
      <p className='font-semibold pb-2'>1. Clarify order details</p>
      <p>A purchase order articulates precisely what a buyer has agreed to purchase from a vendor, supplier, or service provider. </p>
      <p>If you’re the recipient of a PO, keep in mind that once you receive a PO, the time to negotiate has passed—because a PO is a legally binding contract. That being said, if you spot an error on a purchase order, you should absolutely inform your client or customer. </p>
      <p>If you’re the one creating a purchase order, you should double-check your purchase orders to ensure they match approved estimates and are accurate and error-free.</p>
      <p className='text-gray-500 font-semibold mt-5'>related: <span className='hover:text-orange-400'><Link href="/" className="hover:bg-blue-100">How to choose a supplier</Link></span></p>
 </div>

 <div>
      <p className="font-semibold pb-2">2. Create a legally binding contract</p>
      <p>As we’ve mentioned, a PO is an official contract enforceable by law. This matters because most buyers do not pay on receipt and instead rely on more favorable, delayed invoice payment terms. </p>
      <p>Fortunately for sellers, a PO creates real protection since the document ensures they’ll be paid per the terms listed on the purchase order. And if for some reason payment to the seller is withheld, the PO provides grounds for legal action. </p>
 </div>

 <div>
      <p className="font-semibold pb-2">3. Remind vendors how to invoice you</p>
      <p>A purchase order also provides your sellers explicit instructions on how to invoice you. </p>
      <p>In fact, many businesses will not accept an invoice without a PO number on it. This allows your accounting team to quickly cross-reference all bills—a crucial step if your accounting team is removed from the daily ins and outs of your business. </p>
 </div>

 <div>
      <p className="font-semibold pb-2">4. Speed up accounting audits</p>
      <p>Creating purchase orders increases transparency between buyers and sellers. And it also saves your accountant tons of time too. That’s because accountants can instantly link purchase orders to invoices, seamlessly ensuring that payment for the right products and services are going to the right vendors at the right time. </p>
      <p className='text-gray-500 font-semibold mt-5'>related: <span className='hover:text-orange-400 '><Link href="/" className="hover:bg-blue-100">What is Supplier Relationship Management?</Link></span></p>
 </div> 

 <div>
      <p className="font-bold pb-2">5. Reduce human error</p>
      <p>Finally, purchase orders are a good business practice that helps reduce human error all around. When your company creates purchase orders, and your vendors reference them during billing, you’re much less likely to overpay or underpay your suppliers accidentally. </p>
 </div>

 </div>
 <div className="text-right my-7 text-gray-500 hover:text-orange-500 hover:font-semibold"><Link href='/ResourcePage4'>Previous Page</Link></div>
  </div>
  </div>
        <div><Footer/></div>
  </div>
  </>
  )
}
