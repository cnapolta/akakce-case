import { render, screen } from "../../utils/test-utils";
import { Container } from ".";
import { describe, it } from "vitest";

describe("Container", () => {
  it("renders children correctly", () => {
    render(
      <Container>
        <div>Test Content</div>
      </Container>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies additional className", () => {
    const { container } = render(
      <Container className="test-class">
        <div>Content</div>
      </Container>
    );
    expect(container.firstChild).toHaveClass("test-class");
  });
});
