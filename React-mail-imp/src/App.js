import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Sendmail from "./components/Sendmail/Sendmail";
import { UserProvider } from "./components/UserContext/UserContext";

function App() {
  return (
    <UserProvider> 
      <div className="app">
        <Router>
          <Switch>
            <Route path="/sendmail">
              <Sendmail />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
