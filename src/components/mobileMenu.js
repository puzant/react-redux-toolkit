import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from 'features/user/userSlice'

import Divider from '@mui/material/Divider'
import CloseIcon from '@mui/icons-material/Close'
import MessageIcon from '@mui/icons-material/Message'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import NotificationsIcon from '@mui/icons-material/Notifications'
import FaceIcon from '@mui/icons-material/Face'

export const MobileMenu = ({ onToggle, isOpen }) => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((store) => store.cart)
  const { isAuthenticated, username } = useSelector((store) => store.user)
  const [openDialog, setOpenDialog] = React.useState({data: null, dialogType: ''})


  return (    
    <div className='slide-animation flex sm:hidden flex-col h-screen bg-white p-4'>
      <div className='flex justify-between items-center'>
        <NavLink to='/'><div className="text-4xl text-red-500">Looksie</div></NavLink>
        <div onClick={onToggle}><CloseIcon sx={{fontSize: 35, color: 'rgb(99 102 241)'}} /></div>
      </div>

      <StyledInput className="mt-8" placeholder="What are you looking for" />
      
      <div className="flex justify-between items-center mt-4">
        <div className="mt-4 flex gap-4">
          <NavLink to='/shopping-cart'>
            <div className='relative cursor-pointer'>
              <LocalMallIcon sx={{ color: '#a6a5a2', fontSize: 30}} />
                {!!cartItems.length && 
                  <div className='flex justify-center items-center absolute bottom-5 left-3 text-white bg-indigo-500 border-2 border-white h-6 w-6 rounded-full text-xs font-medium'>
                    {cartItems.length}
                  </div>
                }
            </div>
          </NavLink>
          <NotificationsIcon sx={{ color: '#a6a5a2', fontSize: 30}} />
          <MessageIcon sx={{ color: '#a6a5a2', fontSize: 30}} />
          <FaceIcon sx={{ color: '#a6a5a2', fontSize: 30}} />
        </div>

        <div>
          {isAuthenticated ? 
            <div className='flex items-center gap-2'>
              <div className='text-xl'>Welcome {username}!</div>
              <div onClick={() => dispatch(logout())} className='cursor-pointer bg-rose-500 text-white rounded-lg w-28 p-2 text-center'>Logout</div>
            </div>
                  :
            <div 
              onClick={() => setOpenDialog({data: null, dialogType: 'login'})}
              className="cursor-pointer bg-indigo-500 w-32 text-center p-2 text-white rounded-lg"
            >
              Sign In / Login
            </div>
          }
        </div>
      </div>

      <div className='mt-8'><Divider /></div>

      <div className="flex flex-col justify-between mt-4 gap-4 text-lg">
        {
          ['Fashion & Accessories', 'Beatury & Bath', 'Home & Living', 'Party Supplies & Books', 'Electronics & Accessories', 'Food & Drink', 'Pet Supplies', 'Sport Equipment']
            .map(category => (
              <div className='cursor-pointer hover:text-indigo-500 font-medium'>{category}</div>
          ))
        }
      </div>

    </div>
  )
}

const StyledInput = styled.input`
  padding: 10px;
  background: #f1f1f1;
  border-radius: 25px;
  width: auto;
  &:focus {
    outline: none;
  }
`