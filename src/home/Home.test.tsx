import { render } from "@testing-library/react";
import Home from "./Home";

test("site title renders correctly", () => {
  const { getByText } = render(<Home />);
  expect(getByText(/Exploreaza produse la reducere/i)).toBeInTheDocument();
});
