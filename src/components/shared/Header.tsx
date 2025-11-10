import React from 'react'

const Header = () => {
  return (
    <div className=''>
      {/* black container region   */}
      <div className='bg-[#000000] relative py-[10px]'>
        <p className='text-white text-sm text-center'>Sign up and get 20% off to your first order. Sign Up Now</p>
        <img className='max-lg:hidden absolute top-[10px] right-[5%]' src="close.svg" alt="" />
      </div>
      {/* end region */}

      <div className='flex items-center py-5 gap-10 justify-between px-[5%]'>
        <div className='flex gap-5'>
            <img className='lg:hidden w-6' src="hamburger.svg" alt="" />
            <img className='w-[100%]' src="SHOP.CO.svg" alt="" />
        </div>
        <div className='max-lg:hidden flex gap-3 text-sm'>
            <div className='flex gap-0.5'>
                <p className='flex gap-0.5'>Shop
                <img className='w-2' src="dropdown.svg" alt="" /></p>
            </div>
            <p>On Sale</p>
            <p>New Arrivals</p>
            <p>Brands</p>
        </div>
        <div className='max-lg:hidden flex flex-1 gap-3 p-3 bg-[#00000043] rounded-3xl'>
             <img className='w-6' src="search.svg" alt="" />
             <input className='border-none outline-none w-full' type="text" placeholder='Search for products...' />
        </div>
        <div className='flex gap-4'>
            <img className='lg:hidden w-6' src="searchblack.svg" alt="" />
            <img className='w-6' src="cart.svg" alt="" />
            <img className='w-6' src="user.svg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Header
