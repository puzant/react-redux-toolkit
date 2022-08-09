import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import EastIcon from '@mui/icons-material/East'

export const Home = () => {
  const { shops, products } = useSelector((store) => store.products)
  
  return (
    <div>

      <div className='mt-10 w-11/12 m-auto flex items-center justify-between px-10 py-4'>
        <div className='flex items-center gap-2'>
          <div className='font-bold text-xl'>Recommendations in</div>
          <EastIcon />
        </div>
      </div>

      <div className='flex flex-col items-center gap-4'>
        <div className='flex justify-center gap-4'>
          {products.map(product => (
            <NavLink key={product.id} to={`/product-details/${product.id}`}>
              <div className='cursor-pointer relative rounded-xl w-48'>
                <img className='h-44 rounded-xl w-full' src={product.image} />
                <div className='absolute bottom-0 left-0 bg-white rounded-lg text-center w-auto m-2 p-2 opacity-80'>{product.price} KWD</div>
              </div>
            </NavLink>
          ))}
        </div>

        <div className='p-2 w-32 rounded-lg text-indigo-400 cursor-pointer border-2 border-indigo-400/100 flex justify-between'>
          <div>See More</div>
          <ArrowForwardIosIcon />
        </div>
      </div>

      <div className='bg-[#f7f7f7] p-10 mt-12'>
        <div className="text-4xl text-center mt-12 font-bold">Popular Categories</div>

        <div className='flex justify-between mt-4'>
          {['Kitchen & Dining', 'Baby Accessories', 'Mixed Media & Collage', 'Fragrances & Scented Oils', 'Braclets', 'Cookware & Bakeware']
            .map(category => (
              <div className='cursor-pointer flex flex-col items-center gap-4'>
                <img className="rounded-full p-8" src='https://i0.wp.com/theinterioreditor.com/wp-content/uploads/2019/03/Cuckooland-Vox-4-You-Dining-Table-with-Hidden-Container-in-White-3564280.jpg?resize=940%2C977' />
                <div className='w-36 text-center'>{category}</div>
              </div>
            ))}
        </div>
      </div>

      <div className='mt-24 w-11/12 m-auto flex items-center justify-between px-10 py-4'>
        <div className='font-bold text-xl'>Recommended Shops</div>
        <div className='p-2 w-32 rounded-lg text-indigo-400 cursor-pointer border-2 border-indigo-400/100 flex justify-between'>
          <div>See More</div>
          <ArrowForwardIosIcon />
        </div>
      </div>

      <div className='flex justify-center gap-8'>
        {shops.map(shop => (
          <div className="cursor-pointer shadow-lg flex flex-col rounded-xl w-72">
            <img className='h-40 w-full rounded-t-xl' src={shop.image} />
            <div className='flex flex-col p-4 gap-2'>
              <div className='flex items-center gap-2'>
                <img className='h-12 w-12 border-2 border-indigo-500 rounded-full' src={shop.logo} />
                <div>
                  <div className='text-2xl font-medium'>{shop.name}</div>
                  <div className='text-[#8f8f8f]'>@nike</div>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='text-[#8f8f8f]'>120k Followers - 122 Products</div>
                <div className='text-[#8f8f8f]'>#Food #Flowers #Gifts</div>
              </div>
            </div>
            <div className='flex justify-between p-2'>
              {[1,2,3,4].map(product => <img className='h-12 w-14 rounded-lg' src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c01d4b66-d09b-4aa1-bba3-315ba2501556/air-max-2021-womens-shoes-CkfHnZ.png' />)}
            </div>
          </div>
        ))}
      </div>

      <div className='mt-24 w-11/12 m-auto flex items-center justify-between px-10 py-4'>
        <div className='font-bold text-xl'>Baked Goods</div>        
      </div>

      <div className='flex justify-center gap-4'>
        {[1,2,3,4,5,6].map(product => (
          <div className='cursor-pointer relative rounded-xl w-48'>
            <img className='h-44 rounded-xl w-full' src='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&resize=768,574' />
            <div className='absolute bottom-0 left-0 bg-white rounded-lg text-center w-auto m-2 p-2 opacity-80'>2,038,937 KWD</div>
          </div>
        ))}
      </div>

      <div className='mt-24 w-11/12 m-auto flex items-center justify-between px-10 py-4'>
        <div className='font-bold text-xl'>Baked Goods</div>        
      </div>

      <div className='flex justify-center gap-4'>
        {[1,2,3,4,5,6].map(product => (
          <div className='cursor-pointer relative rounded-xl w-48'>
            <img className='h-44 rounded-xl w-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYCnI27WR3z0TMnVyD0un8WU07fxOzij66OzSY81BePrkIydUNV3ujOreRFwjDuw-428&usqp=CAU' />
            <div className='absolute bottom-0 left-0 bg-white rounded-lg text-center w-auto m-2 p-2 opacity-80'>2,038,937 KWD</div>
          </div>
        ))}
      </div>

    </div>
  )
}