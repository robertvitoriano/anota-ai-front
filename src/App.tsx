import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from 'pages/Unauth/SignIn'
import ListNotes from 'pages/Auth/common/notes/ListNotes'
import { commonRoutes } from './routes';
import { unauthRoutes } from './routes'
import { AuthLayout } from "layouts";
import { useSelector } from 'react-redux'
import { IReduxState } from "store/types";
export default function App() {

  const token = useSelector((state:IReduxState) => state.auth.token)

  return (
    <>
      <Router>
        {!token ?
          <>
            <Switch>
              <Route path={"/"} exact component={LoginPage} />
              {unauthRoutes.map((route, index) => (<Route path={route.path} component={route.component} key={index} />))}
            </Switch> </> :
          <AuthLayout>
            <Switch>
              <Route
                path={"/"}
                exact
                component={ListNotes} />
              {commonRoutes.map((route, index) => (<Route
                exact
                path={route.path}
                component={route.component}
                key={index} />))}
            </Switch>
          </AuthLayout>}
      </Router>
    </>
  );
}
