<script setup lang="ts">
defineProps<{
  categories: string[];
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <BaseDropdown title="دسته بندی">
    <div class="px-4 pb-6 pt-1 space-y-5">
      <BaseCheckbox
        v-for="category in categories"
        :key="category"
        :label="category"
        :model-value="modelValue === category"
        @update:model-value="emit('update:modelValue', category)"
      />
    </div>
  </BaseDropdown>
</template>
