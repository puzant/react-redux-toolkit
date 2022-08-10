import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { emptyCart, removeItemFromCart } from 'features/cart/cartSlice'

import Divider from '@mui/material/Divider'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import DeleteIcon from '@mui/icons-material/Delete'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export const ShoppingCart = () => {
  const dispatch = useDispatch()
  const { cartItems, total } = useSelector((store) => store.cart)

  return (
    <div className='flex flex-wrap sm:flex-nowrap w-11/12 mt-10 m-auto gap-4'>
      <div className='w-full sm:w-3/5 p-4 rounded-lg shadow-lg border-2 border-slate-300'>
        <div className='flex flex-wrap justify-between gap-2 items-center'>
          <div className='text-2xl font-medium'>My Cart</div>
          <div className='flex gap-2 text-slate-500'>
            <AccessTimeIcon />
            <div>Items are reserved for 60 minutes</div>
          </div>
        </div>

        <div className='mt-4'></div>
        <Divider />

        {!cartItems.length ?
          <div className='flex flex-col items-center'>
            <img className='h-60 w-60' src='https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs=' />
            <div className='text-lg text-indigo-500 font-medium'>No Items in the cart</div>
          </div>
            :
          <div className='flex flex-col gap-4 mt-4'>
            {cartItems.map(product => (
              <div key={product.id} className="flex flex-col sm:flex-row  gap-4">
                <img className="w-48 h-40 rounded-lg border-2 border-indigo-200" src={product.image} />
                <div className="flex flex-col">
                  <div className='text-lg font-medium'><span className="text-indigo-500">{product.name}</span></div>
                  <div className='text-lg'>{product.price} KWD</div>
                  <div className='text-lg'>Color: Red</div>
                  <div className=' text-slate-500'>{product.description}</div>
                </div>
                
                <div onClick={() => dispatch(removeItemFromCart(product))} className='cursor-pointer'>
                  <DeleteIcon sx={{ color: 'rgb(244 63 94)'}} />
                </div>
              </div>
            ))}
          </div>
        }

        {!!cartItems.length && 
          <div onClick={() => dispatch(emptyCart())} className="cursor-pointer bg-rose-500 w-32 font-medium text-center mt-4 p-2 text-white rounded-lg">
            Empty Cart
          </div>
        }
      </div>

        <div className='w-full sm:w-2/5 p-4 rounded-lg shadow-lg border-2 border-slate-300'>
          <div className='text-2xl font-medium'>Payment Details</div>
          <div className='mt-2 flex gap-4'>
            <img className='h-12' src='https://i.pinimg.com/736x/ca/0c/70/ca0c7039ddcf224cb6b075cb59e4677e.jpg' />
            <img className='h-12' src='https://cdn.iconscout.com/icon/free/png-256/visa-7-282549.png' />
            <img className='h-12' src='https://cdn.iconscout.com/icon/free/png-256/debit-card-16-842903.png' />
          </div>

          <div className='mt-4 flex flex-col gap-2'>
            <div className='flex flex-col gap-4'>
              <input className='bg-indigo-50 text-lg p-2 rounded-lg w-full focus:outline-none' placeholder='Cardholder Name' />
              <input className='bg-indigo-50 text-lg p-2 rounded-lg w-full focus:outline-none' placeholder='Card Number' />
              <div className='flex gap-4'>
                <input className='bg-indigo-50 text-lg p-2 rounded-lg w-full focus:outline-none' placeholder='Expiry Month' />
                <input className='bg-indigo-50 text-lg p-2 rounded-lg w-full focus:outline-none' placeholder='Expiry Year' />
                <input className='bg-indigo-50 text-lg p-2 rounded-lg w-full focus:outline-none' placeholder='CVC' />
              </div>
            </div>

            <div className='flex flex-col gap-2.5'>
              <div className='flex gap-2'>
              <FormControlLabel
                control={<Checkbox />}
                label="Save my card for future"
                labelPlacement="left"
              />
              </div>
              <div className='font-medium text-indigo-500 underline cursor-pointer'>Have a discount link?</div>
              <div className='flex gap-2'>
                <div>Total: </div>
                <div className='text-indigo-500 font-bold'>{total} KWD</div>
              </div>
            </div>
            <div className="cursor-pointer bg-indigo-500 w-32 text-center p-2 mt-2 text-white font-bold rounded-lg">Purchase</div>
          </div>
        </div>

    </div>
  )
}