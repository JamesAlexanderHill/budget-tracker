import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";

import { useAuth, ProvideAuth } from './state/auth';

import theme from "./util/theme";

// import P01Home from './pages/01-home';
import P02Login from './pages/02-login';
import P03Dashboard from './pages/03-dashboard';

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const App = () => {

  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <P02Login />
          </Route>
          <PrivateRoute path="/">
            <P03Dashboard AuthButton={<AuthButton />} />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
