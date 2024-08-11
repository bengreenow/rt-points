<template>
  <button
    class="bg-slate-500 text-white rounded px-4 py-2 hover:bg-slate-300 transition-colors hover:text-black"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string }>();
</script>

<style lang="scss" scoped></style>
