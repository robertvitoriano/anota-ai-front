import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import routes from './routes'
import { AuthLayout } from "layouts";

export default function App() {
  return (
    <Router>
      <AuthLayout>
        <Switch>
          {routes.map((route, index) => (<Route exact={route.path === "/"} path={route.path} component={route.component} key={index} />))}
        </Switch>
      </AuthLayout>
    </Router>
  );
}
