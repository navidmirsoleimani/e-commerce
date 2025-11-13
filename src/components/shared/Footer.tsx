import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* black container region */}
      <div className='bg-blue-600'>
        <div className='p-10 flex flex-col lg:flex-row gap-5 lg:gap-[30%] items-center  translate-y-[50%] bg-black w-[80%] mx-auto rounded-2xl'>
          <h3 className='text-white text-2xl lg:text-4xl'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>

          <div className='w-full flex flex-col gap-3'>
            <div className='flex px-5 py-3 gap-3 rounded-4xl bg-white text-black'>
              <img className='' src="email.svg" alt="" />
              <input className='text-sm sm:text-base border-none outline-none' type="email" placeholder='Enter your email address...' />
            </div>

            <button className='px-8 py-3 rounded-4xl bg-white text-black' type='submit'>Subscribe to Newsletter</button>
          </div>
        </div>
        <div>
        </div>
      </div>
      {/* black region ended */}

      {/* gray section region */}
      <div className='bg-gray-300 p-10 pt-50'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-20'>
          <div className='flex lg:flex-3 flex-col gap-5'>
            <img className='w-40' src="SHOP.CO.svg" alt="" />
            <p className='text-gray-700'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className='flex items-center justify-start gap-3'>
              <div className='bg-white w-7 h-7 rounded-full flex justify-center items-center'><img src="twitter.svg" alt="" /></div>
              <div className='bg-black w-7 h-7 rounded-full flex justify-center items-center'><img src="facebook.svg" alt="" /></div>
              <div className='bg-white w-7 h-7 rounded-full flex justify-center items-center'><img src="instagram.svg" alt="" /></div>
              <div className='bg-white w-7 h-7 rounded-full flex justify-center items-center'><img src="github.svg" alt="" /></div>
            </div>
          </div>
          <div className='grid grid-cols-2 lg:flex-9 lg:grid-cols-4 gap-8'>
            <div className='flex flex-col gap-4 text-gray-700 text-xs'>
              <h3 className='text-black text-base'>COMPANY</h3>
              <p>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>
            <div className='flex flex-col gap-4 text-gray-700 text-xs'>
              <h3 className='text-black text-base'>HELP</h3>
              <p>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div className='flex flex-col gap-4 text-gray-700 text-xs'>
              <h3 className='text-black text-base'>FAQ</h3>
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payment</p>
            </div>
            <div className='flex flex-col gap-4 text-gray-700 text-xs'>
              <h3 className='text-black text-base'>RESOURCES</h3>
              <p>Free eBook</p>
              <p>Developement Tutorial</p>
              <p>How to - Blog</p>
              <p>Youtube Playlist</p>
            </div>
          </div>
        </div>
        <hr className='my-5' />
        <div className='flex flex-col gap-5 items-center lg:flex-row lg:justify-between'>
           <p className='text-sm'>Shop.co © 2000-2025, All Rights Reserved</p>
           <div className='flex items-center gap-3'>
           <div className='w-12 h-5 lg:w-17 lg:h-8 rounded-2xl bg-white flex justify-center items-center'><img src="visa.svg" alt="" /></div>
           <div className='w-12 h-5 lg:w-17 lg:h-8 rounded-2xl bg-white flex justify-center items-center'><img src="Mastercard.svg" alt="" /></div>
           <div className='w-12 h-5 lg:w-17 lg:h-8 rounded-2xl bg-white flex justify-center items-center'><img src="paypal.svg" alt="" /></div>
           <div className='w-12 h-5 lg:w-17 lg:h-8 rounded-2xl bg-white flex justify-center items-center'><img src="applepay.svg" alt="" /></div>
           <div className='w-12 h-5 lg:w-17 lg:h-8 rounded-2xl bg-white flex justify-center items-center'><img src="googlepay.svg" alt="" /></div>
       </div>
      </div>
      </div>
     
    </div>
  )
}

export default Footer
