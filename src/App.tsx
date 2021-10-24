import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from 'pages/Unauth/SignIn'
import { commonRoutes } from './routes';
import { unauthRoutes } from './routes'

import { AuthLayout } from "layouts";

export default function App() {
  return (
    <Router>
        <div>
      <Switch>
      <Route path="/" exact component={LoginPage} />
        {unauthRoutes.map((route, index) => (<Route  path={route.path} component={route.component} key={index} />))}
      </Switch>
        </div>
      <AuthLayout>
        <Switch>
          {commonRoutes.map((route, index) => (<Route path={route.path} component={route.component} key={index} />))}
        </Switch>
      </AuthLayout>
    </Router>
  );
}
