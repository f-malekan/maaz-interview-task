<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.checked);
};
</script>

<template>
  <label class="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      :checked="modelValue"
      class="peer hidden"
      @change="handleChange"
    />

    <span
      class="flex h-4 w-4 items-center justify-center rounded border-[1.5px] border-gray-200 transition peer-checked:border-primary peer-checked:bg-primary"
    >
      <svg
        v-if="modelValue"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.33415 2.5L3.75081 7.08333L1.66748 5"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>

    <span
      :class="[
        'cursor-pointer transition-colors',
        modelValue ? 'text-gray-800' : 'text-gray-500',
      ]"
    >
      {{ label }}
    </span>
  </label>
</template>
