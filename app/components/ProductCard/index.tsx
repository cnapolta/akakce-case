import { Link } from "@remix-run/react";
import { formatPrice } from "~/utils/common";
import { ProductCardProps } from "./types";

export function ProductCard({
  product,
  variant = "default",
}: ProductCardProps) {
  const isHorizontal = variant === "horizontal";

  return (
    <Link
      to={`/product/${product.code}`}
      className={`block rounded-lg shadow hover:shadow-lg transition-shadow bg-white
        ${isHorizontal ? "h-full" : "w-full sm:max-w-sm"}`}
    >
      <div className={`${isHorizontal ? "flex p-3 gap-3" : "p-3"}`}>
        <div
          className={`
          aspect-square overflow-hidden rounded-lg
          ${isHorizontal ? "w-24 h-24 flex-shrink-0" : "w-full max-h-48"}
        `}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-grow space-y-1.5">
          <h3
            className={` font-semibold text-base line-clamp-2       ${
              !isHorizontal && "mt-4 "
            }`}
          >
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">
              {formatPrice(product.price)}
            </span>
            {product.dropRatio > 0 && (
              <span className="text-xs text-green-500 px-1.5 py-0.5 bg-green-50 rounded">
                %{product.dropRatio} indirim
              </span>
            )}
          </div>
          <div className="flex items-center text-xs text-gray-600 gap-3">
            <span>{product.countOfPrices} satıcı</span>
            <span>{product.followCount.toLocaleString()}+ takip</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
