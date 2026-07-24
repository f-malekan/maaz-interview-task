<script setup lang="ts">
defineProps<{
  title: string;
}>();

const isOpen = ref(false);
</script>

<template>
  <div
    class="bg-white rounded-3xl shadow-[0_2px_3px_0_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300"
    :class="[isOpen ? 'max-h-80' : 'max-h-12']"
  >
    <button
      type="button"
      class="flex w-full items-center justify-between p-4"
      @click="isOpen = !isOpen"
    >
      <span class="filter-label">
        {{ title }}
      </span>

      <DownIcon
        :class="[
          'text-gray-500 w-4 h-4 transition-transform duration-300',
          { 'rotate-180': isOpen },
        ]"
      />
    </button>

    <slot />
  </div>
</template>
