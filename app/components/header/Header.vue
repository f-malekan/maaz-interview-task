<script setup lang="ts">
import PhoneIcon2 from "../icons/PhoneIcon2.vue";
</script>

<template>
  <header
    class="w-full py-10 rounded-b-4xl shadow-[0_2px_2px_rgba(0,0,0,0.08)]"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-6 items-center">
        <div />

        <Navbar class="col-span-4 justify-center" />

        <div class="flex justify-end">
          <BaseButton label="تماس" :icon="PhoneIcon2" />
        </div>
      </div>
    </div>
  </header>
</template>
