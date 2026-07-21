<script setup lang="ts">
defineProps<{
  label: string;
  value: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <label class="flex items-center gap-2 cursor-pointer">
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      class="sr-only"
      @change="emit('update:modelValue', value)"
    />

    <span
      class="flex h-4 w-4 items-center justify-center rounded-full border-[1.5px] transition"
      :class="modelValue === value ? 'border-primary' : 'border-gray-200'"
    >
      <span
        v-if="modelValue === value"
        class="h-2 w-2 rounded-full bg-primary"
      />
    </span>

    <span
      class="text-xs leading-4 font-medium"
      :class="modelValue === value ? 'text-gray-800' : 'text-gray-500'"
    >
      {{ label }}
    </span>
  </label>
</template>
