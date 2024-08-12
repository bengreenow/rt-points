<template>
  <div class="w-dvw flex justify-center">
    <div class="container pt-4">
      <slot />
    </div>
    <ClientOnly>
      <VToast />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
