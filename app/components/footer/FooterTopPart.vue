<script setup lang="ts">
import { FOOTER_LINKS, SOCIAL_LINKS } from "~/constants/footer";
</script>

<template>
    <div class="pt-10 pb-11 ">
      <div class="container">
        <div class="flex justify-between gap-10">
          <p class="text-gray-700 text-[13px] font-medium leading-6 mt-auto">
            هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم
          </p>

          <div v-for="section in FOOTER_LINKS" :key="section.title">
            <h3 class="mb-6 text-xl leading-6 font-bold text-gray-900">
              {{ section.title }}
            </h3>

            <ul class="space-y-3">
              <li v-for="item in section.items" :key="item.label">
                <NuxtLink
                  :to="item.href"
                  class="text-gray-800 text-[13px] leading-6 font-medium hover:text-primary transition-colors"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="mb-6 text-xl leading-6 font-bold text-gray-900">
              شبکه‌های اجتماعی
            </h3>

            <ul class="space-y-3">
              <li v-for="social in SOCIAL_LINKS" :key="social.title">
                <NuxtLink
                  :to="social.href"
                  class="flex gap-3 items-center text-gray-800 text-sm leading-6 font-medium hover:text-primary transition-colors"
                >
                  <component :is="social.icon" class="size-6 text-gray-500" />

                  <span>{{ social.title }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
