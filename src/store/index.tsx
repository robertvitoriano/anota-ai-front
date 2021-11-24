/* eslint-disable import/no-anonymous-default-export */
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './modules/auth/reducer'
import sidebarReducer from './modules/sidebar/reducer'
import loadingReducer from './modules/loading/reducer'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  loading: loadingReducer
})

const persistReducerConfig = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistReducerConfig
})
const persistor = persistStore(store)

export  {
  store,
  persistor
}