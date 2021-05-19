import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import ContactState from "./context/contact/ContactState";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import setAuthToken from './utils/setAuthToken'
import { PrivateRoute } from "./components/routing/PrivateRoute";

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <>
              <Navbar />
              <div className="container">
                <Alert />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/about" component={About} />
                  <PrivateRoute exact path="*" component={Login} />
                </Switch>
              </div>
            </>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
