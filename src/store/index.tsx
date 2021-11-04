import { configureStore } from '@reduxjs/toolkit'
import authReducer from './modules/auth/reducer'
import sidebarReducer from './modules/sidebar/reducer'
import loadingReducer from './modules/loading/reducer'
export default configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    loading:loadingReducer
  },
})