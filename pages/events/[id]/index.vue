<template>
  <div class=""></div>
</template>

<script setup lang="ts">
import type { InternalApi } from "nitropack";

const route = useRoute();

const { data, error } = useFetch<InternalApi["/api/event/:id"]["get"]>(
  `/api/event/${route.params.id}`
);
</script>

<style lang="scss" scoped></style>
