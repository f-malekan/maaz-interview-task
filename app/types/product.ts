export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: ProductRateType;
}

export interface ProductRateType {
  rate: number;
  count: number;
}
