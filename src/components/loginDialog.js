import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'features/user/userSlice'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import CloseIcon from '@mui/icons-material/Close';

export const LoginDialog = ({ openDialog, onClose }) => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((store) => store.user)

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleLogin = () => {
    dispatch(login({email: email, password: password}))
  }

  React.useEffect(() => {
    if (isAuthenticated) onClose()
  },[isAuthenticated])

  return (
    <CustomDialog
      open={openDialog?.dialogType === 'login'}
      onClose={onClose}
      >
        <DialogTitle>
          <div className='flex items-center justify-between'>
            <div className="text-2xl font-bold">Discover. Share. Inspire.</div>
            <div onClick={onClose}><CloseIcon sx={{fontSize: 30, cursor: 'pointer'}} /></div>
          </div>
          <div className='flex items-center'>
            <div className="text-base">The first social marketplace of its kind</div>
            <img className='h-10' src='https://thumbs.dreamstime.com/b/two-shopping-bags-color-icon-flat-style-isolated-white-background-vector-simple-shop-cart-symbol-purchases-web-store-two-164858068.jpg' />
          </div>
        </DialogTitle>
        <DialogContent>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <div>Email</div>
              <StyledInput 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com" 
              />
            </div>
            <div>
              <div>Password</div>
              <StyledInput
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password" 
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
            <div onClick={handleLogin} className="m-auto cursor-pointer bg-indigo-500 w-60 text-center p-2 text-white rounded-lg">
              Login
            </div>
        </DialogActions>
      </CustomDialog>
  )
}

const StyledInput = styled.input`
  padding: 10px;
  background: #f1f1f1;
  border-radius: 25px;
  width: 400px;
  &:focus {
    outline: none;
  }
`

const CustomDialog = styled(Dialog)`
  & .MuiDialog-paper {
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 7px 10px #00000029;
  }
`