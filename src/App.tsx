import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Layout from './layouts/Auth'
import routes from './routes'
import ListNotes from './pages/Auth/common/notes/ListNotes'

export default function App() {
  console.log('ROUTES ', routes)
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((route)=>()=><Route exact={route.path==='/'?true:false} path={route.path} component ={route.component}/>)}
        </Switch>
      </Layout>
    </Router>
  );
}
