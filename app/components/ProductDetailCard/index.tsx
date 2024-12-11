import { Badge } from "../Badge";
import { formatPrice } from "~/utils/common";
import { ProductDetailCardProps } from "./types";

export function ProductDetailCard({ product }: ProductDetailCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">{product.mkName}</span>
              {product.badge && <Badge>{product.badge}</Badge>}
            </div>
            <h1 className="text-3xl font-bold">{product.productName}</h1>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">
                {formatPrice(product.price)}
              </span>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Storage Options</h3>
              <div className="flex flex-wrap gap-2">
                {product.storageOptions.map((option) => (
                  <button
                    key={option}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>{product.countOfPrices} sellers</span>
              {product.freeShipping && (
                <Badge variant="success">Free Shipping</Badge>
              )}
              <span>Last updated: {product.lastUpdate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
