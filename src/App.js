import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import Welcome from "./welcome";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const { loginWithPopup, loginWithRedirect, user, isAuthenticated } =
    useAuth0();
  const dispatch = useDispatch();

  const onLogin = () => {
    loginWithPopup();
    dispatch(addUser(user));
  };

  //{user ? dispatch(addUser(user)) : null}
  return (
    <div>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? (
            <Redirect from="/" to="/dashboard" />
          ) : (
            <div className="App">
              <button onClick={onLogin}>Login with Popup</button>
              <button onClick={loginWithRedirect}>Login with Redirect</button>

              <h1>
                {" "}
                User Is {isAuthenticated ? "Logged IN" : "Not Logged IN"}
              </h1>
              <pre style={{ textAlign: "start" }}>
                {" "}
                {JSON.stringify(user, null, 2)}{" "}
              </pre>
            </div>
          )}
        </Route>
        <Route path="/dashboard">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
