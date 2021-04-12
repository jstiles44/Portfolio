import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import Resume from "./screens/Resume";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
