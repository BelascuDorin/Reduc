import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("it should render the menu component", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("menu")).toBeInTheDocument();
});

test("it should render the footer component", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("footer")).toBeInTheDocument();
});

test("Pressing site name will go to home page", () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <App />
    </Router>
  );

  const reducButton = screen.getByText(/Reduc/i);
  expect(reducButton).toBeInTheDocument();

  userEvent.click(reducButton);
});
