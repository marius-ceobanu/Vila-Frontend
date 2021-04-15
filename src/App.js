import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path={"/"} component={HomePage} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
