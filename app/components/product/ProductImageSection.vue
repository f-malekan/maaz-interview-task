<script setup lang="ts">
defineProps<{
  image: string;
  title: string;
}>();

const isZoomOpen = ref(false);

const openZoom = () => {
  isZoomOpen.value = true;
};

const closeZoom = () => {
  isZoomOpen.value = false;
};
</script>

<template>
  <div>
    <div
      class="bg-white p-6 rounded-3xl shadow-[0_1px_2px_0_rgba(0,0,0,0.06)] mb-6"
    >
      <h2 class="text-2xl leading-6 font-bold text-secondary mb-6">
        {{ title }}
      </h2>
      <div class="relative">
        <img
          :src="image"
          :alt="title"
          class="object-cover w-full max-h-77.5 rounded-2xl"
        />

        <ProductZoomButton class="absolute top-2 right-2" @click="openZoom" />
      </div>
    </div>
    <ProductImageModal
      v-if="isZoomOpen"
      :image="image"
      :title="title"
      @close="closeZoom"
    />
  </div>
</template>
