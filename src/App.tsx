import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from 'pages/Unauth/SignUp'
import { commonRoutes } from './routes';
import { unauthRoutes } from './routes'

import { AuthLayout } from "layouts";

export default function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={LoginPage} />

        {unauthRoutes.map((route, index) => (<Route  path={route.path} component={route.component} key={index} />))}
      </Switch>
      <AuthLayout>
        <Switch>
          {commonRoutes.map((route, index) => (<Route path={route.path} component={route.component} key={index} />))}
        </Switch>
      </AuthLayout>
    </Router>
  );
}
