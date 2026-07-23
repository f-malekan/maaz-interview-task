<script setup lang="ts">
import type { Component } from "vue";

defineProps<{
  to: string;
  icon: Component;
  title: string;
  active?: boolean;
}>();

const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    :class="[
      'flex items-center gap-2 relative transition-colors duration-300',
      active ? 'text-primary' : 'text-secondary hover:text-primary',
    ]"
    @click="emit('click')"
  >
    <component :is="icon" class="w-4 h-4" />

    <span class="text-[13px] leading-6 font-medium text-nowrap">
      {{ title }}
    </span>
  </NuxtLink>

  <div v-if="active" class="size-1.25 rounded-full bg-primary mx-auto" />
</template>
