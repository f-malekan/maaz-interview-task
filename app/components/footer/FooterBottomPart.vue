<script setup lang="ts">
import { SOCIAL_ICONS } from "~/constants/footer";
</script>

<template>
  <div
    class="bg-gray-15 shadow-[0_2px_2px_rgb(0_0_0/8%)] pt-10 pb-6 rounded-t-2xl"
  >
    <div class="container">
      <div class="grid grid-cols-3 items-center">
        <div />

        <div class="text-center">
          <p class="text-[13px] text-gray-700 leading-6 font-normal mb-4">
            تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر گونه
            کپی‌برداری پیگرد قانونی دارد.
          </p>

          <div class="flex justify-center gap-4">
            <NuxtLink
              v-for="(social, index) in SOCIAL_ICONS"
              :key="index"
              :to="social.href"
            >
              <component
                :is="social.icon"
                class="size-6 text-red-200 hover:text-primary"
              />
            </NuxtLink>
          </div>
        </div>

        <div class="flex gap-4 justify-end">
          <img src="/images/enamad.png" alt="Enamad" class="h-18 w-auto" />

          <img
            src="/images/samandehi.png"
            alt="Samandehi"
            class="h-18 w-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
