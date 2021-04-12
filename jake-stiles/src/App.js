import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./screens/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
