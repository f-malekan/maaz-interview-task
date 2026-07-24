<script setup lang="ts">
import type { Component } from "vue";
import CloseIcon from "../icons/CloseIcon.vue";

withDefaults(
  defineProps<{
    label: string;
    icon?: Component;
    removable?: boolean;
  }>(),
  {
    icon: undefined,
    removable: true,
  },
);

defineEmits<{
  (e: "remove"): void;
}>();
</script>

<template>
  <div
    class="inline-flex h-8 items-center gap-2.5 rounded-2xl bg-red-50 px-2 text-secondary font-medium leading-4 text-xs"
  >
    <component :is="icon" v-if="icon" class="h-4 w-4" />

    <span>{{ label }}</span>

    <button
      v-if="removable"
      type="button"
      class="cursor-pointer"
      @click="$emit('remove')"
    >
      <CloseIcon class="h-4 w-4" />
    </button>
  </div>
</template>
