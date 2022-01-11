import "./App.css";
import Navigation from "./components/Navigation";
import CharactersList from "./components/CharacterList";
import IndividualCharacter from "./components/IndividualCharacter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import LinkedInPage from "./components/LinkedInPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Navigation />
          <Route exact path="/linkedin" component={LinkedInCallback} />
          <Route path="/" component={LinkedInPage} />
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/characters/:id">
              <IndividualCharacter />
            </Route>
            <Route path="/characters">
              <CharactersList />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
