import { render, screen } from '@testing-library/react';
import PersonalPortfolio from '../PersonalPortfolio.js';

test('renders learn react link', () => {
  render(<PersonalPortfolio />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();  
});

