import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from 'features/cart/cartSlice'

import IosShareIcon from '@mui/icons-material/IosShare';
import Divider from '@mui/material/Divider'

export const ProductDetails = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const { cartItems } = useSelector((store) => store.cart)
  const { products } = useSelector((store) => store.products)

  const product = products.find(product => product.id === productId)
  
  return (
    <div>
      <div className='flex flex-wrap sm:flex-nowrap justify-around p-4 m-auto mt-10 w-full sm:w-10/12'>
        <img className='w-full sm:w-1/2' src={product.image} />
        <div className='flex flex-col gap-8 p-4'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <img className='h-12 w-12 border-2 border-black rounded-full' src='https://cdn.iconscout.com/icon/free/png-256/fendi-3215400-2673818.png' />
              <div className='text-3xl'>Fendi</div>
            </div>
            <div className='border border-indigo-500 rounded-lg p-2'><IosShareIcon sx={{ color: 'rgb(99 102 241)', fontSize: 25}} /></div>
          </div>
          <div className='mt-2 text-lg font-bold'>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>


          <div className='flex flex-col gap-1'>
            <div className="text-2xl text-indigo-500 font-medium">{product.price} KWD</div>
            <div className="flex flex-col gap-2">
              <div className='flex gap-2 items-center'>
                <div className='font-bold text-xl'>Color: </div>
                <div>Yellow, Red, Green</div>
              </div>
              <div className="flex gap-2">
                <div className='rounded-lg p-2.5 w-12 h-11 cursor-pointer bg-amber-400'></div>
                <div className='rounded-lg p-2.5 w-12 h-11 cursor-pointer bg-rose-400'></div>
                <div className='rounded-lg p-2.5 w-12 h-11 cursor-pointer bg-green-400'></div>
              </div>
            </div>

            <div className='mt-2 flex flex-col gap-2'>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <div className='font-bold text-xl'>Size: </div>
                  <div>M</div>
                </div>
                <div className='cursor-pointer text-indigo-500 font-bold'>See size chart</div>
              </div>
              <div className="flex gap-2">
                <div className='cursor-pointer border-2 w-12 font-bold text-center border-slate-200 p-2.5 rounded-lg'>S</div>
                <div className='cursor-pointer border-2 w-12 font-bold text-center border-slate-200 p-2.5 rounded-lg'>M</div>
              </div>
            </div>
          </div>

          <Divider />

          <div
            onClick={() => dispatch(addToCart(product))} 
            className={`${cartItems.find(item => item.id === productId) && 'opacity-40 cursor-default'} cursor-pointer w-full bg-indigo-500 text-white p-4 rounded-xl text-center font-medium`}
          >
            {cartItems.find(item => item.id === productId) ? <div className='font-bold'>Added to cart</div> : <div className='font-bold'>Add To Cart</div>}
          </div>
        </div>
      </div>

      <div className='mt-10 w-full sm:w-11/12 m-auto flex flex-col px-10 py-4'>
        <div className='font-bold text-xl'>Item Description</div>
        <div className='mt-2'>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
        <div className='mt-2 text-indigo-500'>Read more</div>
      </div>

      <div className='w-full sm:w-11/12 m-auto mt-5 px-10 py-4'><Divider /></div>

      <div className='mt-5 w-full sm:w-11/12 m-auto flex flex-col px-10 py-4'>
        <div className='font-bold text-xl'>Delivery</div>
        <div className='mt-2'>Estimated Delivery: <span className='font-bold'>1 - 2 Days</span></div>
        <div className='mt-2'>Delivery Charge: <span className='font-bold'>2 KWD</span></div>
      </div>

      {/* <div className='mt-10 w-11/12 m-auto flex items-center justify-between px-10 py-4'>
        <div className='font-bold text-xl'>Similar Items on Looksie</div>        
      </div>

      <div className='flex justify-center gap-4'>
        {[1,2,3,4,5,6].map(product => (
          <div className='cursor-pointer relative rounded-xl w-48'>
            <img className='h-44 rounded-xl w-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYCnI27WR3z0TMnVyD0un8WU07fxOzij66OzSY81BePrkIydUNV3ujOreRFwjDuw-428&usqp=CAU' />
            <div className='absolute bottom-0 left-0 bg-white rounded-lg text-center w-auto m-2 p-2 opacity-80'>2,038,937 KWD</div>
          </div>
        ))}
      </div> */}
    </div>
  )
}