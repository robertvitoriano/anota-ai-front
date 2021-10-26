export const signin = (token:string) =>{
  console.log('Token ', token)
 return { type: 'SIGNIN_REQUESTED',
  payload: {
   token,
  }}
}