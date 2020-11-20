import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./Components/TinderCards/TinderCards";
import SwipeButtons from "./Components/SwipeButtons/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chats">
            <Header backButton="/" />
            <h1>Chat Page</h1>
          </Route>
          <Route path="/contact"></Route>
          <Route path="/">
            <Header />
            <TinderCards></TinderCards>
            <SwipeButtons></SwipeButtons>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
