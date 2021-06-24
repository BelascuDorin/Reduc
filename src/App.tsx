import { useEffect, useState } from "react";
import "./App.css";
import Home from "./home/Home";
import axios from "axios";

import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([
    { id: 3, name: "Loading", category: "", shop: "", position_on_the_map: {} },
  ]);

  const fetchProducts = async () => {
    await axios.get("http://localhost:3000/products").then((resp) => {
      setProducts(resp.data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
