import { render, screen } from "../../utils/test-utils";
import { HorizontalProductList } from ".";
import { describe, it } from "vitest";

describe("HorizontalProductList", () => {
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

  it("renders title and products", () => {
    render(
      <HorizontalProductList
        title="Featured Products"
        products={mockProducts}
      />
    );
    expect(screen.getByText("Featured Products")).toBeInTheDocument();
    expect(screen.getByText("Iphone 13")).toBeInTheDocument();
  });
});
