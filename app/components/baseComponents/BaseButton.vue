<script setup lang="ts">
import type { Component } from "vue";

withDefaults(
  defineProps<{
    label: string;
    variant?: "primary" | "secondary";
    size?: "lg" | "md";
    icon?: Component;
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
    size: "lg",
    disabled: false,
    icon: undefined,
  },
);

const variantClasses = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary:
    "bg-white text-primary border-[1.5px] border-gray-50 hover:bg-gray-50",
};

const sizeClasses = {
  md: "px-4 py-[10px] text-xs rounded-xl leading-6",
  lg: "px-4 py-3 text-sm rounded-2xl leading-4",
};

defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center gap-2 transition-colors font-bold',
      variantClasses[variant],
      sizeClasses[size],
      disabled && 'cursor-not-allowed opacity-50',
    ]"
    @click="$emit('click')"
  >
    <span>{{ label }}</span>

    <component :is="icon" v-if="icon" class="h-4 w-4" />
  </button>
</template>
