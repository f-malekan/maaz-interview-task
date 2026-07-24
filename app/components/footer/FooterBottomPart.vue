<script setup lang="ts">
import { SOCIAL_ICONS } from "~/constants/footer";
</script>

<template>
  <div
    class="bg-gray-15 shadow-[0_2px_2px_rgb(0_0_0/8%)] pt-7.25 lg:pt-10 md:pt-7.75 pb-10.25 md:pb-7.5 lg:pb-6 rounded-t-2xl"
  >
    <div class="container">
      <div class="md:grid md:grid-cols-3 md:items-center px-2">
        <div />

        <div class="text-center">
          <p
            class="text-[13px] text-gray-700 leading-6 font-normal md:font-bold lg:font-normal mb-4"
          >
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
                class="size-5.25 md:size-6 text-red-200 hover:text-primary"
              />
            </NuxtLink>
          </div>
        </div>

        <div class="flex gap-4 mt-4 md:mt-0 justify-center md:justify-end">
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
