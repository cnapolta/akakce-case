import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { productService } from "~/services/product/product";
import { ApiError } from "~/utils/error";
import { Container } from "~/components/Container";
import { ProductDetailCard } from "~/components/ProductDetailCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Akakce Test Case | Detay" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { code } = params;

  if (!code || isNaN(Number(code))) {
    throw new Response("Invalid product code", { status: 400 });
  }

  try {
    const product = await productService.getProductDetails(Number(code));
    return json(product);
  } catch (error) {
    if (error instanceof ApiError) {
      throw new Response(error.message, { status: error.status });
    }
    throw new Response("Internal Server Error", { status: 500 });
  }
}

export default function ProductDetail() {
  const product = useLoaderData<typeof loader>();

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <Container>
        <Link
          to="/"
          className="inline-flex items-center mb-6 text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>
        <ProductDetailCard product={product} />
      </Container>
    </main>
  );
}
