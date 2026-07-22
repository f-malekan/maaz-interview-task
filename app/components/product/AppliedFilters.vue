<script setup lang="ts">
import type { AppliedFilterType } from "~/types/product";

defineProps<{
  filters: AppliedFilterType[];
}>();

const emit = defineEmits<{
  (e: "remove", value: "cat" | "sort" | "search"): void;
}>();
</script>

<template>
  <div
    class="bg-white rounded-3xl shadow-[0_2px_3px_0_rgba(0,0,0,0.03)] flex items-center justify-between p-4 pr-6 mb-6"
  >
    <span class="text-gray-900 leading-4 text-sm font-medium"
      >فیلترهای اعمال شده</span
    >
    <div class="flex gap-3 items-center">
      <BaseTag
        v-for="(filter, index) in filters"
        :key="index"
        :label="filter.label"
        :icon="filter.icon"
        @remove="emit('remove', filter.slug)"
      />
    </div>
  </div>
</template>
