import { configureStore } from '@reduxjs/toolkit'
import authReducer from './modules/auth/reducer'
import sidebarReducer from './modules/sidebar/reducer'
export default configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
  },
})