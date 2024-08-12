<template>
  <div class="flex my-2 gap-2 flex-col border p-6">
    <VInput label="Name" name="name" v-model="body.name" />
    <div>
      <VNumber label="Amount of teams" name="amount" v-model="body.amount" />
    </div>
    <div>
      <VButton
        label="Submit"
        type="submit"
        class="p-2 cursor-pointer block bg-red-400"
        @click.prevent="execute()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import VInput from "~/components/VInput.vue";

const body = ref({ name: "", amount: 0 });

const { displayToast } = useToast();

const { execute } = useFetch("/api/event/post", {
  method: "POST",
  immediate: false,
  watch: false,
  body: body,
  onResponse: (r) => {
    if (!r.error) displayToast({ message: "Event created", title: "Success" });
  },
});
</script>

<style lang="scss" scoped></style>
