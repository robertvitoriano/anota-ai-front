import ForgotPassword from 'pages/Unauth/ForgotPassword'
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
  },
  {
    component:ForgotPassword,
    title:'Forgot Password',
    path:'/forgot-password',
    icon:''
  }
]

export default routes