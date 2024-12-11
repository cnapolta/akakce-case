import { render, screen } from "../../utils/test-utils";
import { ProductDetailCard } from ".";
import { describe, it } from "vitest";

describe("ProductDetailCard", () => {
  const mockProduct = {
    mkName: "Apple",
    productName: "iPhone 15 128 GB",
    badge: "En Popüler",
    rating: 4,
    imageUrl: "/iphone15.jpg",
    storageOptions: ["128GB", "256GB"],
    countOfPrices: 94,
    price: 49449,
    freeShipping: true,
    lastUpdate: "yesterday",
  };

  it("renders basic product details", () => {
    render(<ProductDetailCard product={mockProduct} />);

    expect(screen.getByText("iPhone 15 128 GB")).toBeInTheDocument();
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("94 sellers")).toBeInTheDocument();
    expect(screen.getByText("En Popüler")).toBeInTheDocument();
  });

  it("renders storage options", () => {
    render(<ProductDetailCard product={mockProduct} />);

    mockProduct.storageOptions.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });
});
