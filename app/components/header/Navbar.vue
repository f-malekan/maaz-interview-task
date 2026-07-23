<script setup lang="ts">
import { MENU_ITEMS } from "~/constants/header";

const emit = defineEmits<{
  select: [];
}>();
</script>

<template>
  <ul class="flex gap-6">
    <li v-for="item in MENU_ITEMS" :key="item.to">
      <NavbarItem :to="item.to" :icon="item.icon" :title="item.title" @click="emit('select')"/>
    </li>
  </ul>
</template>
