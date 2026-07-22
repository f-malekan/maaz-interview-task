<script setup lang="ts">
import LeftIcon from "~/components/icons/LeftIcon.vue";

interface Props {
  title: string;
  image: string;
  id: number;
}

const props = defineProps<Props>();

const handleClick = () => {
  navigateTo(`/products/${props.id}`);
};
</script>

<template>
  <article
    class="rounded-3xl bg-white p-2 pb-3 shadow-sm border border-gray-50"
  >
    <img
      :src="image"
      :alt="title"
      class="h-42.5 w-full rounded-2xl object-cover"
    />

    <h3 class="my-4 text-sm font-bold text-secondary leading-6 truncate px-2">
      {{ title }}
    </h3>

    <BaseButton
      class="mx-1 w-[calc(100%-8px)]"
      variant="secondary"
      label="مشاهده جزئیات"
      :icon="LeftIcon"
      @click="handleClick"
    />
  </article>
</template>
