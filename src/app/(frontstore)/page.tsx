import ProductCard from '@/components/ProductCard'
import React from 'react'
import {newProducts} from '../../utils/newProducts.js'
import {topSelling} from '../../utils/topSelling.js'
import {comments} from '../../utils/comments.js'
import Responsive from '../../components/ReviewsCarousel'




const page = () => {
  return (
    <div className=''>
      {/* hero section region */}
      <div className="max-lg:flex max-lg:flex-col lg:relative bg-[#F2F0F1] lg:bg-[url(/hero-desktop.png)]   lg:bg-position-[right_0px] lg:bg-no-repeat w-full">
        <img className='max-lg:hidden absolute right-[5%] top-20 w-20' src="star.svg" alt="" />
        <img className='max-lg:hidden absolute left-[50%] top-[40%] w-10' src="star.svg" alt="" />
        <div className='flex flex-col gap-8 px-[5%] py-10 lg:py-20 lg:w-[50%]'>
            <div className='flex flex-col gap-4'>
              <h1 className='font-anton text-[36px] lg:text-[64px] leading-10 lg:leading-18'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p className='text-gray-600 text-sm'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
              <button className='bg-black lg:w-[50%] text-white rounded-full py-3'>Shop Now</button>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 items-center'>
              <div className='flex items-center gap-10'>
                  <div className='flex flex-col items-start'>
                    <p className='text-3xl font-bold'>200+</p>
                    <p className='text-sm text-gray-500'>International Brands</p>
                  </div>
                  <div className='w-0.5 h-12 bg-gray-300'/>
                  <div className='flex flex-col items-start'>
                    <p className='text-3xl font-bold'>2,000+</p>
                    <p className='text-sm text-gray-500'>High-Quality Products</p>
                  </div>
              </div>
              <div className='lg:w-0.5 lg:h-12 lg:bg-gray-300'/>
              <div className='flex flex-col items-start'>
                <p className='text-3xl font-bold'>30,000+</p>
                <p className='text-sm text-gray-500'>Happy Customers</p>
              </div>
            </div>
        </div>
        {/* blurred section */}
        <div className='relative'>
            <div className='absolute inset-0 lg:hidden bg-[url(/hero-mobile.png)] h-[50vh] bg-center blur-md  
            [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]
            [-webkit-mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]
            bg-contain w-full' />
            <div className='lg:hidden bg-[url(/hero-mobile.png)] h-[50vh] bg-center bg-contain bg-no-repeat w-full relative' />
        </div>
      </div>
      {/* brands section */}
      <div className='bg-black py-5 px-10 flex flex-col lg:flex-row gap-5 lg:gap-20 items-center justify-center'>
        <div className='flex items-center gap-10 lg:gap-20'>
          <img className='w-[20vw] lg:w-[10vw]' src="versace.svg" alt="" />
          <img className='w-[12vw] lg:w-[5vw]' src="zara.svg" alt="" />
          <img className='w-[20vw] lg:w-[10vw]' src="gucci.svg" alt="" />
        </div>
        <div className='flex items-center gap-10 lg:gap-20'>
          <img className='w-[20vw] lg:w-[10vw]' src="prada.svg" alt="" />
          <img className='w-[20vw] lg:w-[10vw]' src="calvinklein.svg" alt="" />
        </div>
      </div>
      {/* region ended */}


      {/* cards region */}
      <div className=''>
        <ProductCard productList={newProducts} title='NEW ARRIVALS'/>
        <hr className='text-gray-300' />
        <ProductCard productList={topSelling} title='TOP SELLING'/>
      </div>
      {/* region ended */}

      {/* grid region */}
      <div className='bg-[#F0F0F0] py-10 px-5 mx-4 lg:px-16 lg:mx-26 rounded-2xl'>
        <h3 className='font-anton text-3xl lg:text-5xl text-center mb-10 '>BROWSE BY <br /> DRESS STYLE</h3>
        <div className='flex flex-col gap-3 lg:grid lg:grid-cols-12 lg:gap-5'>
          <div className='w-full h-[20dvh] lg:h-[30dvh] bg-white relative rounded-2xl lg:col-span-5'>
            <p className='absolute z-10 top-5 left-5 text-3xl'>Casual</p>
            <img className='absolute top-0 right-0 h-full rounded-2xl' src="/assets/image11.png" alt="" />
          </div>
          <div className='w-full h-[20dvh] lg:h-[30dvh] bg-white relative rounded-2xl lg:col-span-7'>
            <p className='absolute z-10 top-5 left-5 text-3xl'>Formal</p>
            <img className='absolute top-0 right-0 h-full rounded-2xl' src="/assets/image13.png" alt="" />
          </div>
          <div className='w-full h-[20dvh] lg:h-[30dvh] bg-white relative rounded-2xl lg:col-span-7'>
            <p className='absolute z-10 top-5 left-5 text-3xl'>Party</p>
            <img className='absolute top-0 right-0 h-full rounded-2xl' src="/assets/image12.png" alt="" />
          </div>
          <div className='w-full h-[20dvh] lg:h-[30dvh] bg-white relative rounded-2xl lg:col-span-5'>
            <p className='absolute z-10 top-5 left-5 text-3xl'>Gym</p>
            <img className='absolute top-0 right-0 h-full rounded-2xl' src="/assets/image14.png" alt="" />
          </div>
        </div>
      </div>
      {/* region ended */}

      {/* reviews region */}
      <Responsive list={comments} title={'OUR HAPPY CUSTOMERS'} />
      {/* region ended */}


    </div>
  )
}

export default page
