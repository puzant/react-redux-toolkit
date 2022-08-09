import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: [],
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      if (state.cartItems.includes(actions.payload)) return
      state.cartItems.push(actions.payload)
      state.total += actions.payload.price
    },
    emptyCart: (state) => {
      state.cartItems = []
      state.total = 0
    },
    removeItemFromCart: (state, actions) => {
      state.cartItems = state.cartItems.filter(product => product.id !== actions.payload.id)
      state.total -= actions.payload.price
    }
  }
})

export const { addToCart, emptyCart, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer


