import Login from './../pages/Unauth/SignIn'
import SignUp from './../pages/Unauth/SignUp'

const routes = [
  {
    component:Login,
    title:'Login',
    path:'/login',
    icon:''
  },
  {
    component:SignUp,
    title:'SinUp',
    path:'/signup',
    icon:''
  }
]

export default routes