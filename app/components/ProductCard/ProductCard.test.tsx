import { ProductCard } from ".";
import { describe, it } from "vitest";
import { render, screen } from "../../utils/test-utils";
import { config } from "~/config/env";

const mockProduct = {
  code: 101,
  name: "Iphone 13 128 GB",
  imageUrl: `${config.cdn.baseUrl}/x/apple/iphone-13.jpg`,
  dropRatio: 5,
  price: 20567,
  countOfPrices: 96,
  followCount: 5000,
  url: `${config.api.baseUrl}/product101.json`,
};

describe("ProductCard", () => {
  it("renders product information correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Iphone 13 128 GB")).toBeInTheDocument();
    expect(screen.getByText("96 satıcı")).toBeInTheDocument();
    expect(screen.getByText("5.000+ takip")).toBeInTheDocument();
    expect(screen.getByText("%5 indirim")).toBeInTheDocument();
  });

  it("renders with horizontal variant", () => {
    render(<ProductCard product={mockProduct} variant="horizontal" />);

    const container = screen.getByRole("link");
    expect(container).toHaveClass("h-full");
  });

  it("does not show discount badge when dropRatio is 0", () => {
    const productWithNoDiscount = { ...mockProduct, dropRatio: 0 };
    render(<ProductCard product={productWithNoDiscount} />);

    expect(screen.queryByText(/indirim/)).not.toBeInTheDocument();
  });

  it("renders product image correctly", () => {
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByAltText("Iphone 13 128 GB");
    expect(image).toHaveAttribute("src", mockProduct.imageUrl);
  });
});
