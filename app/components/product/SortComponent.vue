<script setup lang="ts">
import { SORT_OPTIONS } from "~/constants/product";

defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <BaseDropdown title="مرتب سازی">
    <div class="px-4 pb-6 pt-1 space-y-5">
      <BaseRadioButton
        v-for="item in SORT_OPTIONS"
        :key="item.id"
        :label="item.label"
        :value="item.value"
        :model-value="modelValue"
        @update:model-value="emit('update:modelValue', item.value)"
      />
    </div>
  </BaseDropdown>
</template>
