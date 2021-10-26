export const signin = (token:string) => ({
  type: 'SIGNIN_REQUESTED',
  payload: {
   token,
  }
})