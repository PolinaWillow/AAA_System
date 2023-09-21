import {createContext} from 'react'

function noop() {}

export const AuthContext = createContext({
  token: null,
  userId: null,
  userLevel: null,
  login: noop,
  logout: noop,
  isAuth: false
})