import { ProductCard } from "../ProductCard";
import { HorizontalProductListProps } from "./types";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export function HorizontalProductList({
  products,
  title,
}: HorizontalProductListProps) {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(ref);

  return (
    <section className="space-y-6 mt-4">
      <h2 className="text-2xl font-bold px-4">{title}</h2>
      <div
        ref={ref}
        {...events}
        className="relative w-full overflow-x-auto pb-4 scrollbar-hide select-none "
      >
        <div className="flex space-x-4 px-4">
          {products.map((product) => (
            <div key={product.code} className="flex-none w-80">
              <ProductCard product={product} variant="horizontal" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
