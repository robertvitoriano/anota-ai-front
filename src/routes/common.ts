import UpdateNotes from 'pages/Auth/common/notes/UpdateNote'
import ListNotes from './../pages/Auth/common/notes/ListNotes'

const routes = [

  {
    component:ListNotes,
    title:'Home',
    path:'/notes',
    icon:'HomeFilled'
  },
  {
    component:UpdateNotes,
    title:'Anotações',
    path:'/note/:id',
    icon:''
  }
]

export default routes