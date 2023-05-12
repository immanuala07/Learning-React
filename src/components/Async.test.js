import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async Component', () => {

  test('renders posts if request succeeds', async () => {
    render(<Async />);
    
    // find function returns promise if the element is on the virtual dom.
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  })
  
});
