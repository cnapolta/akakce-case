export interface BaseProduct {
  code: number;
  name: string;
  imageUrl: string;
  dropRatio: number;
  price: number;
  countOfPrices: number;
  followCount: number;
  url: string;
}

export interface ProductDetails {
  mkName: string;
  productName: string;
  badge: string;
  rating: number;
  imageUrl: string;
  storageOptions: string[];
  countOfPrices: number;
  price: number;
  freeShipping: boolean;
  lastUpdate: string;
}

export interface ProductPageResponse {
  horizontalProductList: BaseProduct[];
  productList: BaseProduct[];
  nextUrl: string | null;
}
