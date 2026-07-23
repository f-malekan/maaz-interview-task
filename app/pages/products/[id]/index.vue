<script setup lang="ts">
import type { ProductType } from "~/types/product";

const route = useRoute();

const {
  data: product,
  pending,
  error,
} = await useFetch<ProductType>(
  `https://fakestoreapi.com/products/${route.params.id}`,
  {
    key: `product-${route.params.id}`,
  },
);

const breadcrumb = computed(() => [
  {
    title: "لیست محصولات",
    to: "/products",
  },
  {
    title: product.value?.title ?? "",
    to: `/products/${product.value?.id}`,
  },
]);

useSeoMeta({
  title: product.value?.title,
  description: product.value?.description,
  ogTitle: product.value?.title,
  ogDescription: product.value?.description,
  ogImage: product.value?.image,
});
</script>

<template>
  <div>
    <div v-if="pending" class="rounded-3xl bg-white p-10 text-center">
      در حال دریافت اطلاعات محصول...
    </div>

    <CommonErrorState v-else-if="error || !product" />

    <template v-else>
      <BaseBreadcrumb :items="breadcrumb" class="mb-6.5" />

      <ProductImageSection :title="product.title" :image="product.image" />

      <ProductTechnicalSpec :product="product" />
    </template>
  </div>
</template>
