<script setup lang="ts">
import type { ProductType } from "~/types/product";

const props = defineProps<{
  product: ProductType;
}>();

const productInfo = computed(() => [
  {
    label: "قیمت",
    value: `${props.product.price.toLocaleString("fa-IR")} تومان`,
  },
  {
    label: "توضیحات",
    value: props.product.description,
    type: "description",
  },
  {
    label: "دسته بندی",
    value: props.product.category,
  },
  {
    label: "رتبه",
    value: props.product.rating.rate,
  },
  {
    label: "تعداد",
    value: props.product.rating.count,
  },
]);
</script>

<template>
  <div
    class="bg-white p-6 rounded-3xl shadow-[0_1px_2px_0_rgba(0,0,0,0.06)] space-y-3"
  >
    <h2 class="text-xl leading-6 font-bold text-secondary mb-4">مشخصات فنی</h2>
    <div
      v-for="item in productInfo"
      :key="item.label"
      class="grid grid-cols-4 gap-3"
    >
      <div
        class="flex items-center text-sm leading-5.5 bg-gray-25 font-medium text-gray-600 p-3 rounded-tl rounded-tr-2xl rounded-br-2xl rounded-bl"
      >
        {{ item.label }}
      </div>

      <div
        class="text-[13px] py-3 px-4 leading-5.5 font-bold col-span-3 bg-gray-25 text-gray-800 rounded-tl-2xl rounded-tr rounded-br rounded-bl-2xl"
        :class="item.type === 'description' ? 'leading-8' : ''"
      >
        {{ item.value }}
      </div>
    </div>
  </div>
</template>
