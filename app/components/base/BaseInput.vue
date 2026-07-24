<script setup lang="ts">
const model = defineModel<string>();

withDefaults(
  defineProps<{
    placeholder?: string;
    disabled?: boolean;
  }>(),
  {
    placeholder: "",
    disabled: false,
  },
);
</script>

<template>
  <div
    class="flex h-10 items-center rounded-xl border border-primary text-gray-900 bg-gray-25 px-4 font-medium leading-6 text-[13px]"
  >
    <slot name="prepend" />

    <input
      v-model="model"
      :placeholder="placeholder"
      :disabled="disabled"
      class="flex-1 bg-transparent text-gray-800 outline-none placeholder:text-gray-400"
    />

    <slot name="append" />
  </div>
</template>
