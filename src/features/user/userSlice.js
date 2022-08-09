import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: "",
  token: "",
  isAuthenticated: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, actions) => {
      const { email, password } = actions.payload
      if (email === 'puzant' && password === '12345') {
        state.isAuthenticated = true
        state.username = "Puzant"
        state.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXV0aC50aGVsb2N1cy54eXpcL2FwaVwvdjFcL2F1dGhcL3VzZXJcL2xvZ2luIiwiaWF0IjoxNjU5NTE5MzU2LCJleHAiOjE2NTk1MzM3NTYsIm5iZiI6MTY1OTUxOTM1NiwianRpIjoiRUNiQ3cyVGlVY3A3UjUxOCIsInN1YiI6ImQ5ZTVmODkzLWMwNmUtNDMxYi04OGU5LTQ2ZmVlYzhmNDk4ZCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.gb35KVgbo5rHZgSY44m_GhdxWU4N2kI3UAzTzXbTua8"
      }
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.token = ""
      state.username = ""
    }
  }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer