<script setup lang="ts">
import { ref } from "vue";
import PhoneIcon2 from "~/components/icons/PhoneIcon2.vue";
import MenuIcon from "~/components/icons/MenuIcon.vue";

const isMenuOpen = ref(false);
</script>

<template>
  <header
    class="w-full bg-white rounded-b-4xl shadow-[0_2px_2px_rgba(0,0,0,0.08)] py-4 md:py-10"
  >
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <Navbar class="hidden md:flex flex-1 justify-center" />

        <BaseButton
          icon-only
          icon-class="text-primary"
          :icon="MenuIcon"
          class="md:hidden"
          @click="isMenuOpen = true"
        />

        <BaseButton label="تماس" :icon="PhoneIcon2" class="hidden! md:flex!" />
        <BaseButton
          icon-only
          icon-class="text-primary"
          :icon="PhoneIcon2"
          class="md:hidden"
        />
      </div>
    </div>

    <MobileMenu v-model:open="isMenuOpen" />
  </header>
</template>
