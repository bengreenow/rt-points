<template>
  <client-only>
    <CountUp
      autoplay
      :start-val="startVal"
      @finished="startVal = model"
      :end-val="model"
      ref="count"
    ></CountUp>
  </client-only>
</template>

<script setup lang="ts">
import CountUp from "vue-countup-v3";

const model = defineModel<number>({ required: true });

const startVal = ref(0);

const count = ref<InstanceType<typeof CountUp>>();
</script>

<style lang="scss" scoped></style>
