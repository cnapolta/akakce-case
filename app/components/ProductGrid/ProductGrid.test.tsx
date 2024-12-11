import ProductGrid from "~/components/ProductGrid";
import { render, screen } from "../../utils/test-utils";
import { describe, it } from "vitest";

describe("ProductGrid", () => {
  const mockProducts = [
    {
      code: 101,
      name: "Iphone 13",
      imageUrl: "/iphone.jpg",
      dropRatio: 5,
      price: 20567,
      countOfPrices: 96,
      followCount: 5000,
      url: "/product101.json",
    },
  ];

  const mockLoadMore = async () => {};

  it("renders products in grid", () => {
    render(
      <ProductGrid
        title="All Products"
        products={mockProducts}
        onLoadMore={mockLoadMore}
        hasMore={true}
      />
    );
    expect(screen.getByText("All Products")).toBeInTheDocument();
    expect(screen.getByText("Iphone 13")).toBeInTheDocument();
  });
});
