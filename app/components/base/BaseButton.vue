<script setup lang="ts">
import type { Component } from "vue";

withDefaults(
  defineProps<{
    label?: string;
    variant?: "primary" | "secondary";
    size?: "lg" | "md";
    icon?: Component;
    iconOnly?: boolean;
    disabled?: boolean;
    iconClass?: string;
  }>(),
  {
    variant: "primary",
    size: "lg",
    iconOnly: false,
    disabled: false,
  },
);

const emit = defineEmits<{
  click: [];
}>();

const variantClasses = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary:
    "bg-white text-primary border-[1.5px] border-gray-50 hover:bg-gray-50",
};

const sizeClasses = {
  md: "px-4 py-[10px] text-xs leading-6 rounded-xl",
  lg: "px-4 py-3 text-sm leading-4 rounded-2xl",
};

const iconOnlyClasses = "p-3 rounded-lg border border-primary bg-white";
</script>

<template>
  <button
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center transition-colors font-bold cursor-pointer',

      iconOnly ? iconOnlyClasses : [variantClasses[variant], sizeClasses[size]],

      !iconOnly && 'gap-2',

      disabled && 'cursor-not-allowed opacity-50',
    ]"
    @click="emit('click')"
  >
 

    <span v-if="!iconOnly && label">
      {{ label }}
    </span>

       <component
      :is="icon"
      v-if="icon"
      class="size-4 shrink-0"
      :class="iconClass"
    />
  </button>
</template>
