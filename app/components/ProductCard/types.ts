import { BaseProduct } from "~/types/product";

export interface ProductCardProps {
  product: BaseProduct;
  variant?: "default" | "horizontal";
}
