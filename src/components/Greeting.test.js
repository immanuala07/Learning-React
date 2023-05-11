import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// Test Suite
describe("Greeting component", () => {
  // Test Spec
  test('renders "Hello World" as a text', () => {
    // Arrange - Set up the test data, test conditions, and test environment.
    render(<Greeting />);

    // Act - Run logic that should be tested.
    // ... nothing

    // Assert - Compare execution result with expected results.
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);

    // Checking with not so strict
    const outputElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();

    const paragraphText = screen.getByText("It's good to see you!");
    expect(paragraphText).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const paragraphText = screen.getByText("Changed!");
    expect(paragraphText).toBeInTheDocument();
  });

  test('doesnt renders "good to see you" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const paragraphText = screen.queryByText("It's good to see you!");
    expect(paragraphText).toBeNull();
  });
});
