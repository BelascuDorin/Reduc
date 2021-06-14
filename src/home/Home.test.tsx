import { render, screen } from "@testing-library/react";
import Home from "./Home";
import ProductType from "../types/Product";
import axios from "axios";

const defaultProducts = [
  { id: 1, name: "cartofi" },
  { id: 2, name: "patrunjel" },
];

const getProducts_MockData = async () => {
  let products = defaultProducts;
  await axios.get("http://localhost:3000/products").then((resp) => {
    products = resp.data;
  });

  return products;
};

test("site title renders correctly", () => {
  render(<Home products={defaultProducts} />);
  expect(
    screen.getByText(/Exploreaza produse la reducere/i),
  ).toBeInTheDocument();
});

test("all products are displayed", async () => {
  let products = await getProducts_MockData();

  render(<Home products={products} />);

  products.forEach((p: ProductType) => {
    expect(screen.getAllByText(new RegExp(p.name, "i"))).toBeTruthy();
  });
});
