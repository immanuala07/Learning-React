import { render, screen } from '@testing-library/react';
import Greeting  from './Greeting';

test('renders Hello World as a text', () => {
  // Arrange - Set up the test data, test conditions, and test environment. 
  render(<Greeting />);

  // Act - Run logic that should be tested.
  // ... nothing
  
  // Assert - Compare execution result with expected results.
  const helloWorldElement = screen.getByText('Hello World!');
  expect(helloWorldElement).toBeInTheDocument();
});
