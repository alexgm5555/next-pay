import { render, screen } from '@testing-library/react';
import Home from "./page";

it('algo', ()=>{
  render(<Home />);
  const m = screen.getByText('docs');
  expect(m).toBeInTheDocument()
})
