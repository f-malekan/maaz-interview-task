<script setup lang="ts">
import CategoryIcon from "~/components/icons/CategoryIcon.vue";
import SearchIcon from "~/components/icons/SearchIcon.vue";
import SortIcon from "~/components/icons/SortIcon.vue";
import type { AppliedFilterType, ProductType } from "~/types/product";
import { SORT_STRATEGIES } from "~/constants/product";

const { data: products, error } = await useFetch<ProductType[]>(
  "https://fakestoreapi.com/products",
);

const categories = computed(() => {
  if (!products.value) return [];

  return [...new Set(products.value.map((item) => item.category))];
});

definePageMeta({
  layout: "default",
});

const sort = ref("");
const selectedCategory = ref("");
const searchedValue = ref("");

const appliedFilters = computed<AppliedFilterType[]>(() => {
  return [
    searchedValue.value.trim() && {
      slug: "search",
      label: searchedValue.value.trim(),
      icon: SearchIcon,
    },

    selectedCategory.value && {
      slug: "cat",
      label: selectedCategory.value,
      icon: CategoryIcon,
    },

    sort.value && {
      slug: "sort",
      label: sort.value,
      icon: SortIcon,
    },
  ].filter(Boolean) as AppliedFilterType[];
});

const showAppliesFiltersSection = computed(
  () => appliedFilters.value.length > 0,
);

const filteredProducts = computed(() => {
  if (!products.value) return [];

  let result = filterByCategory(products.value);
  result = filterBySearch(result);
  result = sortProducts(result);

  return result;
});

function removeFilter(slug: AppliedFilterType["slug"]) {
  if (slug === "search") {
    searchedValue.value = "";
    return;
  }
  if (slug === "cat") {
    selectedCategory.value = "";
    return;
  }
  if (slug === "sort") {
    sort.value = "";
  }
}

function filterByCategory(products: ProductType[]) {
  if (!selectedCategory.value) return products;

  return products.filter(
    (product) => product.category === selectedCategory.value,
  );
}

function filterBySearch(products: ProductType[]) {
  const search = searchedValue.value.trim().toLowerCase();

  if (!search) return products;

  return products.filter((product) =>
    product.title.toLowerCase().includes(search),
  );
}

function sortProducts(products: ProductType[]) {
  if (!sort.value) return products;

  const strategy = SORT_STRATEGIES[sort.value as keyof typeof SORT_STRATEGIES];

  return strategy ? [...products].sort(strategy) : products;
}

useSeoMeta({
  title: "لیست محصولات",
  description:
    "مشاهده لیست محصولات فروشگاه به همراه جستجو، دسته‌بندی و مرتب‌سازی.",
  ogTitle: "لیست محصولات",
  ogDescription: "مشاهده لیست محصولات فروشگاه.",
});
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <div>
      <SearchComponent @search="(products) => (searchedValue = products)" />
      <SortComponent v-model="sort" class="my-4" />
      <CategoryFilter v-model="selectedCategory" :categories="categories" />
    </div>

    <div class="col-span-2">
      <CommonErrorState
        v-if="error"
        title="خطا در دریافت محصولات"
        description="لطفاً دوباره تلاش کنید."
      />

      <CommonEmptyState
        v-else-if="!filteredProducts.length"
        title="محصولی پیدا نشد"
        description="نتیجه‌ای مطابق فیلترهای انتخاب شده وجود ندارد."
      />
      <template v-else>
        <AppliedFilters
          v-show="showAppliesFiltersSection"
          :filters="appliedFilters"
          @remove="(slug) => removeFilter(slug)"
        />
        <div class="grid grid-cols-3 gap-y-6 gap-x-4">
          <ProductCard
            v-for="product in filteredProducts"
            :id="product.id"
            :key="product.id"
            :title="product.title"
            :image="product.image"
          />
        </div>
      </template>
    </div>
  </div>
</template>
