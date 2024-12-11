import { json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { productService } from "~/services/product/product";
import { ApiError } from "~/utils/error";
import { BaseProduct, ProductPageResponse } from "~/types/product";
import ProductGrid from "~/components/ProductGrid";
import { Container } from "~/components/Container";
import { HorizontalProductList } from "~/components/HorizontalProductList";

export const meta: MetaFunction = () => {
  return [
    { title: "Akakce Test Case | Anasayfa" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  try {
    const data = await productService.getHomePage();
    return json<ProductPageResponse>(data);
  } catch (error) {
    if (error instanceof ApiError) {
      throw new Response(error.message, { status: error.status });
    }
    throw new Response("Internal Server Error", { status: 500 });
  }
}

export default function Index() {
  const initialData = useLoaderData<typeof loader>();
  const [products, setProducts] = useState<BaseProduct[]>(
    initialData.productList
  );
  const [nextUrl, setNextUrl] = useState<string | null>(initialData.nextUrl);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (!nextUrl || loading) return;

    setLoading(true);
    try {
      const data = await productService.getNextPage(nextUrl);
      setProducts((prev) => [...prev, ...data.productList]);
      setNextUrl(data.nextUrl);
    } catch (error) {
      console.error("Failed to load more products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <Container className="">
        <HorizontalProductList
          title="Öne Çıkan Ürünler"
          products={initialData.horizontalProductList}
        />

        <ProductGrid
          title="Tüm Ürünler"
          products={products}
          onLoadMore={loadMore}
          hasMore={!!nextUrl}
        />
      </Container>
    </main>
  );
}
