import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async Component', () => {

  test('renders posts if request succeeds', async () => {
    // Creating mock function for the fetch api
    window.fetch = jest.fn();

    // Fetching the resolved return value from async fetch mock function
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<Async />);
    
    // find function returns promise if the element is on the virtual dom.
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  })
  
});
