import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
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

test("Pressing site name will go to home page", async () => {
  const history = createMemoryHistory();

  render(
    <Router history={history}>
      <App />
    </Router>,
  );

  const reducButton = screen.getByText("Reduc");
  expect(reducButton).toBeInTheDocument();

  userEvent.click(reducButton);

  expect(screen.getByTestId("home-screen")).toBeInTheDocument();
});
