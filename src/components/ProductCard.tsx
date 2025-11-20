import React from 'react'
import { RatingStars } from './shared/RatingStars'
import {CalculateDiscount} from '../utils/functions'

const ProductCard = ({productList , title}) => {
  return (
    <div className='flex flex-col gap-5 my-10'>
      <h3 className='text-2xl font-anton text-center'>{title}</h3>  
      <div className='flex justify-between gap-3 overflow-x-scroll px-5'>
        {
            productList.map((product)=>{
                return (
                    <div key={product.id} className='flex flex-col gap-5'>
                        <div className='bg-[#F0EEED] flex items-center justify-center w-40 h-40 rounded-xl'>
                            <img className='w-36' src={product.image} alt="" />
                        </div>
                        <div className='flex px-1 flex-col items-start gap-2'>
                            <h2 className='font-bold text-sm'>{product.name}</h2>
                            <div className='flex items-end gap-2'>
                                <RatingStars rating={product.rating} />
                                <p className='text-xs '>{product.rating}/5</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <p className='text-sm font-bold'>$ {product.price}</p>
                                {
                                    product.previousPrice && 
                                    <div className='flex items-center gap-2'>
                                        <p className='text-sm line-through text-gray-600'>$ {product.previousPrice}</p>
                                        <div className='bg-red-50 pt-1 px-2 rounded-xl'>
                                            <p className='text-xs text-red-700'>-{CalculateDiscount(product.price , product.previousPrice)}%</p>
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
      <button className='bg-white border-gray-300 border w-[70%] mx-auto rounded-full py-2 '>View All</button>
    </div>
  )
}

export default ProductCard
