import { configureStore } from '@reduxjs/toolkit'
import authReducer from './modules/auth/reducer'

export default configureStore({
  reducer: {
    auth: authReducer,
  },
})