import UpdateNotes from 'pages/Auth/common/notes/UpdateNote'
import ListNotes from './../pages/Auth/common/notes/ListNotes'

const routes = [

  {
    component:ListNotes,
    title:'Anotações',
    path:'/notes',
    icon:''
  },
  {
    component:UpdateNotes,
    title:'Anotações',
    path:'/note',
    icon:''
  }
]

export default routes