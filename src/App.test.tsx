import { render } from '@testing-library/react';
import App from './App';

test('it should render the menu component', () => {
  const {getByTestId} = render(<App />);
  expect(getByTestId("menu")).toBeInTheDocument();
})

test('it should render the footer component', () => {
  const {getByTestId} = render(<App />);
  expect(getByTestId("footer")).toBeInTheDocument();
})
