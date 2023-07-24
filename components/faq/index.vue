<template>
  <div>
    <Accordion />
  </div>
</template>
<script lang="ts">
import Accordion from "./Accordion.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Accordion,
  },
});
</script>
