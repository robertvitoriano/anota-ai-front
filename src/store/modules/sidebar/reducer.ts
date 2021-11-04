import { createSlice } from '@reduxjs/toolkit'

export const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    collapsed: false,
  },
  reducers: {
    setCollapsed: (state, action) => {
      state.collapsed = action.payload
    },
  },
})


export const { setCollapsed } = sideBarSlice.actions

export default sideBarSlice.reducer

