import { render } from "@testing-library/react";
import Menu from "./Menu";

test("site title renders correctly", () => {
  const { getByText } = render(<Menu />);
  expect(getByText("Reduc")).toBeInTheDocument();
});

test("Menu color is white", () => {
  const { getByTestId } = render(<Menu />);
  expect(getByTestId("menu")).toHaveStyle(
    `background-color: rgb(255, 255, 255)`
  );
});
