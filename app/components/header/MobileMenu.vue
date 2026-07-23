<script setup lang="ts">
const open = defineModel<boolean>("open");
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 bg-black/40 z-40"
        @click="open = false"
      />
    </Transition>

    <Transition name="slide">
      <aside
        v-if="open"
        class="fixed top-0 right-0 h-screen w-72 bg-white z-50 p-6"
      >
        <Navbar class="flex-col items-start" @select="open = false" />
      </aside>
    </Transition>
  </Teleport>
</template>
