<script setup lang="ts">
const searchValue = ref("");

const showRemoveButton = computed(() => searchValue.value.length);

const handleRemoveSearch = () => {
  searchValue.value = "";
};

const emit = defineEmits<{
  (e: "search", value: string): void;
}>();
</script>

<template>
  <div class="bg-white p-4 rounded-3xl shadow-[0_2px_3px_rgb(0_0_0/3%)]">
    <span class="text-gray-700 text-[13px] leading-4 font-medium"
      >فیلتر و جستجو</span
    >
    <BaseInput v-model="searchValue" class="my-4">
      <template #prepend>
        <SearchIcon
          class="w-7 h-6 py-1 text-primary border-l pl-3 border-dark-border ml-4"
        />
      </template>
      <template #append>
        <button
          v-show="showRemoveButton"
          class="cursor-pointer"
          @click="handleRemoveSearch"
        >
          <CloseIcon class="w-4 h-4 text-gray-500" />
        </button>
      </template>
    </BaseInput>
    <BaseButton
      label="جستجو"
      class="w-full"
      size="md"
      @click="emit('search', searchValue)"
    />
  </div>
</template>
