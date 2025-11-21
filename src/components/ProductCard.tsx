import React from 'react'
import { RatingStars } from './shared/RatingStars'
import {CalculateDiscount} from '../utils/functions'

const ProductCard = ({productList , title}) => {
  return (
    <div className='flex flex-col gap-5 md:gap-8 lg:gap-12 my-10 md:my-12 lg:my-16'>
      <h3 className='text-2xl md:text-3xl lg:text-5xl font-anton text-center'>{title}</h3>  
      <div className='flex justify-between gap-3 overflow-x-auto px-5 md:px-8 lg:px-16'>
        {
            productList.map((product)=>{
                return (
                    <div key={product.id} className='flex flex-col gap-5'>
                        <div className='bg-[#F0EEED] flex items-center justify-center w-40 h-40 md:w-50 md:h-50 lg:w-80 lg:h-80 rounded-xl'>
                            <img className='w-36 md:w-46 lg:w-60' src={product.image} alt="" />
                        </div>
                        <div className='flex px-1 flex-col items-start gap-2'>
                            <h2 className='font-bold text-sm md:text-base lg:text-lg'>{product.name}</h2>
                            <div className='flex gap-2'>
                                <RatingStars rating={product.rating} />
                                <p className='text-xs md:text-sm lg:text-base mt-2'>{product.rating}/5</p>
                            </div>
                            <div className='flex items-center gap-2 lg:gap-3'>
                                <p className='text-sm md:text-base lg:text-lg font-bold'>$ {product.price}</p>
                                {
                                    product.previousPrice && 
                                    <div className='flex items-center gap-2 lg:gap-3'>
                                        <p className='text-sm md:text-base lg:text-lg line-through text-gray-600'>$ {product.previousPrice}</p>
                                        <div className='bg-red-50 pt-1 px-2 rounded-xl'>
                                            <p className='text-xs md:text-sm lg:text-base text-red-700'>-{CalculateDiscount(product.price , product.previousPrice)}%</p>
                                        </div>
                                    </div>
                                    
                                }
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
      <button className='bg-white border-gray-300 border w-[70%] lg:w-[20%] mx-auto rounded-full py-2 '>View All</button>
    </div>
  )
}

export default ProductCard
