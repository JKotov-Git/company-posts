import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import LoginPage from "../src/pages/LoginPage/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
