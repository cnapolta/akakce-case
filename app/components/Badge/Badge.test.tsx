import { render, screen } from "../../utils/test-utils";
import { Badge } from ".";
import { describe, it } from "vitest";

describe("Badge", () => {
  it("renders badge content", () => {
    render(<Badge>Free Shipping</Badge>);
    expect(screen.getByText("Free Shipping")).toBeInTheDocument();
  });
});
