import { configureStore } from '@reduxjs/toolkit'
import authReduce from './modules/auth/reducer'

export default configureStore({
  reducer: {
    auth: authReduce,
  },
})