import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio introduction', () => {
  render(<App />);
  expect(screen.getByText(/Hola, Soy Ramiro Hernández/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Proyectos/i })).toBeInTheDocument();
});
