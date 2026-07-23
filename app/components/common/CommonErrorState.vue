<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    buttonLabel?: string;
    to?: string;
  }>(),
  {
    title: "خطایی رخ داده است",
    description: "لطفاً دوباره تلاش کنید.",
    buttonLabel: "بازگشت",
    to: "/products",
  },
);
</script>

<template>
  <div
    class="bg-white rounded-3xl shadow-[0_1px_2px_0_rgba(0,0,0,0.06)] py-16 px-6 text-center"
  >
    <h2 class="text-2xl font-bold text-secondary mb-3">
      {{ title }}
    </h2>

    <p class="text-gray-500 mb-8">
      {{ description }}
    </p>

    <NuxtLink :to="to">
      <BaseButton :label="buttonLabel" />
    </NuxtLink>
  </div>
</template>