import ListNotes from './../pages/Auth/common/notes/ListNotes'
import Login from './../pages/Unauth/SignIn'

const routes = [

  {
    component:ListNotes,
    title:'Anotações',
    path:'/notes',
    icon:''
  },
  {
    component:Login,
    title:'Login',
    path:'/login',
    icon:''
  }
]

export default routes