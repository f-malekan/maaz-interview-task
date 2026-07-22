<script setup lang="ts">
const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <div
    class="bg-black/50 backdrop-blur-[1px] p-2 rounded-[13px] inline-block cursor-pointer"
    @click="emit('click')"
  >
    <ZoomInIcon />
  </div>
</template>
