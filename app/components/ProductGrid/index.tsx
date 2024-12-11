import { ProductCard } from "../ProductCard";
import { useInfiniteScroll } from "~/hooks/useInfiniteScroll";
import { ProductGridProps } from "./types";

export default function ProductGrid({
  products,
  onLoadMore,
  hasMore,
  title,
}: ProductGridProps) {
  const { targetRef, loading } = useInfiniteScroll(onLoadMore, {
    enabled: hasMore,
  });

  return (
    <section className="space-y-8 mt-4">
      <h2 className="text-2xl font-bold px-4">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4">
        {products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>

      {hasMore && (
        <div ref={targetRef} className="flex justify-center p-4">
          {loading ? (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
          ) : (
            <span className="text-gray-500">Load more products</span>
          )}
        </div>
      )}
    </section>
  );
}
