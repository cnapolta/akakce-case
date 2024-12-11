import { ProductPageResponse, ProductDetails } from "~/types/product";
import { fetchWithErrorHandling } from "../api/api";
import { config } from "~/config/env";

const BASE_URL = config.api.baseUrl;

export const productService = {
  getHomePage: async (): Promise<ProductPageResponse> => {
    return fetchWithErrorHandling<ProductPageResponse>(`${BASE_URL}/page.json`);
  },

  getProductDetails: async (productCode: number): Promise<ProductDetails> => {
    return fetchWithErrorHandling<ProductDetails>(
      `${BASE_URL}/product${productCode}.json`
    );
  },

  getNextPage: async (nextUrl: string): Promise<ProductPageResponse> => {
    return fetchWithErrorHandling<ProductPageResponse>(nextUrl);
  },
};
