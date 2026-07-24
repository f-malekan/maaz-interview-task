<script setup lang="ts">
import type { BreadcrumbItemType } from "~/types/commonTypes";

defineProps<{
  items: BreadcrumbItemType[];
}>();
</script>

<template>
  <div class="flex text-gray-500 gap-2 items-center">
    <NuxtLink to="/">
      <HomeIcon class="w-4.5 h-4.5" />
    </NuxtLink>

    <template v-for="(item, index) in items" :key="index">
      <ArrowLeftIcon class="w-5 h-5" />
      <NuxtLink :to="item.to" class="text-sm leading-4 font-bold">
        {{ item.title }}
      </NuxtLink>
    </template>
  </div>
</template>
