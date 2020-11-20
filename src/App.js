import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./Components/TinderCards/TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>Chat</h1>
          </Route>
          <Route path="/contact">
            <h1>Contact</h1>
          </Route>
          <Route path="/">
            <h1>Homepage</h1>
            <TinderCards></TinderCards>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
