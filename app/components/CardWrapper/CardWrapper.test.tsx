import { render, screen } from "../../utils/test-utils";
import { CardWrapper } from ".";
import { describe, it, vi } from "vitest";

describe("CardWrapper", () => {
  const defaultProps = {
    className: "test-class",
    to: "/test-route",
    children: <span>Test Content</span>,
  };

  it("renders as a Link when noLink is false", () => {
    render(<CardWrapper {...defaultProps} noLink={false} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/test-route");
    expect(link).toHaveClass("test-class");
    expect(link).toHaveTextContent("Test Content");
  });

  it("renders as a div when noLink is true", () => {
    render(<CardWrapper {...defaultProps} noLink={true} />);
    const content = screen.getByText("Test Content");
    expect(content.parentElement).toHaveClass("test-class");
  });

  it("calls onClick when clicked as div", () => {
    const handleClick = vi.fn();
    render(
      <CardWrapper {...defaultProps} noLink={true} onClick={handleClick} />
    );

    screen.getByText("Test Content").parentElement?.click();
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders children correctly", () => {
    const testContent = "Special Test Content";
    render(
      <CardWrapper {...defaultProps}>
        <span>{testContent}</span>
      </CardWrapper>
    );

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
