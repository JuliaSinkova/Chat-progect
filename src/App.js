import "./App.css";
import Login from "./components/web/authorization/Login/Login";
import Signup from "./components/web/authorization/Signup/Signup";
import Homepage from "./components/web/social/Homepage/Homepage";
import Active from "./components/web/social/Active";
import Finished from "./components/web/social/Finished";
import Saved from "./components/web/social/Saved";
import ResetPassword from "./components/web/authorization/ResetPassword/ResetPassword";
import UpdatePassword from "./components/web/authorization/UpdatePassword/UpdatePassword";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const token = useSelector((state) => state?.auth?.token);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {token ? <Homepage /> : <Login />}
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/homepage">
          <Homepage />
        </Route>
        <Route exact path="/active">
          <Active />
        </Route>
        <Route exact path="/finished">
          <Finished />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>

        <Route exact path="/reset-password">
          <ResetPassword />
        </Route>
        <Route exact path="/update-password">
          <UpdatePassword />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
