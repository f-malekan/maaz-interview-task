<script setup lang="ts">
import { MENU_ITEMS } from "~/constants/header";
</script>

<template>
  <ul class="flex gap-6">
    <li v-for="item in MENU_ITEMS" :key="item.to">
      <NavbarItem :to="item.to" :icon="item.icon" :title="item.title" />
    </li>
  </ul>
</template>
