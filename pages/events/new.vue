<template>
  <label for="name">Name</label>
  <input type="text" v-model="body.name" name="name" />

  <label for="submit">submit</label>
  <input
    type="submit"
    class="p-2 cursor-pointer block bg-red-400"
    @click.prevent="execute()"
  />
</template>

<script setup lang="ts">
const body = ref({ name: "" });

const { execute } = useFetch("/api/event/post", {
  method: "POST",
  immediate: false,
  watch: false,
  body: body,
});
</script>

<style lang="scss" scoped></style>
