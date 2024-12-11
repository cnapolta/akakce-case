import { BaseProduct } from "~/types/product";

export interface ProductGridProps {
  products: BaseProduct[];
  onLoadMore: () => Promise<void>;
  hasMore: boolean;
  title: string;
}
