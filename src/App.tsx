import { useEffect, useState } from "react";
import "./App.css";
import Home from "./home/Home";

import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([
    {
      id: 3,
      name: "Castraveti",
      category: "",
      shop: "",
      position_on_the_map: {},
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
