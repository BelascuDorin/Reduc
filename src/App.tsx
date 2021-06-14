import "./App.css";
import Home from "./home/Home";

import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  const products = [{ id: 3, name: "cartofi" }];

  return (
    <div>
      <Switch>
        <Route path="/">
          <Home products={products} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
