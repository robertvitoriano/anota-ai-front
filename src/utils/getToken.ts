import { store } from "store"

const getToken = () => {
  const token = store.getState().auth.token
  if (token && token !== null) return token
  return undefined
}

export {
  getToken,
}
