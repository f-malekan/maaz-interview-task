import type { ProductType } from "~/types/product";

export const SORT_OPTIONS= [
  { id: 'count-asc', label: 'تعداد: کم به زیاد', value: 'count_asc' },
  { id: 'count-desc', label: 'تعداد: زیاد به کم', value: 'count_desc' },
  { id: 'rating-desc', label: 'رتبه: زیاد به کم', value: 'rating_desc' },
  { id: 'rating-asc', label: 'رتبه: کم به زیاد', value: 'rating_asc' },
];

export const SORT_STRATEGIES = {
  count_asc: (a: ProductType, b: ProductType) =>
    a.rating.count - b.rating.count,

  count_desc: (a: ProductType, b: ProductType) =>
    b.rating.count - a.rating.count,

  rating_asc: (a: ProductType, b: ProductType) =>
    a.rating.rate - b.rating.rate,

  rating_desc: (a: ProductType, b: ProductType) =>
    b.rating.rate - a.rating.rate,
}