<script setup lang="ts">
defineProps<{
  image?: string;
  title?: string;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>

<template>
  <div
    class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    @click.self="emit('close')"
  >
    <img
      :src="image"
      :alt="title"
      class="max-w-[90vw] max-h-[90vh] object-contain"
    />
  </div>
</template>