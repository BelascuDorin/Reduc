import { useState } from "react";
import "./App.css";
import Home from "./home/Home";

import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Castraveti",
      category: "",
      shop: "",
      position_on_the_map: {},
    },
    {
      id: 2,
      name: "rosii",
      category: "legume",
      shop: "Profi",
      position_on_the_map: {
        latitude: 14.2,
        longitude: 13.3,
      },
    },
    {
      id: 3,
      name: "porumb",
      category: "legume",
      shop: "Kaufland",
      position_on_the_map: {
        latitude: 12.24,
        longitude: 15.45,
      },
    },
  ]);

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
