import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import CreateAccount from "../src/pages/CreateAccount/CreateAccount";
import CreatePost from "../src/pages/CreatePost/CreatePost";
import ReadPost from "../src/pages/ReadPost/ReadPost";
import Header from "../src/components/header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/readPost">
          <Header />
            <ReadPost />
          </Route>
          <Route path="/createPost">
            <Header />
            <CreatePost />
          </Route>
          <Route path="/createAccount">
            <CreateAccount />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Header />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
