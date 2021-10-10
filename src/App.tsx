import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { commonRoutes } from './routes';
import { unauthRoutes } from './routes'

import { AuthLayout } from "layouts";

export default function App() {
  return (
    <Router>
      <Switch>
        {unauthRoutes.map((route, index) => (<Route exact={route.path === "/"} path={route.path} component={route.component} key={index} />))}
      </Switch>
      <AuthLayout>
        <Switch>
          {commonRoutes.map((route, index) => (<Route exact={route.path === "/"} path={route.path} component={route.component} key={index} />))}
        </Switch>
      </AuthLayout>
    </Router>
  );
}
